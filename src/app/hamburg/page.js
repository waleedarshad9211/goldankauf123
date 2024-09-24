"use client";
import Ekomi from "@/components/shared/Ekomi";
import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import KitcoGoldTab from "@/components/shared/KitcoGoldTab";
import PriceValueForm from "@/components/shared/PriceValueForm";
import PriceValueForm3 from "@/components/shared/PriceValueForm3";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Button from "@/components/shared/button/Button";
import {
  hamburgArray,
  hamburgerTableArray,
  ZahngoldBlickArray,
  zahngoldkaufen1,
  zahngoldkaufen2,
} from "@/public/static/HomepageStatic";
import Image from "next/image";
import InformationCard from "@/components/shared/InformationCard";
import HamburgMainImg from "/public/assets/img/hamburg_main_img.png";
import HamburgLastImg from "/public/assets/img/hamburg_last_img.png";
import HamburgLastImg1 from "/public/assets/img/hamburg_last_img1.png";
import HamburgLastImg2 from "/public/assets/img/hamburg_main_img2.png";
import BtnArrowMobile from "@/components/home/BtnArrowMobile";
import BtnArrow from "@/components/home/BtnArrow";
import hamberg_verkaufen_sie_gold from "/public/assets/img/hamberg_verkaufen_sie_gold.png";
import bestelen_tick from "/public/assets/img/bestelen_tick.png";
import ValueCalc from "@/components/shared/ValueCalc";
import GarantedPrice from "@/components/shared/garantedPrice/GarantedPrice";

