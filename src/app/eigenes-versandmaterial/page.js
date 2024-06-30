import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import InformationCard from "@/components/shared/InformationCard";
import { PriceValueForm2 } from "@/components/shared/PriceValueForm2";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Image from "next/image";
import tick from "/public/assets/img/bestelen_tick.png";
import Gesamtsieger from "@/components/shared/Gesamtsieger";
import GarantedPrice from "@/components/shared/garantedPrice/GarantedPrice";

const page = () => {
  return (
    <section className="eigenes_versandmaterial_wrapper">
      <div className="container">
        <Breadcrumbs />
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8">
            <h2 className="eigenes_versandmaterial_heading">
              Eigenes Versandmaterial
            </h2>
            <p className="eigenes_versandmaterial_para">
              Bitte füllen Sie das Formular zum Selbstversand aus und führen die
              einzelnen Schritte aus! Nach Eingang Ihrer Sendung werden wir die
              Edelmetalle umgehend bewerten und Ihnen den möglichen Ankaufspreis
              mitteilen.
            </p>
            <div className="eigenes_versandmaterial_service">
              <h3 className="eigenes_versandmaterial_h3">
                Ihre Sicherheiten bei Zahngold123.de:
              </h3>
              <ul>
                <li>
                  <Image src={tick} />
                  <p>
                    Kostenloser Rückversand ohne Risiko: Wenn Ihnen unser
                    Angebot nicht zusagt, bekommen Sie kostenlos Ihre
                    Edelmetalle zurückgeschickt.
                  </p>
                </li>
                <li>
                  <Image src={tick} />
                  <p>Keine versteckten Gebühren oder Abzüge</p>
                </li>
                <li>
                  <Image src={tick} />
                  <p>
                    Ihre Sendung (DHL) ist automatisch bis zu 1.500€ versichert.
                  </p>
                </li>
              </ul>
            </div>
            <div className="eigenes_versandmaterial_pricevalueform2">
              <PriceValueForm2 eigenes topHeading="DHL Paketschein anfordern" />
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="eigenes_versandmaterial_goldcard_etrusted">
              <Gesamtsieger />
              <EtrusredShop2 />
            </div>
          </div>
        </div>
        <section className="eigenes_versandmaterial_garantee_price">
          <GarantedPrice />
        </section>
      </div>
    </section>
  );
};

export default page;
