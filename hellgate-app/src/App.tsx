import Image from "./components/Image";
import Nav from "./components/Nav";
import Main from "./components/Main"; 
import "./App.css";

function App() {
	return (
		<>
			<div className="parent">
				<Nav></Nav>
				<Main></Main>
				<footer>@mono</footer>
			</div>
			{/* <div className="columnContainer">
				<div className="imageContainer">
					<Image src="./img/DSC_0159-min.jpg" alt="" />

					<Image src="./img/DSC_0285-min.jpg" alt="" />
				</div>
				<div className="imageContainer">
					<Image src="./img/DSC_0280-min.jpg" alt="" />
					<Image src="./img/DSC_0261-min.jpg" alt="" />
				</div>
				<div className="imageContainer">
					<Image src="./img/DSC_0162-min.jpg" alt="" />
					<Image src="./img/DSC_0273-min.jpg" alt="" />
				</div>
			</div> */}
		</>
	);
}

export default App;
