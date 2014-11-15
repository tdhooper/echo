
/*
 * @name echo
 */

export function dsp(t) {
  return echo(t, bleep);
}

function echo(t, soundFunc) {
  var s = soundFunc(t);
  var n = 10;
  var l = 0.5;
  for (var i = 0; i < n; i++) {
    var offset = (l / n) * i;
    var vol = (1 / n) * (n - i);
    s += soundFunc(t - offset) * vol;
  }
  return s;
}

function vol(t, f, l) {
  if (t % f > l) {
    return 0;
  }
  var s = sin(t * (1 / l), 1, 1);
  return s;
}

function bleep(t) {
  t *= 2;
  var v = vol(t, 4, 0.1);
  var s = sin(t, 450, 0.5);
  return v * s;
}

function sin(t, freq, amp) {
  return Math.sin(Math.PI * t * freq) * amp;
}