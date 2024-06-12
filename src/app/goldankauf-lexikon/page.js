"use client";
import BtnArrow from "@/components/home/BtnArrow";
import BtnArrowMobile from "@/components/home/BtnArrowMobile";
import Ekomi from "@/components/shared/Ekomi";
import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import InformationCard from "@/components/shared/InformationCard";
import KitcoGoldTab from "@/components/shared/KitcoGoldTab";
import PriceValueForm from "@/components/shared/PriceValueForm";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import MainImg from "/public/assets/img/goldankauf_lexikon_main_img.png";
import {
  goldankaufLexikonArray,
  goldankaufLexikonArrayMobile,
  goldankaufLexikonPalladiumArray,
  goldankaufLexikonPlatinArray,
  goldankaufLexikonSilberArray,
  goldankaufLexikonUhrenAnkaufArray,
  goldankaufLexikonZahngoldArray,
} from "@/public/static/HomepageStatic";
import Image from "next/image";

const page = () => {
  return (
    <div></div>
    // <div className="container">
    //   <section className="stadteankauf_wrapper goldankauf_lexikon_wrapper">
    //     <Breadcrumbs />
    //     <div className="d-flex d-lg-none wirkaufen_page_price mt-2">
    //       <PriceValueForm />
    //     </div>
    //     <div className="row">
    //       <div className="col-12 col-md-12 col-lg-8">
    //         <h2 className="stadteankauf_wrapper_main_heading">
    //           Goldankauf Lexikon
    //         </h2>
    //         <div className=" d-md-flex d-lg-none d-flex justify-content-center align-items-center mb-2">
    //           <Image
    //             src={MainImg}
    //             alt=""
    //             className="d-block d-md-block d-lg-none img-fluid"
    //           />
    //         </div>
    //         <div className="zahngolg_blog_wrapper_upper">
    //           <p className="zahngolg_blog_wrapper_para1">
    //             Es lohnt sich einen Blick in unser Edelmetall Lexikon zu werfen,
    //             falls Sie sich vor einem Goldankauf genauer über den gesamten
    //             Ablauf und die einzelnen Legierungen informieren möchten. Viele
    //             unserer Kunden nutzen das Lexikon um ihr Goldwissen zu
    //             erweitern, sodass die Eigenbewertung der Edelmetalle mit Hilfe
    //             unseres Goldrechners leicht von der Hand geht.
    //           </p>
    //           <Image
    //             src={MainImg}
    //             alt=""
    //             className="d-none d-md-none d-lg-block"
    //           />
    //         </div>
    //         <p className="zahngolg_blog_wrapper_para2">
    //           Neben Aspekten zur Bestimmung der Goldankauf Preise, dient unser
    //           Lexikon auch als allgemeine Informationsquelle für Personen, die
    //           sich mit Edelmetallen beschäftigen.
    //         </p>
    //         <p className="zahngolg_blog_wrapper_para2">
    //           Wir nehmen in regelmäßigen Abständen eine Aktualisierung unserer
    //           Inhalte vor und ergänzen diese mit weiteren lesenswerten
    //           Sachtexten. Sollten Sie Anregungen haben, einen bestimmten Text
    //           vermissen oder gar einen Fehler gefunden haben, würden wir uns
    //           sehr über eine Kontaktaufnahme freuen.
    //         </p>
    //         <h2 className="goldankauf_lexikon_heading">Gold</h2>
    //         <div className="stadteankauf_wrapper_box row d-none d-md-flex d-lg-flex">
    //           {goldankaufLexikonArray.map((item, index) => {
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
    //         <h2 className="goldankauf_lexikon_heading  d-none d-md-flex d-lg-flex">
    //           Zahngold
    //         </h2>
    //         <div className="stadteankauf_wrapper_box row d-none d-md-flex d-lg-flex">
    //           {goldankaufLexikonZahngoldArray.map((item, index) => {
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
    //         <h2 className="goldankauf_lexikon_heading d-none d-md-flex d-lg-flex">
    //           Silber
    //         </h2>
    //         <div className="stadteankauf_wrapper_box row d-none d-md-flex d-lg-flex">
    //           {goldankaufLexikonSilberArray.map((item, index) => {
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
    //         <h2 className="goldankauf_lexikon_heading  d-none d-md-flex d-lg-flex">
    //           Platin
    //         </h2>
    //         <div className="stadteankauf_wrapper_box row d-none d-md-flex d-lg-flex">
    //           {goldankaufLexikonPlatinArray.map((item, index) => {
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
    //         <h2 className="goldankauf_lexikon_heading  d-none d-md-flex d-lg-flex">
    //           Palladium
    //         </h2>
    //         <div className="stadteankauf_wrapper_box row d-none d-md-flex d-lg-flex">
    //           {goldankaufLexikonPalladiumArray.map((item, index) => {
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
    //         <h2 className="goldankauf_lexikon_heading d-none d-md-flex d-lg-flex">
    //           Uhren Ankauf
    //         </h2>
    //         <div className="stadteankauf_wrapper_box row d-none d-md-flex d-lg-flex">
    //           {goldankaufLexikonUhrenAnkaufArray.map((item, index) => {
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

    //         <div className="stadteankauf_wrapper_box row d-flex d-sm-flex d-md-none d-lg-none">
    //           {goldankaufLexikonArrayMobile.map((item, index) => {
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
