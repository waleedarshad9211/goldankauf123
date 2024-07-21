"use client";
import BietenSieForm from "@/components/shared/BietenSieForm";
import StepCard from "@/components/shared/StepCard";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import {
  DiamantenUberBlickArray,
  farbeArray1,
  farbeArray2,
  ReinheitArray,
  schliffArray,
  stepCardDiamantenArray,
} from "@/public/static/HomepageStatic";
import Image from "next/image";
import DiamantenImg from "/public/assets/img/diamanten.png";
import DiamondCheck from "/public/assets/img/diamond_check.png";
import DiamondMicroscope from "/public/assets/img/diamond_microscope.png";
import DiamondOnPaper from "/public/assets/img/diamond_paper.png";
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
                Wenn Sie den Entschluss gefasst haben, Diamanten aus Ihrem
                Besitz zu verkaufen, dann haben Sie mit Goldankauf123.de den
                richtigen und vor allem vertrauenswürdigen Partner gefunden. Wir
                sind besonders stolz darauf, neben unserer langjährigen
                Expertise im Bereich des Edelmetallankaufs auch Diamanten in
                allen Qualitätsstufen anzukaufen. Gefasste Diamanten werden von
                uns jedoch erst ab einem Gewicht von 0,2 Karat angekauft.
              </p>
              <p className="luxusuhren_wrapper_para3">
                Wir als seriöser Partner im Bereich des Diamanten-Ankaufs legen
                hohen Wert auf Seriosität und Transparenz des gesamten Ankaufs.
                So haben unsere Kunden bereits im Vorfeld schon einmal die
                Möglichkeit den Diamantenrechner zu nutzen, um den möglichen
                Preis der Diamanten zu ermitteln.
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
                Wenn Sie den Entschluss gefasst haben, Diamanten aus Ihrem
                Besitz zu verkaufen, dann haben Sie mit Goldankauf123.de den
                richtigen und vor allem vertrauenswürdigen Partner gefunden. Wir
                sind besonders stolz darauf, neben unserer langjährigen
                Expertise im Bereich des Edelmetallankaufs auch Diamanten in
                allen Qualitätsstufen anzukaufen. Gefasste Diamanten werden von
                uns jedoch erst ab einem Gewicht von 0,2 Karat angekauft.
              </p>
              <p className="luxusuhren_wrapper_para2">
                Wir als seriöser Partner im Bereich des Diamanten-Ankaufs legen
                hohen Wert auf Seriosität und Transparenz des gesamten Ankaufs.
                So haben unsere Kunden bereits im Vorfeld schon einmal die
                Möglichkeit den Diamantenrechner zu nutzen, um den möglichen
                Preis der Diamanten zu ermitteln.
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
            <h2>REINHEIT</h2>
            <p className="mb-1">
              Die meisten der Diamanten sind vom Ursprung her mit kleinen Spuren
              versehen. Diese Spuren werden in der Diamantensprache als
              Einschlüsse bezeichnet, welche natürlich im Stein vorkommen. In
              der Regel gilt, dass je geringer Diamanten ohne sogenannte
              Einschlüsse sind, desto höher liegt der Preis. Lupenreine
              Diamanten können durch spezielle Mikroskope mit zehnfacher
              Vergrößerung bestimmt werden.
            </p>
            <p className="mb-2">
              Die internationale Bezeichnung für die Reinheit von Diamanten wird
              wie folgt beschrieben:
            </p>
            <ul>
              {ReinheitArray.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="gold_zuruck_garantie_row2_col1_item">
                      <div className="gold_zuruck_garantie_row2_col1_icon">
                        {item.tickIcon}
                      </div>
                      <div>
                        <p className="gold_zuruck_garantie_row2_col1_li_para">
                          {item.listText}
                        </p>
                        <p className="gold_zuruck_garantie_row2_col1_li_para">
                          {item.listText2}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="farbe_wrapper">
              <p className="farbe_wrapper_heading">FARBE</p>
              <p className="farbe_wrapper_para">
                Auch die Farbe spielt bei der Qualität von Diamanten eine große
                Rolle. Diamantenfachleute qualifizieren Diamanten in
                unterschiedliche Farbstufen von hochfeinem Weiß bis hin zum
                getönten Weiß. Bei Diamanten gilt also, je farbloser ein
                Diamant, umso höher ist sein Wert. Die internationale
                Bezeichnung der Farben von Diamanten wird wie folgt beschrieben:
              </p>
              <div className="row">
                {farbeArray1.map((item, index) => {
                  return (
                    <div key={index} className="col-12 col-md-6 col-lg-6">
                      <div className="farbe_wrapper_row2_col1_item">
                        <div className="farbe_wrapper_row2_col1_icon">
                          {item.tickIcon}
                        </div>
                        <p className="farbe_wrapper_row2_col1_li_para">
                          {item.listText}
                        </p>
                      </div>
                    </div>
                  );
                })}
                {farbeArray2.map((item, index) => {
                  return (
                    <div key={index} className="col-12 col-md-6 col-lg-6">
                      <div className="farbe_wrapper_row2_col1_item">
                        <div className="farbe_wrapper_row2_col1_icon">
                          {item.tickIcon}
                        </div>
                        <p className="farbe_wrapper_row2_col1_li_para">
                          {item.listText}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <p className="schliff_heading">SCHLIFF</p>
                <p className="schliff_para">
                  Da der Schliff für die Brillanz, der Ausdruck und die
                  Ausstrahlung des Diamanten verantwortlich sind, spielt auch er
                  eine sehr große Rolle bei der Wertbestimmung. Jeder Rohdiamant
                  hat eine andere Beschaffenheit und Eigenheit, sodass beim
                  Schliff auf eine hohe Handwerkskunst und Präzision notwendig
                  ist. Nur ein guter und exakter Schliff bringt die richtigen
                  Proportionen des Diamanten zum Vorschein und lässt ihn zu
                  seiner unverwechselbaren Strahlkraft erwecken. Die allgemeine
                  Klassifizierung der Schliffarten lässt sich wie folgt
                  unterteilen:
                </p>
                {schliffArray.map((item, index) => {
                  return (
                    <div key={index} className="col-12 col-md-6 col-lg-6">
                      <div className="farbe_wrapper_row2_col1_item">
                        <div className="farbe_wrapper_row2_col1_icon">
                          {item.tickIcon}
                        </div>
                        <p className="farbe_wrapper_row2_col1_li_para">
                          {item.listText}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="col-12 col-md-6 col-lg-8">
                <p className="zertifikat_heading">ZERTIFIKAT</p>
                <p className="zertifikat_para1">
                  Ein Zertifikat über einen Diamanten ist ein unabhängig
                  erstelltes Zertifikat über die einzelnen Qualitätsmerkmale und
                  die Beschaffenheit des Edelsteins. Ähnlich wie bei einem
                  Schmuckpass für hochwertige Schmuckstücke werden alle
                  relevanten Angaben über den Stein dort festgehalten. Dabei ist
                  darauf zu achten, dass es sich um ein international
                  anerkanntes Zertifikat handelt. Zertifikate des GIA
                  (Gemological Insitute of America) werden international am
                  häufigsten verwendet. Dieses Institut hat die Standards für
                  Diamanten als Basis zur Bewertung in diesem Zertifikat
                  festgelegt.
                </p>
                <p className="zertifikat_para2">
                  Insbesondere nach den Richtlinien von Gewicht, Reinheit, Farbe
                  und Schliff werden immer noch alle Diamanten weltweit
                  klassifiziert. GIA hat die Einstufung der Farben bei Diamanten
                  von D bis Z entwickelt, ebenso wie die Reinheitsstufen von FL
                  bis I3.
                </p>
                <p className="zertifikat_para3">
                  Im europäischen Raum kommt häufig das HRD Zertifikat (Hoge
                  Raad Voor Diamant), welcher in der Diamantenstadt Antwerpen in
                  Belgien ansässig ist, zur Anwendung. Ein international
                  anerkanntes Zertifikat ist ebenso ein wichtiger
                  Preisindikator. Bei den EGL Zertifikaten handelt es sich um
                  ein Zertifikat der European Gemologial Laboratory, welche
                  ebenfalls Zertifikate für Diamanten und andere Edelsteine
                  erstellen. Ein IGI Zertifikat über Diamanten wird durch das
                  Internationale Gemmologische Institut, welches im Jahre 1975
                  gegründet wurde. Dieses Institut ist weltweit in den
                  Metropolen des Diamantenhandels vertreten.
                </p>
              </div>
            </div>
            <p className="zertifikat_heading">
              WARUM EIN DIAMANTEN ANKAUF MIT GOLDANKAUF123.DE?
            </p>
            <p>
              Wir sind bereits seit vielen Jahren mit großem Erfolg mit unserem
              Portal auf dem Markt und stehen für einen seriösen und
              qualifizierten Ankauf von Edelmetallen, Diamanten und Edeluhren.
              Wir von Goldankauf123.de garantieren Ihnen sehr hohe Ankaufspreise
              und einen sicheren und transparenten Ablauf des kompletten
              Ankaufs. Innerhalb von nur wenigen Werktagen ist bei uns ein
              Ankauf sicher und fair abgewickelt und unsere Kunden können
              unverzüglich ihr Geld auf ihrem Konto verbuchen.
            </p>
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
