
exports.run = async (page, link_i) => {
    try {
        await page.goto("https://freebies.indiegala.com/disgraced/");
        await page.waitForSelector('#add-collection-product-col');
        await page.click("button[id=add-collection-product-col]");
    } catch (e) {
        console.log(e)
    }
};