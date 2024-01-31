/* eslint-disable react/no-unescaped-entities */
import CV from "/public/Resume-Full-Stack-Updated.pdf"

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn" download >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