const page = () => {
  return (
    <section className="zahngold_wrapper">
      <div className="container">
        <Breadcrumbs />
        <div className="d-flex d-lg-none wirkaufen_page_price mt-2">
          <PriceValueForm />
        </div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8">
            <div className="GoldankaufKotenloser_">
              <h2 className="text-left hamburger-heading">
                Goldankauf Hamburg - online Gold verkaufen
              </h2>
              <p className="hamburg_para1_">
                So verkaufen Sie diskret und schnell Gold in Hamburg
              </p>
              <div className="">
                <Image
                  src={HamburgMainImg}
                  alt="zahngold cover image"
                  className="zahngold_img"
                />
              </div>
              <p className="text-left Goldankauf_para2_">
                Sie kommen aus Hamburg und sind auf der Suche nach einem
                Anbieter, um Gold verkaufen zu können? Wir von Goldankauf123
                bieten Ihnen den diskreten Goldankauf für Edelmetalle aller Art
                über den Postweg an. Egal ob Sie einen Goldring, Zahngold,
                Silberbesteck oder eine Goldmünze verkaufen wollen, sind wir für
                Sie der richtige Ansprechpartner.
              </p>
              <p className="zahngold_para5">
                Wir garantieren Ihnen einen sehr guten Goldankauf Preis und eine
                regelmäßige Aktualisierung unserer Ankaufspreise. Wir nutzen zur
                Anpassung unserer Preise die aktuelle Goldpreisentwicklung als
                Grundlage und bieten Ihnen daher einen ansprechenden
                Ankaufspreis an.
              </p>
              <p className="zahngold_para6">
                Vor allem, wenn es Ihnen wichtig ist, dass Sie den Ankauf von
                Gold schnell und sicher über die Bühne bringen wollen. Sind Sie
                bei uns an der richtigen Adresse gelandet. Der Ablauf ist mit
                unserer Versandtasche kinderleicht. Bestellen Sie die
                Versandtasche und bekommen diese innerhalb von 1-2 Werktagen
                geliefert. Nun müssen Sie die Versandtasche nur noch mit Ihrem
                Goldschmuck befüllen und kostenlos bei der nächsten Filiale der
                Post abgeben. Achten Sie bitte auf den richtigen
                Versicherungsschutz und wählen aus unseren drei Versandarten die
                passende Versandart für sich aus.
              </p>

              <div className="hamburg_table_wrapper ">
                <h2 className="zahngold_heading5">
                  Aktuelle Ankaufspreise für Gold in Euro
                </h2>
                <div className="hamburg_table_header">
                  <p>Goldlegierung</p>
                  <p>Gewicht</p>
                  <p>Preis im Ankauf</p>
                </div>
                {hamburgerTableArray.map((item, index) => {
                  return (
                    <div key={index} className="hamburg_table">
                      <p>{item.val1}</p>
                      <p>{item.val2}</p>
                      <p>{item.val3}</p>
                    </div>
                  );
                })}
                <div className="hamburger_table_button">
                  <Button
                    btnText="Jetzt wert berechnen"
                    padding="1px 30px"
                    height="43px"
                    width="461px"
                    fontSize="25px"
                    fontWeight="500"
                  />
                </div>
              </div>
            </div>
            <div className="zahngold_pricevalue_form">
              <PriceValueForm3 />
            </div>
            <div className="zahngold_valuecalc">
              <p className="hamberg_verkaufen_sie_gold_heading">
                Verkaufen Sie Gold & Silber zu hohen Preisen!
              </p>
              <div className="hamberg_verkaufen_sie_gold_wrapper">
                <p>
                  Sollten Sie auf der Suche nach einem seriösen Goldankauf für
                  Hamburg sein, haben Sie mit dem Angebot von Goldankauf123 den
                  passenden Partner gefunden. Wir bieten Ihnen fundiertes Wissen
                  rund um den Ankauf von Edelmetallen wie Gold, Platin, Gold
                  oder Palladium! Ganz egal, ob Sie in Hamburg-Mitte, Altona,
                  Eimsbüttel, Hamburg-Nord, Wandsbek, Bergedorf oder Harburg
                  leben, wir erstellen Ihnen ganz unverbindlich eine Analyse und
                  Bewertung Ihrer Edelmetalle.
                </p>
                <Image src={hamberg_verkaufen_sie_gold} alt="" />
              </div>
            </div>
            <div className="">
              <p className="zahngold_last_heading">
                Service und Sicherheit auf einen Blick:
              </p>
              <div className="ablauf_info_list">
                {hamburgArray.map((item, index) => {
                  return (
                    <div className="hamburg_list" key={index}>
                      <div>
                        <Image src={bestelen_tick} alt="" />
                      </div>
                      <div className="hamburg_list_txt">{item.txt}</div>
                    </div>
                  );
                })}
              </div>
              <p className="hamburg_paragraph">
                Errechnen Sie doch einmal ganz einfach und schnell über unseren
                online Goldrechner den Ankaufswert für Ihre Edelmetalle. Mit
                unserem Goldankauf für Hamburg werden Sie die richtige Wahl
                treffen!
              </p>
              <div className="hamburg_valuecal">
                <ValueCalc padding="10px" />
              </div>
              <h2 className="zahngold_last_heading">
                KOSTENLOSE WERTTRANSPORT-ABHOLUNG IN GANZ HAMBURG & UND
                UMGEBUNG!
              </h2>
              <div className="">
                <ul className="ablauf_info_list row">
                  {zahngoldkaufen2.map((item, index) => {
                    return (
                      <div
                        className="col-6 col-md-6 col-lg-6 hamburg_ablauf_info_list"
                        key={index}
                      >
                        <li key={index}>
                          <div className="zahngold_list_img">
                            {item.tickIcon}
                          </div>
                          <p className="zahngold_list_para">{item.listText}</p>
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
              <h2 className="zahngold_last_heading">
                VERKAUFEN SIE GOLD & SILBER ZU HOHEN PREISEN!
              </h2>
              <p className="zahngold_lastpara1">
                Schauen Sie sich unbedingt einmal auf unserer Webseite genauer
                um, wir bieten Ihnen zahlreiche Unterseiten, auf denen Sie sich
                vor einem Goldankauf detailliert informieren können. Sehr zu
                empfehlen ist unser Goldwissen mit vielen
                Hintergrundinformationen zu Goldmünzen, Gold oder Edelmetallen
                im Allgemeinen. Sollten Sie vielleicht noch etwas skeptisch
                sein, hilft vielleicht ein Blick auf unser
                Kundenbewertungsprofil, welches von der Firma ekomi
                treuhänderisch verwaltet wird.
              </p>
              <p className="hamburger_para_subheading">
                Gold Ankauf für Goldbarren, Zahngold, Silberbesteck, Altgold,
                Goldmünzen und mehr!
              </p>
              <p className="zahngold_lastpara2">
                Wir sind Ihr Gold & Edelmetall Experte für ganz Hamburg! Gold
                Schmuck Ankauf sowie Silber, Platin Ankauf und Goldmünzenankauf.
                Goldmünzen aus allen Ländern und aller Hersteller sowie
                Goldbarren und Silberbarren Ankauf aller Größen und Gewichte!
                Goldbarrenankauf und Silberbarrenankauf auch bei zerkratzten
                oder beschädigten Gegenständen. Zahngold Ankauf und
                Zahngoldankauf zu hohen Grammpreisen!
              </p>
              <p className="zahngold_lastpara2">
                Sowie Silberbesteck und Schmuckankauf gegen Sofortzahlung.
                Silberankauf und Platinankauf sowie Palladiumankauf Ankauf
                bieten wir ebenfalls an. Silberbestecke und Tafelsilber aller
                Hersteller sowie Bruchgold, Altgold Ankauf bzw. Bruchgoldankauf
                und Altgoldankauf. Durchsuchen Sie noch heute Ihre Schubladen
                und Sie werden sicher noch etwas Altgold finden, dass perfekt
                für den Verkauf bei unserem Unternehmen geeignet ist.
              </p>
            </div>
            <div></div>
            <div className="zahngold123_section">
              <h2 className="zahngold123_sec_heading">
                Service und Sicherheit auf einen Blick:
              </h2>
              <div className="zahngold_list_wrapper">
                <ul>
                  {ZahngoldBlickArray.map((item, index) => {
                    return (
                      <li key={index}>
                        <div className="zahngold_list_img">{item.tickIcon}</div>
                        <p className="zahngold_list_para">{item.listText}</p>
                      </li>
                    );
                  })}
                </ul>
                <p>
                  Die Abwicklung eines entsprechenden Ankaufs von Edelmetallen
                  in Hamburg können wir ganz nach Ihren Wünschen realisieren.
                  Wir richten uns ganz nach Ihren Vorgaben und versuchen diese
                  so gut es geht umzusetzen. Sobald Ihre Edelmetalle bei uns
                  eingegangen sind, erhalten Sie per E-Mail oder Telefon eine
                  Auswertung und den von uns errechneten Ankaufswert. Sollten
                  Ihnen dieser Ankaufsbetrag zusagen, erhalten Sie Ihr Geld
                  umgehend als Überweisung ausgezahlt. Möchten Sie Ihre
                  Edelmetalle nicht für diesen Betrag verkaufen, ist es für uns
                  selbstverständlich, dass wir Ihnen Ihr Gold zurücksenden.
                </p>
                <Button
                  btnText="Jetzt Gold verkaufen"
                  fontSize="25px"
                  fontWeight="bold"
                  width="361px"
                  height="45px"
                  margin="10px 0px 0px 0px"
                />
                <p className="zahngold123_sec_heading">
                  GOLDANKAUF ABHOLUNGEN RUND UM HAMBURG – KOSTENLOS PER
                  WERTKURIER:
                </p>
                <p>
                  Goldankauf123 lässt Ihr Gold nicht nur in Hamburg Stadt
                  kostenlos abholen. Auch rund um Hamburg (wie in Kaltenkirchen,
                  Henstedt Ulzburg, Quickborn, Elmshorn, Glückstadt,
                  Drochtersen, Uetersen, Norderstedt, Bargteheide, Ahrensburg,
                  Rellingen, Pinneberg, Halstenbeck, Stade, Schenefeld, Wedel,
                  Reinbek, Glinde, Schwarzenbek, Geesthacht, Lauenburg,
                  Boizenburg, Winsen, Seevetal, Buchholz sowie in der ganzen
                  Bundesrepublik gleichgültig ob in einer Stadt oder in einer
                  Ortschaft.
                </p>
                <p className="mt-1">
                  Dieser Goldankauf Abholservice wird Ihnen präsentiert von
                  Goldankauf123! Gleichgültig ob Sie einen Silberankauf oder
                  einen Goldankauf Hamburg suchen, Sie sollte nur eine
                  Internetseite kennen: die von Goldankauf123.
                </p>
              </div>
            </div>
            <div className="img_box_wrapepr">
              <div className="img_box">
                <Image src={HamburgLastImg} alt="" />
                <div className="zahngold_last_img_wrapper">
                  <div className="zahngold_last_img_wrapper_body">
                    <div>
                      <p className="wir_verkaufer_name">Goldankauf Hamburg</p>
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
              <div className="img_box img_box2">
                <Image src={HamburgLastImg1} alt="" />
                <div className="zahngold_last_img_wrapper">
                  <div className="zahngold_last_img_wrapper_body">
                    <div>
                      <p className="wir_verkaufer_name">Goldankauf Berlin</p>
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
            <div className="img_box_wrapepr">
              <div className="img_box">
                <Image src={HamburgLastImg2} alt="" />
                <div className="zahngold_last_img_wrapper">
                  <div className="zahngold_last_img_wrapper_body">
                    <div>
                      <p className="wir_verkaufer_name">Goldankauf München</p>
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
          <div className="col-12 col-md-12 col-lg-4">
            <div className="hamburg_right_side">
              <div className="d-none d-lg-flex wirkaufen_page_price">
                <PriceValueForm home />
              </div>
              <KitcoGoldTab />
              <EtrusredShop2 />
              <InformationCard />
              <Ekomi marginTop="15px" />
            </div>
          </div>
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

export default page;
