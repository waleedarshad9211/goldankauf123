"use client";
import KitcoGoldTab from "@/components/shared/KitcoGoldTab";
import PriceValueForm from "@/components/shared/PriceValueForm";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Button from "@/components/shared/button/Button";
import Image from "next/image";
import GoldZuruck from "/public/assets/img/homepage/100_ gurantee.png";
import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import InformationCard from "@/components/shared/InformationCard";
import ZuruckGaranteeTick from "/public/assets/img/zuruck_guarantee_tick.png";
const page = () => {
  const VorteileArray = [
    {
      tickIcon: (
        <Image src={ZuruckGaranteeTick} alt="" width={26} height={26} />
      ),
      listText: "Hohe und transparente Ankaufpreise",
    },
    {
      tickIcon: <Image src={ZuruckGaranteeTick} alt="" />,
      listText: "Kostenloser & versicherter Versandservice",
    },
    {
      tickIcon: <Image src={ZuruckGaranteeTick} alt="" />,
      listText: "Keine Gebühren oder sonstige versteckte Kosten",
    },
    {
      tickIcon: <Image src={ZuruckGaranteeTick} alt="" />,
      listText: "Hundertprozentige Zahngold123.de Gold-zurück-Garantie",
    },
    {
      tickIcon: <Image src={ZuruckGaranteeTick} alt="" />,
      listText: "Schnelle Abricklung dank peofessionler Analyse & Auswertung",
    },
    {
      tickIcon: <Image src={ZuruckGaranteeTick} alt="" />,
      listText:
        "Zahngold123.de ist ein bundesweit tätiges Goldankauf-Unternehmen",
    },
  ];
  return (
    <div></div>
    // <section className="gold_zuruck_garantie_wrapper">
    //   <div className="container">
    //     <Breadcrumbs />
    //     <div className="row">
    //       <div className="col-12 col-md-12 d-lg-none">
    //         <div className="gold_zuruck_garantie_pricing">
    //           <PriceValueForm />
    //         </div>
    //       </div>
    //       <div className="col-12 col-md-12 col-lg-8">
    //         <h2 className="gold_zuruck_garantie_wrapper_heading1">
    //           Goldankauf online mit Gold-zurück-Garantie
    //         </h2>
    //         <div className="gold_zuruck_garantie_unverbindlich">
    //           <Image
    //             src={GoldZuruck}
    //             alt="gold zuruck"
    //             width={174}
    //             height={174}
    //           />
    //           <div className="gold_zuruck_garantie_unverbindlich_paras">
    //             <p className="gold_zuruck_garantie_unverbindlich_para1">
    //               Unsere Gold-zurück-Garantie ist uns wichtig, da wir unseren
    //               Kunden dadurch eine absolute Sicherheit beim Edelmetallankauf
    //               anbieten können . Nach Eingang Ihrer Sendung nehmen wir die
    //               Analyse Ihrer Wertgegenstände innerhalb von 48 Stunden vor und
    //               teilen Ihnen den Ankaufspreis mit.
    //             </p>
    //           </div>
    //         </div>
    //         <p className="gold_zuruck_garantie_unverbindlich_para2 ">
    //           Sofern Sie mit dem Ankaufspreis zufrieden sein sollten und uns die
    //           Auszahlung via E-Mail bestätigen, nehmen wir die Auszahlung vor.
    //           Sollten Sie hingegen nicht zufrieden sein, schicken wir Ihnen
    //           selbstverständlich die Edelmetalle umgehend versichert und
    //           kostenfrei an Sie zurück.
    //         </p>

    //         <div className="gold_zuruck_garantie_row2_col1">
    //           <h2 className="gold_zuruck_garantie_row2_col1_heading">
    //             Ihre Vorteile bei moneyGold.de
    //           </h2>
    //           <ul>
    //             {VorteileArray.map((item, index) => {
    //               return (
    //                 <li>
    //                   <div className="gold_zuruck_garantie_row2_col1_item">
    //                     <div className="gold_zuruck_garantie_row2_col1_icon">
    //                       {item.tickIcon}
    //                     </div>

    //                     <p className="gold_zuruck_garantie_row2_col1_li_para">
    //                       {item.listText}
    //                     </p>
    //                   </div>
    //                 </li>
    //               );
    //             })}
    //           </ul>
    //           <Button
    //             btnText="Ankauf unverbindlich starten"
    //             className="gold_zuruck_garantie_unverbindlich_btn "
    //             width="348px"
    //             height="38px"
    //             padding="1px 20px"
    //             borderRadius="10px"
    //             margin="15px 0px"
    //             backgroundColor="#019BA5"
    //           />
    //         </div>
    //         <div>
    //           <p className="gold_zuruck_garantie_row2_col1_para2">
    //             Dank unserer Gold-zurück-Garantie können Sie einen Goldankauf
    //             über Zahngold123.de ganz entspannt entgegensehen. Es entsteht
    //             für Sie kein Risiko, da Sie zu jeder Zeit den Ankauf abbrechen
    //             können und wir Ihnen die Edelmetalle zurücksenden. Wir sind
    //             selbstverständlich darauf bedacht, Ihnen einen sehr guten und
    //             fairen Ankaufspreis nennen zu können. Wir empfehlen all unseren
    //             Kunden vorab den Goldrechner zu nutzen, um sich über den
    //             möglichen Ankaufspreis im Detail informieren zu können. Nutzen
    //             Sie bitte auch die weiteren Angebote unserer Webseite wie
    //             beispielsweise unseren Edelmetall Blog oder das Lexikon.
    //           </p>
    //           <p className="gold_zuruck_garantie_row2_col1_para3">
    //             Viele zufriedene Kunden haben bereits unser Angebot in Anspruch
    //             nehmen. Lassen auch Sie sich von den zahlreichen zufriedenen
    //             Kunden begeistern und gehören auch Sie bald zu unserer
    //             Kundschaft. Bei weiteren Fragen empfehlen wir jedem Kunden
    //             unseren Kundenservice in Anspruch zu nehmen, welcher Ihnen per
    //             E-Mail oder Telefon zur Verfügung steht. Schnell lassen sich
    //             durch eine Kontaktaufnahme offene Fragen klären.
    //           </p>
    //           <p className="gold_zuruck_garantie_row2_col1_para3">
    //             Auch ein Blick auf die Bewertungsplattform eKomi kann helfen, um
    //             Zahngold123.de näher kennenlernen zu können. Wir sind seit
    //             einiger Zeit am Markt präsent und konnten schon zahlreiche
    //             Kunden mit unseren Ankaufspreisen zufriedenstellen. Überlegen
    //             Sie nicht lange und reihen Sie sich auch in die Reihe unserer
    //             zufriedenen Kunden ein.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="col-12 col-md-12 col-lg-4">
    //         <div className="gold_zuruck_garantie_right_side">
    //           <div className=" d-none d-lg-block">
    //             <PriceValueForm />
    //           </div>
    //           <div className="">
    //             <KitcoGoldTab />
    //           </div>
    //           <div className="">
    //             <EtrusredShop2 />
    //           </div>
    //           <div>
    //             <InformationCard marginTop="20px" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default page;
