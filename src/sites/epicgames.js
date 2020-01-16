
exports.run = async (page, link_i) => {
    try {
        await page.goto(link_i.link);
        await page.waitForFunction(
            'document.querySelector("body").innerText.includes("Free")'
        );
        await page.evaluate(() => {
            let stuff = [...document.querySelectorAll('button')].find(element => element.textContent === 'Get');
            stuff.click();
        });
        await page.waitForFunction(
            'document.querySelector("body").innerText.includes("Place Order")'
        );
        await page.evaluate(() => {
            let stuff = [...document.querySelectorAll('button')].find(element => element.textContent === 'Place Order');
            stuff.click();
        });
    } catch (e) {
        console.log(e)
    }
};