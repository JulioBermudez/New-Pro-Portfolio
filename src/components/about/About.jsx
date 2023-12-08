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
              <small>3+ Years Working</small>
          </article>
          <article className="about__card">
              <LuUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
          </article>
          <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
          </article>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolorem dolorum rerum provident labore, explicabo illum ullam mollitia officia laudantium consequuntur accusamus unde ab in enim voluptatem autem cupiditate quos.
        </p>

        <a href="" className="btn btn-primary">Let's Talk</a>

      </div>


      </div>

      
    </section>
  );
};

export default About;
