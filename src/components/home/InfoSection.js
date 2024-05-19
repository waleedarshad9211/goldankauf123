import VerkaufenRisiko from "./VerkaufenRisiko";
import VorteileBei from "./VorteileBei";

const InfoSection = () => {
  return (
    <div className="container">
      <section className="info_section_wrapper">
        <div className="info_section_comp d-block d-md-none d-lg-none">
          <VerkaufenRisiko />
          <VorteileBei />
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-8">
            <p className="info_section_p">
              Wir von Zahngold123.de bieten Ihnen den unkomplizierten und
              schnellen Ankauf von Gold, Silber, Platin und Palladium an. Als
              Spezialist für den Ankauf von Zahngold können wir Ihnen sehr hohe
              Goldankauf Preise zahlen. Mit unserem kompetenten, freundlichen
              Service und einer seriösen Bearbeitung möchten wir Sie
              vollumfänglich zufriedenstellen. 54% unserer Kunden gewinnen wir
              durch Empfehlung unserer Altkunden. Diese Zahl soll stetig
              steigen. Aus diesem Grund geben wir allen Kunden unsere
              Zufriedenheitsgarantie. Sollten Sie mit unserem Service nicht
              zufrieden sein, senden wir Ihnen Ihr Gold kostenlos und versichert
              zurück!
            </p>
            <h3 className="info_section_heading">Bundesweiter Goldankauf</h3>
            <p className="info_section_p">
              Dank der postalischen Abwicklung können wir Kunden aus dem
              gesamten Bundesgebiet mit unserem Angebot ansprechen. Wir
              bezeichnen uns selber als eine sehr gute Adresse für den Ankauf
              von Altgold, Bruchgold, Silberbesteck oder Zahngold. Unabhängig
              aus welchem Bundesland Sie kommen, können Sie von unseren
              attraktiven Goldankauf Preisen profitieren. Die Goldanalyse ist
              vollkommen unverbindlich und falls Sie mit dem Ankaufspreis nicht
              einverstanden sein sollten, senden wir Ihnen die Wertgegenstände
              wieder zurück. Vergleichen Sie unsere Ankaufspreise gerne mit der
              lokalen Konkurrenz beim Juwelier, Pfandhäusern oder
              Scheideanstalten.
            </p>
            <h3 className="info_section_heading">
              Goldrechner zur Wertermittlung
            </h3>
            <p className="info_section_p">
              Unsere Goldankauf Preise und Zahngold Preise sind transparent und
              werden ständig aktualisiert. Wir geben Kursveränderungen der
              Rohstoffmärkte sofort an unsere Kunden weiter. So profitieren Sie
              als Kunde von Kursteigerungen und erhalten einen ansehnlichen
              Ankaufspreis beim Goldankauf. Lernen Sie uns näher kennen und
              nehmen bei Fragen Kontakt mit unserem Kundenservice auf.
              Alternativ können Sie auch einen Blick auf die bekannten
              Kundenbewertungsportale werfen. Nutzen Sie den Goldrechner zur
              eigenständigen Wertberechnung.
            </p>
            <h3 className="info_section_heading">Was ist Zahngold?</h3>
            <p className="info_section_p">
              Zahngold ist ein Material, das von Zahnärzten und Dentallaboren
              für Füllungen und Kronen verwendet wird. Es wird bei Temperaturen
              zwischen 1064°C - 1735°C verarbeitet. Das Material besteht aus
              verschiedenen Edelmetallen. Die Zusammensetzung von Zahngold kann
              sehr unterschiedlich ausfallen. Es werden meistens folgende
              Elemente verwendet: Gold, Platin, Palladium, Titan, Silber sowie
              Kupfer. Es wird auch Zahngold hergestellt, dass
              Nicht-Edelmetallhaltig ist und somit keinen Ankaufswert besitzt.
              Dieses Zahngold hat einen silbergrauen Farbton und besteht aus
              Chrom-Cobalt, Titan, Chrom sowie Molybdän. Der Zahngold-Wert wird
              durch den Goldanteil bestimmt. Das Thema Zahngold ist sehr
              umfangreich, sodass Sie auf unserer Webseite zahlreiche
              detaillierte Informationen zur Thematik vorfinden. Wir möchten Ihr
              Vertrauen gewinnen und Sie schon vor dem Zahngold Ankauf über die
              Ermittlung des Ankaufspreises informieren.
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="info_section_comp d-none d-md-block d-lg-block">
              <VerkaufenRisiko />
              <VorteileBei />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoSection;
