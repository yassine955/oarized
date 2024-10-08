export const AboutComponent = () => {
  return (
    <section
      className="about full-screen d-lg-flex justify-content-center align-items-center"
      id="about"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
            <div className="about-text">
              <small className="small-text">
                Welcome to <span className="mobile-block">OARIZED</span>
              </small>
              <h1 className="animated animated-text">
                <span className="mr-2">I'm</span>
                <div className="animated-info">
                  <span className="animated-item">Developer</span>
                  <span className="animated-item">UI-Expert</span>
                  <span className="animated-item">Dedicated</span>
                </div>
              </h1>

              <p>
                <b>
                  We are a top-tier web development agency, dedicated to
                  creating innovative and impactful web solutions.
                </b>
              </p>

              <div className="custom-btn-group mt-4">
                <a
                  href="/files/CV-EN.pdf"
                  className="btn mr-lg-2 custom-btn"
                  target="_blank"
                >
                  <i className="uil uil-file-alt"></i> Download Resume (CV)
                </a>
                <a
                  href="#contact"
                  className="btn custom-btn custom-btn-bg custom-btn-link"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-12">
            <div className="about-image svg">
              <img
                src="images/undraw/undraw_software_engineer_lvl5.svg"
                className="img-fluid"
                alt="svg image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
