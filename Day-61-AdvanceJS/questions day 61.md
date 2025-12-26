## 🟢 Exercise 1 — Easy (Promise basics)

**Task (Hindi):**
Ek Promise banao `checkNumber`

**Requirements:**

* Promise ek number lega
* Agar number even ho → resolve
* Agar odd ho → reject
* Resolve par `"Even number"`
* Reject par `"Odd number"`

**Goal:**

* Promise states samajhna
* resolve vs reject ka flow

---

## 🟡 Exercise 2 — Easy–Intermediate (Promise + setTimeout)

**Task (Hindi):**
Ek function banao `delayedMessage`

**Requirements:**

* Function ek message lega
* 2 second baad Promise resolve kare
* Message `.then()` me print ho

**Goal:**

* Promise ke saath delay samajhna
* async ka wait feel karna

---

## 🟡 Exercise 3 — Intermediate (Promise chaining)

**Task (Hindi):**
Teen Promises ka chain banao

**Requirements:**

1. First Promise → `"Step 1 complete"`
2. Second Promise → `"Step 2 complete"`
3. Third Promise → `"Step 3 complete"`

**Rules:**

* Har Promise previous ke result pe depend kare
* Output order strictly maintain ho

**Goal:**

* `.then()` chaining
* sequential async without callback hell

---

## 🟠 Exercise 4 — Intermediate (Error handling in chain)

**Task (Hindi):**
Ek Promise chain banao jisme:

**Requirements:**

* Beech wale Promise me error aaye
* Error `.catch()` me handle ho
* Error ke baad chain aage **continue na ho**

**Goal:**

* Promise chain me error flow samajhna
* `.catch()` ka actual role

---

## 🟠 Exercise 5 — Intermediate (async / await basics)

**Task (Hindi):**
Ek async function banao `runTask`

**Requirements:**

* Andar ek Promise call ho
* `await` use karo
* Promise resolve hone ke baad console log ho

**Rules:**

* `.then()` use nahi karna
* Sirf `async/await`

**Goal:**

* async function ka behaviour samajhna
* await ka pause effect feel karna

---

## 🔴 Exercise 6 — Advanced (try / catch with async)

**Task (Hindi):**
Ek async function banao jo Promise reject bhi kar sakta hai

**Requirements:**

* Promise randomly resolve / reject ho
* `try` block me await
* `catch` block me error handle

**Goal:**

* async/await + error handling
* Promise rejection ko sync-style me samajhna

---

## 🔴 Exercise 7 — Advanced (fetch API)

**Task (Hindi):**
`fetch()` use karke ek post lao

**Requirements:**

* URL se data fetch karo
* JSON convert karo
* Title console me print ho

**Rules:**

* Ek baar `.then()` style
* Ek baar `async/await` style
* Dono alag-alag likhne hain

**Goal:**

* fetch ka Promise nature samajhna
* real API handling

---

## 🔴 Exercise 8 — Hardcore (fetch + error handling)

**Task (Hindi):**
Fetch ke saath error handling implement karo

**Requirements:**

* Agar response ok na ho → error throw karo
* Error `catch` me handle ho
* Success par data print ho

**Goal:**

* HTTP error vs JS error ka difference
* Production-level fetch usage

---

## 🧨 Exercise 9 — Boss Level (callback → promise)

**Task (Hindi):**
Ek callback-based function diya gaya hai (assume)

**Requirements:**

* Usko Promise-based function me convert karo
* Error-first callback logic maintain ho
* `.then()` / `.catch()` se consume karo

**Goal:**

* Callback se Promise thinking shift
* Real-world refactoring skill

