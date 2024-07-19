"use client";
import KitcoGoldTab from "@/components/shared/KitcoGoldTab";
import PriceValueForm from "@/components/shared/PriceValueForm";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Button from "@/components/shared/button/Button";
import Image from "next/image";
import GoldZuruck from "/public/assets/img/homepage/100_ gurantee.png";
import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import InformationCard from "@/components/shared/InformationCard";
import ZuruckGaranteeTick from "/public/assets/img/bestelen_tick.png";
import Gesamtsieger from "@/components/shared/Gesamtsieger";
import Ekomi from "@/components/shared/Ekomi";
import GarantedPrice from "@/components/shared/garantedPrice/GarantedPrice";
import ValueCalc from "@/components/shared/ValueCalc";
const page = () => {
  const VorteileArray = [
    {
      tickIcon: (
        <Image src={ZuruckGaranteeTick} alt="" width={26} height={26} />
      ),
      listText:
        "Goldankauf123 ist ein bundesweit tätiges Goldankauf-Unternehmen.",
    },
    {
      tickIcon: <Image src={ZuruckGaranteeTick} alt="" />,
      listText:
        "Goldankauf123 hat seinen Geschäftssitz ausschließlich in Hamburg.",
    },
    {
      tickIcon: <Image src={ZuruckGaranteeTick} alt="" />,
      listText: "Hohe und transparente Ankaufpreise.",
    },
    {
      tickIcon: <Image src={ZuruckGaranteeTick} alt="" />,
      listText: "Kostenloser und versicherter Versandservice.",
    },
    {
      tickIcon: <Image src={ZuruckGaranteeTick} alt="" />,
      listText: "Hundertprozentige Gold-zurück-Garantie.",
    },
  ];
  return (
    <section className="gold_zuruck_garantie_wrapper">
      <div className="container">
        <Breadcrumbs />
        <div className="row">
          <div className="col-12 col-md-12 d-lg-none">
            <div className="gold_zuruck_garantie_pricing">
              <PriceValueForm />
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-8">
            <h2 className="gold_zuruck_garantie_wrapper_heading1">
              Goldankauf online mit Gold-zurück-Garantie
            </h2>
            <div className="gold_zuruck_garantie_unverbindlich">
              <Image
                src={GoldZuruck}
                alt="gold zuruck"
                width={174}
                height={174}
              />
              <div className="gold_zuruck_garantie_unverbindlich_paras">
                <p className="gold_zuruck_garantie_unverbindlich_para1">
                  Beim Verkauf Ihrer Edelmetalle gehen unsere Kunden mit unserer
                  100% Zufriedenheit oder Gold- zurück-Garantie keinerlei
                  Risiken ein. Innerhalb von 48 Stunden nach Eingang Ihrer
                  Edelmetall-Sendung findet eine Analyse und Bewertung in
                  unserem Analyse-Labor statt. Umgehend nach der Analyse wird
                  Ihnen das Ergebnis per E-Mail mitgeteilt.
                </p>
                <p>
                  Die Auszahlung des Ankaufspreises erfolgt direkt im Anschluss
                  an Ihre Freigabe entweder per Banküberweisung oder Scheck.
                  Sollte Ihnen der Ankaufspreis nicht zusagen, senden wir Ihnen
                  Ihre Sendung umgehend versichert wieder zurück
                </p>
                <Button
                  btnText="Ankauf unverbindlich starten"
                  className="gold_zuruck_garantie_unverbindlich_btn "
                  width="340px"
                  height="40px"
                  padding="1px 20px"
                  borderRadius="10px"
                  margin="15px 0px"
                  backgroundColor="#36A18B"
                />
              </div>
            </div>
            <div className="gold_zuruck_garantie_row2_col1">
              <h2 className="gold_zuruck_garantie_row2_col1_heading">
                Goldankauf123.de
              </h2>
              <ul>
                {VorteileArray.map((item, index) => {
                  return (
                    <li>
                      <div className="gold_zuruck_garantie_row2_col1_item">
                        <div className="gold_zuruck_garantie_row2_col1_icon">
                          {item.tickIcon}
                        </div>

                        <p className="gold_zuruck_garantie_row2_col1_li_para">
                          {item.listText}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h2 className="gold_zuruck_garantie_wrapper_heading2">
                Kein Risiko beim Goldankauf
              </h2>
              <div className="gold_zuruck_garantie_unverbindlich">
                <Image
                  src={GoldZuruck}
                  alt="gold zuruck"
                  width={174}
                  height={174}
                />
                <div className="gold_zuruck_garantie_unverbindlich_paras">
                  <p className="gold_zuruck_garantie_unverbindlich_para1">
                    Mit unserer Gold-zurück-Garantie gehen Sie bei einem
                    Goldankauf mit Golankauf123.de keinerlei Risiko ein, da Sie
                    jederzeit die Möglichkeit haben, Ihre Edelmetalle
                    zurückzufordern. So können Sie vertrauensvoll einen
                    Goldankauf mit uns starten. Sie werden schnell überzeugt
                    sein, welch hohe und faire Ankaufsangebote wir Ihnen
                    anbieten können. Vor Ihrer Einsendung der Edelmetalle können
                    Sie mit Hilfe unseres Goldrechners den möglichen
                    Ankaufspreis ermitteln. Bei Problemen hinsichtlich der
                    unterschiedlichen Legierungen empfehlen wir Ihnen einen
                    Blick in unser Lexikon zu werfen.
                  </p>
                </div>
              </div>
              <p className="gold_zuruck_garantie_row2_col1_para2">
                Zahlreiche zufriedene Kunden der vergangenen Jahre sprechen für
                sich und bestätigen unser absolut seriöses und faires Angebot.
                Machen Sie sich unseren bequemen und sicheren Service zu Nutze
                und fordern noch heute kostenlos eine bereits vorfrankierte
                Versandtasche bei uns an. Die Abwicklung des kompletten Ankaufs
                ist innerhalb von nur wenigen Werktagen sicher.
              </p>
              <p className="gold_zuruck_garantie_row2_col1_para3">
                Bei eventuellen Fragen oder Unsicherheiten im Hinblick auf den
                Goldankauf bitten wir Sie, sich jederzeit vertrauensvoll an
                unseren geschulten Kundenservice zu wenden. Dort werden gerne
                alle Ihre Fragen beantwortet. Alternativ können Sie aber auch
                viele Fragen in unserer Verkaufsanleitung beantwortet finden.
              </p>
              <p className="gold_zuruck_garantie_row2_col1_para3">
                Die vielen positiven Kundenbewertungen auf dem unabhängigen
                Bewertungsportal eKomi geben Ihnen einen deutlichen Einblick
                über die seriöse und faire Arbeitsweise von Goldankauf123.de.
                Unter diesen neutralen Kundenbewertungen finden sich auch
                zahlreiche Bewertungen von langjährigen Stammkunden, welche
                regelmäßig an uns verkaufen. Fordern Sie noch heute ganz
                unverbindlich eine Versandtasche an und profitieren Sie von
                unseren hohen Ankaufskonditionen. Durch die Gold-zurück-Garantie
                gehen Sie kein Risiko ein, da Sie jederzeit Ihre Edelmetalle
                versichert zurückfordern können.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="gold_zuruck_garantie_right_side">
              <div className="d-none d-lg-block">
                <Gesamtsieger />
              </div>
              <div className="">
                <InformationCard marginTop="20px" />
              </div>
              <div className="">
                <Ekomi marginTop="20px" />
              </div>
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
