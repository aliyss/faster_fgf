
exports.run = async (page, link_i) => {
    if (!link_i.link.endsWith("/purchase") && !link_i.link.endsWith("/purchase/")) {
        link_i.link += "/purchase"
    }
    try {
        await page.goto(link_i.link);
        await page.$eval('.direct_download_btn', e => e.click());
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
        await page.click("div.claim_to_download_box.warning_box > div > form > button");
    } catch (e) {
        //console.log(e)
    }
};