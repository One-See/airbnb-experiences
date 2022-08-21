import logo from '../../images/airbnb.png'
import './Header.css'

export default function Header() {
    return (
        <nav className="nav-element">
            <img src={logo} className="logo" alt="airbnb logo"></img>
        </nav>
    )
}