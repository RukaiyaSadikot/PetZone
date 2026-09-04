import { FiMapPin, FiPhone, FiMail, FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';

export default function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="row footer-row">
          <div className="col-4">
            <h2>Get In Touch With
                <br /> Us 💬</h2>
            <div className="email">
              <input type="email" placeholder="Email" />
              <button className="btn">Submit</button>
            </div>
            <p>No spam, we hate it more than you do.</p>
          </div>

          <div className="col-2">
            <h4>Useful links</h4>
            <ul className="footer-links">
              <li><a href="#">Search</a></li>
              <li><a href="#">Press Room</a></li>
              <li><a href="#">Cookies</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Shipping Details</a></li>
              <li><a href="#">Site Map</a></li>
            </ul>
          </div>

          <div className="col-2">
            <h4>Custom Services</h4>
            <ul className="footer-links">
              <li><a href="#">Free Shipping</a></li>
              <li><a href="#">Advanced Search</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Store Location</a></li>
              <li><a href="#">Order & Returns</a></li>
              <li><a href="#">Mobile Apps</a></li>
            </ul>
          </div>

          <div className="col-2">
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li><FiMapPin /> No: 58 A, East Madison Street, Baltimore, MD, USA 4508</li>
              <li><FiPhone /> +000-123-456-789</li>
              <li><FiMail /> contact@example.com</li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="row footer-bottom">
          <div className="footer-payments">
            <span>PayPal</span>
            <span>Mastercard</span>
            <span>RuPay</span>
            <span>Stripe</span>
            <span>Visa</span>
          </div>

          <p>©Wedesigntech All Rights Reserved</p>

          <div className="footer-socials">
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
            <a href="#">Threads</a>
          </div>
        </div>
      </div>
    </section>
  );
}