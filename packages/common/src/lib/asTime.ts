export const asTime = function (float) {
  var sec_num = float;
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds: string | number = sec_num - (hours * 3600) - (minutes * 60);

  seconds = (seconds < 10) ? "0" + seconds : seconds;

  var count = (minutes + ":" + seconds).split('.')

  return count[0];
}
