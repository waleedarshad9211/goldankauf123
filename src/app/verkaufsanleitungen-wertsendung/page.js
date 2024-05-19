import KitcoGoldTab from "@/components/shared/KitcoGoldTab";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Button from "@/components/shared/button/Button";
import Image from "next/image";
import VerkaufsanleitungImg1 from "/public/assets/img/verkaufsanleitung1.png";
import VerkaufsanleitungImg1Mobile from "/public/assets/img/verkaufsanleitung1_mobile.png";
import VerkaufsanleitungImg2 from "/public/assets/img/verkaufsanleitung2.png";
import VerkaufsanleitungImgMobile from "/public/assets/img/verkaufsanleitung2_mobile.png";
import VerkaufsanleitungImg3 from "/public/assets/img/verkaufsanleitung3.png";
import VerkaufsanleitungImg3Mobile from "/public/assets/img/verkaufsanleitung3_mobile.png";
import VerkaufsanleitungImg4 from "/public/assets/img/verkaufsanleitung4.png";
import VerkaufsanleitungImg4Mobile from "/public/assets/img/verkaufsanleitung4_mobile.png";
import VersandDelivery from "/public/assets/img/versandarten_card_img3.png";
import VersandDeliveryRecieved from "/public/assets/img/versandarten_card_img2.png";
import VersandMoneyGold from "/public/assets/img/versandarten_card_img1.png";
import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import InformationCard from "@/components/shared/InformationCard";

