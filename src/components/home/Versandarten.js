import Image from "next/image";
import Button from "../shared/button/Button";
import VersandartenImg1 from "/public/assets/img/versandarten_card_img1.png";
import VersandartenImg2 from "/public/assets/img/versandarten_card_img2.png";
import VersandartenImg3 from "/public/assets/img/versandarten_card_img3.png";
import DHL from "/public/assets/img/dhl.png";
import UPSBlack from "/public/assets/img/UPS_black.png";

const Versandarten = ({ heading }) => {
  return (
    <section className="versandarten_wrapper">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center versandarten_h2">
          <h2>{heading}</h2>
        </div>
        <div className="row align-items-end mt-md-5">
          <div className="col-12 col-md-12 col-lg-4 versandarten_card_colun ">
            <div className="versandarten_card d-none d-lg-block">
              <div className="versandarten_card_header1">
                <div>
                  <p>
                    Eigenes<br></br> Versandmaterial
                  </p>
                </div>
                <div className="versandarten_card_img">
                  <Image src={VersandartenImg1} alt="" />
                </div>
              </div>
              <div className="versandarten_card_body">
                <p className="versandarten_card_body_para1">
                  Möchten Sie Ihr eigenes Versandmaterial nutzen, dann drucken
                  Sie notwendigen Unterlagen direkt online aus und senden uns
                  die Edelmetalle zu
                </p>
                <p className="versandarten_card_body_para2">
                  Abwicklungsdauer: 2-4 Tage
                </p>
                <p className="text-center mb-2">Versandpartner</p>
                <div className="d-flex justify-content-center versandarten_card_img1">
                  <Image src={DHL} alt="dhl" className="text-center " />
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  btnText="Versandart auswählen"
                  borderRadius="30px"
                  margin="0px"
                  width="275px"
                  padding="8px 20px"
                  backgroundColor="#4E4E4E"
                  fontWeight="bold"
                />
              </div>
              <div className="versand_last_section">
                <div className="versand_last_section_step">
                  <div className="versand_last_section_circle ">
                    1<div className="versand_last_section_dashed_line"></div>
                  </div>
                  <div className="versand_last_section_text">
                    Einfach auf der Folgeseite Ihre persönlichen Daten eingeben
                    und den Paketschein sowie das Begleitschreiben ausdrucken.
                  </div>
                </div>
                <div className="versand_last_section_step">
                  <div className="versand_last_section_circle ">
                    2<div className="versand_last_section_dashed_line"></div>
                  </div>
                  <div className="versand_last_section_text">
                    Befüllen Sie nun Ihr Versandmaterial mit den zu verkaufenden
                    Gegenständen und geben diesen kostenlos bei jeder Filiale
                    der Deutschen Post ab.
                  </div>
                </div>
                <div className="versand_last_section_step">
                  <div className="versand_last_section_circle ">3</div>
                  <div className="versand_last_section_text">
                    Sobald Ihre Sendung bei uns eingeht, nehmen wir die
                    Bewertung vor und senden Ihnen innerhalb von 48 Stunden ein
                    Ankaufsangebot. Bei Bestätigung erfolgt umgehend die
                    Auszahlung.
                  </div>
                </div>
              </div>
            </div>
            <div className="versandarten2_card d-sm-block d-lg-none">
              <div className="versandarten_card_header2">
                <div>
                  <Button
                    btnText="Beliebteste Option"
                    fontSize="20px"
                    fontWeight="bold"
                    className="versandarten_card_header_btn"
                    borderRadius="30px"
                    backgroundColor="#F6B535"
                    color="#4E4E4E"
                    margin="10px 0px 15px 0px"
                    width="267px"
                    height="30px"
                    textTransform="uppercase"
                  />
                  <p className="versandarten_card_para2">
                    Versandtasche<br></br> bestellen
                  </p>
                </div>
                <div className="versandarten_card_img">
                  <Image src={VersandartenImg2} alt="" />
                </div>
              </div>
              <div className="versandarten_card_body">
                <p className="versandarten_card2_body_para1 text-center">
                  Jetzt kostenlos eine persönliche Versandtasche bestellen. Alle
                  notwendigen Unterlagen gehen Ihnen in wenigen Tagen per Post
                  zu.
                </p>
                <p className="versandarten_card2_body_para2 text-center">
                  Abwicklungsdauer: 4-5 Tage
                </p>
                <p className="text-center mb-2">Versandpartner</p>
                <div className="d-flex justify-content-center versandarten_card_img2">
                  <Image src={DHL} alt="dhl" className="text-center" />
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  btnText="Versandart auswählen"
                  borderRadius="30px"
                  margin="0px"
                  width="275px"
                  padding="6px 10px"
                  backgroundColor="#4E4E4E"
                  fontWeight="bold"
                />
              </div>
              <div className="versand_last_section">
                <div className="versand_last_section2_step">
                  <div className="versand_last_section_circle ">
                    1<div className="versand_last_section_dashed_line"></div>
                  </div>
                  <div className="versand_last_section_text">
                    Einfach das Bestellformular ausfüllen und in wenigen Tagen
                    Ihre persönlichen Versandunterlagen zugeschickt bekommen.
                  </div>
                </div>
                <div className="versand_last_section2_step">
                  <div className="versand_last_section_circle ">
                    2<div className="versand_last_section_dashed_line"></div>
                  </div>
                  <div className="versand_last_section_text">
                    Befüllen Sie nun Ihr Versandmaterial mit den zu verkaufenden
                    Gegenständen und geben dieses kostenlos bei jeder Filiale
                    der Deutschen Post ab.
                  </div>
                </div>
                <div className="versand_last_section2_step">
                  <div className="versand_last_section_circle ">3</div>
                  <div className="versand_last_section_text">
                    Sobald Ihre Sendung bei uns eingeht, nehmen wir die
                    Bewertung vor und senden Ihnen innerhalb von 48 Stunden ein
                    Ankaufsangebot. Bei Bestätigung erfolgt umgehend die
                    Auszahlung.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 versandarten_card_colun ">
            <div className="versandarten2_card d-none d-lg-block">
              <div className="versandarten_card_header2">
                <Button
                  btnText="Beliebteste Option"
                  fontSize="20px"
                  fontWeight="bold"
                  className="versandarten_card_header_btn"
                  borderRadius="30px"
                  backgroundColor="#F6B535"
                  color="#4E4E4E"
                  margin="10px 0px 15px 0px"
                  width="267px"
                  height="30px"
                  textTransform="uppercase"
                />
                <p className="versandarten_card_para2">
                  Versandtasche <br></br>bestellen
                </p>
                <Image src={VersandartenImg2} alt="" />
              </div>
              <div className="versandarten_card_img versandarten_card_img_middle"></div>
              <div className="versandarten_card_body">
                <p className="versandarten_card2_body_para1 text-center">
                  Jetzt kostenlos eine persönliche Versandtasche bestellen. Alle
                  notwendigen Unterlagen gehen Ihnen in wenigen Tagen per Post
                  zu.
                </p>
                <p className="versandarten_card2_body_para2 text-center">
                  Abwicklungsdauer: 4-5 Tage
                </p>
                <p className="text-center mb-2">Versandpartner</p>
                <div className="d-flex justify-content-center versandarten_card_img2">
                  <Image src={DHL} alt="dhl" className="text-center" />
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  btnText="Versandart auswählen"
                  borderRadius="30px"
                  margin="0px"
                  width="275px"
                  padding="8px 20px"
                  backgroundColor="#4E4E4E"
                  fontWeight="bold"
                />
              </div>
              <div className="versand_last_section">
                <div className="versand_last_section2_step">
                  <div className="versand_last_section_circle ">
                    1<div className="versand_last_section_dashed_line"></div>
                  </div>
                  <div className="versand_last_section_text">
                    Einfach das Bestellformular ausfüllen und in wenigen Tagen
                    Ihre persönlichen Versandunterlagen zugeschickt bekommen.
                  </div>
                </div>
                <div className="versand_last_section2_step">
                  <div className="versand_last_section_circle ">
                    2<div className="versand_last_section_dashed_line"></div>
                  </div>
                  <div className="versand_last_section_text">
                    Befüllen Sie nun Ihr Versandmaterial mit den zu verkaufenden
                    Gegenständen und geben dieses kostenlos bei jeder Filiale
                    der Deutschen Post ab.
                  </div>
                </div>
                <div className="versand_last_section2_step">
                  <div className="versand_last_section_circle ">3</div>
                  <div className="versand_last_section_text">
                    Sobald Ihre Sendung bei uns eingeht, nehmen wir die
                    Bewertung vor und senden Ihnen innerhalb von 48 Stunden ein
                    Ankaufsangebot. Bei Bestätigung erfolgt umgehend die
                    Auszahlung.
                  </div>
                </div>
              </div>
            </div>
            <div className="versandarten_card d-sm-block d-lg-none">
              <div className="versandarten_card_header1">
                <p>
                  Eigenes<br></br> Versandmaterial
                </p>
                <Image src={VersandartenImg1} alt="" />
              </div>
              <div className="versandarten_card_img"></div>
              <div className="versandarten_card_body">
                <p className="versandarten_card_body_para1 text-center">
                  Möchten Sie Ihr eigenes Versandmaterial nutzen, dann drucken
                  Sie notwendigen Unterlagen direkt online aus und senden uns
                  die Edelmetalle zu
                </p>
                <p className="versandarten_card_body_para2">
                  Abwicklungsdauer: 2-4 Tage
                </p>
                <p className="text-center mb-2">Versandpartner</p>
                <div className="d-flex justify-content-center versandarten_card_img1">
                  <Image src={DHL} alt="dhl" className="text-center" />
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  btnText="Versandart auswählen"
                  borderRadius="30px"
                  margin="0px"
                  width="275px"
                  padding="6px 10px"
                  backgroundColor="#4E4E4E"
                  fontWeight="bold"
                />
              </div>
              <div className="versand_last_section">
                <div className="versand_last_section_step">
                  <div className="versand_last_section_circle ">
                    1<div className="versand_last_section_dashed_line"></div>
                  </div>
                  <div className="versand_last_section_text">
                    Einfach auf der Folgeseite Ihre persönlichen Daten eingeben
                    und den Paketschein sowie das Begleitschreiben ausdrucken.
                  </div>
                </div>
                <div className="versand_last_section_step">
                  <div className="versand_last_section_circle ">
                    2<div className="versand_last_section_dashed_line"></div>
                  </div>
                  <div className="versand_last_section_text">
                    Befüllen Sie nun Ihr Versandmaterial mit den zu verkaufenden
                    Gegenständen und geben diesen kostenlos bei jeder Filiale
                    der Deutschen Post ab.
                  </div>
                </div>
                <div className="versand_last_section_step">
                  <div className="versand_last_section_circle ">3</div>
                  <div className="versand_last_section_text">
                    Sobald Ihre Sendung bei uns eingeht, nehmen wir die
                    Bewertung vor und senden Ihnen innerhalb von 48 Stunden ein
                    Ankaufsangebot. Bei Bestätigung erfolgt umgehend die
                    Auszahlung.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 versandarten_card_colun ">
            <div className="versandarten3_card ">
              <div className="versandarten_card_header3">
                <div>
                  <p>
                    Wertsendung ab<br></br> 1000 €
                  </p>
                </div>
                <div className="versandarten_card_img3">
                  <Image src={VersandartenImg3} alt="" />
                </div>
              </div>

              <div className="versandarten_card_body">
                <p className="versandarten_card3_body_para1 text-center">
                  Ab 1000 Euro steht Ihnen die kostenlose Abholung via
                  Sicherheitskurier zur Verfügung. Die Versicherung liegt bei
                  dieser Versandart bei max. 250.000 Euro.
                </p>
                <p className="versandarten_card3_body_para2">
                  Abwicklungsdauer: 3-4 Tage
                </p>
                <p className="text-center mb-2">Versandpartner</p>
                <div className="d-flex justify-content-center versandarten_card3_body_img">
                  <Image src={UPSBlack} alt="dhl" className="text-center" />
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  btnText="Versandart auswählen"
                  borderRadius="30px"
                  margin="0px"
                  width="275px"
                  padding="8px 20px"
                  backgroundColor="#4E4E4E"
                  fontWeight="bold"
                />
              </div>
              <div className="versand_last_section">
                <div className="versand_last_section3_step">
                  <div className="versand_last_section_circle ">
                    1<div className="versand_last_section_dashed_line"></div>
                  </div>
                  <div className="versand_last_section_text">
                    Bestimmen Sie auf der Folgeseite den Versicherungswert und
                    drucken das Begleitschreiben aus. Den Abholtermin können Sie
                    frei bestimmen.
                  </div>
                </div>
                <div className="versand_last_section3_step">
                  <div className="versand_last_section_circle ">
                    2<div className="versand_last_section_dashed_line"></div>
                  </div>
                  <div className="versand_last_section_text">
                    Befüllen Sie das Versandmaterial mit zu den verkaufenden
                    Gegenständen und übergeben diesen dann dem
                    Sicherheitskurier.
                  </div>
                </div>
                <div className="versand_last_section3_step">
                  <div className="versand_last_section_circle ">3</div>
                  <div className="versand_last_section_text">
                    Sobald Ihre Sendung bei uns eingeht, nehmen wir die
                    Bewertung vor und senden Ihnen innerhalb von 48 Stunden ein
                    Ankaufsangebot. Bei Bestätigung erfolgt umgehend die
                    Auszahlung.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Versandarten;
