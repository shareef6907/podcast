const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  const views = [
    { name: 'homepage-1440', width: 1440, height: 900, url: 'http://localhost:3000/' },
    { name: 'homepage-375', width: 375, height: 812, url: 'http://localhost:3000/' },
    { name: 'services-1440', width: 1440, height: 900, url: 'http://localhost:3000/services' },
    { name: 'services-375', width: 375, height: 812, url: 'http://localhost:3000/services' },
  ];

  for (const v of views) {
    await page.setViewportSize({ width: v.width, height: v.height });
    await page.goto(v.url, { waitUntil: 'load', timeout: 20000 });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `screenshot-${v.name}.png`, fullPage: false });
    
    // Check for BHD prices and CTA
    const result = await page.evaluate(() => {
      const text = document.body.innerText;
      const bhdMatches = (text.match(/BHD\s*\d+/gi) || []);
      const hasCta = text.includes('Request a Quote');
      const hasBookNow = text.includes('Book Now');
      return { bhd: bhdMatches, hasCta, hasBookNow };
    });
    console.log(`${v.name}: BHD=${result.bhd.join(',') || 'NONE ✅'} CTA=${result.hasCta} BookNow=${result.hasBookNow}`);
  }
  
  // Check booking page
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:3000/booking', { waitUntil: 'load', timeout: 20000 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'screenshot-booking-375.png', fullPage: false });
  const bookingCheck = await page.evaluate(() => {
    const text = document.body.innerText;
    return { bhd: (text.match(/BHD\s*\d+/gi) || []) };
  });
  console.log(`booking-375: BHD=${bookingCheck.bhd.join(',') || 'NONE ✅'}`);
  
  await browser.close();
})();
