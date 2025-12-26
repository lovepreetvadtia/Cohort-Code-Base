# Day 60 — Exercises

---

## Exercise 1 — Very Easy (Warming up)

**Task (Hindi):** Ek function banao `afterDelay`

**Requirements:**
- Ye function do cheezein lega:
  1. `time` (milliseconds)
  2. `callback` function
- Given `time` ke baad `callback` call kare
- Callback ke andar `"Callback executed"` print hona chahiye

**Use case:**
> “2 second baad ek kaam karna hai”

**Goal:**
- Samajhna ki callback delay ke baad kaise execute hota hai
- Ye `setTimeout` + callback connection hai

---

## Exercise 2 — Intermediate (Data flow)

**Task (Hindi):** Ek function banao `getUser`

**Requirements:**
- `getUser` `username` lega
- 1 second ke baad `callback` ko ek object de:
  - `id`
  - `username`

**Then:**
- Callback ke andar ek aur function call karo `getUserPosts`

**`getUserPosts` requirements:**
- `userId` lega
- 1 second ke baad `callback` ko `posts` ka array de

**Final output:**
- User ka `username` print ho
- Fir uske `posts` print ho

**Goal:**
- Samajhna ki ek async ka result next async ko kaise milta hai
- Callback chaining practice

---

## Exercise 3 — Intermediate (Callback dependency — thoda painful)

**Task (Hindi):** Teen functions banao:

1. `loginUser`
   - 1 second baad callback ko `user` object de
2. `fetchPermissions`
   - `userId` lega
   - 1 second baad callback ko `permissions` array de
3. `loadDashboard`
   - `permissions` lega
   - 1 second baad callback ko `"Dashboard loaded"` bole

**Flow:**
- Pehle `loginUser`
- Uske andar `fetchPermissions`
- Uske andar `loadDashboard`
- Final output console mein print ho

**Goal:**
- Callback nesting ko feel karna
- Yehi structure baad mein callback hell banta hai

---
## Exercise 4 — Upper Intermediate (Sequential Dependency)

**Task (Hindi):**
Ek function banao `placeOrder`

**Requirements:**

* `placeOrder` ek `orderId` lega
* 1 second baad callback ko order object de

**Uske baad:**

* Callback ke andar function call hoga `confirmPayment`
* `confirmPayment` 1 second baad payment status dega

**Uske baad:**

* Callback ke andar function call hoga `shipOrder`
* `shipOrder` 1 second baad `"Order shipped"` bolega

**Final output:**

* Order placed
* Payment confirmed
* Order shipped

**Goal:**

* Ek async ka output next async ko pass karna
* Proper callback chaining

---

## Exercise 5 — Advanced (Error-first callback)

**Task (Hindi):**
Ek function banao `loginUser`

**Requirements:**

* `loginUser` `username` aur `password` lega
* 1 second baad callback call kare:

  * agar password correct ho → user object
  * agar galat ho → error message

**Callback format:**

```js
callback(error, data)
```

**Flow:**

* Error aaye to process wahi ruk jaye
* Success ho to `"Login successful"` print ho

**Goal:**

* Error-first callback pattern samajhna
* Async flow me error handle karna

---

## Exercise 6 — Advanced (Parallel async handling)

**Task (Hindi):**
Ek dashboard ke liye 3 cheezein chahiye:

* profile
* posts
* notifications

**Requirements:**

* Teen alag async functions banao
* Teeno alag-alag time ke baad callback call karein
* Output tabhi print ho jab **teeno data aa chuka ho**

**Final output:**

```
Dashboard ready
```

**Goal:**

* Parallel async calls handle karna
* Callback ke saath state manage karna

---

## Exercise 7 — Expert (Callback Hell)

**Task (Hindi):**
Ek onboarding process banao

**Requirements:**

* Kam se kam **5 async functions**
* Har function:

  * 1 second delay
  * Callback ke andar next function call kare
* Har function ka output next function ko mile

**Final output (sirf ek baar):**

```
User onboarding complete
```

**Goal:**

* Callback nesting ko practically feel karna
* Samajhna ki callback hell kaise banta hai

---

## Exercise 8 — Hardcore (Retry logic)

**Task (Hindi):**
Ek function banao `fetchServerData`

**Requirements:**

* Ye function kabhi success karega, kabhi fail
* Maximum 3 attempts allowed
* Har fail ke baad callback ke through retry hoga
* 3 baar fail hone par process stop

**Final output:**

* Success → `"Data fetched"`
* Failure → `"Failed after 3 attempts"`

**Goal:**

* Recursive callbacks samajhna
* Real-world unstable async scenario handle karna

---
### Notes
- Practice in plain JavaScript using `setTimeout` and callbacks to understand the flow before converting to Promises/async–await.