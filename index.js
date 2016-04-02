var pn532 = require('pn532');
var SerialPort = require('serialport').SerialPort;
var bot = require('./src/telegram').bot;
var config = require('./config.json');

var serialPort = new SerialPort(config.serialPort, { baudrate: 115200 });

var options = {
  pollInterval: 500
};

var rfid = new pn532.PN532(serialPort, options);

console.log('Initialising...');

rfid.on('ready', function() {
  console.log('PN532 initialised');
  bot.onText(/is this katy/, function(msg, match) {
    console.log('Message received: ', msg);

    var fromId = msg.from.id;
    bot.sendMessage(fromId, 'Verifying identity...');

    console.log('Listening for a tag scan...');
    var authTimeout = setTimeout(function() {
      bot.sendMessage('Timeout: no tag scanned');
    }, 100000);
    rfid.on('tag', function(tag) {
      clearTimeout(authTimeout);
      console.log('tag uid:', tag.uid);
      if (tag.uid === config.nfcId) {
        bot.sendMessage(fromId, '🐼');
      } else {
        bot.sendMessage(fromId, 'Not Katy!');
      }
    });
  });
});

