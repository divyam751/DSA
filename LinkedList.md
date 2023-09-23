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

# Reverse a linked list

```java
class Solution{
  public static Node reverseLinkedList(Node a){

      if(a==null || a.next==null){
          return a;
      }

    Node prv=a;
    Node curr=a.next;

    while(curr!=null){
       Node next = curr.next;
        curr.next = prv;
        // update
        prv=curr;
        curr=next;
    }
    a.next=null;
    a = prv;

    return a;

  }
}
```
