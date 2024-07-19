"use client";
import BietenSieForm from "@/components/shared/BietenSieForm";
import StepCard from "@/components/shared/StepCard";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import {
  DiamantenUberBlickArray,
  stepCardDiamantenArray,
} from "@/public/static/HomepageStatic";
import Image from "next/image";
import Asscher from "/public/assets/img/asscher.png";
import Brilliant from "/public/assets/img/brilliant.png";
import Cushion from "/public/assets/img/cushion.png";
import DiamantenImg from "/public/assets/img/diamanten.png";
import DiamondCheck from "/public/assets/img/diamond_check.png";
import DiamondMicroscope from "/public/assets/img/diamond_microscope.png";
import DiamondOnPaper from "/public/assets/img/diamond_paper.png";
import Emerald from "/public/assets/img/emerald.png";
import diamenten_caret from "/public/assets/img/diamenten_caret.png";
import loseDiamenten from "/public/assets/img/lose_diamenten.png";
import diamentenEdelsteinschmuck from "/public/assets/img/diamenten_edelsteinschmuck.png";
import daimantenSchmuck from "/public/assets/img/daimantenschmuck.png";
import GarantedPrice from "@/components/shared/garantedPrice/GarantedPrice";
import ValueCalc from "@/components/shared/ValueCalc";

