import Intro from "../assets/video/intro.mp4";

function Hero() {
  return (
    <div className="hero">
      <video className="hero-video" autoPlay muted>
        <source src={Intro} type="video/mp4" />
      </video>
    </div>
  );
}

export default Hero;
