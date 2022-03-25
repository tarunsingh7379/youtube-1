import "./intro.css";
import Me from "../../img/Tarun-Singh1.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Tarun Singh</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Competitive Programmer</div>
            </div>
          </div>
          <div className="i-desc">
            I am a 3rd year B.Tech student at Harcourt Butler University Kanpur.
            I am a competitive programmer who loves to solve coding problems. I
            am also a web developer who enjoys creating websites.
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
