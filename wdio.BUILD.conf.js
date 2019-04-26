const wdioConfig = require('./wdio.conf.js');

wdioConfig.config.capabilities = [{
    browserName: 'chrome',
    'goog:chromeOptions': {
        args: [
            '--disable-infobars',
            '--window-size=1280,800',
            '--headless',
            '--no-sandbox',
            '--disable-gpu',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
        ],
    },
}];

wdioConfig.config.services = ['chromedriver'];
wdioConfig.config.path = '/';

exports.config = wdioConfig.config;
