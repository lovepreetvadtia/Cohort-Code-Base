

# 🔥 React Router DOM – Ultimate Practice Challenge (BrowserRouter)

> **Target:**
> `BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`, `useParams`, `useNavigate`, `useLocation`,
> `Nested Routes`, `Protected Routes`, `404`, `Layout Routes` — **sab cover ek project mein**

---

## 🧠 PROJECT IDEA: **React Routing Master App**

### Pages jo banani hain:

```
/                → Home
/about           → About
/contact         → Contact
/blogs           → Blogs List
/blogs/:slug     → Single Blog Page
/dashboard       → Dashboard (Protected)
/dashboard/profile
/dashboard/settings
/login           → Login
/*               → 404 Page
```

---

## 🏗️ STEP 1: Basic Setup (Must Do)

```bash
npm install react-router-dom
```

```jsx
import { BrowserRouter } from "react-router-dom";

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

✔️ **Practice focus:**

* BrowserRouter **sirf ek baar**
* App ke andar routing

---

## 🧭 STEP 2: Navbar + Navigation

### Tasks:

* `Link` use kar (reload NA ho)
* `NavLink` use kar (active class lagni chahiye)

```jsx
<NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>
  About
</NavLink>
```

🔥 **Challenge:**
Active link ko red color + underline kar.

---

## 🧩 STEP 3: Routes Setup (Core)

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

✔️ **Practice focus:**

* `Routes` vs `Switch` (old)
* `element` prop

---

## 📦 STEP 4: Dynamic Routing (useParams)

### Route:

```
/blogs/react-router
/blogs/useeffect
```

```jsx
<Route path="/blogs/:slug" element={<SingleBlog />} />
```

```jsx
const { slug } = useParams();
```

🔥 **Challenge:**

* Slug ke basis pe different content show kar
* Agar galat slug ho → “Blog Not Found”

---

## 🧠 STEP 5: Nested Routes (GAAND-FAAD PART)

```
/dashboard
/dashboard/profile
/dashboard/settings
```

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

```jsx
<Outlet />
```

🔥 **Challenge:**
Dashboard ke andar **alag navbar** ho.

---

## 🔐 STEP 6: Protected Routes (INTERVIEW LEVEL)

### Condition:

```js
const isLoggedIn = false;
```

```jsx
function PrivateRoute({ children }) {
  return isLoggedIn ? children : <Navigate to="/login" />;
}
```

```jsx
<Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>
```

🔥 **Challenge:**

* Login page pe button → login true
* Login ke baad redirect dashboard

---

## 🚀 STEP 7: useNavigate (Programmatic Routing)

```jsx
const navigate = useNavigate();

navigate("/dashboard");
navigate(-1); // back
```

🔥 **Challenge:**
Form submit hone ke baad auto redirect.

---

## 🧭 STEP 8: useLocation (Advanced)

```jsx
const location = useLocation();
```

🔥 **Challenge:**

* Login ke baad **previous page** pe wapas bhejna
* Console mein pathname log kar

---

## 💀 STEP 9: 404 Page (Must)

```jsx
<Route path="*" element={<NotFound />} />
```

🔥 **Challenge:**

* URL kuch bhi likho → custom 404 page

---

## 🧱 STEP 10: Layout Routes (PRO LEVEL)

### Layout.jsx

```jsx
<Navbar />
<Outlet />
<Footer />
```

🔥 **Challenge:**

* Navbar/Footer sab pages pe
* Login page pe navbar nahi dikhna chahiye

---

## 🧪 FINAL BOSS CHALLENGES 💀

1. 🔄 Query Params use kar

   ```
   /blogs?category=react
   ```

2. 🔐 Fake Auth System (useState + context)

3. ⛔ Dashboard direct URL se open na ho

4. 🎯 Active route pe animation
