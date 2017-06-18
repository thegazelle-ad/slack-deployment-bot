'use strict';

const fs = require('fs');

const WebClient = require('@slack/client').WebClient;

const token = require('./config.js').apiToken;

const message = process.argv[2];

const web = new WebClient(token);
web.chat.postMessage('summer-17', message, {as_user: true}, function (err, res) {
  if (err) {
    const fd = fs.openSync('slack-bot-errors.log', 'a');
    fs.writeSync(fd, new Date().toString() + ": " + err.toString() + "\n");
    fs.closeSync(fd);
    process.exit(1);
  }
});
