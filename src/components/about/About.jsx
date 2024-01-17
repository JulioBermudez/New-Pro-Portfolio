/* eslint-disable react/no-unescaped-entities */
import "./about.css";
import ME from "../../assets/avatar-full.png";
import { RiAwardFill } from "react-icons/ri";
import { LuUsers } from "react-icons/lu";
import { VscFolderLibrary} from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

<div className="about__content">
        <div className="about__cards">
          <article className="about__card">
              <RiAwardFill className="about__icon"/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
          </article>
          <article className="about__card">
              <LuUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>50+ Happy</small>
          </article>
          <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
          </article>
        </div>

        <p>
        I am a Junior Full Stack Web Developer graduated from the University of Miami Coding Bootcamp. I take pride in providing clean code and pixel-perfect designs. I have dedicated myself to learning and growing every day, constantly pushing my limits to discover new ways of creating amazing user experiences.
        </p>

        <a href="" className="btn btn-primary">Let's Talk</a>

      </div>


      </div>

      
    </section>
  );
};

export default About;
