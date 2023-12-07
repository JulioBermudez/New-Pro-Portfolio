/* eslint-disable react/no-unescaped-entities */
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/avatar-full.png"
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Julio Bermudez</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA/>

        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className="scroll-down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header