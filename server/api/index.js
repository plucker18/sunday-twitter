const router = require('express').Router()
module.exports = router

const Twit = require('twit');
const secrets = require('../../secrets');

const T = Twit(secrets);
// router.use('/twit', require('./twit'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

router.use('/', (req, res, next) => {
  let stream = T.stream('statuses/filter', { track:  'jets'});

  stream('tweet', (tweet) => {
    res.send(tweet);
  });
});
