# Slack Deployment Bot

This is a simple script that posts to the `deployment` channel of the Slack channel the bot is associated with (this bot is only intended to be used with The Gazelle, so hasn't been made further customizeable)

## Setup

First install the dependencies

```
npm install
```

Then copy the example config to create the actual config

`cp config.example.js config.js`

And then fill in the API token of your bot in that config file. If you do not have a bot created yet you can follow [this guide](https://api.slack.com/bot-users).

## Posting a message

To post a message you now simply run

```
node index.js "Some message to post to the slack channel"
```

## License
MIT Licensed Copyright (c) 2018 Emil Goldsmith Olesen
