var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');
var app = express();
var yaml = require('js-yaml');
var fs = require('fs');

try {

  var apiConfigs = yaml.safeLoad(fs.readFileSync('server-config.yml', 'utf8'));
  startParseApis(apiConfigs);

  var dashboardConfig = yaml.safeLoad(fs.readFileSync('dashboard-config.yml', 'utf8'));
  startParseDashboard(dashboardConfig);

  app.listen(33033, function() {
    console.log('express-parse-server running.');
  });
} catch (e) {
  console.log(e);
}

function startParseApis(config) {
  for (var i = 0; i < config.length; ++i) {
    var apiConfig = config[i];
    var api = new ParseServer(apiConfig);
    app.use(apiConfig['apiPath'], api);
  }
}

function startParseDashboard(config) {
  // Use this flag if you are under a load balancer or proxy using https
  allowInsecureHTTP = 0
  var dashboard = new ParseDashboard(config, allowInsecureHTTP);
  // make the Parse Dashboard available at /dashboard
  app.use('/dashboard', dashboard);
}