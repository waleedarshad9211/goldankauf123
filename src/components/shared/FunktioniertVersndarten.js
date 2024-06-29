import React from "react";
import VersandartenImg1 from "/public/assets/img/versandarten_card_img1.png";
import VersandartenImg2 from "/public/assets/img/versandarten_card_img2.png";
import VersandartenImg3 from "/public/assets/img/versandarten_card_img3.png";
import Insurance from "/public/assets/img/insurance-copy.png";
import buttonArrow from "/public/assets/img/homepage/btn-arrow-unsere.png";
import Image from "next/image";
import Button from "./button/Button";

const FunktioniertVersndarten = () => {
  return (
    <div className="">
      <div className="row align-items-end mt-md-4">
        <div className="col-12 col-md-12 col-lg-4 versandarten_card_colun ">
          <div className="versandarten_card d-none d-md-none d-lg-block">
            <div className="versand_last_section">
              <div className="versandarten_card_header1">
                <p className="versandarten_header-heading">SELBSTVERSAND</p>
              </div>
              <div className="versandarten_card_img">
                <Image src={VersandartenImg1} alt="" />
              </div>
              <p className=" versandarten_subheading_funktionierts">
                Sie erhalten per E-Mail ein kostenloses Versandlabel sowie das
                Begleitschreiben zum Ausdrucken.
              </p>
              <p style={{ visibility: "hidden" }}>zum Ausdrucken</p>
              <div className="versandarten_subheading_border"></div>
              <div className="versand_last_section_step">
                <div className="versand_last_section_circle ">
                  1<div className="versand_last_section_dashed_line"></div>
                </div>
                <div className="versand_last_section_text">
                  Begleitschreiben ausfüllen.
                </div>
              </div>
              <div className="versand_last_section_step">
                <div className="versand_last_section_circle ">
                  2<div className="versand_last_section_dashed_line"></div>
                </div>
                <div className="versand_last_section_text">
                  Wertgegenstände samt ausgefüllten Begleitschreiben gut in
                  einem Karton verpacken.
                </div>
              </div>
              <div className="versand_last_section_step">
                <div className="versand_last_section_circle ">
                  3<div className="versand_last_section_dashed_line"></div>
                </div>
                <div className="versand_last_section_text">
                  Versandlabel anbringen und bei der DHL kostenlos abgeben.
                  <p style={{ visibility: "hidden" }}>abgeben</p>
                </div>
              </div>
              <div className="versand_last_section_step">
                <div className="versand_last_section_circle ">
                  4<div className="versand_last_section_dashed_line"></div>
                </div>
                <div className="versand_last_section_text">
                  Nach Erhalt Ihrer Sendung erhalten Sie innerhalb von 48
                  Stunden ein unverbindliches Angebot per E-Mail.
                </div>
              </div>
              <div className="versand_last_section_step">
                <div className="versand_last_section_circle ">5</div>
                <div className="versand_last_section_text">
                  Nach Bestätigung des Angebots Ihrerseits, folgt die Auszahlung
                  innerhalb von 48 Stunden. Sollte Ihnen unser Angebot nicht
                  zusagen, erhalten Sie ihre Wertgegestände kostenlos zurück.
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
              <div
                style={{ fontSize: "17px" }}
                className="versadarten-dhl-para"
              >
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
              </div>
              <div className="versandarten_card_img">
                <Image src={VersandartenImg2} alt="" />
              </div>

              <p className=" versandarten_subheading_funktionierts">
                Sie erhalten in wenigen Tagen Ihre kostenlose Versandtasche samt
                Begleitschreiben
              </p>
              <p style={{ visibility: "hidden" }}>zum Ausdrucken</p>
              <div className="versandarten_subheading_border"></div>
              <div className="versand_last_section_step">
                <div className="versand_last_section_circle ">
                  1<div className="versand_last_section_dashed_line"></div>
                </div>
                <div className="versand_last_section_text">
                  Begleitschreiben ausfüllen.
                </div>
              </div>
              <div className="versand_last_section_step">
                <div className="versand_last_section_circle ">
                  2<div className="versand_last_section_dashed_line"></div>
                </div>
                <div className="versand_last_section_text">
                  Wertgegenstände samt ausgefüllten Begleitschreiben gut in
                  einem Karton verpacken.
                </div>
              </div>
              <div className="versand_last_section_step">
                <div className="versand_last_section_circle ">
                  3<div className="versand_last_section_dashed_line"></div>
                </div>
                <div className="versand_last_section_text">
                  Versandtasche kostenlos bei einer DHL Filiale oder einem
                  Paketshop abgeben.
                </div>
              </div>
              <div className="versand_last_section_step">
                <div className="versand_last_section_circle ">
                  4<div className="versand_last_section_dashed_line"></div>
                </div>
                <div className="versand_last_section_text">
                  Nach Erhalt Ihrer Sendung erhalten Sie innerhalb von 48
                  Stunden ein unverbindliches Angebot per E-Mail.
                </div>
              </div>
              <div className="versand_last_section_step">
                <div className="versand_last_section_circle ">5</div>
                <div className="versand_last_section_text">
                  Nach Bestätigung des Angebots Ihrerseits, folgt die Auszahlung
                  innerhalb von 48 Stunden. Sollte Ihnen unser Angebot nicht
                  zusagen, erhalten Sie Ihre Wertgegestände kostenlos zurück.
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
              </div>
              <div className="versandarten_card_img">
                <Image src={VersandartenImg2} alt="" />
              </div>
              <p className=" versandarten_subheading_funktionierts">
                Sie erhalten in wenigen Tagen Ihre kostenlose Versandtasche samt
                Begleitschreiben
              </p>
              <p style={{ visibility: "hidden" }}>zum Ausdrucken</p>
              <p style={{ visibility: "hidden" }}>zum Ausdrucken</p>
              <div className="versandarten_subheading_border"></div>
              <div className="versand_last_section_step">
                <div className="versand_last_section_circle ">
                  1<div className="versand_last_section_dashed_line"></div>
                </div>
                <div className="versand_last_section_text">
                  Begleitschreiben ausfüllen.
                </div>
              </div>
              <div className="versand_last_section_step">
                <div className="versand_last_section_circle ">
                  2<div className="versand_last_section_dashed_line"></div>
                </div>
                <div className="versand_last_section_text">
                  Wertgegenstände samt ausgefüllten Begleitschreiben gut in
                  einem Karton verpacken.
                </div>
              </div>
              <div className="versand_last_section_step">
                <div className="versand_last_section_circle ">
                  3<div className="versand_last_section_dashed_line"></div>
                </div>
                <div className="versand_last_section_text">
                  Versandtasche kostenlos bei einer DHL Filiale oder einem
                  Paketshop abgeben.
                </div>
              </div>
              <div className="versand_last_section_step">
                <div className="versand_last_section_circle ">
                  4<div className="versand_last_section_dashed_line"></div>
                </div>
                <div className="versand_last_section_text">
                  Nach Erhalt Ihrer Sendung erhalten Sie innerhalb von 48
                  Stunden ein unverbindliches Angebot per E-Mail.
                </div>
              </div>
              <div className="versand_last_section_step">
                <div className="versand_last_section_circle ">5</div>
                <div className="versand_last_section_text">
                  Nach Bestätigung des Angebots Ihrerseits, folgt die Auszahlung
                  innerhalb von 48 Stunden. Sollte Ihnen unser Angebot nicht
                  zusagen, erhalten Sie Ihre Wertgegestände kostenlos zurück.
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
              <div
                style={{ fontSize: "17px" }}
                className="versadarten-dhl-para"
              >
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
              </div>
              <div className="versandarten_card_img">
                <Image src={VersandartenImg1} alt="" />
              </div>
              <p className=" versandarten_subheading_funktionierts">
                Sie erhalten per E-Mail ein kostenloses Versandlabel sowie das
                Begleitschreiben zum Ausdrucken.
              </p>
              <p style={{ visibility: "hidden" }}>zum Ausdrucken.</p>
              <div className="versandarten_subheading_border"></div>
              <div className="versand_last_section_step">
                <div className="versand_last_section_circle ">
                  1<div className="versand_last_section_dashed_line"></div>
                </div>
                <div className="versand_last_section_text">
                  Begleitschreiben ausfüllen.
                </div>
              </div>
              <div className="versand_last_section_step">
                <div className="versand_last_section_circle ">
                  2<div className="versand_last_section_dashed_line"></div>
                </div>
                <div className="versand_last_section_text">
                  Wertgegenstände samt ausgefüllten Begleitschreiben gut in
                  einem Karton verpacken.
                </div>
              </div>
              <div className="versand_last_section_step">
                <div className="versand_last_section_circle ">
                  3<div className="versand_last_section_dashed_line"></div>
                </div>
                <div className="versand_last_section_text">
                  Versandlabel anbringen und bei der DHL kostenlos abgeben.
                </div>
              </div>
              <div className="versand_last_section_step">
                <div className="versand_last_section_circle ">
                  4<div className="versand_last_section_dashed_line"></div>
                </div>
                <div className="versand_last_section_text">
                  Nach Erhalt Ihrer Sendung erhalten Sie innerhalb von 48
                  Stunden ein unverbindliches Angebot per E-Mail.
                </div>
              </div>
              <div className="versand_last_section_step">
                <div className="versand_last_section_circle ">5</div>
                <div className="versand_last_section_text">
                  Nach Bestätigung des Angebots Ihrerseits, folgt die Auszahlung
                  innerhalb von 48 Stunden. Sollte Ihnen unser Angebot nicht
                  zusagen, erhalten Sie ihre Wertgegestände kostenlos zurück.
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
              </div>
              <div className="versandarten_card_img">
                <Image src={VersandartenImg3} alt="" />
              </div>
              <p className=" versandarten_subheading_funktionierts">
                Ab einem Warenwert von 1500€ holen wir ihre Wertgegenstände
                mittels Kurier an dem von Ihnen gewünschten Tag ab.
              </p>
              <div className="versandarten_subheading_border"></div>
              <div className="versand_last_section_step">
                <div className="versand_last_section_circle ">
                  1<div className="versand_last_section_dashed_line"></div>
                </div>
                <div className="versand_last_section_text">
                  Begleitschreiben ausfüllen.
                </div>
              </div>
              <div className="versand_last_section_step">
                <div className="versand_last_section_circle ">
                  2<div className="versand_last_section_dashed_line"></div>
                </div>
                <div className="versand_last_section_text">
                  Wertgegenstände samt ausgefüllten Begleitschreiben gut in
                  einem Karton verpacken.
                </div>
              </div>
              <div className="versand_last_section_step">
                <div className="versand_last_section_circle ">
                  3<div className="versand_last_section_dashed_line"></div>
                </div>
                <div className="versand_last_section_text">
                  Versandlabel anbringen und die Sendung dem Kurier übergeben.
                </div>
              </div>
              <div className="versand_last_section_step">
                <div className="versand_last_section_circle ">
                  4<div className="versand_last_section_dashed_line"></div>
                </div>
                <div className="versand_last_section_text">
                  Nach Erhalt Ihrer Sendung erhalten Sie innerhalb von 48
                  Stunden ein unverbindliches Angebot per E-Mail.
                </div>
              </div>
              <div className="versand_last_section_step">
                <div className="versand_last_section_circle ">5</div>
                <div className="versand_last_section_text">
                  Nach Bestätigung des Angebots Ihrerseits, folgt die Auszahlung
                  innerhalb von 48 Stunden. Sollte Ihnen unser Angebot nicht
                  zusagen sagen, erhalten Sie Ihre Wertgegestände kostenlos
                  zurück.
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
              <div
                style={{ fontSize: "18px" }}
                className="versadarten-dhl-para"
              >
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
  );
};

export default FunktioniertVersndarten;
