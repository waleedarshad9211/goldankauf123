"use client";
import PriceValueForm from "@/components/shared/PriceValueForm";
import ValueCalc from "@/components/shared/ValueCalc";
import WeitereVersandartenCard from "@/components/shared/WeitereVersandartenCard";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Clock from "@/components/shared/clock/Clock";
import GarantedPrice from "@/components/shared/garantedPrice/GarantedPrice";
import Pricing from "@/components/shared/pricing/Pricing";
import RightTriangle from "/public/assets/img/right-triangle.png";
import downTriangle from "/public/assets/img/down-triangle.png";
import Image from "next/image";
import { calculatorArray } from "@/public/static/HomepageStatic";

const page = () => {
  const pricingParagraph = `
  Berechnen Sie den aktuellen Wert Ihrer Edelmetalle 1) 2)
  `;
  return (
    <section className="goldrechner_wrapper">
      <div className="container">
        <Breadcrumbs />

        <div className="goldrechner_clock ">
          <div className="goldrechner_clock_analog">
            <div>
              <Clock timeZone="London" />
              <p className="text-center">LONDON</p>
            </div>
            <div>
              <Clock timeZone="FRANKFURT" />
              <p className="text-center">FRANKFURT</p>
            </div>
            <div>
              <Clock timeZone="New York" />
              <p className="text-center">NEW YORK</p>
            </div>
            <div>
              <Clock timeZone="Hong Kong" />
              <p className="text-center">Hong Kong </p>
            </div>
          </div>
          <div className="container">
            <div className="goldrechner_clock_upper_div">
              <div className="goldrechner_clock_upper_div_wrap">
                <p className="goldrechner_clock_upper_div_para1">
                  Goldkurs aktualisierung <br />
                  Live alle 5 minuten
                </p>
                <p className="goldrechner_clock_upper_div_para2">
                  Handelszeiten: Mo BIS FR <br />
                  VON 09:00 BIS 22:00 UHR
                </p>
              </div>
            </div>
          </div>
          <div className="goldrechner_clock_analog_mobile">
            <div>
              <Clock timeZone="London" />
              <p className="text-center">LONDON</p>
            </div>
            <div>
              <Clock timeZone="FRANKFURT" />
              <p className="text-center">FRANKFURT</p>
            </div>
            <div>
              <Clock timeZone="New York" />
              <p className="text-center">NEW YORK</p>
            </div>
            <div>
              <Clock timeZone="Hong Kong" />
              <p className="text-center">Hong Kong </p>
            </div>
          </div>
          <div className="goldrechner_clock_lower_div">
            <div className="goldrechner_clock_lower_div_wrap">
              <p className="goldrechner_clock_lower_div_para1">
                <strong>Aktualisierung in</strong> <br />0 Minuten 0 Sekunden
              </p>
              <p className="goldrechner_clock_lower_div_para2">
                <strong>Handelszeit endet in</strong>
                <br />
                24 Minuten 26 Sekunden
              </p>
            </div>
          </div>
        </div>
        <div className="pricing">
          <Pricing
            priceHeading="LIVE GOLDRECHNER"
            textAlign="center"
            goldrechner
          />
          <div className="d-flex justify-content-center align-items-center">
            <button className=" text-white pricing-btn">
              JETZT wert berechnen
            </button>
          </div>
        </div>
        <section className="values-form">
          <div className="current-value">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <div className="current-value-left goldrechner-valu-left">
                  <div>
                    <div className="d-flex flex-column justify-content-center align-items-center current-metal-values-wrapper">
                      <span className="text-center">
                        Aktueller Wert lhrer Edelmetalle:
                      </span>
                      <div className="value">2.656,00 €</div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-lg-row flex-column">
                      <div className="calc-table flex-fill">
                        <h5 className="text-center p-2">
                          Ihre Berechnung im Detail:
                        </h5>
                        <div className=" calculator_table_wrapper1">
                          {calculatorArray.map((item, index) => {
                            return (
                              <div key={index} className="hamburg_table">
                                <p className="ankaufpreise_table_column1">
                                  {item.val1}
                                </p>
                                <p className="ankaufpreise_table_column2">
                                  {item.val2}
                                </p>
                                <p className="ankaufpreise_table_column3">
                                  {item.val3}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cal_table_para goldrechner-tabl-para">
                    <p>
                      Der endgültige Auszahlungsbetrag wird anhand der
                      Ankaufskurse bei Sendungseingang ermittelt.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-1 d-flex align-items-center flex-column justify-content-center triangle-container">
                <div className="d-none d-lg-block">
                  <Image src={RightTriangle} alt="" />
                </div>
                <div className="d-block d-lg-none">
                  <Image src={downTriangle} alt="" />
                </div>
              </div>
              <div className="col-md-12 col-lg-4 kostenlos-wrapper">
                <div className="calculator-right-side">
                  <PriceValueForm />
                  <WeitereVersandartenCard />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="row goldrechner_heading_paras_row">
            <div className="col-12 col-md-12 col-lg-12">
              <div className="d-flex align-items-center mb-1">
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    border: "2px solid #ECF3F0",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "4px",
                    fontSize: "24px",
                    width: "35px",
                    height: "35px",
                  }}
                >
                  1
                </div>{" "}
                <div className="goldrechner_last_para_heading">
                  Ankaufspreise:
                </div>{" "}
              </div>
              <p className="goldrechner_last_para">
                Unsere Ankaufspreise orientieren sich an den aktuellen
                Börsenkursen für die Edelmetalle. Die Edelmetallankaufspreise
                werden mehrmals täglich aktualisiert. Beachten Sie bitte
                hierbei, dass für den Ankaufspreis der Tag der Auswertung
                ausschlaggebend ist. Nach Eingang Ihrer Sendung erfolgt die
                Bewertung in aller Regel innerhalb von zwei Werktagen.
              </p>
              <div className="d-flex align-items-center mb-1">
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    border: "2px solid #ECF3F0",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "4px",
                    fontSize: "24px",
                    width: "35px",
                    height: "35px",
                  }}
                >
                  2
                </div>{" "}
                <div className="goldrechner_last_para_heading">
                  Gewichtsermittlung:
                </div>{" "}
              </div>
              <p className="goldrechner_last_para">
                Gewichtsermittlung: Die Gewichtsermittlung vieler Schmuckstücke
                kann nur durch Beschädigung oder Zerstörung des Gegenstandes
                erfolgen. Wir nehmen eine Schätzung des Edelmetallgewichts vor
                und sehen von einer Beschädigung ab. Auf Grundlage dieser
                Wertschätzung ermitteln wir unseren Ankaufspreis. Dies hat für
                Sie den Vorteil, dass Sie im Zweifel einen unbeschädigten
                Gegenstand zurückerhalten, falls Sie nicht an uns verkaufen
                möchten.
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <h2 className="goldrechner_heading_1">
                  GOLDANKAUF KURSE LIVE MIT DEM GOLDRECHNER BERECHNEN
                </h2>
              </div>
              <div className="goldrechner_heading_paras">
                <p className="goldrechner_heading_paras_1">
                  Mit dem Goldrechner haben Sie die Möglichkeit, live den
                  aktuellen Goldpreis im Ankauf für Ihre Goldlegierung berechnen
                  zu können. Damit Sie den Goldpreisrechner bedienen können,
                  müssen Sie die Goldpunze bestimmen und mit einer Küchenwaage
                  das Goldgewicht abwiegen. Nun können Sie die passende
                  Legierung auswählen und das ermittelte Gewicht eingeben.
                  Umgehend wird Ihnen der aktuelle Goldpreis ausgeworfen.
                </p>
                <p className="goldrechner_heading_paras_1">
                  Gerne können Sie auch weitere Goldlegierungen miteinander
                  kombinieren und erhalten direkt den gesamten Goldankauf
                  Ankaufspreis ausgegeben. Es versteht sich von selbst, dass wir
                  die aktuelle Goldpreisentwicklung am Weltmarkt als Grundlage
                  für unsere Preisberechnung nutzen.
                </p>
                <p className="goldrechner_heading_paras_1">
                  Die Nutzung des Goldrechners ist absolut unverbindlich.
                  Berechnen Sie sooft Sie möchten den Goldpreis, egal ob Sie ein
                  Gramm oder ein Kilogramm bestimmen wollen.
                </p>
                <p className="goldrechner_heading_paras_1">
                  Natürlich ist unser Goldrechner nicht nur auf die Berechnung
                  von Gold beschränkt. Gerne können Sie mit dem Rechner auch den
                  Wert von Silber, Platin und Palladium bestimmen. Gehen Sie
                  hier bitte genauso, wie bei der Bestimmung der Goldpreise vor.
                </p>
                <p className="goldrechner_heading_paras_1">
                  Sollten Sie noch weitere Fragen zur Wertbestimmung oder zum
                  Ablauf haben, können Sie einen Blick auf unsere
                  Verkaufsanleitung werfen oder direkt unseren Kundenservice in
                  Anspruch nehmen. Profitieren Sie von unseren sehr guten
                  Ankaufspreisen und gehören auch Sie bald zu unseren
                  zahlreichen zufriedenen Kunden.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className=" garantie_price_container">
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
