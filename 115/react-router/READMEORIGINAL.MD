STEPS TO USE ROUTING IN REACT JS =>

STEP 1 => open termial and write this command =>
npm i react-router-dom

STEP 2 => use 
import {createBrowserRouter} from 'react=router-dom' in main.jsx (recommended) or app.jsx

STEP 3 =>
const router = createBrowserRouter([
    {path: "/",
      element: <Home/>
    },
    {
      path: "/login",
      element: <Login/>
    }
  ])


STEP 4 => Add RouterProvider in step 2 

import {createBrowserRouter} from 'react=router-dom' in main.jsx (recommended) or app.jsx
like 

import {createBrowserRouter, RouterProvider} from 'react=router-dom' in main.jsx (recommended) or app.jsx


STEP 5 => 
use router provider in return like this =>

return (
    <>
    <Navbar/>
    <RouterProvider router={router}/>
    </>
  )


 STEP 6 =>  now make anchor tag href in navbar matches with our path in router like 
  <nav >
        <ul style={{display:"flex", gap:"20px",listStyle:"none"}}>
            <a href="/"><li>Home</li></a>
            <a href="/about"><li>About us</li></a>
            <a href="/login"><li>Login</li></a>
        </ul>
    </nav>

    as you can see in step 3 it matches with out path now 

    STEP 7 =>
    now import 
    import {Link} from "react-router-dom" where our Navbar is
    Now in navbar we have to replace a tag with Link tag and href="/" with to="/"

    like 

    <nav >
        <ul style={{display:"flex", gap:"20px",listStyle:"none"}}>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About us</li></Link>
            <Link to="/login"><li>Contact us</li></Link>
        </ul>
    </nav>

    STEP 8 =>   (WE HAVE TO DO ALL THESE ABOVE STEPS IN MAIN.JSX BUT IF WE HAVE DONE IT IN APP.JSX THEN WE HAVE TO WRAP OUR ELEMENT IN NAVBAR TAG WHERE WE ARE DOING OUR ROUTING LIKE )

    BEFORE => (WILL SHOW ERRORS IF WE DID NOT CREATED ROUTER IN MAIN.JSX)

    const router = createBrowserRouter([
    {path: "/",
      element: <Home/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/About",
      element: <About/>
    }
  ])

  AFTER => HAVE TO WRITE NAVBAR BEFORE OUT ELEMENT AND THEN WRAP WHOLE DATA WITH JSX FRAGRMENT LIKE THIS 



  function App() {
  const router = createBrowserRouter([
    {path: "/",
      element:<> <Navbar/><Home/></>
    },
    {
      path: "/login",
      element:<> <Navbar/><Login/></>
    },
    {
      path: "/About",
      element:<> <Navbar/><About/></>
    }
  ])

  


  NOW WE HAVE The Project which im uploading to git with this readme.md file and you can check it if you want to know about anything about ReactJS Router