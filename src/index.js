module.exports = function towelSort (matrix) {
  let i = 0;
  res = [];
  if (matrix) {
    while (i < matrix.length) {
      if (matrix[i + 1]) {
        t = matrix[i];
        m = matrix[i + 1].reverse()
        res = res.concat(t.concat(m));
        i += 2;  
      } else {
        t = matrix[i];
        res = res.concat(t);
        i += 2;
      }
    }
  }
  return res;
}
