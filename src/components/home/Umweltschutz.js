import Image from "next/image";
import ForestSection from "public/assets/img/homepage/forestDesktop.png";
import Button from "../shared/button/Button";
import ForestMobile from "public/assets/img/homepage/forest_mobile.png";

const Umweltschutz = () => {
  return (
    <section className="umweltschutz_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 lg-6">
            <div className="umweltschutz_wrapper_left">
              <h2 className="umweltschutz_heading">
                Nachhaltigkeit unterstützen
              </h2>
              <p className="umweltschutz_wrapper_left_p1">
                Der Verkauf von Gold unterstützt die Nachhaltigkeit. Die von
                Goldankauf123.de angekauften Edelmetalle werden recycelt und
                wieder verarbeitet, sodass beispielsweise Goldschmuck,
                Goldbarren, medizinische Produkte oder Zahngold daraus entstehen
                können.
              </p>
              <div className="d-flex justify-content-between align-items-center position-relative">
                <div className="forest_text_heading">
                  <h3 className="umweltschutz_wrapper_left_heading2">
                    Recycling von Edelmetallen hilft:
                  </h3>
                  <p className="umweltschutz_wrapper_left_p1">
                    » Schadstoffe zu reduzieren
                  </p>
                  <p className="umweltschutz_wrapper_left_p1">
                    {" "}
                    » Wasserverschmutzung einzudämmen
                  </p>{" "}
                  <p className="umweltschutz_wrapper_left_p1">
                    » CO₂ Emissionen zu mindern
                  </p>
                  <p className="umweltschutz_wrapper_left_p1">
                    {" "}
                    » Regenwälder zu schützen
                  </p>{" "}
                  <p className="umweltschutz_wrapper_left_p1">
                    » Neue Minen zu vermeiden
                  </p>{" "}
                </div>
              </div>
              <Button
                btnText="Weitere Informationen finden Sie hier"
                fontSize="18px"
                fontWeight="700"
                color="#ffffff"
                width="auto"
                height="50px"
                margin="20px 0px 0px 0px"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 lg-6 d-none d-md-block d-lg-block umweltschutz_wrapper_right_side">
            <div className="umweltschutz_wrapper_img">
              <Image src={ForestSection} alt="" />
            </div>
          </div>
          <div className="col-12  d-block d-md-none d-lg-none umweltschutz_wrapper_right_side">
            <div className="umweltschutz_wrapper_mobile_img">
              <Image src={ForestMobile} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Umweltschutz;
