"use client";
import Ekomi from "@/components/shared/Ekomi";
import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import KitcoGoldTab from "@/components/shared/KitcoGoldTab";
import PriceValueForm from "@/components/shared/PriceValueForm";
import PriceValueForm3 from "@/components/shared/PriceValueForm3";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Button from "@/components/shared/button/Button";
import {
  ZahngoldBlickArray,
  zahngoldkaufen1,
  zahngoldkaufen2,
} from "@/public/static/HomepageStatic";
import Image from "next/image";
import InformationCard from "@/components/shared/InformationCard";
import HamburgMainImg from "/public/assets/img/hamburg_main_img.png";
import HamburgLastImg from "/public/assets/img/hamburg_last_img.png";
import BtnArrowMobile from "@/components/home/BtnArrowMobile";
import BtnArrow from "@/components/home/BtnArrow";

const page = () => {
  return (
    <div></div>
    // <section className="zahngold_wrapper">
    //   <div className="container">
    //     <Breadcrumbs />
    //     <div className="d-flex d-lg-none wirkaufen_page_price mt-2">
    //       <PriceValueForm />
    //     </div>
    //     <div className="row">
    //       <div className="col-12 col-md-12 col-lg-8">
    //         <div className="GoldankaufKotenloser_">
    //           <h2 className="text-left GoldankaufKotenloser-heading">
    //             Goldankauf Hamburg - Gold online verkaufen
    //           </h2>
    //           <div className="">
    //             <Image
    //               src={HamburgMainImg}
    //               alt="zahngold cover image"
    //               className="zahngold_img"
    //             />
    //           </div>
    //           <h2 className="GoldankaufKotenloser-heading2">
    //             Aktuelle Konditionen beim Goldankauf in Hamburg
    //           </h2>
    //           <p className="text-left Goldankauf_para2_">
    //             Suchen Sie nach einer Möglichkeit einen Goldankauf in Hamburg
    //             durchrühren zu können? Wir von Zahngold123.de bieten Ihnen die
    //             schnelle Abwicklung Ihres Verkaufswunsches zu einem sehr
    //             ansprechenden Goldankauf Preis an. Wir ermitteln den Wert Ihrer
    //             Einsendung mit aktuellen Ankaufpreisen und teilen Ihnen den
    //             Ankaufspreis nach Eingang der Wertsendung umgehend mit.
    //           </p>
    //           <h2 className="zahngold_heading4">
    //             Wertbestimmung mit Goldrechner
    //           </h2>
    //           <p className="zahngold_para5">
    //             In vielen Fällen können unsere Kunden aus Hamburg die
    //             Wertbestimmung auch mithilfe des Goldrechners eigenständig
    //             vornehmen. Hierzu müssen Sie lediglich das Gewicht des
    //             Goldschmucks bestimmen und dann den Schmuck nach Goldlegierungen
    //             sortieren. In den meisten Fällen handelt es sich bei Goldschmuck
    //             um Legierungen wie 333, 375, 585 oder 750 Gold
    //           </p>
    //           <p className="zahngold_para6">
    //             Selbstverständlich ist beim online Goldankauf für Hamburg auch
    //             der Ankauf von Goldbarren und Goldmünzen aus 999 Feingold oder
    //             916 Gold möglich. Überlegen Sie nicht lange und starten Sie noch
    //             heute den Ankauf, um von den hohen Goldpreisen profitieren zu
    //             können, welche wir unseren Kunden für einen Ankauf auszahlen
    //             können. Bei Fragen steht Ihnen unser Kundenservice gerne
    //             beratend zur Seite.
    //           </p>
    //           <h2 className="zahngold_heading5">
    //             Ankaufspreise für Goldlegierungen in Euro
    //           </h2>
    //           <div className="hamburg_table_wrapper table-responsive">
    //             <table class="hamburg_table">
    //               <thead>
    //                 <tr>
    //                   <th>Legierung</th>
    //                   <th>1 Gramm</th>
    //                   <th>5 Gramm</th>
    //                   <th>20 Gramm</th>
    //                   <th>50 Gramm</th>
    //                 </tr>
    //               </thead>
    //               <tbody>
    //                 <tr>
    //                   <td>999 Gold</td>
    //                   <td>56,90 €</td>
    //                   <td>284,50 €</td>
    //                   <td>284,50 €</td>
    //                   <td>284,50 €</td>
    //                 </tr>
    //                 <tr style={{ backgroundColor: "#D1F6F9" }}>
    //                   <td>900 Gold</td>
    //                   <td>50,68 €</td>
    //                   <td>253,40 €</td>
    //                   <td>253,40 €</td>
    //                   <td>253,40 €</td>
    //                 </tr>
    //                 <tr>
    //                   <td>750 Gold</td>
    //                   <td>42,65 €</td>
    //                   <td>213,25 €</td>
    //                   <td>213,25 €</td>
    //                   <td>213,25 €</td>
    //                 </tr>
    //                 <tr style={{ backgroundColor: "#D1F6F9" }}>
    //                   <td>585 Gold</td>
    //                   <td>33,32 €</td>
    //                   <td>166,60 €</td>
    //                   <td>166,60 €</td>
    //                   <td>166,60 €</td>
    //                 </tr>
    //                 <tr>
    //                   <td>375 Gold</td>
    //                   <td>20,77 €</td>
    //                   <td>103,85 €</td>
    //                   <td>103,85 €</td>
    //                   <td>103,85 €</td>
    //                 </tr>
    //                 <tr style={{ backgroundColor: "#D1F6F9" }}>
    //                   <td>333 Gold</td>
    //                   <td>19,03 €</td>
    //                   <td>95,15 €</td>
    //                   <td>95,15 €</td>
    //                   <td>95,15 €</td>
    //                 </tr>
    //               </tbody>
    //             </table>
    //           </div>
    //         </div>
    //         <div className="zahngold_pricevalue_form">
    //           <PriceValueForm3 />
    //         </div>
    //         <h2 className="zahngold_goldrechner">Goldrechner</h2>
    //         <div className="zahngold_valuecalc">
    //           <h2 className="zahngold_valuecalc_heading">
    //             Berechnen Sie den Wert Ihrer Edelmetalle
    //           </h2>
    //           <form action="">
    //             <div className="zahngold_valuecalc_form">
    //               <div className="d-flex align-items-center value-calculate-input">
    //                 <label className="lbl">Gramm</label>
    //                 <input className="form-control" name="gramm" type="text" />
    //               </div>
    //               <div className="d-flex align-items-center justify-content-center position-relative value-calculate-select">
    //                 <label className="lbl">Karat</label>
    //                 <select className="form-select mb-0">
    //                   <option selected="">Bitte auswählen</option>
    //                   <option value="1">One</option>
    //                   <option value="2">Two</option>
    //                   <option value="3">Three</option>
    //                 </select>
    //               </div>
    //               <div className="zahngold_valuecalc_btn">
    //                 <Button
    //                   btnText="Jetzt Wert berechnen"
    //                   height="33px"
    //                   borderRadius="100px"
    //                   width="180px"
    //                   fontSize="14px"
    //                   margin="10px 0px"
    //                   backgroundColor="#DBA12F"
    //                 />
    //               </div>
    //             </div>
    //           </form>
    //         </div>
    //         <div className="">
    //           <h2 className="zahngold_last_heading">
    //             Wir kaufen an: (Beispiele)
    //           </h2>
    //           <div className="">
    //             <ul className="ablauf_info_list row">
    //               {zahngoldkaufen1.map((item, index) => {
    //                 return (
    //                   <div className="col-6 col-md-6 col-lg-6 " key={index}>
    //                     <li>
    //                       <span style={{ color: "#019BA5" }}>•</span> {item.txt}
    //                     </li>
    //                   </div>
    //                 );
    //               })}
    //             </ul>
    //           </div>
    //           <h2 className="zahngold_last_heading">
    //             Ablauf Goldankauf Hamburg
    //           </h2>
    //           <p className="zahngold_lastpara1">
    //             Wir haben viel Wert darauf gelegt, den Ablauf für einen
    //             Goldankauf in Hamburg so einfach wie nur möglich für unsere
    //             Kunden zu gestalten. Im ersten Schritt bestellen Sie bitte eine
    //             kostenlose Versandtasche über unsere Webseite. Diese wird dann
    //             umgehend verpackt und mit allen weiteren notwendigen Unterlagen
    //             an Sie versendet. Sobald die Versandtasche bei Ihnen eingeht,
    //             müssen Sie diese mit Ihrem Gold befüllen und bei der nächsten
    //             Postfiliale abgeben.
    //           </p>
    //           <p className="zahngold_lastpara2">
    //             Selbstverständlich entstehen Ihnen dafür keine Kosten und die
    //             Sendung ist bis zu einem Wert von 1.000 Euro versichert. Sollten
    //             Sie größere Werte verkaufen wollen, kommt entweder der
    //             Wertversand oder die Abholung mit Werttransport infrage. Genaue
    //             Informationen zum Thema liefert unsere Verkaufsanleitung oder
    //             Sie nehmen direkt mit unserem Kundenservice Kontakt auf. Uns ist
    //             es wichtig, dass der gesamte Goldankauf vertrauensvoll und zu
    //             Ihrer vollsten Zufriedenheit verläuft.
    //           </p>
    //           <p className="zahngold_lastpara2">
    //             Bei Fragen und Anregungen nehmen Sie bitte immer Kontakt zu uns
    //             auf. Wir arbeiten dann gemeinsam an einer Lösung, sodass Sie
    //             schnell den Ankaufsbetrag ausgezahlt bekommen und uns vielleicht
    //             sogar in Ihrem Bekanntenkreis weiterempfehlen werden.
    //           </p>
    //         </div>
    //         <div>
    //           <h2 className="zahngold_last_heading">
    //             Scheideanstalt für Hamburg
    //           </h2>
    //           <div className="">
    //             <ul className="ablauf_info_list row">
    //               {zahngoldkaufen2.map((item, index) => {
    //                 return (
    //                   <div className="col-6 col-md-6 col-lg-6 " key={index}>
    //                     <li>
    //                       <span style={{ color: "#019BA5" }}>•</span> {item.txt}
    //                     </li>
    //                   </div>
    //                 );
    //               })}
    //             </ul>
    //           </div>
    //         </div>
    //         <div className="zahngold123_section">
    //           <h2 className="zahngold123_sec_heading">
    //             Zahngold123.de ist ein reiner Online Ankäufer
    //           </h2>
    //           <div className="zahngold_list_wrapper">
    //             <ul>
    //               {ZahngoldBlickArray.map((item, index) => {
    //                 return (
    //                   <li key={index}>
    //                     <div className="zahngold_list_img">{item.tickIcon}</div>
    //                     <p className="zahngold_list_para">{item.listText}</p>
    //                   </li>
    //                 );
    //               })}
    //             </ul>
    //           </div>
    //         </div>
    //         <div className="img_box_wrapepr">
    //           <div className="img_box">
    //             <Image src={HamburgLastImg} alt="" />
    //             <div className="zahngold_last_img_wrapper">
    //               <div className="zahngold_last_img_wrapper_body">
    //                 <div>
    //                   <p className="wir_verkaufer_name">Goldankauf Berlin</p>
    //                 </div>
    //                 <div className="wir_verkaufer_btn">
    //                   <div className="wir_verkaufer_btn_arrow">
    //                     <BtnArrowMobile />
    //                     <BtnArrow />
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-12 col-md-12 col-lg-4">
    //         <div className="">
    //           <div className="d-none d-lg-flex wirkaufen_page_price">
    //             <PriceValueForm />
    //           </div>
    //           <KitcoGoldTab />
    //           <EtrusredShop2 />
    //           <InformationCard />
    //           <Ekomi marginTop="15px" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default page;
