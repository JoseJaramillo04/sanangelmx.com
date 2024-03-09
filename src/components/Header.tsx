import { useNavigate } from "react-router";
import "../css/header.css";
function Header() {
	const navigate = useNavigate();

	function navigateToProducts() {
		navigate(`/products`);
	}

	function navigateToContact() {
		navigate(`/contact`);
	}

	function navigateToHome() {
		navigate(`/`);
	}

	return (
		<header>
			<div className="logo-container">
				<img
					loading="lazy"
					alt="company-logo"
					src={require("../assets/images/logo.jpg")}
					onClick={navigateToHome}
				/>
				<div className="logo-title">
					<span onClick={navigateToHome} className="logo">
						SanAngel
					</span>
					<span onClick={navigateToHome} className="secondary-title">
						Productos Mexicanos
					</span>
				</div>
			</div>

			<input type="checkbox" id="nav-toggle" className="nav-toggle" />
			<nav>
				<ul>
					<li>
						<span className="nav-link" onClick={navigateToHome}>
							Home
						</span>
					</li>
					<li>
						<span className="nav-link" onClick={navigateToProducts}>
							Products
						</span>
					</li>
					<li>
						<span className="nav-link" onClick={navigateToContact}>
							Contact
						</span>
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
