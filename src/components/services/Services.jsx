import "./services.css"
import { BiCheck } from "react-icons/bi"
const Services = () => {
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Develop style guides and design systems to maintain design consistency throughout the product.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Structure content and functionality to ensure intuitive navigation.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Ensure that the design is responsive and works seamlessly across various devices and screen sizes.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Create animations, transitions, and micro-interactions to improve user engagement.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Choose color schemes, typography, and imagery that enhance the overall look and feel.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Define how users interact with elements on the screen.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Craft visually appealed interfaces that align with the brand identity</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Design and manage databases using technologies like MySQL,MongoDB, or Firebase</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Build online stores with features such as product catalog, shopping cart, and secure payment gateways.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Build robust APIs (Application Programming Interfaces) to facilitate data exchange between frontend and backend.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Provide customization and optimization for specific business needs.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Implement security measures to protect against common web vulnerabilities.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Provide ongoing support, updates, and maintenance to ensure the smooth functioning of websites and applications.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Communicate effectively with clients to understand their goals and requirements.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Ensure that websites are optimized for various devices and screen sizes.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Create informative and engaging blog posts and articles.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Design and create graphics, images, and visual elements for websites.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Research and incorporate relevant keywords for SEO purposes</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Plann and schedule content updates to keep the website fresh and relevant</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Ensure that the written content aligns with the brand voice and resonates with the target audience.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Regularly update and maintaing website content to reflect the latest information.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Encourage and incorporate user-generated content, such as reviews or testimonials.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services