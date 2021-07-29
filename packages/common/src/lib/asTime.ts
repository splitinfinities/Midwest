export const asTime = function(float) {
  const sec_num = float;
  const hours = Math.floor(sec_num / 3600);
  const minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  let seconds: string | number = sec_num - (hours * 3600) - (minutes * 60);

  seconds = (seconds < 10) ? "0" + seconds : seconds;

  const count = (minutes + ":" + seconds).split(".");

  return count[0];
};
