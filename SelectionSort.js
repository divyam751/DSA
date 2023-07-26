//  Selection sort problem print sorted array.

let arr = [5, 2, 1, 3, 6, 4, 8, 7, 10, 9];

let n = arr.length;

for (let i = 0; i < n; i++) {
  let minIdx = i;
  for (let j = i + 1; j < n; j++) {
    if (arr[minIdx] > arr[j]) {
      minIdx = j;
    }
  }
  if (minIdx !== i) {
    let temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
}

console.log(arr);
