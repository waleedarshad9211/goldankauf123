import Button from "../shared/button/Button";

const HomeVideoSection = () => {
  return (
    <section className="video_section_wrapper">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center flex-column">
          <h2 className="text-center video_section_heading">
            Mehr Als 150.000 zufriedene Kunden
          </h2>
          <p className="video_section_p1">
            “Mehr als 150.000 Kunden” haben bereits unseren Goldankauf in
            Anspruch genommen. Viele dieser zufriedenen Kunden haben auf der
            bekannen Bewertungsplattform eKomi Ihre positiven Erfahrungen mit
            Goldakauf123 geteilt.
          </p>
          <p className="video_section_p1">
            Lassen auch Sie sich von den zahlreichen Bewertungen überzeugen und
            verkaufen uns Ihr Gold zu sehr hohen Goldpreisen. Bestellen auch Sie
            jetzt ganz unverbindlich eine kostenlose Versandtasche für den
            Goldankauf.Wir freuen uns darauf, auch Sie als neuen Kunden gewinnen
            zu können.
          </p>
          <div className="row video-row">
            <div className="col-12 col-md-6 col-lg-6 mb-4">
              <div className="vedio_card">
                <div class="black-corner-top top-left"></div>
                <div class="black-corner-bottom bottom-right"></div>
                <iframe
                  width={"90%"}
                  height={"280"}
                  src="https://www.youtube.com/embed/R2o0P4cgmQs"
                  title={
                    "Hartmut hat uns Zahngold verkauft und ist sehr zufrieden"
                  }
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 mb-4 d-none d-md-block d-lg-block">
              <div className="vedio_card">
                <div class="black-corner-top top-left"></div>
                <div class="black-corner-bottom bottom-right"></div>
                <iframe
                  width={"90%"}
                  height={"280"}
                  src="https://www.youtube.com/embed/uBAsPeiV3ac"
                  title={"Tolle Bewertung unserer Kundin Tanja!"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div>
            <Button
              className=" text-white video-btn"
              btnText="Videos über Goldankauf123.de"
              padding="5px 30px"
              fontSize="25px"
              fontWeight="700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeVideoSection;
