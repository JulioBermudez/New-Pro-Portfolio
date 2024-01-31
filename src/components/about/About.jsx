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
        I am an enthusiastic and detail-oriented Full Stack Junior Web Developer with strong foundation in front-end technologies like React, Next.js, and CSS frameworks such Bootstrap and Tailwind. Eager to contribute my skills in creating responsive and user-friendly web applications. A quick learner, adaptable to new technologies, and committed to staying at the forefront of industry trends.
        </p>

        <a href="" className="btn btn-primary">Let's Talk</a>

      </div>


      </div>

      
    </section>
  );
};

export default About;
