import "./portfolio.css";

const Portfolio = () => {
  const items = [
    {
      title: "This is a portfolio item title",
      image_url:
        "https://elements-cover-images-0.imgix.net/c6bec910-68fc-43e4-8f04-444cfb0b5f2a?auto=compress%2Cformat&w=1019&fit=max&s=a8f91de473db27a29fe512cf2285616a",
      github_url: "https://github.com",
      demo_url: "#",
    },
    {
      title: "This is a portfolio item title",
      image_url:
        "https://elements-cover-images-0.imgix.net/90b2c1c0-c902-45e4-86d2-ab20eb133487?auto=compress%2Cformat&w=1370&fit=max&s=9175b0804026431bf29da1ba40df424c",
      github_url: "https://github.com",
      demo_url: "#",
    },
    {
      title: "This is a portfolio item title",
      image_url:
        "https://elements-cover-images-0.imgix.net/b24f8855-06d4-483d-b598-1208d11f14b3?auto=compress%2Cformat&w=1370&fit=max&s=7e17919694665d0bb50b25b1abed534b",
      github_url: "https://github.com",
      demo_url: "#",
    },
    {
      title: "This is a portfolio item title",
      image_url:
        "https://elements-cover-images-0.imgix.net/7b0de2f8-54e2-4128-9f20-88f2142c4870?auto=compress%2Cformat&w=1370&fit=max&s=17519e12f69f977456f44a5e7c9d5e81",
      github_url: "https://github.com",
      demo_url: "#",
    },
    {
      title: "This is a portfolio item title",
      image_url:
        "https://elements-cover-images-0.imgix.net/ea79e0b3-af86-44f4-9621-9039aa407b78?auto=compress%2Cformat&w=1370&fit=max&s=12cc7b9d87a0137df604f715a9a0cb5a",
      github_url: "https://github.com",
      demo_url: "#",
    },
    {
      title: "This is a portfolio item title",
      image_url:
        "https://elements-cover-images-0.imgix.net/0a0c98dc-cee8-4264-b237-5ed9e87097ab?auto=compress%2Cformat&w=1370&fit=max&s=7b06a2b2c799b4f8420b223ee1b73b1e",
      github_url: "https://github.com",
      demo_url: "#",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {items.map(({ title, image_url, github_url, demo_url }) => {
          return (
            <>
              <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image_url} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={github_url}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={demo_url}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
