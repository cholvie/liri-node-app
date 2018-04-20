require("dotenv").config();

var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: d1a4d82d4303480584022eeb91e0179c,
  secret: f42b39b6fd64f2b8baba4b6aaa61fcc
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

