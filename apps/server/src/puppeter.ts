import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  // Launch the browser and open a new blank page
  const page = await browser.newPage();

  const url =
    "https://www.amazon.in/s?k=laptops&crid=10062PGC4S5LU&sprefix=laptops%2Caps%2C452&ref=nb_sb_noss_1";

  // Navigate the page to a URL
  await page.goto(url);

  // Set screen size
  // await page.setViewport({ width: 1080, height: 1024 });

  // Type into search box
  // const result = await page.content('[data-cy="title-recipe"]');

  // Wait and click on first result
  // const searchResultSelector = ".search-box__link";
  // await page.waitForSelector(searchResultSelector);
  // await page.click(searchResultSelector);

  // Locate the full title with a unique string
  const textSelector = await page.waitForSelector('[data-cy="title-recipe"]');

  const textSelectorList = await page.$$eval(
    '[data-cy="title-recipe"]',
    (options) => {
      return options.map((title) => title.textContent);
    }
  );

  const fullTitle = await textSelector?.evaluate((el) => el.textContent);

  // console.log(result);

  // Print the full title
  console.log(fullTitle);
  console.log(textSelectorList);

  await browser.close();
})();
