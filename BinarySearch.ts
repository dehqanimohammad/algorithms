function binary_search(array: number[], needle: number): boolean {
  let lo = 0;
  let hi = array.length;

  do {
    const m = Math.floor(lo + (hi - lo) / 2);
    const v = array[m];

    if (v === needle) {
      return true;
    } else if (v > needle) {
      hi = m;
    } else {
      lo = m + 1;
    }
  } while (lo < hi);

  return false;
}

let nums: number[] = [2, 5, 234, 524, 351, 34, 1, 234];

console.log(nums, 100);
