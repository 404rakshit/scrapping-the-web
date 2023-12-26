import { type NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const userSearch = searchParams.get("q")?.toString();

  let browser;

  try {
    if (!userSearch) throw { status: 404, message: "Query not provided" };

    browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.goto(
      `https://www.amazon.in/s?k=${userSearch.split(" ").join("+")}`
    );

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

    return NextResponse.json(products);
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
