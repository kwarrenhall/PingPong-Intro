function pingPong(input) {
  var result = [];
  for(i = 1; i <= input; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      result.push('pingpong');
    } else if (i % 5 === 0) {
      result.push('pong');
    } else if (i % 3 === 0) {
      result.push('ping');
    } else {
      result.push(i);
    }
  }
  return result;
};
// console.log(pingPong(10));

$(function() {
  $("#button").click(function(){
    event.preventDefault();
    var number = parseInt($('#input').val());
    $('#firstplay').text(pingPong(number));

    var fullplay=pingPong(number);
    for (i=0; i<number; i++){
    $('#fullplay').append('<li>' + fullplay[i] + '</li>');
  }
 $('.results').show();

  });
});
