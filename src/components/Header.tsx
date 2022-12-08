import "../css/header.css";
function Header() {
  return (
    <header>
      <div className="logo-container">
        <img alt="company-logo" src={require("../assets/images/logo.jpg")} />
        <div className="logo-title">
          <a href="/" className="logo">
            SanAngel
          </a>
          <a className="secondary-title" href="/">
            Productos Mexicanos
          </a>
        </div>
      </div>

      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          {/*<li>
            <select>
              <option value="EN-US" className="usa-flag"></option>
              <option value="ES-MX">Mexico</option>
            </select>
  </li> */}
          <li>
            <button
              type="button"
              className="btn btn-outline-light header-btn"
              onClick={() => {
                window.location.href = "https://www.pjl.sanangelmx.com";
              }}
            >
              login
            </button>
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
