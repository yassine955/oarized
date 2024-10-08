import { useRouter } from "next/router";

export const Projects = () => {
  const { push } = useRouter();
  return (
    <section className="project py-5" id="project">
      <div className="container">
        <div className="row">
          <div className="col-lg-11 text-center mx-auto col-12">
            <div className="col-lg-8 mx-auto">
              <h2>Check out some of my latest projects with creative ideas.</h2>
            </div>

            <div className="owl-carousel owl-theme">
              <div className="item">
                <div className="project-info">
                  <img
                    onClick={() => push("https://marketingleak.com")}
                    src="./images/project/project-image01.png"
                    className="img-fluid"
                    alt="project image"
                  />
                </div>
              </div>

              <div className="item">
                <div className="project-info">
                  <img
                    src="images/project/project-image02.png"
                    className="img-fluid"
                    alt="project image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
