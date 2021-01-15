const reverseSeq = n => {
  let arr = Array.from({length: n}, (_, i) => i + 1);
  return arr.reverse();
};
