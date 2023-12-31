import puppeteer from "puppeteer";
import { Request, Response } from "express";

export async function searchProducts(req: Request, res: Response) {
  const { query }: searchBody = req?.body;
  //   console.log(query);

  if (!query) return res.status(404).json("Missing Query");

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();

  try {
    await page.goto(`https://www.amazon.in/s?k=${query.split(" ").join("+")}`);

    // let products = {}
    // if (!userSearch) throw { message: "Got an Error", status: 403 };

    // await page.type("#twotabsearchtextbox", query);
    // await page.keyboard.press("Enter");
    // await page.waitForNavigation();

    const products = await page.$$eval(
      "div.sg-col-20-of-24.s-result-item.s-asin.sg-col-0-of-12.sg-col-16-of-20.sg-col.s-widget-spacing-small.sg-col-12-of-16:not(.AdHolder)",
      (divs) => {
        return divs.map((div) => {
          return {
            title: div.querySelectorAll(
              "span.a-size-medium.a-color-base.a-text-normal"
            )[0].textContent,
            image: div.getElementsByTagName("img")[0].src,
            url: div.querySelector<HTMLAnchorElement>(
              "a.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal"
            )?.href,
            price: parseFloat(
              div
                .getElementsByClassName("a-offscreen")[0]
                ?.textContent?.split("₹")[1]
                ?.replace(/,/g, "")!
            ),
            reviews: parseFloat(
              div
                .querySelector(".a-size-base.s-underline-text")
                ?.textContent?.replace(/,/g, "")!
            ),
            review: +div
              .querySelector(".a-row.a-size-small")
              ?.querySelector("span")
              ?.attributes[0].textContent?.split(" ")[0]!,
          };
        });
      }
    );

    // const options = await page.$$eval('div > span.options', options => {
    //     return options.map(option => option.textContent);
    //   });

    res.json(products);
  } catch ({ status, message }: any) {
    res.status(status || 500).json(message || "Internal Server Error");
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

export async function getAllProducts(req: Request, res: Response) {
  const { query }: searchBody = req?.body;
  //   console.log(query);

  if (!query) return res.status(404).json("Missing Query");

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();

  try {
    await page.goto(`https://www.amazon.in/s?k=${query.split(" ").join("+")}`);

    // let products = {}
    // if (!userSearch) throw { message: "Got an Error", status: 403 };

    // await page.type("#twotabsearchtextbox", query);
    // await page.keyboard.press("Enter");
    // await page.waitForNavigation();

    const products = await page.$$eval(
      "div.s-result-item.s-asin.sg-col.s-widget-spacing-small:not(.AdHolder)",
      (divs) => {
        return divs.map((div) => {
          return {
            title: div.querySelectorAll(".a-color-base.a-text-normal")[0]
              ?.textContent,
            image: div.getElementsByTagName("img")[0].src,
            url: div.querySelector<HTMLAnchorElement>(
              "a.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal"
            )?.href,
            price: parseFloat(
              div
                .getElementsByClassName("a-offscreen")[0]
                ?.textContent?.split("₹")[1]
                ?.replace(/,/g, "")!
            ),
            reviews: parseFloat(
              div
                .querySelector(".a-size-base.s-underline-text")
                ?.textContent?.replace(/,/g, "")!
            ),
            review: +div
              .querySelector(".a-row.a-size-small")
              ?.querySelector("span")
              ?.attributes[0]?.textContent?.split(" ")[0]!,
          };
        });
      }
    );

    // const options = await page.$$eval('div > span.options', options => {
    //     return options.map(option => option.textContent);
    //   });

    res.json(products);
  } catch ({ status, message }: any) {
    res.status(status || 500).json(message || "Internal Server Error");
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
