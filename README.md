# faster_fgf

Allows you to have a browser running 24/7, which focuses on automatically
getting free games from [r/FreeGameFindings](https://www.reddit.com/r/FreeGameFindings/new/).
Ummm... That's all.

## Support

### Supported links
Sorted by name:
- [epicgames.com](https://www.epicgames.com/)
- [humblebundle.com](https://www.humblebundle.com/)
- [indiegala.com](https://www.indiegala.com/)
- [itch.io](https://itch.io/)

### Need help or wanna hang out?
[Discord Server](https://discord.gg/zAypMTH)

## Usage

### Install

#### Obligatory
Standard npm stuff. You need NodeJS ofc:
```
$ npm install
```
After this start the whole thing:
```
$ npm start
```
While the browser opens navigate to the supported links (listed above) and log in to your accounts.
After that quit the script.

#### Not obligatory:
Do this after you completed the obligatory stuff.
In ``/config/user_config`` you should now be able to change ``false`` to ``true``:
```json
"puppeteer_options": {
    "userDataDir": "./config/puppeteer/",
    "headless": true
}
```
### After Install
```
$ npm start
```

## Thanks

### People
Sorted by amount of contribution:
- [Aliyss Snow](https://github.com/Aliyss)
- Isaac Sekei

### Packages
Sorted by name:
- [cheerio](https://github.com/cheeriojs/cheerio)
- [puppeteer](https://github.com/puppeteer/puppeteer)
- [rss-feed-emitter](https://github.com/filipedeschamps/rss-feed-emitter)
