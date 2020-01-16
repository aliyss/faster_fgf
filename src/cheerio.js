const cheerio = require('cheerio');

exports.c_links = (html, catches) => {
    let $ = cheerio.load(html);
    let links = $('a');
    let all_links = [];
    $(links).each(function(i, link){
        let href = $(link).attr('href');
        if (catches) {
            if (Array.isArray(catches)) {
                catches.forEach(catcher => {
                    if (href.includes(catcher)) {
                        all_links.push({
                            type: catcher,
                            link: href
                        })
                    }
                })
            } else {
                all_links.push({
                    link: href
                });
            }
        }
    });
    return all_links;
};