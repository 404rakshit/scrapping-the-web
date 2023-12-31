import puppeteer from "puppeteer";
import { Request, Response } from "express";

export async function searchProducts(req: Request, res: Response) {
  const { query }: searchBody = req?.body;

  if (!query) return res.status(404).json("Missing Query");

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();

  try {
    await page.goto(
      `https://www.flipkart.com/search?q=${query.split(" ").join("+")}`
    );

    // let products = {}
    // if (!userSearch) throw { message: "Got an Error", status: 403 };

    // await page.type("#twotabsearchtextbox", query);
    // await page.keyboard.press("Enter");
    // await page.waitForNavigation();

    const products = await page.$$eval("div._2kHMtA", (divs) => {
      return divs.map((div) => {
        return {
          title: div.querySelector("._4rR01T")?.textContent,
          image: div.getElementsByTagName("img")[0].src,
          url: div.getElementsByTagName("a")[0].href,
          price: parseFloat(
            div
              .getElementsByClassName("_1fQZEK")[0]
              .textContent?.split("₹")[1]
              ?.replace(/,/g, "")!
          ),
          reviews: parseFloat(
            div
              .querySelector("._2_R_DZ")
              ?.textContent?.split(" ")[0]
              .replace(/,/g, "")!
          ),
          review: +div.querySelector("._3LWZlK")?.textContent!,
        };
      });
    });

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

  if (!query) return res.status(404).json("Missing Query");

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();

  try {
    await page.goto(
      `https://www.flipkart.com/search?q=${query.split(" ").join("+")}`
    );

    // let products = {}
    // if (!userSearch) throw { message: "Got an Error", status: 403 };

    // await page.type("#twotabsearchtextbox", query);
    // await page.keyboard.press("Enter");
    // await page.waitForNavigation();

    // const products = await page.$$eval("div._2kHMtA", (divs) => {
    //   return divs.map((div) => {
    //     return {
    //       title: div.querySelector("._4rR01T")?.textContent,
    //       image: div.getElementsByTagName("img")[0].src,
    //       url: div.getElementsByTagName("a")[0].href,
    //       price: parseFloat(
    //         div
    //           .getElementsByClassName("_1fQZEK")[0]
    //           .textContent?.split("₹")[1]
    //           ?.replace(/,/g, "")!
    //       ),
    //       reviews: parseFloat(
    //         div
    //           .querySelector("._2_R_DZ")
    //           ?.textContent?.split(" ")[0]
    //           .replace(/,/g, "")!
    //       ),
    //       review: +div.querySelector("._3LWZlK")?.textContent!,
    //     };
    //   });
    // });

    let data = await page.$$eval("._13oc-S", (divs) => {
      return divs.map((prod) => {
        return Array.from(prod.children).map((div) => {
          return {
            title:
              div.querySelector("._4rR01T")?.textContent ||
              div.querySelector(".IRpwTa")?.textContent ||
              div.querySelector(".s1Q9rs")?.textContent,
            image: div.getElementsByTagName("img")[0].src,
            url: div.getElementsByTagName("a")[0].href,
            price: parseFloat(
              div
                .getElementsByClassName("_30jeq3")[0]
                ?.textContent?.split("₹")[1]
                ?.replace(/,/g, "")!
            ),
            reviews: parseFloat(
              div
                .querySelector("._2_R_DZ")
                ?.textContent?.split(" ")[0]
                .replace(/,/g, "")!
            ),
            review: +div.querySelector("._3LWZlK")?.textContent!,
          };
        });
      });
    });

    let products: any = [];

    data.map((e) => e.map((ele) => (products = [...products, ele])));

    res.json(products);
  } catch ({ status, message }: any) {
    res.status(status || 500).json(message || "Internal Server Error");
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