const Verkaufsanleitung = () => {
  return (
    <section className="verkaufsanleitung_wrapper zahngold_wrapper">
      <div className="container">
        <Breadcrumbs />
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8">
            <h2 className="verkaufsanleitung_wrapper_heading1">
              Goldverkauf: schnell, einfach und unkompliziert!
            </h2>
            <p className="verkaufsanleitung_wrapper_para1">
              Wählen Sie aus folgenden drei Varianten um Ihr Gold per Post zu
              verkaufen:
            </p>
            <div className="row verkaufsanleitung_card_row">
              <div className="col-12 col-md-4 col-lg-4 verkaufsanleitung_card_column">
                <div className="verkaufsanleitung_card1 ">
                  <div className="">
                    <Image
                      src={VersandDeliveryRecieved}
                      alt="delivery"
                      width={150}
                      height={150}
                    />
                  </div>
                  <p className="text-center text-white">
                    Versandtasche
                    <br />
                    bestellen
                  </p>
                  <div className="d-flex justify-content-between">
                    <div className="verkaufsanleitung_triangle-up"></div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 verkaufsanleitung_card_column">
                <div className="verkaufsanleitung_card2 ">
                  <div className="">
                    <Image
                      src={VersandMoneyGold}
                      alt="money gold"
                      width={150}
                      height={150}
                    />
                  </div>
                  <p className="versandarten_card_para2 text-center text-white">
                    Eigenes
                    <br />
                    Versandmaterial
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 verkaufsanleitung_card_column">
                <div className="verkaufsanleitung_card2 ">
                  <div className="">
                    <Image
                      src={VersandDelivery}
                      alt="recieved"
                      width={150}
                      height={150}
                    />
                  </div>
                  <p className="text-center text-white">
                    Wertsendung <br />
                    ab 1.000 €
                  </p>
                </div>
              </div>
            </div>
            <div className="funktionierts_wrapper_auswahlen verkaufsanleitung_auswahlen">
              <h2 className="verkaufsanleitung_auswahlen_heading">
                Goldankauf in nur 4 Schritten
              </h2>
              <p className="funktionierts_wrapper_auswahlen_para1 mb-2">
                Unser Service ist zu 100% kostenlos, zudem gehen Sie keinerlei
                Verbindlichkeit ein.
              </p>
              <div className="funktionierts_wrapper_auswahlen1">
                <Image
                  src={VerkaufsanleitungImg1}
                  alt="auswahlen"
                  className="d-none d-md-block d-lg-block"
                />
                <Image
                  src={VerkaufsanleitungImg1Mobile}
                  alt="auswahlen"
                  className="d-block d-md-none d-lg-none"
                />
                <div className="auswahlen_line1"></div>
                <div className="funktionierts_wrapper_auswahlen1_heading_paras">
                  <h3 className="funktionierts_wrapper_auswahlen_heading1">
                    Versandtasche bestellen
                  </h3>
                  <p className="funktionierts_wrapper_auswahlen_para1">
                    Füllen Sie das rechte Bestellformular aus und Sie erhalten
                    Ihre persönlichen Versandunterlagen in wenigen Tagen
                    kostenlos zugeschickt.
                  </p>
                </div>
              </div>
              <div className="funktionierts_wrapper_triangle">
                <div className="triangle-down"></div>
              </div>
              <div className="funktionierts_wrapper_auswahlen2">
                <Image
                  src={VerkaufsanleitungImg2}
                  alt="auswahlen"
                  className="auswahlen_img2 d-none d-md-block d-lg-block"
                />
                <Image
                  src={VerkaufsanleitungImgMobile}
                  alt="auswahlen"
                  className="auswahlen_img2 d-block d-md-none d-lg-none"
                />
                <div className="auswahlen_line2"></div>
                <div className="funktionierts_wrapper_auswahlen2_heading_paras">
                  <h3 className="funktionierts_wrapper_auswahlen2_heading1">
                    Gold versenden
                  </h3>
                  <p className="funktionierts_wrapper_auswahlen2_para1">
                    Füllen Sie die "Versandtasche" mit den zu verkaufenden
                    Schmuckstücken und geben diese bei der Deutschen Post
                    kostenlos ab. Die Sendung ist automatisch bis 1000 Euro
                    versichert.
                  </p>
                  <p className="funktionierts_wrapper_auswahlen2_para2">
                    Bei einem Wert ab 1.000 Euro können Sie eine kostenlose
                    Wertabholung mit einer Versicherungshöhe bis max. 1,5
                    Millionen Euro buchen.
                  </p>
                </div>
              </div>
              <div className="funktionierts_wrapper_triangle">
                <div className="triangle-down"></div>
              </div>
              <div className="funktionierts_wrapper_auswahlen2">
                <Image
                  src={VerkaufsanleitungImg3}
                  alt="auswahlen"
                  className="auswahlen_img3 d-none d-md-block d-lg-block"
                />
                <Image
                  src={VerkaufsanleitungImg3Mobile}
                  alt="auswahlen"
                  className="auswahlen_img3 d-block d-md-none d-lg-none"
                />
                <div className="auswahlen_line3"></div>
                <div className="funktionierts_wrapper_auswahlen2_heading_paras">
                  <h3 className="funktionierts_wrapper_auswahlen2_heading1">
                    Angebot erhalten
                  </h3>
                  <p className="funktionierts_wrapper_auswahlen2_para1">
                    Unser Labor wertert Ihre Sendung dank modernster
                    Analyse-Verfahren (Spektrometer, elektronische
                    Präzisionswaagen...) innerhalb von nur 48 Stunden nach
                    Eingang in unsere Geschäftsräume aus. Sie erhalten das
                    Ankaufsangebot per eMail übersendet.
                  </p>
                </div>
              </div>
              <div className="funktionierts_wrapper_triangle">
                <div className="triangle-down"></div>
              </div>
              <div className="funktionierts_wrapper_auswahlen2">
                <Image
                  src={VerkaufsanleitungImg4}
                  alt="auswahlen"
                  className="auswahlen_img3 d-none d-md-block d-lg-block"
                />
                <Image
                  src={VerkaufsanleitungImg4Mobile}
                  alt="auswahlen"
                  className="auswahlen_img3 d-block d-md-none d-lg-none"
                />
                <div className="auswahlen_line4"></div>
                <div className="funktionierts_wrapper_auswahlen2_heading_paras">
                  <h3 className="funktionierts_wrapper_auswahlen2_heading1">
                    Zahlung erhalten
                  </h3>
                  <p className="funktionierts_wrapper_auswahlen2_para1">
                    Nach Bestätigung Ihrerseits erfolgt die Auszahlung umgehend
                    und ohne Abzüge in der gewünschten Form (per Banküberweisung
                    oder Verrechnungsscheck).
                  </p>
                  <p className="funktionierts_wrapper_auswahlen2_para2">
                    Sollten Sie mit dem Angebot nicht zufrieden sein, greift
                    automatisch unsere 100% Zufriedenheit oder Gold- Zurück-
                    Garantie. Wir senden Ihnen Ihre Wertgegenstände unverzüglich
                    kostenlos zurück.
                  </p>
                </div>
              </div>
            </div>
            <div className="verkaufsanleitung_wrapper_btn">
              <Button
                btnText="Jetzt Edelmetalle verkaufen!"
                borderRadius="10px"
                fontSize="18px"
                fontWeight="600"
                width="auto"
                padding="1px 20px"
                margin="15px 0px"
                height="38px"
                backgroundColor="#019BA5"
              />
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="">
              <div className="">
                <KitcoGoldTab />
              </div>
              <div className="">
                <EtrusredShop2 />
              </div>
              <div className="">
                <InformationCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verkaufsanleitung;
