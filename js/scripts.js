function pingPong(input) {
  var result = [];
  for(i = 1; i <= input; i++) {
    if (i % 3 === 0) {
      result.push('ping');
    } else {
      result.push(i);
      }
  console.log(result);
  }
}
pingPong(10);
