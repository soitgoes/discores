#!/usr/bin/env node
var app = require('./app/server.js');

app.set('port', process.env.PORT || 80);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
