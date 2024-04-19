# String

- In java string is a sequence of characters, represnted by the String Class, they are immutable means value can not be changed once String is created

- - String str = "Hello World" ;
 
# Convert String to Array

- str.split(" "); // that will convert str to array
- str.toCharArray(); // that will convert str to character array

# Operations

- concat() => String fullName = firstName + " " + lastName;
- Length() => int len = str.length();
- charAt() => char ch = str.charAt(0);
- substring() => str.substring(4,9);
- toLowerCase() => str.toLowerCase();
- toUpperCase() => str.toUpperCase();
- conversion => int val = Interger.parseInt("42"); **_Convert String to integer Value_**

- equals() => str1.equals(str2); **_Return Boolean(True/False)_**
- equalsIgnoreCase() => strA.equalsIgnoreCase(strB); **_Ignoore Capital Small_**
- indexOf(),lastIndexOf() => int indexOfComma = fullName.indexOf(','); // -1 (not found in this case)
  int lastIndexOfSpace = fullName.lastIndexOf(' ');

# String Builder

StringBuilder is a class in Java that provides a mutable sequence of characters. It is used to efficiently manipulate strings when there is a need for frequent modifications, such as concatenations, insertions, deletions, and replacements. Unlike the String class, which is immutable, StringBuilder allows you to modify the content of the underlying character array without creating a new object each time.

- StringBuilder sb = new StringBuilder(); **_By Default 16 Characters_**
- String res = sb.toString();

# # Operations:

- Append => sb.append(14);
- Insert => sb.insert(5, ",");
- Delete => sb.delete(6,8); **_Delete 6th and 7th Index data_**
  => sb.deleteCharAt(5);
- Replace => sb.replace(7,9, "Java"); **_Replace 7th and 8th index_**
- Length => sb.length();
- charAt() sb.charAt(0);
- substring() => sb.substring(3,7);

# **_StringBuilder is not thread-safe. If you require thread safety, you can use the StringBuffer class, which is similar to StringBuilder but provides synchronized methods for thread-safe operations. However, in most cases, using StringBuilder is sufficient and recommended for better performance when working with mutable strings._**
