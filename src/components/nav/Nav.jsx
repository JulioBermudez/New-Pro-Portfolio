import "./nav.css";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdContactPhone } from "react-icons/md";
import { useState } from "react";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        href="#"
      >
        <IoHomeOutline />
      </a>
      <a
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        href="#about"
      >
        <FaRegUser />
      </a>
      <a
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        href="#experience"
      >
        <BiBook />
      </a>
      <a
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
        href="#services"
      >
        <RiServiceLine />
      </a>
      <a
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        href="#contact"
      >
        <MdContactPhone />
      </a>
    </nav>
  );
};

export default Nav;
