var expect  = require("chai").expect;
var request = require("request");

var domain = "http://localhost:3000";

describe("Color Code Converter API", function(){
  
  // testing branch update and master not triggering
  describe("RGB to Hex conversion", function(){
    
    var url = domain+"/rgbToHex?red=255&green=255&blue=255";
    
    it("returns status 200", function(done){
      request(url, function(error, response, body){
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    
    it("returns the color in hex", function(done){
      request(url, function(error, response, body){
        expect(body).to.equal("ffffff");
        done();
      });
    });
    
  });
  
  
  describe("Hex to RGB conversion", function(){
    
    var url = domain+"/hexToRgb?hex=00ff00";
    
    it("returns status 200", function(done){
      request(url, function(error, response, body){
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    
    it("returns the color in hex", function(done){
      request(url, function(error, response, body){
        expect(body).to.equal("[0,255,0]");
        done();
      });
    });
    
  });
  
  
});