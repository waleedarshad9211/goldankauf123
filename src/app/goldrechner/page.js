"use client";
import PriceValueForm from "@/components/shared/PriceValueForm";
import WeitereVersandartenCard from "@/components/shared/WeitereVersandartenCard";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Clock from "@/components/shared/clock/Clock";
import Pricing from "@/components/shared/pricing/Pricing";

const page = () => {
  const pricingParagraph = `
  Berechnen Sie den aktuellen Wert Ihrer Edelmetalle 1) 2)
  `;
  return (
    <section className="goldrechner_wrapper">
      <div className="container">
        <Breadcrumbs />
      </div>
      <div className="goldrechner_clock">
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
        </div>
        <div className="container">
          <div className="goldrechner_clock_upper_div">
            <div className="goldrechner_clock_upper_div_wrap">
              <p className="goldrechner_clock_upper_div_para1">
                <strong>Goldkurs aktualisierung</strong> <br />
                Live alle 5 minuten
              </p>
              <p className="goldrechner_clock_upper_div_para2">
                <strong>Handelszeiten: Mo BIS FR </strong> <br />
                VON 09:00 BIS 18:00 UHR
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
        </div>
        <div className="container">
          <div className="goldrechner_clock_lower_div">
            <div className="goldrechner_clock_lower_div_wrap">
              <p className="goldrechner_clock_lower_div_para1">
                <strong>Aktualisierung in</strong> <br />
                15 Minuten 43 Sekunden
              </p>
              <p className="goldrechner_clock_lower_div_para2">
                Edelmetall
                <br />
                Handelsplatz (Börse)
                <br />
                Geschlossen
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing">
        <Pricing
          priceHeading="GOLDRECHNER – SCHNELL, ZUVERLÄSSIG UND BÖRSENAKTUELL"
          paragraph={pricingParagraph}
          textAlign="left"
          goldrechner
        />
        <div className="d-flex justify-content-center align-items-center">
          <button className=" text-white pricing-btn">
            JETZT wert berechnen
          </button>
        </div>
      </div>
      <section className="values-form">
        <div className="container current-value">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="current-value-left goldrechner_currentvalues">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h2 className="text-center mb-2">
                    Aktueller Wert Ihrer Edelmetalle
                  </h2>
                  <div className="current-price">2.656,00 €</div>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-lg-row flex-column">
                  <div className="calc-table flex-fill">
                    <h5 className="text-center p-2">
                      Ihre Berechnung im Detail:
                    </h5>
                    <table className="table">
                      <tbody>
                        <tr className="">
                          <td>20 Gramm</td>
                          <td className="text-center">999er Feingold</td>
                          <td className="text-end">zu 1.158,40 €</td>
                        </tr>
                        <tr className="">
                          <td>40 Gramm</td>
                          <td className="text-center">986er Gold</td>
                          <td className="text-end">zu 2.280,40 €</td>
                        </tr>
                        <tr className="brdr-btm">
                          <td colSpan="2" className="fw-bold">
                            Ihr Auszahlungsbetrag
                          </td>
                          <td className="fw-bold text-end">3.438,40 €</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="cal_table_para">
                  <p>
                    Der endgültige Auszahlungsbetrag wird anhand der
                    Ankaufskurse bei Sendungseingang ermittelt.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-md-12 d-flex align-items-center flex-column justify-content-center">
              <div className="triangle-right d-none d-lg-block"></div>
              <div className="triangle-down d-block d-lg-none"></div>
            </div>
            <div className="col-md-12 col-lg-4 ">
              <PriceValueForm />
              <WeitereVersandartenCard />
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row goldrechner_heading_paras_row">
          <div className="col-12 col-md-12 col-lg-12">
            <div className="goldrechner_heading_paras">
              <p className="goldrechner_heading_paras_1 d-none d-lg-block">
                Mit unserem Edelmetall-Rechner berechnen Sie die aktuellen
                Preise Ihrer Edelmetalle. Dabei sind die Preise maßgebend, zu
                denen an der Börse gehandelt wird. Verwenden Sie unseren Altgold
                Rechner auch um die Ankaufspreise für Gold, Silber, Platin,
                Palladium oder Zahngold zu berechnen. Der Wert basiert auf den
                Kursen vom
              </p>
              <h2 className="goldrechner_heading_1">
                Goldrechner Preise werden regelmäßig aktualisiert
              </h2>
              <p className="goldrechner_heading_para1">
                Mit dem Goldrechner haben Sie ein wunderbares Werkzeug zur Hand,
                um den aktuellen Goldpreis berechnen zu können. Hierzu müssen
                Sie lediglich das Gewicht und die Goldlegierung bestimmen und
                die ermittelten Werte in den Goldrechner eingeben. Der
                Goldrechner ist an unsere Datenbank gekoppelt, sodass Sie immer
                den aktuellen Goldankauf Preis für Ihre Wertgegenstände
                angezeigt bekommen. Wir nehmen regelmäßig Aktualisierungen am
                Goldankauf Preis vor, sodass Sie als Kunden selbstverständlich
                von Kursveränderungen profitieren können. Sollte Sie noch Fragen
                zur Wertbestimmung oder der Bedienung des Goldrechners haben,
                wenden Sie sich bitte vertrauensvoll an unseren Kundenservice.
              </p>
              <h2 className="goldrechner_heading_2">
                Goldrechner auch für andere Edelmetalle nutzen
              </h2>
              <p className="goldrechner_heading_para2">
                Es versteht sich von selbst, dass der Goldrechner nicht nur die
                Berechnung von Goldlegierungen ermöglicht, sondern auch Silber,
                Platin und Palladium berechnet werden können. Die ausgegebenen
                Werte sind unverbindlich und Sie gehen keine Verpflichtung ein,
                einen Verkauf über Zahngold123.de durchführen zu müssen. Nutzen
                Sie den Goldrechner in regelmäßige Abständen und verkaufen Ihr
                Gold zu einem für Sie perfekten Zeitpunkt. Hilfreich sind zum
                einen unsere Artikel zu den einzelnen Legierungen, als auch
                unsere Artikel zum Thema Punzen. Perfekt durch unser Goldankauf
                Lexikon vorbereitet, können Sie bequem von Zuhause unseren
                Goldrechner bedienen und den Goldankauf Preis mit dem
                Edelmetallrechner errechnen.
              </p>
              <p className="goldrechner_heading_para2">
                Auch der weitere Ablauf ist einfach und äußerst diskret
                gehalten, sodass in den meisten Fällen der gesamte Ankauf
                innerhalb von wenigen Werktagen abgeschlossen ist. Sollten Sie
                Probleme bei der Bestimmung der Legierung haben, senden Sie uns
                unverbindlich Ihr Gold ein. Wir nehmen dann kostenlos eine
                Analyse vor und teilen Ihnen dann umgehend den möglichen
                Ankaufspreis mit. Sollte Sie nicht verkaufen wollen, können Sie
                sich immer auf unsere Gold-zurück-Garantie berufen, welche wir
                unseren Kunden für Ihren Vertrauensvorschuss einräumen.
                Überlegen Sie nicht lange und probieren Sie einfach einmal
                unseren Rechner zur Goldwertbestimmung aus und fordern
                anschließend eine kostenlose Versandtasche für Ihre Edelmetalle
                an.
              </p>
              <h2 className="goldrechner_heading_3">
                Live Goldpreisrechner rund um die Uhr nutzbar
              </h2>
              <p className="goldrechner_heading_para3">
                Vor allem wenn Sie mehrmals am Tag den möglichen Goldpreis im
                Ankauf pro Gramm für Ihre Gold bestimmen wollen, ist der
                Goldpreisrechner eine wahre Hilfe. Innerhalb von wenigen
                Sekunden wird Ihnen der entsprechende Ankaufspreis ausgeworfen
                und Sie können für sich entscheiden, ob Sie den Ankauf
                durchführen wollen. Gerne unterstützen wir Sie bei diesem
                Vorhaben. Vor allem wenn Sie Probleme bei der Wertbestimmung
                haben sollten, kann Ihnen unser Kundenservice mit Sicherheit
                weiterhelfen.
              </p>
              <p className="goldrechner_heading_para3">
                Für die Berechnung der Goldpreise je Gramm im Ankauf müssen Sie
                im ersten schritt die Goldlegierung bestimmen und im zweiten
                Schritt das Gewicht bestimmen. Die meisten Gegenstände verfügen
                über eine sogenannte Punze, welche einem direkt angibt um
                welchen Goldgehalt es sich handelt.
              </p>
              <p className="goldrechner_heading_para3">
                Aber auch wenn keine Punze vorhanden sein sollte, bedeutet dies
                nicht zwangsläufig, dass es sich nicht um Gold handelt. Für
                diesen Fall muss von ihnen aber eine Einsendung vorgenommen
                werden, damit wir das Gold durch unsere Experten bestimmen
                lassen können.
              </p>
              <p className="goldrechner_heading_para3">
                Haben Sie die Goldlegierung bestimmt können Sie mit einer
                Küchenwaage das ungefähre Gewicht abwiegen. Das ermittelte
                Gewicht können Sie dann im Goldpreisrechner eingeben und
                bekommen den Goldankaufspreis ausgeworfen. Sie können den
                Rechner sooft Sie möchten nutzen, um den möglichen Goldpreis
                berechnen zu können. Lassen Sie sich die Chance nicht entgehen
                und probieren es doch einmal selber aus, wie Sie den Goldpreis
                eigenständig bestimmen können.
              </p>
              <p className="goldrechner_last_para">
                1) Ankaufspreise: Unsere Ankaufspreise sind mit dem aktuellen
                Börsenkurs des entsprechenden Edelmetalls gekoppelt. Diese
                ändern sich daher mehrmals täglich. Entscheidend für den
                eigentlichen Ankaufspreis (sofern über den Postweg) gilt der
                Preis zum Zeitpunkt der Auswertung Ihrer Edelmetalle. Die
                Auswertung erfolgt innerhalb von 48 Stunden nach Eingang in
                unseren Geschäftsräumen.
              </p>
              <p className="goldrechner_last_para">
                2) Gewichtsermittlung: Wir weisen darauf hin, dass das exakte
                Edelmetallgewicht vieler Schmuckstücke und Wertgegenstände, wie
                z. B. Ringe mit Steinbesatz, Zahngold mit Zahn- und/oder
                Keramikresten, befüllte Armreifen und Manschettenknöpfe nur
                durch Beschädigung bzw. Zerstörung des Gegenstandes ermittelt
                werden könnte. Im Gegensatz zu manchen Mitbewerbern, die häufig
                ungefragt Gegenstände beschädigen oder gar zerstören, schätzen
                wir das Edelmetallgewicht in diesem Fall fachmännisch ab. Dies
                geschieht in Ihrem Interesse, um Ihre Schmuckstücke und
                sonstigen Gegenstände nicht zerstören zu müssen. Nach Schätzung
                bieten wir Ihnen unseren Ankaufpreis, basierend auf dem von uns
                geschätzten Edelmetallgewicht, an. Sollten Sie mit dem Angebot
                nicht einverstanden sein, erhalten Sie Ihre unzerstörten
                Gegenstände selbstverständlich kostenfrei zurück.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
