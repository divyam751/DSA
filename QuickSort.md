
```javascript
// Function to implement QuickSort
function quickSort(arr, low, high) {
  // Base case: if low is less than high, the array has more than one element
  if (low < high) {
    // Find the pivot index by partitioning the array
    const pivotIndex = partition(arr, low, high);

    // Recursively sort the left part of the array (before the pivot)
    quickSort(arr, low, pivotIndex - 1);

    // Recursively sort the right part of the array (after the pivot)
    quickSort(arr, pivotIndex + 1, high);
  }
}

// Partition function that rearranges the elements in the array
function partition(arr, low, high) {
  // Choose the last element as the pivot
  let pivot = arr[high];
  
  // i will be the boundary for elements smaller than the pivot
  let i = low - 1;

  // Iterate over the array, from low to high - 1
  for (let j = low; j < high; j++) {
    // If the current element is smaller than the pivot, swap it with the element at i
    if (arr[j] < pivot) {
      i++;  // Move the boundary for smaller elements
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  // Place the pivot element in its correct position (i + 1)
  i++;
  let temp = arr[i];
  arr[i] = arr[high];
  arr[high] = temp;

  // Return the index of the pivot element after partitioning
  return i;
}

// Example usage:
let arr = [10, 7, 8, 9, 1, 5]; // Example input array
quickSort(arr, 0, arr.length - 1); // Calling quickSort function to sort the array

console.log(arr); // Output the sorted array
```

### Time and Space Complexity

- **Best and Average Case Time Complexity**:
  - **O(n log n)**: The time complexity is O(n log n) in the best and average cases. This occurs when the pivot divides the array roughly in half, resulting in a logarithmic number of recursive calls. In each call, the partitioning process takes linear time, leading to O(n log n) overall.

- **Worst Case Time Complexity**:
  - **O(n²)**: The worst-case time complexity happens when the pivot is always the smallest or largest element, resulting in unbalanced partitions. This leads to a linear number of recursive calls for each level, giving O(n²) time complexity. This occurs when the array is already sorted or nearly sorted.

- **Space Complexity**:
  - **O(log n)**: The space complexity of QuickSort is **O(log n)** due to the recursive call stack in the best and average cases, which requires O(log n) additional space to handle the recursion. In the worst case (when the recursion is unbalanced), it could degrade to **O(n)**, but in general, it's O(log n). The partitioning does not require extra space, as it operates in-place.

### Recap:
- **Best/Average Time Complexity**: O(n log n)
- **Worst Time Complexity**: O(n²)
- **Space Complexity**: O(log n) (in most cases)
