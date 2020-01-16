let RssFeedEmitter = require('rss-feed-emitter');

exports.f_start = () => {
    return new RssFeedEmitter();
};

exports.f_add = (feeder, feeds) => {
    for (let i = 0; i < feeds.length; i++) {
        feeder.add(feeds[i]);
    }
};

exports.f_check = (item, checklist) => {
    let itemDate = new Date(item.date).getTime();

    if (itemDate < checklist.startDate) {
        return false;
    }

    return true;
};

exports.f_getConnection = (item, feeds_list) => {
    return feeds_list.find(x => {
        return x.url = item.meta.link;
    }).name
};

exports.f_remove = (feeder, feeds) => {
    for (let i = 0; i < feeds.length; i++) {
        feeder.remove(feeds[i]["url"]);
    }
};

exports.f_close = (feeder) => {
    feeder.destroy();
};