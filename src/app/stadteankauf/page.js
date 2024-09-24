"use client";
import BtnArrow from "@/components/home/BtnArrow";
import BtnArrowMobile from "@/components/home/BtnArrowMobile";
import Ekomi from "@/components/shared/Ekomi";
import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import InformationCard from "@/components/shared/InformationCard";
import KitcoGoldTab from "@/components/shared/KitcoGoldTab";
import PriceValueForm from "@/components/shared/PriceValueForm";
import ValueCalc from "@/components/shared/ValueCalc";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Button from "@/components/shared/button/Button";
import GarantedPrice from "@/components/shared/garantedPrice/GarantedPrice";
import {
  ankaufpreiseArray6,
  stadteankaufArray,
  stadteankaufArrayMobile,
  stadteankaufAuchFurKundenArray,
  stadteankaufTableArray,
} from "@/public/static/HomepageStatic";
import Image from "next/image";

const page = () => {
  return (
    <div className="container">
      <section className="stadteankauf_wrapper">
        <Breadcrumbs />
        <div className="d-flex d-lg-none wirkaufen_page_price mt-2">
          <PriceValueForm />
        </div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8">
            <h2 className="stadteankauf_wrapper_main_heading">
              Goldankauf für Deutschland
            </h2>
            <p className="stadteankauf_wrapper_para1">
              Profitieren auch Sie von unserem Angebot in ganz Deutschland
              Edelmetalle aller Art an uns verkaufen zu können. Wir bieten Ihnen
              attraktive Ankaufskonditionen, welche fallweise deutlich über den
              angeboten der Konkurrenz liegen. Lassen Sie sich unbedingt ein
              unverbindliches Ankaufsangebot erstellen und überzeugen Sie sich
              selber von den Vorzügen unseres Goldankaufs für ganz Deutschland.
              Im folgenden finden Sie eine Reihe interessante Berichte über
              Goldankäufe, welche wir Ihnen Städten in ganz Deutschland getätigt
              haben.
            </p>
            <div className="hamburg_valuecal">
              <ValueCalc padding="10px" />
            </div>
            <p className="stadteankauf_wrapper_second_heading">
              Verkaufsrelavantes wissen
            </p>
            <div className="stadteankauf_wrapper_box row ">
              {stadteankaufArray.map((item, index) => {
                return (
                  <div
                    className="col-12 col-md-6 stadteankauf_wrapper_box_column"
                    key={index}
                  >
                    <div className="img_box_wrapepr">
                      <div className="img_box">
                        <Image src={item.src} alt="" />
                        <div className="zahngold_last_img_wrapper">
                          <div className="zahngold_last_img_wrapper_body">
                            <div>
                              <p className="wir_verkaufer_name">{item.text}</p>
                            </div>
                            <div className="wir_verkaufer_btn">
                              <div className="wir_verkaufer_btn_arrow">
                                <BtnArrowMobile />
                                <BtnArrow />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="hamburg_table_wrapper ankaufpreise_table_wrapper1">
              <p className="stadteankauf_table_heading">
                Aktuelle Goldankauf Preise in Euro
              </p>
              <div className="stadteankauf_table_header">
                <p className="ankaufpreise_table_column1">Legierung</p>
                <p className="ankaufpreise_table_column2">Gramm</p>
                <p className="ankaufpreise_table_column3">Aktueller Preis</p>
              </div>
              {stadteankaufTableArray.map((item, index) => {
                return (
                  <div key={index} className="stadteankauf_table">
                    <p className="ankaufpreise_table_column1">{item.val1}</p>
                    <p className="ankaufpreise_table_column2">{item.val2}</p>
                    <p className="ankaufpreise_table_column3">{item.val3}</p>
                  </div>
                );
              })}
              <div className="stadteankauf_table_button">
                <Button
                  btnText="Jetzt wert berechnen"
                  fontSize="25px"
                  fontWeight="bold"
                  padding="1px 30px"
                  height="45px"
                />
              </div>
            </div>
            <section className="stadteankauf_auch_fur_kunden">
              <p className="stadteankauf_wrapper_main_heading">
                AUCH FÜR KUNDEN AUS:
              </p>
              <div className="row">
                {stadteankaufAuchFurKundenArray.map((item, index) => {
                  return (
                    <div key={index} className="col-6 col-md-4">
                      <div className="d-flex align-items-center stadteankauf_auch_fur_kunden_paras">
                        <Image src={item.src} alt="" />
                        <p>{item.para}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
            <div className="hamburg_valuecal">
              <ValueCalc padding="10px" />
            </div>
            <p className="stadteankauf_wrapper_main_heading">
              GOLDGESCHICHTEN*
            </p>
            <p>
              Erst vor einigen Tagen haben wir in Berlin große Mengen Altgold
              aufkaufen können. Genau wie hier waren auch Kunden in Hamburg,
              München, Köln und Frankfurt am Main mit den von uns angebotenen
              Ankaufspreisen mehr als zufrieden.
            </p>
            <p className="mrt-10">
              Profitieren auch Sie von unserem Goldankauf, wie es Kunden in
              Stuttgart, Dortmund, Essen, Düsseldorf und Bremen getan haben.
              Fordern Sie doch ganz unverbindlich ein Ankaufsangebot für Ihre
              Edelmetalle an und überlegen dann, ob für Sie ein Goldankauf in
              Frage kommen könnte.
            </p>
            <p className="mrt-10">
              Eine ganz tolle Möglichkeit den Ankaufswert Ihrer Edelmetalle aus
              Gold, Silber, Platin oder Palladium errechnen zu können, stellt
              sicherlich unser online Gold Rechner dar. Kunden aus dem gesamten
              Bundesgebiet wie Hannover, Leipzig, Dresden,Nürnberg oder Duisburg
              haben sich so schon über unsere Ankaufsangebote informiert und den
              Ankaufsbetrag direkt online fixiert.
            </p>
            <p className="mrt-10">
              Erst vor wenigen Wochen hat ein Kunde aus Bochum und zahlreiche
              Gold- und Silbermünzen zum Ankauf angeboten und dafür einen sehr
              hohen Ankaufswert angeboten bekommen. Gleich gilt auch für Kunden
              aus Wuppertal, Bielefeld, Bonn und Mannheim, welche ebenfalls
              Münzen an uns veräußert haben. Wir bieten unseren Goldankauf im
              gesamten Bundesgebiet an. Egal ob in Karlsruhe, Wiesbaden, Münster
              (Westfalen), Gelsenkirchen oder Augsburg, wir legen bei all
              unseren Kunden viel Wert auf einen reibungslosen Ablauf unseres
              Angebotes.
            </p>
            <p className="mrt-10">
              Machen Sie es doch unseren Kunden in Mönchengladbach, Aachen,
              Braunschweig, Chemnitz und Kiel nach, welche sich bereits für
              unseren Goldankauf entscheiden haben. Wieso sollten Sie Geld
              verschenken, wenn wir Ihnen attraktive Ankaufskurse anbieten
              können.
            </p>
            <p className="mrt-10">
              Kunden aus Krefeld, Magdeburg, Oberhausen, Lübeck und Erfurt haben
              unseren Goldkurs SMS-Alarm entdeckt und sind ständig über
              Veränderungen unserer Ankaufskurse informiert. So können diese
              Kunden zeitnah auf Kursveränderungen reagieren und den Ankaufskurs
              über unseren online Gold Rechner fixieren. Für den Ankauf bieten
              wir unseren Kunden mehrere Optionen. Unsere Kunden aus Rostock,
              Mainz, Kassel, Hagen und Hamm haben beispielsweise einen
              persönlichen Ankauf bei Ihnen zu Hause gewählt. Unser
              Ankaufsexperte vereinbart auch mit Ihnen gerne einen Termin.
              Sollte Ihnen unser Ankaufsangebot zusagen, erhalten Sei direkt vor
              Ort eine Bargeldauszahlung über den vereinbarten Ankaufspreis.
            </p>
            <p className="mrt-10">
              Alternativ steht unseren Kunden auch die Abwicklung eines
              Goldankaufs über den Postweg zur Auswahl. Beispielsweise Kunden
              aus Saarbrücken, Mühlheim an der Ruhr, Herne, Ludwigshafen am
              Rhein oder Osnabrück haben sich dieser Möglichkeit bedient, um
              schnell und problemlos ihr Gold verkaufen zu können. Auch Kunden
              aus Solingen, Leverkusen, Oldenburg, Neuss und Potsdam waren von
              dem reibungslosen Ablauf unseres Goldankaufs überzeugt. Oft wird
              auch lobend unser Kundenservice erwähnt, welcher Fragen und
              Problemen kompetent unseren Kunden zur Seite steht. Die mehr als
              5.000 positiven Bewertungen unserer Kunden auf unserem
              Kundenbewertungsprofil haben Kunden aus Heidelberg, Paderborn,
              Darmstadt, Würzburg und Regensburg überzeugt. So können Neukunden
              unter Garantie davon ausgehen, dass ein Goldankauf über unser
              Angebot reibungslos durchgeführt werden kann.
            </p>
            <p className="mrt-10">
              Sehr viele Kunden vertrauen jeden Monat unserem Goldankauf. Dabei
              spielt es keine Rolle aus welcher Region Sie im Bundesgebiet
              kommen. Wir haben beispielsweise schon Kunden aus Ingolstadt,
              Heilbronn, Göttingen, Ulm oder Recklinghausen mit sehr hohen
              Ankaufspreisen überraschen können, welche deutlich über den
              Erwartungen lagen.
            </p>
            <p className="mrt-10">
              Auch wenn Sie nur kleine Mengen an Edelmetallen, wie
              beispielsweise einige Schmuckstücke verkaufen möchten sind Sie bei
              uns genau richtig. Profitieren Sie genau wie Kunden aus Wolfsburg,
              Pforzheim, Bottrop, Offenbach am Main oder Bremerhaven von unserne
              kundenfreundlichen Ankaufsangeboten. Wieso sollten Sie sich mit
              den teilweise deutlich geringeren Ankaufsangeboten der Konkurrenz
              zufrieden geben? Ob Fürth, Remscheid, Reutlingen, Moers oder
              Koblenz wir garantieren Ihnen eine schnelle Abwicklung des Ankaufs
              von Edelmetallen wie Gold, Silber und Co. - sie erhalten Ihr Geld
              entweder bar ausgezahlt, als Überweisung oder als postalische
              Bargeldzustellung. Wir können uns ganz nach ihren Wünschen und
              Vorstellungen orientieren.
            </p>
            <p className="mrt-10">
              Bei derzeit fast 10.000 Kunden-Verkäufen können Sie sich nicht
              täuschen. Nutzen Sie unser Kundenbewertungsprofil und gucken Sie
              sich die Bewertungen unserer Kunden aus Bergisch Gladbach,
              Salzgitter, Siegen, Erlangen oder Trier an, welche einen guten
              Querschnitt des gesamten Bundesgebietes darstellen.
            </p>
            <p className="mrt-10">
              Es ist immer wieder erstaunlich wenn wir die Meinungen unserer
              Kunden hören. Ob aus Hildesheim, Cottbus, Jena, Gera,
              Kaiserslautern, Hilden, Baden-Baden, Meerbusch, Schweinfurt,
              Ibbenbüren und Passau - aus all diesen Städten haben uns Kunden
              berichtet, wie attraktiv unsere Ankaufskurse sind. Immer wieder
              hören wir auch, dass unsere Angebote deutlich über den Angeboten
              der Konkurrenz liegen. Probieren Sie unseren Goldankauf für
              Deutschland doch einmal aus. Ganz unverbindlich erstellen wir eine
              Analyse und Bewertung für Ihre Schätze aus Edelmetall.
            </p>
            <p className="mrt-10">
              * Wir bieten keinen persönlichen Ankauf mehr an!
            </p>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="d-none d-lg-flex wirkaufen_page_price">
              <PriceValueForm />
            </div>
            <KitcoGoldTab />
            <EtrusredShop2 />
            <InformationCard />
            <Ekomi marginTop="15px" />
          </div>
        </div>
      </section>
      <section className=" garantie_price_container ">
        <GarantedPrice />
      </section>
      <section className="mb-2 goldrechner-last-section">
        <ValueCalc />
      </section>
    </div>
  );
};

export default page;
