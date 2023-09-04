# Queue Data Structure in Java

A **Queue** is a linear data structure that follows the First-In-First-Out (FIFO) principle, meaning that the element that is inserted first will be the one to be removed first. In Java, the `Queue` interface is available in the `java.util` package and provides methods for implementing a queue.

```java
 Queue<String> queue = new LinkedList<>();

```

### Queue Interface

The Java `Queue` interface is part of the `java.util` package and defines the methods that a Queue implementation must implement. Key methods in the `Queue` interface include:

- `boolean add(E e)`: Adds an element to the queue, throwing an exception if the queue is full.
- `E remove()`: Removes and returns the element at the front of the queue, throwing an exception if the queue is empty.
- `E peek()`: Returns the element at the front of the queue without removing it, returning `null` if the queue is empty.
- `E size()`: Returns the current number of elements in the queue.
- `E isEmpty()`: method, which checks whether the queue is empty. These methods provide additional information about the state of the queue.

==============================================================================

- `boolean offer(E e)`: Adds an element to the queue, returning `false` if the queue is full.
- `E element()`: Returns the element at the front of the queue without removing it, throwing an exception if the queue is empty.
- `E poll()`: Removes and returns the element at the front of the queue, returning `null` if the queue is empty.

## Implementations

### 1. LinkedList-based Queue

The `LinkedList` class in Java can be used to implement a queue. You can create a `Queue` object using a `LinkedList` and use its methods to perform queue operations.

### 2. Array-based Queue

You can also implement a queue using arrays. In this case, you need to manage the front and rear indices of the array to keep track of the elements in the queue.

## Usage Examples

### Using a LinkedList-based Queue

```java
import java.util.LinkedList;
import java.util.Queue;

public class LinkedListQueueExample {
    public static void main(String[] args) {
        Queue<String> queue = new LinkedList<>();

        // Enqueue (add elements)
        queue.offer("Alice");
        queue.offer("Bob");
        queue.offer("Charlie");

        // Dequeue (remove and retrieve elements)
        String firstInLine = queue.poll(); // Removes and returns "Alice"
        String nextInLine = queue.poll();  // Removes and returns "Bob"

        System.out.println("First in line: " + firstInLine);
        System.out.println("Next in line: " + nextInLine);
    }
}
```

## Common Queue Operations

1. **Enqueue**: Adding elements to the rear of the queue.
2. **Dequeue**: Removing and retrieving elements from the front of the queue.
3. **Peek**: Retrieving the element at the front of the queue without removing it.
4. **Checking for Empty Queue**: Determine if the queue is empty.
5. **Checking for Full Queue**: In a fixed-size array-based queue, determine if the queue is full.

## Best Practices

- Use the appropriate queue implementation (LinkedList-based or Array-based) based on your specific requirements and performance considerations.
- Always check whether the queue is empty before dequeuing to avoid exceptions.
- Ensure that you handle queue fullness appropriately, especially in array-based implementations.
- Consider thread safety when using queues in a multi-threaded environment, and use `ConcurrentLinkedQueue` for thread-safe queues.
