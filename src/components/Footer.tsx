import "../css/footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-div">
        {
          <span className="signature">
            Copyright © {currentYear} Fernando Jaramillo
          </span>
        }
        <span className="signature">All rights reserved.</span>
      </div>
      <div className="footer-lower">
        <div className="one">
          <img
            src={require("../assets/images/logo-clear.png")}
            alt="business logo"
          />
          <div className="business-info">
            <span className="business-title">
              SanAngel Productos Mexicanos LLC
            </span>
            <span className="business-address">
              2501 W. Military Hwy Ste B-15, McAllen TX 78503
            </span>
            <a href="tel:+1956-992-8831" className="business-phone">
              +1(956)992-8831
            </a>
          </div>
        </div>
        <div className="minor-info">
          <div className="two">
            <a href="/">COMPANY INFORMATION</a>
            <a href="/">WHERE TO BUY</a>
            <a href="/">WISH LIST</a>
            <a href="/">PRODUCTS</a>
          </div>
          <div className="three">
            <a href="/">ABOUT US</a>
            <a href="/">CATALOG</a>
            <a href="/">BUSINESS INQUIRY</a>
            <a href="/">BRANDS</a>
          </div>
          <div className="four">
            <a href="/">RESOURCES</a>
            <a href="/">EMPLOYMENT</a>
            <a href="/">CONTACT US</a>
            <a href="/">COPYRIGHT NOTICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
