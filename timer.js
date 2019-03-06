function clock (){
  var currentTime = 0;
  var timer = select('#timer');
  timer.html(convertSeconds(currentTime));

  setInterval(timeIt, 10);

  function convertSeconds(s) {
  var min = (floor(s / 6000)) % 60;
  var sec = (floor(s / 100)) % 60;
  var cent = s % 100;
  return (nf(min, 2) + ':' + nf(sec, 2)+ ':' + nf(cent, 2));
}
function timeIt() {
  currentTime = floor(millis() / 10);
  timer.html(convertSeconds(currentTime));
  time = (convertSeconds(currentTime))
  return time
  }
}