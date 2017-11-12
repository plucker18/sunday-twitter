console.log('this is twit');

const Twit = require('twit');
const secrets = require('../../secrets');

const T = Twit(secrets);

var stream = T.stream('statuses/filter', { track: 'jets' });

stream.on('tweet', function (tweet) {
  console.log(tweet)
})

module.exports = T;