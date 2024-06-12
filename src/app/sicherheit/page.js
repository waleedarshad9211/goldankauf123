"use client";
import Ekomi from "@/components/shared/Ekomi";
import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import InformationCard from "@/components/shared/InformationCard";
import KitcoGoldTab from "@/components/shared/KitcoGoldTab";
import PriceValueForm from "@/components/shared/PriceValueForm";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import { sicherheitArray } from "@/public/static/HomepageStatic";
import Image from "next/image";

const Sicherheit = () => {
  return (
    <div></div>
    // <section className="sicherheit_wrapper">
    //   <div className="container">
    //     <Breadcrumbs />
    //     <div className="row">
    //       <div className="col-12 col-md-12 d-lg-none">
    //         <div className="gold_zuruck_garantie_pricing">
    //           <PriceValueForm />
    //         </div>
    //       </div>
    //       <div className="col-12 col-md-12 col-lg-8">
    //         <h2 className="videos_uber_zahngold_wrapper_heading1">
    //           Ihre Sicherheit bei Zahngold123.de
    //         </h2>
    //         <p className="videos_uber_zahngold_wrapper_para1 mb-2">
    //           Der Verkauf von Gold, Silber, Platin, Palladium und Zahngold ist
    //           bei uns sicher, unverbindlich und diskret.
    //         </p>
    //         {sicherheitArray?.map((item, index) => {
    //           return (
    //             <div key={index} className="sicherheit_wrapper_inner">
    //               <div className="sicherheit_wrapper_column1 ">
    //                 <Image
    //                   src={item.src}
    //                   alt=""
    //                   width={item.width}
    //                   height={item.height}
    //                 />
    //               </div>
    //               <div className="sicherheit_wrapper_column2">
    //                 <h3 className="sicherheit_wrapper_heading">
    //                   {item.heading}
    //                 </h3>
    //                 <p className="sicherheit_wrapper_para">{item.para}</p>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //       <div className="col-12 col-md-12 col-lg-4">
    //         <div className=" d-none d-lg-block">
    //           <PriceValueForm />
    //         </div>
    //         <div className="">
    //           <KitcoGoldTab />
    //         </div>
    //         <div className="">
    //           <EtrusredShop2 />
    //         </div>
    //         <div>
    //           <InformationCard marginTop="20px" marginBottom="30px" />
    //         </div>
    //         <div>
    //           <Ekomi marginTop="15px" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Sicherheit;
