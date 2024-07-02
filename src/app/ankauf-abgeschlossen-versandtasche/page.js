import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Image from "next/image";
import MainImage from "/public/assets/img/homepage/sind_unterwegs_main_img.png";
import InformationCard from "@/components/shared/InformationCard";
import ProvenExpertCard from "@/components/shared/ProvenExpertCard";
import Gesamtsieger from "@/components/shared/Gesamtsieger";
import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import Ekomi from "@/components/shared/Ekomi";
import GarantedPrice from "@/components/shared/garantedPrice/GarantedPrice";

const page = () => {
  return (
    <section className="sind_unterwegs_wrapper">
      <div className="container">
        <Breadcrumbs />
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8">
            <h2 className="sind_unterwegs_heading">
              Bestellung Versandtasche abgeschlossen
            </h2>
            <div className="sind_unterwegs_para">
              <ul>
                <li>Ihre Versandunterlagen sind unterwegs.</li>
                <li>In Kürze liegt die Versandtasche in Ihrem Briefkasten!</li>
                <li>
                  Die Versandtasche besteht aus einem Begleitschreiben, einer
                  sicheren Luftpolstertasche und einem Versandkarton mit einem
                  frei gemachten Rücksendeetikett der Deutschen Post (DHL).
                  Außerdem liegt noch eine kleine Anleitung für das weitere
                  Vorgehen mit bei.
                </li>
              </ul>
            </div>
            <div className="sind_unterwegs_main_img">
              <Image src={MainImage} alt="" width={703} height={400} />
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 ">
            <InformationCard />
            <div className="sind_unterwegs_proven_expert_card">
              <Ekomi marginTop={"20px"} />
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
