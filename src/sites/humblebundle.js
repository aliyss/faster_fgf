
exports.run = async (page, link_i) => {
    try {
        await page.goto(link_i.link);
        await page.waitForFunction(
            'document.querySelector("body").innerText.includes("Free")'
        );
        await page.evaluate(() => {
            let stuff = [...document.querySelectorAll('span')].find(element => element.textContent.includes('Checkout'));
            stuff.click();
        });
        await page.waitForFunction(
            'document.querySelector("body").innerText.includes("Get it for free!")'
        );
        await page.evaluate(() => {
            let stuff = [...document.querySelectorAll('button')].find(element => element.textContent.includes('Get it for free!'));
            stuff.click();
        });
    } catch (e) {
        console.log(e)
    }
};