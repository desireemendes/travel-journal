import './Nav.css'
import navlogo from "./images/icons8-earth-globe-96.png"
function Nav () {
    return (
        <nav>
<h1>my travel journal</h1>
<img src={navlogo} alt="globe" className="nav-logo"/>
<a target="_blank" href="https://icons8.com/icon/123622/earth-globe"></a>
        </nav>
    )
}

export default Nav;