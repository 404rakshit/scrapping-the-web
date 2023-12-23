import { type NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";
import cheerio from "cheerio";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const userSearch = searchParams.get("q")?.toString();

  // if (userSearch) return NextResponse.json({ q: userSearch });

  let browser;

  try {
    browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.goto("https://www.amazon.in/");

    // let products = {}
    // if (!userSearch) throw { message: "Got an Error", status: 403 };

    await page.type("#twotabsearchtextbox", "Hello");
    await page.keyboard.press("Enter");
    await page.waitForNavigation();

    const products = await page.$$eval("div", (options) => {
      return options.map((option) => option.innerText);
    });

    // const html = await page.content(); //get the entire html content

    // return NextResponse.json(html);
    // const $ = cheerio.load(html); //load the html content

    // const prices = $("span.a-offscreen")
    //   .map((index, element) => {
    //     return $(element).text();
    //   })
    //   .get();

    // const titles = $("span.a-size-base-plus.a-color-base.a-text-normal")
    //   .map((index, element) => {
    //     return $(element).text();
    //   })
    //   .get();

    // const reviews = $("span.a-size-base.s-underline-text")
    //   .map((index, element) => {
    //     return $(element).text();
    //   })
    //   .get();

    // const imageUrls = $("img.s-image")
    //   .map((index, element) => {
    //     return $(element).attr("src");
    //   })
    //   .get();

    // const products = [];

    // for (let i = 0; i < titles.length; i++) {
    //   const item = {
    //     price: prices[i],
    //     title: titles[i],
    //     review: reviews[i],
    //     imageUrl: imageUrls[i],
    //   };
    //   products.push(item);
    // }

    return NextResponse.json(products.length);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: error.status || 200 }
    );
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
