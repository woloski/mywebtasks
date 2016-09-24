// Slack will send a request for each message sent on any or a specific channel.
// If trigger word has been configured on Slack, only messages starting with
// that trigger word will be sent

module.exports = function (context, done) {
  if (context.secrets.WEBHOOK_SECRET !== context.data.token) {
    return done(new Error('nope'));
  }
  console.log('slack request: ', context.data);
  done(null, { text: 'hello' });
};
