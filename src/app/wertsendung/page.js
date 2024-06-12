import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import InformationCard from "@/components/shared/InformationCard";
import { PriceValueForm2 } from "@/components/shared/PriceValueForm2";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Image from "next/image";
import tick from "/public/assets/img/bestelen_tick.png";

const page = () => {
  return (
    <div></div>
    // <section className="eigenes_versandmaterial_wrapper">
    //   <div className="container">
    //     <Breadcrumbs />
    //     <div className="row">
    //       <div className="col-12 col-md-12 col-lg-8">
    //         <h2 className="eigenes_versandmaterial_heading">
    //           Wertsendung ab 1000Euro
    //         </h2>
    //         <p className="eigenes_versandmaterial_para">
    //           Unser Ankaufservice ist einfach, schnell und unkompliziert. Wählen
    //           Sie aus folgenden drei Varianten um Ihr Gold per Post zu
    //           verkaufen:
    //         </p>
    //         <div className="eigenes_versandmaterial_service">
    //           <h3 className="eigenes_versandmaterial_h3">
    //             Ihre Sicherheiten bei Zahngold123.de:
    //           </h3>
    //           <ul>
    //             <li>
    //               <Image src={tick} />
    //               <p>
    //                 <strong>Gold-zurück-Garantie:</strong>Wenn Ihnen unser
    //                 Angebot nicht zusagt, bekommen Sie kostenlos ihre
    //                 Edelmetalle zurückgeschickt.
    //               </p>
    //             </li>
    //             <li>
    //               <Image src={tick} />
    //               <p>Keine versteckten Gebühren oder Abzüge</p>
    //             </li>
    //             <li>
    //               <Image src={tick} />
    //               <p>Transparente und schnelle Abwicklung</p>
    //             </li>
    //           </ul>
    //         </div>
    //         <div className="abThousand_pricevalue_form2">
    //           <PriceValueForm2 abThousand={true} topHeading="Abholung buchen" />
    //         </div>
    //       </div>
    //       <div className="col-12 col-md-12 col-lg-4 gold_and_etrustedshpw_wrapper">
    //         <div className="wertsendung_gold_etrusted">
    //           <InformationCard />
    //           <EtrusredShop2 />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default page;
