import "../css/footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-div">
        {
          <span className="signature">
            Copyright © {currentYear + " "}
            <a href="https://www.jaramillo.dev">Fernando Jaramillo </a>
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
          <address className="business-info">
            <span className="business-title">
              SanAngel Productos Mexicanos LLC
            </span>
            <a
              href="https://www.google.com/maps/dir/22.9515384,-102.7020223/sanangel+productos+mexicanos/@24.6252526,-102.7247131,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x866509b03570790f:0xc46d0e558d68b57!2m2!1d-98.2567735!2d26.1485378"
              className="business-address"
            >
              2501 W. Military Hwy Ste B-15, McAllen TX 78503
            </a>
            <a href="tel:+1956-992-8831" className="business-phone">
              +1(956)992-8831
            </a>
          </address>
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
