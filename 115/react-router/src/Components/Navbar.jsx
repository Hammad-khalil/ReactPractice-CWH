import { Link } from "react-router-dom"
const Navbar = () => {
  
  return (
    <div >
    <nav >
        <ul style={{display:"flex", gap:"20px",listStyle:"none"}}>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About us</li></Link>
            <Link to="/login"><li>Login</li></Link>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar
