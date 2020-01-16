const puppeteer = require('puppeteer');

exports.b_start = async (options) => {
    return await puppeteer.launch(options);
};

exports.b_open = async (browser) => {
    return await browser.newPage();
};

exports.b_close = async (browser) => {
    await browser.close();
};