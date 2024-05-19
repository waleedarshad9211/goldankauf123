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
import Logo from "/public/assets/img/logo.png";

import "swiper/css";
import "swiper/css/navigation";
import CustomerReview2 from "@/components/home/CustomerReview2";

const Diamanten = () => {
  return (
    <section className="luxusuhren_wrapper">
      <div className="container">
        <Breadcrumbs />
        <div className="row d-block  d-lg-none ">
          <div className="col-12  ">
            <h2 className="luxusuhren_wrapper_heading1">
              Diamanten Ankauf Sicherer Diamanten-Ankauf
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
          <div className="col-md-8 col-lg-8">
            <h2 className="luxusuhren_wrapper_heading1">
              Diamanten Ankauf Sicherer Diamanten-Ankauf
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
          <div className="col-md-4 col-lg-4">
            <Image
              src={DiamantenImg}
              alt="Diamanten"
              className="luxusuhren_wrapper_img1"
            />
          </div>
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
                  numSrc={item.numSrc}
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
            Zahngold123.de übernimmt Ihre Diamanten
          </h2>
          <p className="diamanten_middle_section_para1">
            Wir sind seit vielen Jahren auf diesem Gebiet tätig und bieten Ihnen
            neben einem professionellen Diamanten-Ankauf auch in puncto Gold-
            und Silberankauf sowie Uhren-Ankauf einen umfassenden
            Rundum-Service. Gleichgültig, welchen Schmuck Sie an uns abtreten
            wollen, wir möchten, dass Sie sich bei uns wohlfühlen und einen
            Preis für Ihre Edelmetalle erzielen, der Ihren Erwartungen
            entspricht oder diese gar übertrifft.
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
          <h2 className="diamanten_expert_heading">
            Experten prüfen Ihre Schmuckstücke beim Diamanten-Ankauf
          </h2>
          <p className="diamanten_expert_para">
            Probieren Sie unseren Diamanten-Ankauf doch einfach aus. Sobald Ihre
            Edelmetalle, Diamanten und Brillanten bei uns eingetroffen sind,
            werden sie von qualifizierten Gutachtern eingehend untersucht. Nach
            der umfangreichen Prüfung lassen wir Ihnen dann ein individuelles
            Angebot für Ihren Schmuck zukommen. Wenn Sie mit der Offerte
            einverstanden sind, erhalten Sie den Erlös innerhalb weniger
            Werktage auf das von Ihnen angegebene Konto eingezahlt.
          </p>
          <h2 className="diamanten_expert_heading1">Schliff</h2>
          <p className="diamanten_expert_para">
            Ein Diamant mit rundem Schliff ist ein Brillant und mit einem
            Grad-Schliff ein Smaragd. Die wesentlichen Formen des
            Diamantschliffs sind Brillant, Smaragd, Princess, Marquise und Co.,
            doch es gibt auch diverse weitere Schliffarten. Wenn Sie sich für
            die einzelnen Formen interessieren, können Sie sich gerne jederzeit
            an uns wenden.
          </p>
          <h2 className="diamanten_expert_heading1">Zertifikat</h2>
          <p className="diamanten_expert_para">
            Sollten Ihnen Zertifikate zu Ihren Diamanten vorliegen, können Sie
            diese gerne ebenfalls bei uns einreichen. Ein solches Zertifikat
            beziehungsweise Diamantgutachten wird von einem anerkannten,
            unabhängigen Institut erstellt. Qualifizierte Gemmologen von
            unabhängigen Instituten wie GIA, HRD, AGS und IGI nehmen mithilfe
            von Absorptions-Spektroskopen, Mikroskopen und Lupen eine
            vollständige Bewertung anhand der Kriterien Karat, Form, Reinheit,
            Farbe und Schliff vor.
          </p>
          <h2 className="diamanten_expert_heading1">Karat</h2>
          <p className="diamanten_expert_para">
            Der Begriff Karat stellt das Gewicht eines Diamanten dar. Wie viel
            ein Diamant letztlich wert ist, hängt eng damit zusammen, wie schwer
            er ist. Bei der Wertermittlung spielen zwar mehrere Parameter eine
            Rolle, das Karat-Gewicht aber ist einer der entscheidenden Faktoren.
            <span className="">
              {">"} mehr über Karat – das Diamant-Gewicht
            </span>
          </p>
          <h2 className="diamanten_expert_heading1">Form</h2>
          <p className="diamanten_expert_para">
            Diamanten sind in unterschiedlicher Form erhältlich. Die
            bekanntesten Formen sind zweifelsohne die runden Diamanten: die
            Brillanten. Ein Brillant erzielt zudem den höchsten Preis pro Karat.
            Weitere bekannte und weniger bekannte Formen für Diamanten sind
            unter anderem Smaragde, Asscher, Princess, Tropfen und Oval
            Diamanten.
          </p>
        </div>
      </div>
      <div className="container">
        <section className="diamanten_uberblick">
          <div className="row align-items-center">
            <div className="col-12 col-md-12 col-lg-4">
              <Image src={Logo} alt="logo" className="diamenten_logo_img" />
            </div>
            <div className="col-12 col-md-12 col-lg-8">
              <h2 className="diamanten_uberblick_heading">
                Ihre Vorteile im Überblick
              </h2>
              <ul>
                {DiamantenUberBlickArray.map((item, index) => {
                  return (
                    <li key={index}>
                      <div className="diamanten_uberblick_lists">
                        <div className="">{item.tickIcon}</div>

                        <p className="diamanten_uberblick_lists_para">
                          {item.listText}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="diamanten_type_asscher_wrapper">
            <div className="row">
              <div className="col-6 col-md-6 col-lg-3">
                <div className="diamanten_type_asscher">
                  <Image src={Asscher} alt="Asscher" />
                  <p>Asscher</p>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3">
                <div className="diamanten_type_asscher">
                  <Image src={Brilliant} alt="Brilliant" />
                  <p>Brilliant (rund)</p>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3">
                <div className="diamanten_type_asscher">
                  <Image src={Cushion} alt="Cushion" />
                  <p>Cushion</p>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3">
                <div className="diamanten_type_asscher">
                  <Image src={Emerald} alt="Emerald" />
                  <p>Emerald (Smaragt)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
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
      <CustomerReview2 />
    </section>
  );
};

export default Diamanten;
