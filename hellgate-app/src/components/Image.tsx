import "./Image.css";

interface Props {
	src: string;
	alt: string;
}

const Image = ({ src, alt }: Props) => {
	return (
		<div className="container">
			<img className="Image" src={src} alt={alt} />
		</div>
	);
};

export default Image;
