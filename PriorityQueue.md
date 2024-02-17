# PriorityQueue Operations in Java

A `PriorityQueue` in Java is a data structure that represents a queue where each element has an associated priority. Elements are dequeued based on their priority. The element with the highest (or lowest, depending on the comparator used) priority is dequeued first.

## Operations

### 1. Insertion (enqueue)

- `add(E e)` or `offer(E e)`: Adds the specified element to the priority queue.

   ```java
   PriorityQueue<Integer> priorityQueue = new PriorityQueue<>();
   priorityQueue.add(3);
   priorityQueue.offer(1);
   priorityQueue.add(2);
   ```

   **Time Complexity:** O(log n) - The time complexity for insertion is logarithmic, as it involves maintaining the heap property by adjusting the position of the newly added element.

   **Space Complexity:** O(n) - The space complexity depends on the number of elements stored in the priority queue.

### 2. Removal (dequeue)

- `poll()`: Retrieves and removes the head of the priority queue (i.e., the element with the highest priority).
- `remove(Object o)`: Removes a specific element from the priority queue.
- `remove()` or `poll()`: Removes and returns the head of the priority queue.

   ```java
   PriorityQueue<Integer> priorityQueue = new PriorityQueue<>();
   priorityQueue.add(3);
   priorityQueue.add(1);
   priorityQueue.add(2);

   int head = priorityQueue.poll(); // Retrieves and removes the head (1)
   ```

   **Time Complexity:** O(log n) - The time complexity for removal is logarithmic, as it involves maintaining the heap property by adjusting the position of the remaining elements.

   **Space Complexity:** O(n) - The space complexity depends on the number of elements stored in the priority queue.

### 3. Access (peek)

- `peek()`: Retrieves, but does not remove, the head of the priority queue.

   ```java
   PriorityQueue<Integer> priorityQueue = new PriorityQueue<>();
   priorityQueue.add(3);
   priorityQueue.add(1);
   priorityQueue.add(2);

   int head = priorityQueue.peek(); // Retrieves the head without removing it (1)
   ```

   **Time Complexity:** O(1) - The time complexity for peeking is constant, as it directly retrieves the highest-priority element.

   **Space Complexity:** O(1) - The space complexity is constant as it does not involve additional space.

### 4. Size

- `size()`: Returns the number of elements in the priority queue.

   ```java
   PriorityQueue<Integer> priorityQueue = new PriorityQueue<>();
   priorityQueue.add(3);
   priorityQueue.add(1);
   priorityQueue.add(2);

   int size = priorityQueue.size(); // Returns 3
   ```

   **Time Complexity:** O(1) - The time complexity for determining the size is constant.

   **Space Complexity:** O(1) - The space complexity is constant as it does not involve additional space.

These operations provide the basic functionality for working with priority queues in Java. The priority queue uses the natural order of elements or a custom comparator (if provided during instantiation) to determine the priority. Elements are reordered accordingly to maintain the priority property.
```

