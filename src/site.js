exports.s_run = async (links, page) => {
    for (let i = 0; i < links.length; i++) {
        let runner;
        switch (links[i].type) {
            case "itch.io":
                runner = require("./sites/itchio.js");
                break;
            case "epicgames.com":
                runner = require("./sites/epicgames.js");
                break;
            case "indiegala.com":
                runner = require("./sites/indiegala.js");
                break;
            case "humblebundle.com":
                runner = require("./sites/humblebundle.js");
                break;
            default:
                break;
        }
        if (runner) {
            await runner.run(page, links[i])
        }
    }
};