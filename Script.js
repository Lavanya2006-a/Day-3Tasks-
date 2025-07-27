function greet(name) {
  return "Hi " + name;
}
document.getElementById("greet").innerText = greet("Lavanya");

function add(...nums) {
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  return total;
}
document.getElementById("sum").innerText = "Sum: " + add(2 , 4 , 6);
