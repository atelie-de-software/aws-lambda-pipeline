exports.handler = (event, context, callback) => {
  var currentTime = new Date();

  callback(null, {
    statusCode: '200',
    body: 'Dude, The time in Los Angeles is: ' + currentTime.toString(),
  });
};
