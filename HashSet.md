
## Declaration and Common Methods

### Declaring a HashSet

To declare a `HashSet` in Java, you can use the following syntax:

```java
// Import the HashSet class from java.util package
import java.util.HashSet;

// Declare a HashSet for storing elements of type String
HashSet<String> set = new HashSet<>();

// Declare a HashSet for storing elements of type Integer
HashSet<Integer> set = new HashSet<>();
```

### Common Methods

Here are some of the most commonly used methods in the `HashSet` class:

1. **`add(E element)`**
   - **Description**: Adds the specified element to the set if it is not already present.
   - **Example**:
     ```java
     set.add("Apple");
     ```

2. **`remove(Object element)`**
   - **Description**: Removes the specified element from the set if it is present.
   - **Example**:
     ```java
     set.remove("Apple");
     ```

3. **`contains(Object element)`**
   - **Description**: Returns `true` if the set contains the specified element, otherwise returns `false`.
   - **Example**:
     ```java
     boolean exists = set.contains("Apple");
     ```

4. **`size()`**
   - **Description**: Returns the number of elements in the set.
   - **Example**:
     ```java
     int size = set.size();
     ```

5. **`isEmpty()`**
   - **Description**: Returns `true` if the set contains no elements, otherwise returns `false`.
   - **Example**:
     ```java
     boolean empty = set.isEmpty();
     ```

6. **`clear()`**
   - **Description**: Removes all elements from the set, making it empty.
   - **Example**:
     ```java
     set.clear();
     ```

7. **`iterator()`**
   - **Description**: Returns an iterator over the elements in this set. It can be used to iterate through the elements.
   - **Example**:
     ```java
     Iterator<String> it = set.iterator();
     while(it.hasNext()) {
         System.out.println(it.next());
     }
     ```

8. **`addAll(Collection<? extends E> c)`**
   - **Description**: Adds all of the elements in the specified collection to this set if they are not already present.
   - **Example**:
     ```java
     HashSet<String> anotherSet = new HashSet<>();
     anotherSet.add("Banana");
     anotherSet.add("Cherry");
     set.addAll(anotherSet);
     ```

9. **`removeAll(Collection<?> c)`**
   - **Description**: Removes from this set all of its elements that are contained in the specified collection.
   - **Example**:
     ```java
     set.removeAll(anotherSet);
     ```

10. **`retainAll(Collection<?> c)`**
    - **Description**: Retains only the elements in this set that are contained in the specified collection.
    - **Example**:
      ```java
      set.retainAll(anotherSet);
      ```

11. **`toArray()`**
    - **Description**: Returns an array containing all of the elements in this set.
    - **Example**:
      ```java
      Object[] array = set.toArray();
      ```

These methods provide the basic functionality for working with a `HashSet` in Java, allowing you to add, remove, check for elements, and manipulate the set's contents.
```

This section will be a useful reference in your `README.md`, showing how to declare a `HashSet` in Java and providing an overview of the key methods you can use to interact with it.
