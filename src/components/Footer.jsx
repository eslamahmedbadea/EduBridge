import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        {/* Parent row */}
        <div className="footer-row">
          {/* Column one */}
          <div className="col">
            <h2>Get in touch</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="socials">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Column two */}
          <div className="col">
            <h2>Company info</h2>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">We Are Hiring</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          {/* Column Three */}
          <div className="col">
            <h2>Features</h2>
            <ul>
              <li>
                <a href="#">Business Marketing</a>
              </li>
              <li>
                <a href="#">User Analytic</a>
              </li>
              <li>
                <a href="#">Live Chat</a>
              </li>
              <li>
                <a href="#">Unlimited Support</a>
              </li>
            </ul>
          </div>

          {/* Column Four */}
          <div className="col">
            <h2>Resources</h2>
            <ul>
              <li>
                <a href="#">IOS & Android</a>
              </li>
              <li>
                <a href="#">Watch a Demo</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
