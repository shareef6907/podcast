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
    
    // Scroll to pricing section
    await page.evaluate(() => {
      const sections = document.querySelectorAll('section');
      // Find pricing section
      for (const s of sections) {
        if (s.innerText?.includes('Choose Your Package') || s.innerText?.includes('Packages') || s.innerText?.includes('Pricing') || s.innerText?.includes('BHD')) {
          s.scrollIntoView({ behavior: 'instant' });
          return;
        }
      }
    });
    await page.waitForTimeout(500);
    await page.screenshot({ path: `screenshot-${v.name}-pricing.png`, fullPage: false });
    
    // Check for remaining prices
    const priceCheck = await page.evaluate(() => {
      const text = document.body.innerText;
      const bhdMatches = text.match(/BHD\s*\d+/gi) || [];
      const priceMatches = text.match(/BD\s*\d+/gi) || [];
      const hasQuoteCta = text.includes('Request a Quote');
      const hasBookNow = text.includes('Book Now');
      return { bhd: bhdMatches, bd: priceMatches, hasQuoteCta, hasBookNow };
    });
    
    console.log(`${v.name}: BHD=${priceCheck.bhd.join(',') || 'none'} BD=${priceCheck.bd.join(',') || 'none'} CTA=${priceCheck.hasQuoteCta} BookNow=${priceCheck.hasBookNow}`);
  }
  
  // Check JSON-LD
  await page.goto('http://localhost:3000/', { waitUntil: 'load', timeout: 20000 });
  await page.waitForTimeout(2000);
  const jsonLd = await page.evaluate(() => {
    const scripts = [...document.querySelectorAll('script[type="application/ld+json"]')];
    return scripts.map(s => s.textContent).filter(t => t?.includes('price') || t?.includes('Offer') || t?.includes('priceRange'));
  });
  console.log('\nJSON-LD with prices:', jsonLd.length > 0 ? jsonLd : 'none');
  
  await browser.close();
})();