const Diamanten = () => {
  return (
    <section className="luxusuhren_wrapper">
      <div className="container">
        <Breadcrumbs />
        <div className="row d-block  d-lg-none ">
          <div className="col-12  ">
            <h2 className="luxusuhren_wrapper_heading1">
              Diamanten verkaufen mit Goldankauf123
            </h2>
          </div>
          <div className="col-12  ">
            <Image
              src={DiamantenImg}
              alt="Diamanten"
              className="d-block  d-lg-none luxusuhren_wrapper_main_img"
            />
            <div className="luxusuhren_wrapper_paras">
              <p className="luxusuhren_wrapper_para1">
                Als erfahrener und kompetenter Edelmetallhändler bieten wir
                Ihnen einen komfortablen und vor allem sicheren
                Diamanten-Ankauf. Die Experten von MoneyGold stehen Ihnen
                jederzeit gerne zur Verfügung, wenn Sie Ihre Diamanten zu einem
                attraktiven Preis verkaufen möchten.
              </p>
              <p className="luxusuhren_wrapper_para3">
                Wenn Sie Rohdiamanten, geschliffene Steine und gefasste
                Diamanten zu Geld machen möchten, können Sie auf uns zählen. Und
                da wir auch Altgold, Zahngold, Palladium, Platin und andere
                Edelmetalle ankaufen, können Sie auf diese Weise Ihre gesamten
                ungeliebten Schmuckstücke bei uns einreichen und von unserem
                Ankauf profitieren.
              </p>
            </div>
          </div>
        </div>
        <div className="row d-none d-lg-flex">
          <div className="col-md-8 col-lg-9">
            <h2 className="luxusuhren_wrapper_heading1">
              Diamanten verkaufen mit Goldankauf123
            </h2>
            <div className="luxusuhren_wrapper_paras">
              <p className="luxusuhren_wrapper_para1">
                Als erfahrener und kompetenter Edelmetallhändler bieten wir
                Ihnen einen komfortablen und vor allem sicheren
                Diamanten-Ankauf. Die Experten von MoneyGold stehen Ihnen
                jederzeit gerne zur Verfügung, wenn Sie Ihre Diamanten zu einem
                attraktiven Preis verkaufen möchten.
              </p>
              <p className="luxusuhren_wrapper_para2">
                Wenn Sie Rohdiamanten, geschliffene Steine und gefasste
                Diamanten zu Geld machen möchten, können Sie auf uns zählen. Und
                da wir auch Altgold, Zahngold, Palladium, Platin und andere
                Edelmetalle ankaufen, können Sie auf diese Weise Ihre gesamten
                ungeliebten Schmuckstücke bei uns einreichen und von unserem
                Ankauf profitieren.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <Image
              src={DiamantenImg}
              alt="Diamanten"
              className="diamentan_wrapper_img1"
            />
          </div>
        </div>
        <div>
          <p className="luxusuhren_wrapper_heading1">
            Diamantenkauf in nur 4 Schritten
          </p>
        </div>
        <div className="stepcard_wrapper_main row">
          {stepCardDiamantenArray?.map((item, index) => {
            return (
              <div className="col-6 col-md-6 col-lg-3">
                <div className="stepcard_wrapper" key={index}>
                  <StepCard
                    src={item.src}
                    heading={item.heading}
                    para={item.para}
                    marginTop="20px"
                    numSrc={item.numSrc}
                    index={index}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="stepcard_wrapper_main_mobile ">
          {stepCardDiamantenArray?.map((item, index) => {
            return (
              <div className="stepcard_wrapper" key={index}>
                <StepCard
                  src={item.src}
                  heading={item.heading}
                  para={item.para}
                  marginTop="20px"
                  index={index}
                />
              </div>
            );
          })}
        </div>
        <BietenSieForm
          diamanten
          textareaHeading={"lhre Nachricht an uns"}
          className="bieten_sie_form_checkbox_diamanten"
        />
        <div className="diamanten_middle_section">
          <h2 className="diamanten_expert_heading">
            Experten prüfen Ihre Schmuckstücke beim Diamantenankauf
          </h2>
          <p className="diamanten_middle_section_para1">
            Probieren Sie unseren Diamanten-Ankauf doch einfach aus. Sobald Ihre
            Edelmetalle, Diamanten und Brillanten bei uns eingetroffen sind,
            werden sie von qualifizierten Gutachtern eingehend untersucht. Nach
            der umfangreichen Prüfung lassen wir Ihnen dann ein individuelles
            Angebot für Ihren Schmuck und Edelsteine zukommen.
          </p>
          <div className="row">
            <div className="col-4 col-lg-4">
              <div className="diamanten_expert_images">
                <Image src={DiamondCheck} alt="diamond" />
              </div>
            </div>
            <div className="col-4 col-lg-4">
              <div className="diamanten_expert_images">
                <Image src={DiamondOnPaper} alt="diamond" />
              </div>
            </div>
            <div className="col-4 col-lg-4">
              <div className="diamanten_expert_images">
                <Image src={DiamondMicroscope} />
              </div>
            </div>
          </div>
          <p className="diamanten_expert_para">
            Wir als seriöser Partner im Bereich des Ankaufs von Diamanten legen
            den höchsten Wert auf Seriosität und Transparenz des gesamten
            Ankaufs. So haben unsere Kunden bereits im Vorfeld schon einmal die
            Möglichkeit den Diamantenrechner zu nutzen, um den möglichen Preis
            der Diamanten zu ermitteln.
          </p>
        </div>
      </div>
      <section className="diamenten_wir_kaufen_section">
        <div className="container">
          <p className="text-center diamenten_wir_kaufen_section_heading">
            WIR KAUFEN
          </p>
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="diamenten_wir_kaufen_section_card">
                <div className="diamenten_wir_kaufen_section_card_body">
                  <Image src={loseDiamenten} alt="" />
                  <p className="diamenten_wir_kaufen_section_para">
                    Lose Diamanten ab 0.2 Carat, mit und ohne Zertifikat.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="diamenten_wir_kaufen_section_card">
                <div className="diamenten_wir_kaufen_section_card_body">
                  <Image src={diamentenEdelsteinschmuck} alt="" />
                  <p className="diamenten_wir_kaufen_section_para">
                    Edelsteinschmuck mit Diamantenbesatz, mit und ohne
                    Zertifikat.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="diamenten_wir_kaufen_section_card">
                <div className="diamenten_wir_kaufen_section_card_body">
                  <Image src={daimantenSchmuck} alt="" />
                  <p className="diamenten_wir_kaufen_section_para">
                    Diamantenschmuck und Brillantschmuck, mit und ohne
                    Zertifikat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <section className="diamanten_uberblick">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-7">
              <h2 className="diamanten_uberblick_heading">CARAT</h2>
              <p>
                Die Caratzahl ist der Indikator für das Gewicht der Diamanten.
                Es wird auch häufig von Carat oder einfach ct gesprochen. Die
                Maßeinheit Carat für Diamanten besteht seit 1913 und besagt,
                dass ein Carat 0,2 Gramm entspricht. Das Gewicht eines Diamanten
                ist sehr ausschlaggebend für die Preisgestaltung. Je höher die
                Caratzahl, desto höher auch der Preis der Diamanten.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <Image
                src={diamenten_caret}
                alt="logo"
                className="diamenten_logo_img"
              />
            </div>
          </div>
        </section>
      </div>
      <section className="diamanten_for_men_section">
        <div className="container">
          <p className="diamanten_uberblick_heading">DIAMANTENFORMEN</p>
          <p className="diamanten_for_men_section_para">
            Ein weiteres wichtiges Qualitätsmerkmal für Diamanten ist die
            Diamantenschliffform. Diamanten werden in den unterschiedlichsten
            Formen geschliffen.
          </p>
          {DiamantenUberBlickArray.map((item, index) => {
            return (
              <div className="diamanten_for_men_section_cards" key={index}>
                <div>
                  <Image src={item.src} alt="" />
                </div>
                <div className="diamanten_for_men_section_cards_heading_paras">
                  <p className="diamanten_for_men_section_cards_heading">
                    {item.heading}
                  </p>
                  <p className="diamanten_for_men_section_cards_para">
                    {item.para}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="diamanten_type">
        <div className="container">
          <div className="ablauf_info">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-4">
                <h2>Reinheit</h2>
                <p>
                  Die Reinheit eines Diamanten ist ein weiterer Indikator dafür,
                  um den Wert eines Steins zu bestimmen. Hier gibt es die
                  Unterteilungen
                </p>
                <ul className="ablauf_info_list">
                  <li>
                    <span style={{ color: "#019BA5" }}>•</span>{" "}
                    <strong>FL</strong> (perfekt lupenrein),
                  </li>
                  <li>
                    <span style={{ color: "#019BA5" }}>•</span>{" "}
                    <strong>IF</strong> (lupenrein),
                  </li>
                  <li>
                    <span style={{ color: "#019BA5" }}>•</span>{" "}
                    <strong> VVS1</strong> und <strong>VVS2</strong> (sehr sehr
                    kleine Einschlüsse),
                  </li>
                  <li>
                    <span style={{ color: "#019BA5" }}>•</span>{" "}
                    <strong>VS1</strong> und <strong>VS2</strong> (sehr kleine
                    Einschlüsse),
                  </li>
                  <li>
                    <span style={{ color: "#019BA5" }}>•</span>{" "}
                    <strong>SI1</strong> und <strong>SI2</strong> (kleine
                    Einschlüsse).
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <h2>Farbe</h2>
                <p>
                  Um einen Diamanten professionell bewerten zu können, spielt
                  auch die Farbe eine wichtige Rolle. Wenn ein Diamant auf einem
                  weißen Blatt Papier verschwindet, wird er in der Farbskala
                  unter dem Buchstaben D geführt. “D“ ist das Zeichen für
                  hochfeines Weiß plus – der beste Grad für einen Diamanten. E
                  steht dann für hochfeines Weiß, F für feines Weiß plus … und
                  so weiter. Die Farben M bis Z haben die stärkste Tönung, wobei
                  Z die schlechteste Färbung (Gelb) innehat.
                </p>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <h2>Ablauf-Informationen</h2>
                <p>
                  Haben Sie noch Fragen zu unserem Diamanten-Ankauf? Gerne
                  können Sie unseren Live-Chat auf der Website aktivieren oder
                  uns einfach unter der Telefonnummer 040 / 76 11 85 01 anrufen.
                  Wir sind für Sie da und erklären Ihnen den Verkaufsablauf,
                  falls wir Ihre Diamanten ankaufen sollen!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <section className=" garantie_price_container ">
          <GarantedPrice />
        </section>
        <section className="mb-2 goldrechner-last-section">
          <ValueCalc />
        </section>
      </div>
    </section>
  );
};

export default Diamanten;
