'use strict';

var events = require('../models/events');
/**
 * Controller that renders our index (home) page.
 */
function index (request, response) {
  var now = new Date();
  var contextData = {
    'title': 'Eventdull',
    'tagline': 'A Blizzard of Unique (but Sometimes Boring) Activities.',
    'events': []
  };
  for(var i = 0; i < events.all.length; i++) {
    var event = events.all[i];
    if (event.date > now) {
      contextData.events.push(event);
    }
  }
  response.render('index.html', contextData);
}
/**
 * Controller that renders a list of events in HTML.
 */
function listEvents(request, response) {
  var currentTime = new Date();
  var contextData = {
    'events': events.all,
    'time': currentTime
  };
  response.render('index.html', contextData);
}

module.exports = {
  index: index
};