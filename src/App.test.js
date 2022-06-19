import puppeteer from 'puppeteer';

let browser, page;

const emailSelector = '#inputfind';

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 2
  });
  page = await browser.newPage();
  await page.goto('http://localhost:3000/');
});

test('send text-value in InputFind', async () => {
    await page.$$(emailSelector, el => (el.value = ''));
    //await page.click(emailSelector);
    await page.keyboard.type('Świnoujście, Polonia');
});