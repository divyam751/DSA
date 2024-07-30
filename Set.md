# Java Set Initialization and Methods

## Initializing a Set in Java

To initialize a `Set` in Java, you can use various implementations like `HashSet`, `LinkedHashSet`, or `TreeSet`.

```java
// Using HashSet
Set<String> set = new HashSet<>();

// Using LinkedHashSet
Set<String> linkedSet = new LinkedHashSet<>();

// Using TreeSet
Set<String> treeSet = new TreeSet<>();
```

## Common Methods

Here are some common methods provided by the `Set` interface:

- `add(E e)`: Adds the specified element to the set if it is not already present.
- `remove(Object o)`: Removes the specified element from the set if it is present.
- `contains(Object o)`: Returns `true` if the set contains the specified element.
- `size()`: Returns the number of elements in the set.
- `isEmpty()`: Returns `true` if the set contains no elements.
- `clear()`: Removes all the elements from the set.
- `iterator()`: Returns an iterator over the elements in the set.

## Example

Below is an example of how to use a `HashSet` in Java:

```java
import java.util.HashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        Set<String> set = new HashSet<>();

        // Add elements
        set.add("Apple");
        set.add("Banana");
        set.add("Cherry");

        // Remove an element
        set.remove("Banana");

        // Check if an element exists
        boolean containsApple = set.contains("Apple");

        // Get the size of the set
        int size = set.size();

        // Check if the set is empty
        boolean isEmpty = set.isEmpty();

        // Clear the set
        set.clear();
    }
}
```
