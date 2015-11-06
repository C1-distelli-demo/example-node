var app = require("../app.js")
var request = require("request");

describe("Server Response", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get('http://localhost:3000/', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        app.closeServer();
        done();
      });
    });
  });
});


