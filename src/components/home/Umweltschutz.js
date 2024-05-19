import Image from "next/image";
import ForestSection from "/public/assets/img/homepage/3rd-section-forest.png";
import Button from "../shared/button/Button";
import ForestMobile from "/public/assets/img/homepage/forest_mobile.png";

const Umweltschutz = () => {
  return (
    <div className="container">
      <section className="umweltschutz_wrapper">
        <div className="row">
          <div className="col-12 col-md-5 lg-4">
            <div className="umweltschutz_wrapper_left">
              <h2 className="umweltschutz_heading">
                UMWELTSCHUTZ & NACHHALTIGEIT
              </h2>
              <p className="umweltschutz_wrapper_left_p1">
                Wir recyclen Ihre Edelmetalle und diese gelangen zu 100% wieder
                in den Kreislauf der Schmuckindustrie, Investments (Barren),
                Industrie, Medizin etc.
              </p>
              <div className="d-flex justify-content-between align-items-center position-relative">
                <div className="forest_text_heading">
                  <h3 className="umweltschutz_wrapper_left_heading2">
                    Dadurch gibt es weniger:
                  </h3>
                  <p className="umweltschutz_wrapper_left_p1">
                    » Goldminenabbau in der Welt
                  </p>
                  <p className="umweltschutz_wrapper_left_p1">
                    {" "}
                    » Schadstoffe in der Umwelt
                  </p>{" "}
                  <p className="umweltschutz_wrapper_left_p1">
                    » Wasserverschmutzung
                  </p>
                  <p className="umweltschutz_wrapper_left_p1">
                    {" "}
                    » CO2 Emissionen
                  </p>{" "}
                  <p className="umweltschutz_wrapper_left_p1">
                    » Abholzung von Regenwäldern
                  </p>{" "}
                  <p className="umweltschutz_wrapper_left_p1">
                    » Menschenrechtsverletzungen
                  </p>
                </div>
                <div className="d-block d-md-none d-lg-none">
                  <Image
                    src={ForestMobile}
                    alt=""
                    className="umweltschutz_mobile_img"
                  />
                </div>
              </div>
              <Button
                btnText="Weitere Informationen finden Sie hier"
                fontSize="18px"
                color="#ffffff"
                width="auto"
                backgroundColor="#2F2F2F"
                borderRadius="100px"
                height="29px"
                margin="10px 0px 0px 0px"
              />
            </div>
          </div>
          <div className="col-12 col-md-7 lg-8 d-none d-md-block d-lg-block">
            <Image
              src={ForestSection}
              alt=""
              className="umweltschutz_main_img"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Umweltschutz;
