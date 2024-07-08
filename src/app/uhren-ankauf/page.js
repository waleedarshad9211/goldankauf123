"use client";
import BietenSieForm from "@/components/shared/BietenSieForm";
import StepCard from "@/components/shared/StepCard";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Image from "next/image";
import Rolex from "/public/assets/img/Luxury_watch1.png";
import Breitling from "/public/assets/img/Luxury_watch2.png";
import IWC from "/public/assets/img/Luxury_watch3.png";
import LuxusuhrenImg from "/public/assets/img/luxusuhren_mg.png";
import { stepCardArray, uhrenmarken1 } from "@/public/static/HomepageStatic";
import CustomerReviewsSection from "@/components/home/CustomerReviewsSection";

const UhrenAnkauf = () => {
  return (
    <section className="luxusuhren_wrapper">
      <div className="container">
        <Breadcrumbs />
        <div className="row d-block d-md-none d-lg-none ">
          <div className="col-12  ">
            <h2 className="luxusuhren_wrapper_heading1">Uhrenankauf</h2>
          </div>
          <div className="col-12 d-block d-md-none d-lg-none">
            <Image
              src={LuxusuhrenImg}
              alt="Luxushren watch"
              className="d-block d-md-none d-lg-none"
            />
            <div className="luxusuhren_wrapper_paras">
              <p className="luxusuhren_wrapper_para1">
                Uhrenankauf Sie besitzen eine Premium Uhr, welche Ihnen von der
                Form oder von Stil her nicht mehr gefällt oder es liegen andere
                Gründe vor, sich von einer oder gar mehreren Ihrer Luxus Uhren
                zu trennen und diese zu einem höchstmöglichen Preis zu
                verkaufen? Dann sind wir bei Goldankauf123.de der richtige und
                vor allen vertrauenswürdige Partner. Seit mehreren Jahren sind
                wir neben dem erfolgreichen Ankauf von Gold- und Silberschmuck,
                Zahngold, Gold- und Silberbarren oder Goldmünzen auch Experten
                im Bereich des Ankaufs von Edel Uhren.
              </p>
              <p className="luxusuhren_wrapper_para2">
                So können Sie den Verkaufserlös wieder in eine neue Uhr
                investieren oder andere Dinge damit kaufen. Problemlos und
                vollkommen diskret haben Sie die Möglichkeit, an uns jede Uhr
                eines namhaften Herstellers absolut sicher zu verkaufen.
                Verwandeln Sie durch uns Ihre Luxus Uhr schnell und risikolos in
                bares Geld. Um Ihnen die Entscheidung zu erleichtern, an uns
                Ihre hochwertige Uhr zu verkaufen, können Sie schon einmal vorab
                durch uns eine völlig unverbindliche und für Sie kostenfreie
                Vorab-Bewertung Ihrer Uhr durchführen.
              </p>
              <p className="luxusuhren_wrapper_para3">
                Hierzu bitten wir Sie nur, das unten aufgeführte Formular auf
                unserem Online Portal so präzise wie möglich auszufüllen. Je
                genauer und aufschlussreicher Sie Ihre Angaben zu der Luxus Uhr
                machen, umso genauer können wir Ihnen ein für Sie
                zufriedenstellendes Vorab-Ankaufsangebot unterbreiten.
              </p>
            </div>
          </div>
        </div>
        <div className="row d-none d-md-flex d-lg-flex ">
          <div className="col-md-8 col-lg-7">
            <h2 className="luxusuhren_wrapper_heading1">Uhren Ankauf</h2>
            <div className="luxusuhren_wrapper_paras">
              <p className="luxusuhren_wrapper_para1">
                Uhrenankauf Sie besitzen eine Premium Uhr, welche Ihnen von der
                Form oder von Stil her nicht mehr gefällt oder es liegen andere
                Gründe vor, sich von einer oder gar mehreren Ihrer Luxus Uhren
                zu trennen und diese zu einem höchstmöglichen Preis zu
                verkaufen? Dann sind wir bei Goldankauf123.de der richtige und
                vor allen vertrauenswürdige Partner. Seit mehreren Jahren sind
                wir neben dem erfolgreichen Ankauf von Gold- und Silberschmuck,
                Zahngold, Gold- und Silberbarren oder Goldmünzen auch Experten
                im Bereich des Ankaufs von Edel Uhren.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-5">
            <div className="luxusuhren_wrapper_img_desk">
              <Image
                src={LuxusuhrenImg}
                alt="Luxushren watch"
                className="luxusuhren_wrapper_img1"
              />
            </div>
          </div>
          <p className="luxusuhren_wrapper_para2">
            So können Sie den Verkaufserlös wieder in eine neue Uhr investieren
            oder andere Dinge damit kaufen. Problemlos und vollkommen diskret
            haben Sie die Möglichkeit, an uns jede Uhr eines namhaften
            Herstellers absolut sicher zu verkaufen. Verwandeln Sie durch uns
            Ihre Luxus Uhr schnell und risikolos in bares Geld. Um Ihnen die
            Entscheidung zu erleichtern, an uns Ihre hochwertige Uhr zu
            verkaufen, können Sie schon einmal vorab durch uns eine völlig
            unverbindliche und für Sie kostenfreie Vorab-Bewertung Ihrer Uhr
            durchführen.
          </p>
          <p className="luxusuhren_wrapper_para3">
            Hierzu bitten wir Sie nur, das unten aufgeführte Formular auf
            unserem Online Portal so präzise wie möglich auszufüllen. Je genauer
            und aufschlussreicher Sie Ihre Angaben zu der Luxus Uhr machen, umso
            genauer können wir Ihnen ein für Sie zufriedenstellendes
            Vorab-Ankaufsangebot unterbreiten.
          </p>
        </div>
        <div className="stepcard_wrapper_main row">
          {stepCardArray?.map((item, index) => {
            return (
              <div className="col-6 col-md-6 col-lg-3">
                <div className="stepcard_wrapper" key={index}>
                  <StepCard
                    src={item?.src}
                    heading={item?.heading}
                    para={item?.para}
                    marginTop="20px"
                    num={item?.num}
                    index={index}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="stepcard_wrapper_main_mobile ">
          {stepCardArray?.map((item, index) => {
            return (
              <div className="stepcard_wrapper" key={index}>
                <StepCard
                  src={item.src}
                  heading={item.heading}
                  heading1={item.heading1}
                  para={item.para}
                  marginTop="20px"
                  numSrc={item.numSrc}
                  index={index}
                />
              </div>
            );
          })}
        </div>
        <div className="">
          <p className="inhaltsverzeichnis_heading">Inhaltsverzeichnis</p>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
              <div className="inhalt_left_side">» Luxusuhren Wert schätzen</div>
              <div className="inhalt_left_side">
                » Diskrete Bewertung der Luxusuhr garantiert
              </div>
              <div className="inhalt_left_side">
                » Beispiele für Uhrenmarken
              </div>
              <div className="inhalt_left_side">
                » Zustand und Nachfrage der Uhr sind ausschlaggenend
              </div>
              <div className="inhalt_left_side">
                » Welche Faktoren werden für die Bewertung herangezogen?
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6"></div>
          </div>
        </div>
        <BietenSieForm
          heading="Bieten Sie uns lhre Uhr an!"
          luxusehren
          textareaHeading="lhre Nachricht an uns"
          termsLabel="Ich habe die <strong>Datenschutzbestimmungen</strong> zur Kenntnis genommen."
          className="bieten_sie_form_checkbox_luxusuhren"
        />
        <section className="rolex_section">
          <h2 className="rolex_section_heading1 text-center mb-2">
            Beispiele für Uhrenmarken
          </h2>
          <div className="row">
            <ul className="ablauf_info_list row">
              {uhrenmarken1.map((item, index) => {
                return (
                  <div className="col-6 col-md-6 col-lg-3 " key={index}>
                    <li>
                      <span style={{ color: "#019BA5" }}>•</span> {item.txt}
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="luxury_watch_img">
                <Image src={Rolex} alt="luxury watch" />
              </div>
            </div>
            <div className="col-4">
              <div className="luxury_watch_img">
                <Image src={Breitling} alt="luxury watch" />
              </div>
            </div>
            <div className="col-4">
              <div className="luxury_watch_img">
                <Image src={IWC} alt="luxury watch" />
              </div>
            </div>
          </div>
          <div className="rolex_section_heading_paras">
            <h2 className="rolex_section_heading2">
              Profitieren Sie vom Uhren-Ankauf bei moneyGold.de
            </h2>
            <p className="rolex_section_para2">
              Selbstverständlich interessieren wir uns auch für fantastische
              Modelle der Marken Omega, Cartier, Chopard, Piaget, A.
              Lange&Söhne, Breguet, Glashütte Original, Chronoswiss, Tag Heuer,
              Sinn, Panerei, Tudor und Corum. Oder möchten Sie uns eine edle Uhr
              aus dem Premium-Segment anbieten, die wir derzeit nicht aufgeführt
              haben? Kein Problem! Unsere Experten prüfen umgehend, ob ein
              Uhren-Ankauf in Ihrem Fall infrage kommt.
            </p>
            <h2 className="rolex_section_heading3">
              Uhren-Ankauf – faire und marktgerechte Preise
            </h2>
            <p className="rolex_section_para3">
              Jede Luxusuhr ist einzigartig und bedarf daher einer eingehenden
              und detaillierten Bewertung. Der Uhren-Ankauf wird letztlich wie
              der Goldankauf beziehungsweise Silberankauf abgewickelt.
            </p>
            <p className="rolex_section_para4">
              Jeder Vorgang ist transparent und kann vom designierten Verkäufer
              leicht nachvollzogen werden. Bei den Luxusuhren nur mit dem
              Unterschied, dass zur Wertermittlung das Kaufjahr und der aktuelle
              Zustand herangezogen wird.
            </p>
            <p className="rolex_section_para5">
              Um den tatsächlichen Wert einer luxuriösen Markenuhr bestimmen zu
              können, müssen unsere Spezialisten außerdem wissen, wann die
              letzte Revision war und ob bei einer Reparatur ausschließlich
              Original-Ersatzteile vom Hersteller verwendet wurden. Hilfreich
              ist zudem die Bereitstellung von Kaufbelegen und authentischen
              Zertifikaten.
            </p>
          </div>
        </section>
      </div>

      <CustomerReviewsSection />
    </section>
  );
};

export default UhrenAnkauf;
