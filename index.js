var number;
function add(n, b){
  number = n + b;
  return number;
}
function subtract(n, b){
  number = n - b;
  return number;
}
function multiply(n, b){
  number = n * b;
  return number;
}
function divide(n, b){
  number = n / b;
  return number;
}
function increment(n){
  number = n + 1;
  return number;
}
function decrement(n){
  number = n - 1;
  return number;
}
function makeInt(n){
  number = parseInt(n, 10);
  return number;
}
function preserveDecimal(n){
  number = parseFloat(n, 10);
  return number;
}