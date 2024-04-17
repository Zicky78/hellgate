import "./Nav.css";

const Nav = () => {
	return (
		<nav className="">
			<div className="center-vertical">
				<img id="logo" src="./img/logo.png" alt=""></img>
			</div>
			<div className="center-vertical font">
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Gallery</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
