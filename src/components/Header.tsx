import "../css/header.css";
function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={require("../assets/images/logo.jpg")} />
        <div className="logo-title">
          <a href="#" className="logo">
            SanAngel
          </a>
          <a className="secondary-title" href="#">
            Productos Mexicanos LLC
          </a>
        </div>
      </div>

      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Flag</a>
          </li>
          <li>
            <a href="#">button</a>
          </li>
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span />
      </label>
    </header>
  );
}

export default Header;
