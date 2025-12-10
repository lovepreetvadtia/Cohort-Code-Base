# 📘 day 44 - JavaScript DOM — Detailed Notes  


---

# 🟦 What is the DOM?

The **DOM (Document Object Model)** allows JavaScript to interact with HTML elements as objects.  
Every HTML tag becomes a node inside the DOM tree.

---

# 🟩 1. `document.createElement()`

Used to create new HTML elements dynamically.

### 🔹 Syntax
```js
document.createElement("tagName");
```

### 🔹 Example
```js
const div = document.createElement("div");
console.log(div); // <div></div>
```

### 🔹 Why use createElement?
- Create elements dynamically  
- Build UI elements like cards, lists, modals  
- Safer than using innerHTML for generating elements  

---

# 🟧 2. `textContent`

Adds plain text only to an element.

### 🔹 Example
```js
const p = document.createElement("p");
p.textContent = "Hello, this is a paragraph!";
```

### 🔹 Important Notes
- Does NOT parse HTML tags  
- Very safe for user-generated content  
- Faster than innerHTML  

---

# 🟥 3. `appendChild()`

Adds an element to the end of a parent node.

### 🔹 Syntax
```js
parent.appendChild(child);
```

### 🔹 Example
```js
const ul = document.createElement("ul");
const li = document.createElement("li");

li.textContent = "Item 1";
ul.appendChild(li);

document.body.appendChild(ul);
```

### 🔹 Notes
- Only accepts Node elements  
- Moves existing nodes (if already in DOM)  
- Returns the appended node  

---

# 🟫 Full Example (All 3 Combined)

```js
const list = document.createElement("ul");

for (let i = 1; i <= 3; i++) {
  const li = document.createElement("li");
  li.textContent = "Item " + i;
  list.appendChild(li);
}

document.body.appendChild(list);
```

---


Made with ❤️ for DOM mastery.