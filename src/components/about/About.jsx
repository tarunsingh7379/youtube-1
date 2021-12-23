import "./about.css";
import Flower from "../../img/rose.jpg";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Flower} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
          dolores? Pariatur a voluptates eveniet dolores quos perspiciatis
          quaerat distinctio velit.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
          maiores corrupti. Nihil aut consequuntur similique ipsa quidem
          possimus harum laudantium provident animi, doloribus, laborum ea iusto
          saepe delectus suscipit expedita!
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International award</h4>
            <p className="a-award-desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur mollitia aliquid voluptatibus maxime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
