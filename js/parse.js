Parse.initialize("TckU2eAUVMu27DCKVA2YSL1aPdl3vEffBO7pl2D7", "iPRlEEyjGAGl4WKDZb0EU28Tn3zoqVIp9chNew4b");

var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});