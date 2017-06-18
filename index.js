'use strict';

const WebClient = require('@slack/client').WebClient;

const token = require('./config.js').apiToken;

const web = new WebClient(token);
web.chat.postMessage('summer-2017', "Hi guys, this is just Emil doing a test!", {as_user: true}, function (err, res) {
  if (err) {
    console.error(err);
  } else {
    console.log('Message sent:', res);
  }
});
