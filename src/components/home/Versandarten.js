import Image from "next/image";
import Button from "../shared/button/Button";
import VersandartenImg1 from "/public/assets/img/versandarten_card_img1.png";
import VersandartenImg2 from "/public/assets/img/versandarten_card_img2.png";
import VersandartenImg3 from "/public/assets/img/versandarten_card_img3.png";
import DHL from "/public/assets/img/dhl.png";
import UPSBlack from "/public/assets/img/UPS_black.png";
import Insurance from "/public/assets/img/insurance-copy.png";
import buttonArrow from "/public/assets/img/homepage/btn-arrow-unsere.png";

const Versandarten = ({ heading }) => {
  return (
    <section className="versandarten_wrapper">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center versandarten_h2">
          <h2>{heading}</h2>
        </div>
        <div className="row align-items-end mt-md-4">
          <div className="col-12 col-md-12 col-lg-4 versandarten_card_colun ">
            <div className="versandarten_card d-none d-md-none d-lg-block">
              <div className="versand_last_section">
                <div className="versandarten_card_header1">
                  <p className="versandarten_header-heading">SELBSTVERSAND</p>
                  <p className="versandarten_header-subheading">
                    Sie verschicken Ihr Gold selbst
                  </p>
                </div>
                <div className="versandarten_card_img">
                  <Image src={VersandartenImg1} alt="" />
                </div>
                <div className="versand_last_section_step">
                  <div className="versand_last_section_circle ">
                    1<div className="versand_last_section_dashed_line"></div>
                  </div>
                  <div className="versand_last_section_text">
                    Sie erhalten ein kostenloses Versandlabel sowie
                    Begleitschreiben zum Ausdrucken.
                  </div>
                </div>
                <div className="versand_last_section_step">
                  <div className="versand_last_section_circle ">
                    2<div className="versand_last_section_dashed_line"></div>
                  </div>
                  <div className="versand_last_section_text">
                    Wertgegenstände samt ausgefülltem Begleitschreiben gut
                    verpacken.
                  </div>
                </div>
                <div className="versand_last_section_step">
                  <div className="versand_last_section_circle ">3</div>
                  <div className="versand_last_section_text">
                    Versandlabel auf das Paket kleben & bei der DHL kostenlos
                    abgeben.
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <Button
                    btnText="Weitere Informationen"
                    borderRadius="10px"
                    margin="0px"
                    width="251px"
                    padding="4px 10px"
                    backgroundColor="#36A08A"
                    fontWeight="400"
                    rightSide
                    iconDetails={{
                      allowIcon: true,
                      icon: buttonArrow,
                    }}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <p className="versadarten-last-para">
                  Einfach, schnell und unkompliziert
                </p>
              </div>
              <div className="d-flex align-items-center bg-white p-2 rounded-3">
                <div>
                  <Image src={Insurance} alt="" className="me-3" />
                </div>
                <div style={{ fontSize: "17px" }}>
                  Die Versandtasche (DHL) ist bis 1.500 € versichert.
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-4">
                <Button
                  btnText="Ankauf starten"
                  borderRadius="10px"
                  margin="0px"
                  width="100%"
                  padding="5px 10px"
                  backgroundColor="#36A08A"
                  fontSize="22px"
                  fontWeight="400"
                />
              </div>
            </div>
            <div className="versandarten2_card d-block d-md-block d-lg-none">
              <div className="versand_last_section">
                <div className="versandarten2_card_upper_btn">
                  <Button
                    btnText="Beliebteste Option"
                    backgroundColor="#ffffff"
                    border="1px solid #36a08a"
                    borderRadius="10px"
                    width="213px"
                    height="65px"
                    color="#36a08a"
                    textTransform="uppercase"
                    fontSize="18px"
                    fontWeight="700"
                    className="versandarten2_card2_btn"
                  />
                </div>
                <div className="versandarten_card_header1">
                  <p className="versandarten_header-heading">VERSANDTASCHE</p>
                  <p className="versandarten_header-subheading">
                    Kostenlose Versandtasche
                  </p>
                </div>
                <div className="versandarten_card_img">
                  <Image src={VersandartenImg2} alt="" />
                </div>
                <div className="versand_last_section_step">
                  <div className="versand_last_section_circle ">
                    1<div className="versand_last_section_dashed_line"></div>
                  </div>
                  <div className="versand_last_section_text">
                    Versandtasche bestellen.
                    <p style={{ visibility: "hidden" }}>
                      Versandlabel sowie Begleitschreiben zum
                    </p>
                  </div>
                </div>
                <div className="versand_last_section_step">
                  <div className="versand_last_section_circle ">
                    2<div className="versand_last_section_dashed_line"></div>
                  </div>
                  <div className="versand_last_section_text">
                    Begleitschreiben ausfüllen, Wertgegenstände in die
                    Versandtasche legen & verschließen.
                  </div>
                </div>
                <div className="versand_last_section_step">
                  <div className="versand_last_section_circle ">3</div>
                  <div className="versand_last_section_text">
                    Versandtasche kostenlos bei der DHL abgeben.
                    <p style={{ visibility: "hidden" }}>Versandlabel sowie</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <Button
                    btnText="Weitere Informationen"
                    borderRadius="10px"
                    margin="0px"
                    width="251px"
                    padding="4px 10px"
                    backgroundColor="#36A08A"
                    fontWeight="400"
                    rightSide
                    iconDetails={{
                      allowIcon: true,
                      icon: buttonArrow,
                    }}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <p className="versadarten-last-para">
                  Seriöse Abwicklung In 3-4 Tagen
                </p>
              </div>
              <div className="d-flex align-items-center bg-white p-2 rounded-3">
                <div>
                  <Image src={Insurance} alt="" className="me-3" />
                </div>
                <div style={{ fontSize: "17px" }}>
                  Die Versandtasche (DHL) ist bis 1.500 € versichert.
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-4">
                <Button
                  btnText="Ankauf starten"
                  borderRadius="10px"
                  margin="0px"
                  width="100%"
                  padding="5px 10px"
                  backgroundColor="#36A08A"
                  fontSize="22px"
                  fontWeight="400"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 versandarten_card_colun ">
            <div className="versandarten2_card d-none d-md-none d-lg-block">
              <div className="versand_last_section">
                <div className="versandarten2_card_upper_btn">
                  <Button
                    btnText="Beliebteste Option"
                    backgroundColor="#ffffff"
                    border="1px solid #36a08a"
                    borderRadius="10px"
                    width="213px"
                    height="65px"
                    color="#36a08a"
                    textTransform="uppercase"
                    fontSize="18px"
                    fontWeight="700"
                    className="versandarten2_card2_btn"
                  />
                </div>
                <div className="versandarten_card_header1">
                  <p className="versandarten_header-heading">VERSANDTASCHE</p>
                  <p className="versandarten_header-subheading">
                    Kostenlose Versandtasche
                  </p>
                </div>
                <div className="versandarten_card_img">
                  <Image src={VersandartenImg2} alt="" />
                </div>
                <div className="versand_last_section_step">
                  <div className="versand_last_section_circle ">
                    1<div className="versand_last_section_dashed_line"></div>
                  </div>
                  <div className="versand_last_section_text">
                    Versandtasche bestellen.
                    <p style={{ visibility: "hidden" }}>
                      Versandlabel sowie Begleitschreiben zum
                    </p>
                  </div>
                </div>
                <div className="versand_last_section_step">
                  <div className="versand_last_section_circle ">
                    2<div className="versand_last_section_dashed_line"></div>
                  </div>
                  <div className="versand_last_section_text">
                    Begleitschreiben ausfüllen, Wertgegenstände in die
                    Versandtasche legen & verschließen.
                  </div>
                </div>
                <div className="versand_last_section_step">
                  <div className="versand_last_section_circle ">3</div>
                  <div className="versand_last_section_text">
                    Versandtasche kostenlos bei der DHL abgeben.
                    <p style={{ visibility: "hidden" }}>Versandlabel sowie</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <Button
                    btnText="Weitere Informationen"
                    borderRadius="10px"
                    margin="0px"
                    width="251px"
                    padding="4px 10px"
                    backgroundColor="#36A08A"
                    fontWeight="400"
                    rightSide
                    iconDetails={{
                      allowIcon: true,
                      icon: buttonArrow,
                    }}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <p className="versadarten-last-para">
                  Seriöse Abwicklung In 3-4 Tagen
                </p>
              </div>
              <div className="d-flex align-items-center bg-white p-2 rounded-3">
                <div>
                  <Image src={Insurance} alt="" className="me-3" />
                </div>
                <div style={{ fontSize: "17px" }}>
                  Die Versandtasche (DHL) ist bis 1.500 € versichert.
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-4">
                <Button
                  btnText="Ankauf starten"
                  borderRadius="10px"
                  margin="0px"
                  width="100%"
                  padding="5px 10px"
                  backgroundColor="#36A08A"
                  fontSize="22px"
                  fontWeight="400"
                />
              </div>
            </div>
            <div className="versandarten_card  d-block d-md-block d-lg-none">
              <div className="versand_last_section">
                <div className="versandarten_card_header1">
                  <p className="versandarten_header-heading">SELBSTVERSAND</p>
                  <p className="versandarten_header-subheading">
                    Sie verschicken Ihr Gold selbst
                  </p>
                </div>
                <div className="versandarten_card_img">
                  <Image src={VersandartenImg1} alt="" />
                </div>
                <div className="versand_last_section_step">
                  <div className="versand_last_section_circle ">
                    1<div className="versand_last_section_dashed_line"></div>
                  </div>
                  <div className="versand_last_section_text">
                    Sie erhalten ein kostenloses Versandlabel sowie
                    Begleitschreiben zum Ausdrucken.
                  </div>
                </div>
                <div className="versand_last_section_step">
                  <div className="versand_last_section_circle ">
                    2<div className="versand_last_section_dashed_line"></div>
                  </div>
                  <div className="versand_last_section_text">
                    Wertgegenstände samt ausgefülltem Begleitschreiben gut
                    verpacken.
                  </div>
                </div>
                <div className="versand_last_section_step">
                  <div className="versand_last_section_circle ">3</div>
                  <div className="versand_last_section_text">
                    Versandlabel auf das Paket kleben & bei der DHL kostenlos
                    abgeben.
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <Button
                    btnText="Weitere Informationen"
                    borderRadius="10px"
                    margin="0px"
                    width="251px"
                    padding="4px 10px"
                    backgroundColor="#36A08A"
                    fontWeight="400"
                    rightSide
                    iconDetails={{
                      allowIcon: true,
                      icon: buttonArrow,
                    }}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <p className="versadarten-last-para">
                  Einfach, schnell und unkompliziert
                </p>
              </div>
              <div className="d-flex align-items-center bg-white p-2 rounded-3">
                <div>
                  <Image src={Insurance} alt="" className="me-3" />
                </div>
                <div style={{ fontSize: "17px" }}>
                  Die Versandtasche (DHL) ist bis 1.500 € versichert.
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-4">
                <Button
                  btnText="Ankauf starten"
                  borderRadius="10px"
                  margin="0px"
                  width="100%"
                  padding="5px 10px"
                  backgroundColor="#36A08A"
                  fontSize="22px"
                  fontWeight="400"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 versandarten_card_colun ">
            <div className="versandarten3_card">
              <div className="versand_last_section">
                <div className="versandarten_card_header1">
                  <p className="versandarten_header-heading">WERTTRANSPORT</p>
                  <p className="versandarten_header-subheading">
                    Abholung via Kurier
                  </p>
                </div>
                <div className="versandarten_card_img">
                  <Image src={VersandartenImg3} alt="" />
                </div>
                <div className="versand_last_section_step">
                  <div className="versand_last_section_circle ">
                    1<div className="versand_last_section_dashed_line"></div>
                  </div>
                  <div className="versand_last_section_text">
                    Wertabholung online buchen.
                    <p style={{ visibility: "hidden" }}>Versandlabel sowie</p>
                  </div>
                </div>
                <div className="versand_last_section_step">
                  <div className="versand_last_section_circle ">
                    2<div className="versand_last_section_dashed_line"></div>
                  </div>
                  <div className="versand_last_section_text">
                    Begleitschreiben, dass Sie per E-Mail erhalten, ausdrucken &
                    samt Ihren Wertgegenständen gut verpacken.
                  </div>
                </div>
                <div className="versand_last_section_step">
                  <div className="versand_last_section_circle ">3</div>
                  <div className="versand_last_section_text">
                    Übergeben Sie die Sendung an den Kurier.
                    <p style={{ visibility: "hidden" }}>Versandlabel sowie</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <Button
                    btnText="Weitere Informationen"
                    borderRadius="10px"
                    margin="0px"
                    width="251px"
                    padding="4px 10px"
                    backgroundColor="#36A08A"
                    fontWeight="400"
                    rightSide
                    iconDetails={{
                      allowIcon: true,
                      icon: buttonArrow,
                    }}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <p className="versadarten-last-para">
                  Ab einem Warenwert von 1.500 €
                </p>
              </div>
              <div className="d-flex align-items-center bg-white p-2 rounded-3">
                <div>
                  <Image src={Insurance} alt="" className="me-3" />
                </div>
                <div style={{ fontSize: "18px" }}>
                  Bis zu 250.000 <br />
                  versichert
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-4">
                <Button
                  btnText="Ankauf starten"
                  borderRadius="10px"
                  margin="0px"
                  width="100%"
                  padding="5px 10px"
                  backgroundColor="#36A08A"
                  fontSize="22px"
                  fontWeight="400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Versandarten;
