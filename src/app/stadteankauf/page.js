"use client";
import BtnArrow from "@/components/home/BtnArrow";
import BtnArrowMobile from "@/components/home/BtnArrowMobile";
import Ekomi from "@/components/shared/Ekomi";
import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import InformationCard from "@/components/shared/InformationCard";
import KitcoGoldTab from "@/components/shared/KitcoGoldTab";
import PriceValueForm from "@/components/shared/PriceValueForm";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import {
  stadteankaufArray,
  stadteankaufArrayMobile,
} from "@/public/static/HomepageStatic";
import Image from "next/image";

const page = () => {
  return (
    <div></div>
    // <div className="container">
    //   <section className="stadteankauf_wrapper">
    //     <Breadcrumbs />
    //     <div className="d-flex d-lg-none wirkaufen_page_price mt-2">
    //       <PriceValueForm />
    //     </div>
    //     <div className="row">
    //       <div className="col-12 col-md-12 col-lg-8">
    //         <h2 className="stadteankauf_wrapper_main_heading">
    //           Goldankauf für Deutschland
    //         </h2>
    //         <p className="stadteankauf_wrapper_para1">
    //           Wir bieten Ihnen den Ankauf von Edelmetallen in ganz Deutschland
    //           zu attraktiven Konditionen an. Auf den einzelnen Städteseiten
    //           erhalten Sie weitere Informationen zum Ablauf eines Goldankaufs
    //           über das Portal Zahngold123.de. Wir bieten Ihnen einen schnellen
    //           und diskreten Service. Bestellen Sie kostenlos eine Versandtasche
    //           und wickeln den Ankauf mit unserer Gold-zurück-Garantie innerhalb
    //           von wenigen Werktagen ab.
    //         </p>
    //         <p className="stadteankauf_wrapper_para2">
    //           Sollten Sie noch Fragen haben, wenden Sie sich bitte
    //           vertrauensvoll an unseren Kundenservice, welcher Ihnen gerne per
    //           E-Mail oder Telefon zur Verfügung steht.
    //         </p>
    //         <div className="stadteankauf_wrapper_box row d-none d-md-flex d-lg-flex">
    //           {stadteankaufArray.map((item, index) => {
    //             return (
    //               <div
    //                 className="col-6 col-md-6 stadteankauf_wrapper_box_column"
    //                 key={index}
    //               >
    //                 <div className="img_box_wrapepr">
    //                   <div className="img_box">
    //                     <Image src={item.src} alt="" />
    //                     <div className="zahngold_last_img_wrapper">
    //                       <div className="zahngold_last_img_wrapper_body">
    //                         <div>
    //                           <p className="wir_verkaufer_name">{item.text}</p>
    //                         </div>
    //                         <div className="wir_verkaufer_btn">
    //                           <div className="wir_verkaufer_btn_arrow">
    //                             <BtnArrowMobile />
    //                             <BtnArrow />
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             );
    //           })}
    //         </div>
    //         <div className="stadteankauf_wrapper_box row d-flex d-md-none d-lg-none">
    //           {stadteankaufArrayMobile.map((item, index) => {
    //             return (
    //               <div className="col-12 col-md-12" key={index}>
    //                 <div className="img_box_wrapepr">
    //                   <div className="img_box">
    //                     <Image src={item.src} alt="" />
    //                     <div className="zahngold_last_img_wrapper">
    //                       <div className="zahngold_last_img_wrapper_body">
    //                         <div>
    //                           <p className="wir_verkaufer_name">{item.text}</p>
    //                         </div>
    //                         <div className="wir_verkaufer_btn">
    //                           <div className="wir_verkaufer_btn_arrow">
    //                             <BtnArrowMobile />
    //                             <BtnArrow />
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             );
    //           })}
    //         </div>
    //       </div>
    //       <div className="col-12 col-md-12 col-lg-4">
    //         <div className="d-none d-lg-flex wirkaufen_page_price">
    //           <PriceValueForm />
    //         </div>
    //         <KitcoGoldTab />
    //         <EtrusredShop2 />
    //         <InformationCard />
    //         <Ekomi marginTop="15px" />
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
};

export default page;
