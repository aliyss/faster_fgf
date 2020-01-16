const {browser, feeder, cheerio, site} = require("./src");
const user_config = require("./config/user_config.json");
const site_config = require("./config/site_config.json");

try {
    (async () => {
        let checklist = {
            startDate: new Date().getTime()
        };

        const federer = feeder.f_start();
        feeder.f_add(federer, user_config.subscribed_feeds);

        const bowsette = await browser.b_start(user_config.puppeteer_options);
        let page = await browser.b_open(bowsette);

        federer.on('new-item', async (item) => {

            if (!feeder.f_check(item, checklist)) {
                return;
            }

            let feed_name = feeder.f_getConnection(item, user_config.subscribed_feeds);
            let feed_conf = site_config[feed_name];

            let itemHTML = item.description;
            let all_links = cheerio.c_links(itemHTML, feed_conf["catch"]);

            if (!all_links || all_links.length <= 0) {
                return;
            }

            await site.s_run(all_links, page);

        });

        //await browser.b_close(bowsette);

    })()
} catch (err) {
    console.error(err)
}