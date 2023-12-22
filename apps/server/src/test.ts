import puppeteer from "puppeteer";

(async () => {
  console.log("Opening Browser...");
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // const url = "https://next-auth.js.org/getting-started/introduction";
  const url =
    "https://www.flipkart.com/msi-modern-15-core-i3-11th-gen-1115g4-8-gb-512-gb-ssd-windows-11-home-b11m-063in-thin-light-laptop/p/itmbe1873e251e4d?pid=COMGTAKEBYBGMUFT&lid=LSTCOMGTAKEBYBGMUFTKZQFTS&marketplace=FLIPKART&cmpid=content_computer_8965229628_gmc";
  // console.log("Opening Url...");

  //   await page.goto("https://developer.chrome.com/");
  await page.goto(url, { waitUntil: "networkidle0", timeout: 0 });
  //   await page.goto("https://www.youtube.com/watch?v=rKbJcgagBOY");
  await page.setViewport({ height: 1080, width: 1920 });

  await new Promise((res) => setTimeout(res, 3000));
  console.log("Taking Screenshot...");
  await page.screenshot({ fullPage: true, path: "new/6.png", type: "png" });
  console.log("Screenshot Taken...");

  await browser.close();
  console.log("Browser Closing...");
})();
