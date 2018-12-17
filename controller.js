const http = require("http");
const url = require("url");

module.exports = http.createServer((req, res) => {
  var service = require("./service.js");
  const reqUrl = url.parse(req.url, true);

  //Get endpoint
  if (reqUrl.pathname === "/sample" && req.method === "GET") {
    console.log(
      "Request type: " + req.method + " Endpoint: " + reqUrl.pathname
    );

    service.sampleRequest(req, res);

    //Post endpoint
  } else if (reqUrl.pathname === "/test" && req.method === "POST") {
    console.log(
      "Request Type: " + req.method + " Endpoint: " + reqUrl.pathname
    );

    service.testRequest(req, res);
  } else {
    console.log(
      "Request Type: " + req.method + " Invalid Endpoint: " + reqUrl.pathname
    );

    service.invalidRequest(req, res);
  }
});
