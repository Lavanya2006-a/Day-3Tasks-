let squareExpr = function(n) {
  return n * n;
};
document.getElementById("squareExpr").innerText = "Square (Expression): " + squareExpr(5);


let squareArrow = (n) => n * n;
document.getElementById("squareArrow").innerText = "Square (Arrow): " + squareArrow(3);


let multiply = (a, b) => a * b;
document.getElementById("multiply").innerText = "Multiply: " + multiply(2, 4);