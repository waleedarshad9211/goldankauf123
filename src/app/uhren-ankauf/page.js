"use client";
import BietenSieForm from "@/components/shared/BietenSieForm";
import StepCard from "@/components/shared/StepCard";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Image from "next/image";
import Rolex from "/public/assets/img/Luxury_watch1.png";
import LuxusuhrenImg from "/public/assets/img/luxusuhren_mg.png";
import { stepCardArray, uhrenmarken1 } from "@/public/static/HomepageStatic";
import GarantedPrice from "@/components/shared/garantedPrice/GarantedPrice";
import ValueCalc from "@/components/shared/ValueCalc";
import brandLogo from "/public/assets/img/luxushuren_brand_logo.png";

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
            <div className="luxusuhren_wrapper_paras">
              <div className="d-flex luxusuhren_wrapper_paras_first">
                <p className="luxusuhren_wrapper_para1">
                  Uhrenankauf Sie besitzen eine Premium Uhr, welche Ihnen von
                  der Form oder von Stil her nicht mehr gefällt oder es liegen
                  andere
                </p>
                <Image
                  src={LuxusuhrenImg}
                  alt="Luxushren watch"
                  className="d-block d-md-none d-lg-none"
                />
              </div>
              <p>
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
                    marginTop="10px"
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
                  marginTop="10px"
                  numSrc={item.numSrc}
                  index={index}
                />
              </div>
            );
          })}
        </div>
        <div className="inhaltsverzeichnis_wrapper">
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
            <div className="col-12 col-md-12 col-lg-6">
              <p>
                Hierzu bitten wir Sie nur, das unten aufgeführte Formular auf
                unserem Online Portal so präzise wie möglich auszufüllen. Je
                genauer und aufschlussreicher Sie Ihre Angaben zu der Luxus Uhr
                machen, umso genauer können wir Ihnen ein für Sie
                zufriedenstellendes Vorab-Ankaufsangebot unterbreiten.
              </p>
            </div>
          </div>
        </div>
        <BietenSieForm
          heading="Bieten Sie uns lhre Uhr an!"
          luxusehren
          textareaHeading="lhre Nachricht an uns"
          termsLabel="Ich habe die <strong>Datenschutzbestimmungen</strong> zur Kenntnis genommen."
          className="bieten_sie_form_checkbox_luxusuhren"
        />

        <section className="luxusuhr_garanteirt">
          <p className="luxusuhr_garanteirt_heading">
            diskrete Bewertung der Luxusuhr Garantiert
          </p>
          <p className="luxusuhr_garanteirt_para">
            Den finalen Ankaufspreis können wir jedoch erst nach der
            persönlichen Analyse und Bewertung Ihrer Uhr in unserem Analyselabor
            ermitteln. Bei dieser Analyse wird die Echtheit der Uhr, der Zustand
            und die Funktionalität der Uhr überprüft. Hierzu müssen Sie uns Ihre
            Uhr per Wertversand zusenden. Die fachgerechte Bewertung von unserem
            Expertenteam wird unverzüglich vorgenommen und der Ankaufspreis wird
            im Anschluss direkt übermittelt. Nach Nennung des endgültigen
            Ankaufspreises liegt die Entscheidung einzig und allein bei Ihnen,
            ob Sie Ihre Edel Uhr verkaufen möchten. Andernfalls senden wir Ihren
            Ihre Uhr versichert an Sie zurück. Zu einer fairen und
            marktgerechten Bewertung von Luxusuhren im Allgemeinen sind
            verschiedene Faktoren ausschlaggebend. Zunächst einmal ist der
            Hersteller der Uhr von großer Bedeutung. Luxusuhren Schweizer
            Hersteller wie bespielsweise:
          </p>
        </section>
      </div>

      <section className="rolex_section">
        <div className="container">
          <h2 className="rolex_section_heading1 text-center mb-2">
            Beispiele für Uhrenmarken
          </h2>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-9">
              <ul className="ablauf_info_list row">
                {uhrenmarken1.map((item, index) => {
                  return (
                    <div className="col-6 col-md-6 col-lg-4 " key={index}>
                      <li>
                        <span style={{ color: "#36A18B" }}>»</span> {item.txt}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="col-12 col-md-12 col-lg-3">
              <div className="luxury_watch_img">
                <Image src={Rolex} alt="luxury watch" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="rolex_section_heading_paras">
          <h2 className="rolex_section_heading2">
            Zustand und nachfrage der uhr sind Ausschlaggenend
          </h2>
          <div className="rolex_section_para2_wrapper">
            <p className="rolex_section_para2 d-none d-lg-block">
              Weiterhin spielt das Modell und das Baujahr einer Uhr eine große
              Rolle. Ein besonders wichtiges Kriterium bei der Bewertung von
              gebrauchten Nobeluhren ist der Zustand. Denn nur bei Uhren, welche
              uns in einem guten Zustand eingesandt werden, können wir Ihnen ein
              zufriedenstellendes Angebot unterbreiten. Hierbei können schon
              minimale Kratzer am Armband oder der Lunette zu einer
              Preisminderung führen, sogar dann wenn die Uhr schon einmal
              aufbereitet wurde. Jedoch ist es immer lohnenswert,
              Goldankauf123.de auch solche Uhren zum Ankauf anzubieten. Sie
              haben jederzeit die Möglichkeit unsere Gold-zurück-Garantie in
              Anspruch zu nehmen.
            </p>
            <Image src={brandLogo} alt="" />
            <p className="rolex_section_para2 d-block d-lg-none">
              Weiterhin spielt das Modell und das Baujahr einer Uhr eine große
              Rolle. Ein besonders wichtiges Kriterium bei der Bewertung von
              gebrauchten Nobeluhren ist der Zustand. Denn nur bei Uhren, welche
              uns in einem guten Zustand eingesandt werden, können wir Ihnen ein
              zufriedenstellendes Angebot unterbreiten. Hierbei können schon
              minimale Kratzer am Armband oder der Lunette zu einer
              Preisminderung führen, sogar dann wenn die Uhr schon einmal
              aufbereitet wurde. Jedoch ist es immer lohnenswert,
              Goldankauf123.de auch solche Uhren zum Ankauf anzubieten. Sie
              haben jederzeit die Möglichkeit unsere Gold-zurück-Garantie in
              Anspruch zu nehmen.
            </p>
          </div>
          <p className="rolex_section_para2_2">
            Weiterhin spielt das Modell und das Baujahr einer Uhr eine große
            Rolle. Ein besonders wichtiges Kriterium bei der Bewertung von
            gebrauchten Nobeluhren ist der Zustand. Denn nur bei Uhren, welche
            uns in einem guten Zustand eingesandt werden, können wir Ihnen ein
            zufriedenstellendes Angebot unterbreiten. Hierbei können schon
            minimale Kratzer am Armband oder der Lunette zu einer Preisminderung
            führen, sogar dann wenn die Uhr schon einmal aufbereitet wurde.
            Jedoch ist es immer lohnenswert, Goldankauf123.de auch solche Uhren
            zum Ankauf anzubieten. Sie haben jederzeit die Möglichkeit unsere
            Gold-zurück-Garantie in Anspruch zu nehmen.
          </p>
          <h2 className="rolex_section_heading3">
            Welche faktoren werden für die bewertung Herangezogen?
          </h2>
          <p className="rolex_section_para3">
            Es lässt sich sicherlich nicht im Detail erklären, wie unsere
            Experten Ihre Uhr bewerten werden. Trotzdem versuchen wir an dieser
            Stelle einige Ansatzpunkte zu liefern, sodass Sie in etwa erahnen
            können, wie wir bei der Bewertung einer Uhr vorgehen. Wichtig ist in
            erster Linie der Zustand, nur wenn die Uhr in einem tadellosen /
            neuwertigen Zustand eingeliefert wird, können wir Ihnen auch einen
            sehr guten Ankaufspreis anbieten. Sobald erste Kratzer auf der Uhr
            vorhanden sind, oder diese gar bereits nachbearbeitet wurde, müssen
            wir leider Abzüge vornehmen. Aber auch für diesen Fall lohnt es sich
            immer noch über den Verkauf nachzudenken. Sollten Sie letztendlich
            mit dem angebotenen Ankaufspreis nicht zufrieden sein, können Sie
            sich immer noch auf unsere Gold-zurück-Garantie verlassen.
          </p>
          <p className="rolex_section_para4">
            Einen Bonus beim Ankaufspreis erhalten Sie, wenn Sie die Uhr
            komplett mit Box und Papieren anliefern. Dies ist aber ebenfalls
            keine Verpflichtung, wir nehme auch den Ankauf von Uhren ohne Box
            und Papiere vor. Bei der eigentliche Bewertung wird die Uhr auf Herz
            und Niere geprüft. Hierbei geht es zum einen um die Originalität und
            zum anderen um die Funktionalität. Nur wenn diese beiden Punkte
            bejaht werden können, ist ein Edeluhren Ankauf über unser Portal
            überhaupt möglich. Ein weiterer wichtiger Aspekt hinsichtlich der
            Ankaufspreis Berechnung ist auch die Nachfrage nach der Uhr. Handelt
            es sich um einen Ladenhüter, welcher nur schwer verkäuflich ist,
            können wir Ihnen nur einen geringen Preis anbieten. Handelt es sich
            hingegen um eine stark nachgefragte Uhr, können wir Ihnen auch einen
            sehr guten Ankaufspreis anbieten.
          </p>
          <h2 className="rolex_section_heading3">
            Welche Vorteile bietet ein Uhren Ankauf?
          </h2>
          <p className="rolex_section_para5">
            Edeluhren bekannter Marken wie Rolex oder Omega sind äußerst
            wertvoll, daher können Sie durch einen Verkauf schnell dafür sorgen,
            dass Ihre Haushaltskasse aufgebessert wird, um eine offene Rechnung
            oder den nächsten Urlaub bezahlen zu können. Möchten Sie schnell
            Bargeld erhalten sind Sie bei uns genau richtig. Wir prüfen den
            möglichen Ankaufspreis sehr schnell und übermitteln Ihnen dann unser
            Angebot. Im Gegensatz zu anderen Portalen müssen Sie nicht erst auf
            einen Käufer warten, was bei einigen Uhren einen ganzen Zeitraum
            dauern kann.
          </p>
        </div>
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

export default UhrenAnkauf;
