var TelegramBot = require('node-telegram-bot-api');
var config = require('../config.json');

var token = config.telegramToken;

module.exports = {
  bot: new TelegramBot(token, {polling: true})
};
