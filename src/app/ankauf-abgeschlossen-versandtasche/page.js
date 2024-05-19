import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Image from "next/image";
import MainImage from "/public/assets/img/homepage/sind_unterwegs_main_img.png";
import InformationCard from "@/components/shared/InformationCard";
import ProvenExpertCard from "@/components/shared/ProvenExpertCard";

const page = () => {
  return (
    <section className="sind_unterwegs_wrapper">
      <div className="container">
        <Breadcrumbs />
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8">
            <h2 className="sind_unterwegs_heading">
              Ihre Versandunterlagen sind unterwegs.
            </h2>
            <div className="sind_unterwegs_para">
              <ul>
                <li>
                  In 1-2 Werktagen liegt die Versandtasche in Ihrem Briefkasten!
                </li>
                <li>
                  Die Versandtasche besteht aus einem Begleitschreiben, einer
                  sicheren Luftpolstertasche und dem Versandkarton mit einem
                  frei gemachten Rücksendeaufkleber. Außerdem liegt noch eine
                  kleine Anleitung für das weitere Vorgehen mit bei.
                </li>
                <li>
                  Nach Erhalt füllen Sie die Versandtasche mit den zu
                  verkaufenden Schmuckstücken und geben diese bei der Deutschen
                  Post kostenlos ab.
                </li>
                <li>
                  Innerhalb von nur 48 Stunden nach Eingang erhalten Sie das
                  Ankaufsangebot. Bei Bestätigung erfolgt die direkte
                  Auszahlung.
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
              <ProvenExpertCard marginTop="20px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
