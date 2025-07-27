function greet(name, callback) {
  callback("Hi " + name);
}

greet("Lavanya", function(msg) {
  document.getElementById("callbackOutput").innerText = msg;
});

// Simple scope example
var a = "Global";

function testScope() {
  let b = "Local";
  document.getElementById("scopeOutput").innerText = a + " & " + b;
}

testScope();