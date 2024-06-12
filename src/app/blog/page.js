import Image from "next/image";
import BlogCoin from "/public/assets/img/blog_coin_img.png";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import PriceValueForm from "@/components/shared/PriceValueForm";
import KitcoGoldTab from "@/components/shared/KitcoGoldTab";
import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import InformationCard from "@/components/shared/InformationCard";
import Gemacht from "/public/assets/img/gemacht_img.png";
import BruchGold from "/public/assets/img/bruchgold_img.png";
import BlogGarantee from "/public/assets/img/blog_garantee_img.png";

const page = () => {
  return (
    <div></div>
    // <section className="zahngolg_blog_wrapper">
    //   <div className="container">
    //     <Breadcrumbs />
    //     <div className="row">
    //       <div className="col-12 col-md-12 d-lg-none">
    //         <div className="gold_zuruck_garantie_pricing mt-2">
    //           <PriceValueForm />
    //         </div>
    //       </div>
    //       <div className="col-12 col-md-12 col-lg-8">
    //         <div className=" d-md-flex d-lg-none d-flex justify-content-center align-items-center mb-2">
    //           <Image
    //             src={BlogCoin}
    //             alt=""
    //             className="d-block d-md-block d-lg-none img-fluid"
    //           />
    //         </div>
    //         <div className="zahngolg_blog_wrapper_upper">
    //           <p className="zahngolg_blog_wrapper_para1">
    //             Neben dem Edelmetall Lexikon ist der Edelmetall Blog ein
    //             weiterer wichtiger Anlaufpunkt auf unserer Webseite. In
    //             regelmäßigen Abständen veröffentlichen wir hier in der Regel
    //             aktuelle Nachrichten aus der Welt der Edelmetalle. Nutzen Sie
    //             bitte auch unsere Facebook Seite, um immer über neue Texte auf
    //             unserem Portal informiert zu werden.
    //           </p>
    //           <Image
    //             src={BlogCoin}
    //             alt=""
    //             className="d-none d-md-none d-lg-block"
    //           />
    //         </div>
    //         <p className="zahngolg_blog_wrapper_para2">
    //           Gerne nehmen wir auch IhreAnregungen auf, falls Sie ein Thema
    //           besonders interessiert und Sie hierzu gerne in unserem Blog einen
    //           Artikel lesen würden. Wir wünschen ihnen viel Spaß mit den
    //           Artikeln im Edelmetall Blog von Zahngold123.de.
    //         </p>
    //         <h2 className="videos_uber_zahngold_wrapper_heading1">
    //           Zahngold123.de Blog
    //         </h2>
    //         <p className="videos_uber_zahngold_wrapper_para1">
    //           Ob per Telefon, E-Mail, Kontaktformular oder über unseren
    //           Live-Chat: wir sind jederzeit für Sie erreichbar und helfen Ihnen
    //           immer gerne und schnell bei Ihren Fragen weiter.
    //         </p>
    //         <div className="zahngolg_blog_wrapper_box">
    //           <div className=" row">
    //             <div className="zahngolg_blog_wrapper_box_inner1 col-12 col-md-3">
    //               <Image src={Gemacht} alt="" />
    //             </div>
    //             <div className="zahngolg_blog_wrapper_box_inner2 col-12 col-md-9">
    //               <p className="zahngolg_blog_wrapper_box_inner_para1">
    //                 Goldschmuck Ankauf leicht gemacht!<br></br>
    //                 <span className="fw-bold">
    //                   Einfach Goldschmuck verkaufen mit unserer bewährten
    //                   Versandtasche
    //                 </span>
    //               </p>
    //               <p className="zahngolg_blog_wrapper_box_inner_para2">
    //                 Möchten Sie Goldschmuck verkaufen und suchen einen passenden
    //                 Ankauf von Goldschmuck, dann klicken Sie bitte hier!
    //                 Goldschmuck Ankauf ganz einfach über das Internetmit der
    //                 Hilfe von Zahngold123.de durchführen.
    //               </p>
    //               <p className="zahngolg_blog_wrapper_box_inner_para3">
    //                 Weiterlesen {">>"}
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="zahngolg_blog_wrapper_box">
    //           <div className=" row">
    //             <div className="zahngolg_blog_wrapper_box_inner1 col-12 col-md-3">
    //               <Image src={BruchGold} alt="" />
    //             </div>
    //             <div className="zahngolg_blog_wrapper_box_inner2 col-12 col-md-9">
    //               <p className="zahngolg_blog_wrapper_box_inner_para1">
    //                 Goldabfall verkaufen - Bruchgold Ankauf<br></br>
    //                 <span className="fw-bold">
    //                   Nutzen Sie die Ankaufsoptionen von Zahngold123.de um
    //                   Bruchgold verkaufen zu können
    //                 </span>
    //               </p>
    //               <p className="zahngolg_blog_wrapper_box_inner_para2">
    //                 Einfach, schnell und sicher Goldabfall in Form von Altgold
    //                 oder Bruchgold über den Postweg an Zahngold123.de verkaufen.
    //                 Wir bieten Ihnen den Ankauf von Edelmetallen zur sehr guten
    //                 Ankaufspreisen an. Verbunden mit einer versicherten
    //                 Abwicklung und einem zuvorkommenden Kundenservice.
    //                 Internetmit der Hilfe von Zahngold123.de durchführen.
    //               </p>
    //               <p className="zahngolg_blog_wrapper_box_inner_para3">
    //                 Weiterlesen {">>"}
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="zahngolg_blog_wrapper_box">
    //           <div className=" row">
    //             <div className="zahngolg_blog_wrapper_box_inner1 col-12 col-md-3">
    //               <Image src={BlogGarantee} alt="" />
    //             </div>
    //             <div className="zahngolg_blog_wrapper_box_inner2 col-12 col-md-9">
    //               <p className="zahngolg_blog_wrapper_box_inner_para1">
    //                 Schritt-für-Schritt Goldankauf<br></br>
    //                 <span className="fw-bold">
    //                   Schnell und sicher Gold mit Zahngold123.de verkaufen
    //                 </span>
    //               </p>
    //               <p className="zahngolg_blog_wrapper_box_inner_para2">
    //                 Uns erreichen immer wieder Anfragen zum genauen Ablauf eines
    //                 Goldankaufs über unser Portal. Daher hoffen wir mit diesem
    //                 Text alle relevanten Informationen zu liefern, sodass Sie
    //                 schnell und sicher Gold an Zahngold123.de verkaufen können.
    //               </p>
    //               <p className="zahngolg_blog_wrapper_box_inner_last_para">
    //                 Sie werden schnell merken, wie einfach und schnell Sie Gold
    //                 an uns verkaufen können.Überlegen Sie nicht lange und
    //                 bestellen Sie ganz unverbindliche eine kostenlose
    //                 Versandtasche.
    //               </p>
    //               <p className="zahngolg_blog_wrapper_box_inner_para3">
    //                 Weiterlesen {">>"}
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-12 col-md-12 col-lg-4">
    //         <div className=" d-none d-lg-block">
    //           <PriceValueForm />
    //         </div>
    //         <div className="blog_kategorian_wrapper">
    //           <div className="blog_kategorian_wrapper_body">
    //             <h2 className="blog_kategorian_wrapper_heading">Kategorien</h2>
    //             <div className="blog_kategorian_wrapper_li">
    //               <span>•</span> Aktuelles
    //             </div>
    //             <div className="blog_kategorian_wrapper_li">
    //               <span>•</span> Gold
    //             </div>
    //             <div className="blog_kategorian_wrapper_li">
    //               <span>•</span> Münzen
    //             </div>
    //             <div className="blog_kategorian_wrapper_li">
    //               <span>•</span> Uhrenankauf
    //             </div>
    //           </div>
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
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default page;
