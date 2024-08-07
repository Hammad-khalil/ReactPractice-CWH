## Steps to Use Routing in React JS

### Step 1
Open terminal and write this command:
```bash
npm i react-router-dom
```

### Step 2
Use:
```jsx
import { createBrowserRouter } from 'react-router-dom';
```
in `main.jsx` (recommended) or `app.jsx`.

### Step 3
Define the router:
```jsx
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/about", element: <About /> },
]);
```

### Step 4
Add `RouterProvider` as shown below:
```jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
```
in `main.jsx` (recommended) or `app.jsx`.

### Step 5
Use `RouterProvider` in the return statement:
```jsx
return (
  <>
    <Navbar />
    <RouterProvider router={router} />
  </>
);
```

### Step 6
Make anchor tags in the Navbar match with our path in the router:
```jsx
<nav>
  <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
    <a href="/"><li>Home</li></a>
    <a href="/about"><li>About Us</li></a>
    <a href="/login"><li>Login</li></a>
  </ul>
</nav>
```
As you can see in Step 3, it matches with our path now.

### Step 7
Import:
```jsx
import { Link } from 'react-router-dom';
```
where our Navbar is. Now in Navbar, replace `a` tags with `Link` tags and `href="/"` with `to="/"`:
```jsx
<nav>
  <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
    <Link to="/"><li>Home</li></Link>
    <Link to="/about"><li>About Us</li></Link>
    <Link to="/login"><li>Contact Us</li></Link>
  </ul>
</nav>
```

### Step 8
(We have to do all these above steps in `main.jsx` but if we have done it in `app.jsx` then we have to wrap our element in Navbar tag where we are doing our routing like):

#### Before
This will show errors if we did not create the router in `main.jsx`:
```jsx
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/about", element: <About /> },
]);
```

#### After
We have to write Navbar before our element and then wrap the whole data with JSX fragment like this:
```jsx
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <> <Navbar /><Home /> </> },
    { path: "/login", element: <> <Navbar /><Login /> </> },
    { path: "/about", element: <> <Navbar /><About /> </> },
  ]);

  return (
    <RouterProvider router={router} />
  );
}




### Step 9
In `main.jsx`, we have another path with params:
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import About from './Components/About';
import User from './Components/User.jsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <> <Navbar /><Home /> </>
  },
  {
    path: "/login",
    element: <> <Navbar /><Login /> </>
  },
  {
    path: "/about",
    element: <> <Navbar /><About /> </>
  },
  {
    path: "/user/:username",
    element: <> <Navbar /><User /> </>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);





Step 10
In User component, use params:

jsx
Copy code
import { useParams } from 'react-router-dom';

const User = () => {
  const params = useParams();
  return (
    <div>
      I am user {params.username}
    </div>
  );
}

export default User;

```
```