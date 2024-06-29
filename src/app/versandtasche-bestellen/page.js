"use client";
import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import { PriceValueForm2 } from "@/components/shared/PriceValueForm2";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Image from "next/image";
import tick from "/public/assets/img/bestelen_tick.png";
import InformationCard from "@/components/shared/InformationCard";
import GarantedPrice from "@/components/shared/garantedPrice/GarantedPrice";
import PriceValueForm3 from "@/components/shared/PriceValueForm3";
import ProvenExpertCard from "@/components/shared/ProvenExpertCard";
import Gesamtsieger from "@/components/shared/Gesamtsieger";

const page = () => {
  return (
    <section className="eigenes_versandmaterial_wrapper">
      <div className="container">
        <Breadcrumbs />
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8">
            <h2 className="eigenes_versandmaterial_heading">
              Versandtasche kostenlos bestellen
            </h2>
            <p className="eigenes_versandmaterial_para">
              Füllen Sie bitte das Formular aus und erhalten in den nächsten 1-2
              Werktagen unsere kostenlose Versandtasche zugestellt, welche Sie
              nur noch mit Ihren Edelmetallen befüllen müssen.
            </p>
            <div className="eigenes_versandmaterial_service">
              <h3 className="eigenes_versandmaterial_h3">
                Ihre Sicherheiten - Unser Versprechen
              </h3>
              <ul>
                <li>
                  <Image src={tick} />
                  <p>
                    <strong>Gold-zurück-Garantie:</strong> Wenn Ihnen unser
                    Angebot nicht zusagt, bekommen Sie kostenlos ihre
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
                    Die Versandtasche ist automatisch bis zu 1.000€ versichert!
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <PriceValueForm2
                topHeading="Versandtasche anfordern"
                bestellen={true}
              />
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 gold_and_etrustedshpw_wrapper">
            <div className="eigenes_versandmaterial_bestsellen">
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
