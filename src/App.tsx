import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
	useNavigate,
	Route,
	HashRouter,
	BrowserRouter,
	Routes,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"; //Boostrap Import 1/2
import "bootstrap/dist/js/bootstrap.bundle.min"; //Boostrap Import 2/2
import "./homePageStyle.css";

function Home() {
	const navigate = useNavigate();

	return (
		<div className="Application">
			<head>
				<title>SanAngel Productos Mexicanos</title>
			</head>
			<div className="container">
				<div className="row fair-spacing">
					<div className="col">
						<iframe
							src="https://embed.lottiefiles.com/animation/98495"
							className="underConstruction"
						/>
					</div>
					<div className="col">
						<h1 id="underDevTitle">We're under Development</h1>
						<div className="row">
							<p id="underDevDescription">Please Come Back later!</p>
						</div>
						<div className="row">
							<button
								type="button"
								className="btn btn-outline-primary"
								id="underDevBtn"
								onClick={() => {
									window.location.href = "https://www.pjl.sanangelmx.com";
								}}
							>
								Employee Portal
							</button>
						</div>
					</div>
				</div>
				<div className="row">
					<p id="salesInfo">
						For sales please call the office number{" "}
						<a href="tel:956-992-8831">(956)992-8831</a>
					</p>
				</div>
			</div>
		</div>
	);
}

function App() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<div className="Application">
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
