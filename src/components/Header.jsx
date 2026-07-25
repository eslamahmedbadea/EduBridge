// Importing
import { FaArrowRight } from "react-icons/fa";

// Primary function
function Header() {
  return (
    <header id="header">
      <nav className="navBar">
        {/* Logo */}
        <a href="#" className="logo">
          EduBridge
        </a>

        {/* Unordered list */}
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* Login & Button */}
        <div className="account">
          <a href="#">Login</a>
          <a href="#" className="btn-join">
            Join Us
            <FaArrowRight />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
