# Linked List

```java

import java.util.*;

class LinkedList {
        class Node {
            String data;
            Node next;

            Node (String data){
                this.data = data;
                this.next = null;
            }
        }

        public static void main(String []args){
            LinkedList list = new LinkeList();


        }
}

```

# Add first function

```java

public void addFirst(String data, ){
    Node newNode = new Node(data);

    if(head == null){
        head = newNode;
        return;
    }

    newNode.next = head;
    head = newNode;
}

```

# Add last function

```java

public void addLast(String data){
    Node newNode = new Node(data);
    if(head==null){
        head = newNode();
        return;
    }

    Node currentNode = head;
    while(currentNode.next !=null){
        currentNode = currentNode.next;
    }
    currentNode.next = newNode;
}
```
