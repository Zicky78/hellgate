import './Hero.css'

const Hero = () => {
    return (
        <div className="hero font">
            <img className="img" src="./img/img_01.jpg" alt="" />
            {/* <div className="center-vertical"> */}
                <h1 className="center">Gehenna</h1>
                {/* </div> */}
            <img className='img align-self-right' src="./img/img_02.jpg" alt="" />
        </div>
    );
};

export default Hero;