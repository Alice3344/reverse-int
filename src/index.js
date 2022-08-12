module.exports = function reverse (n) {

  if (n < 0) {

  n = n * -1;

}

  n = n.toString();

  let i = 0;

  let res = '';

  while (i < n.length) {

    res = `${n[i]}${res}`;

    i = i + 1;

  }

  return Number(res);

}
