import Image from "next/image";
import Button from "./button/Button";
import EkomiVektor from "/public/assets/img/ekomi-vektor.png";
import TrustedShops from "/public/assets/img/trusted-shops.png";
import Trustami1 from "/public/assets/img/hero-trustami.png";
import BankingCheck49 from "/public/assets/img/banking_check4-9.png";
import ProvenExpert from "/public/assets/img/proven-expert.png";
import GoldenKauf1 from "public/assets/img/homepage/goldankauf_bestellen_home.png";
import GoldenKauf2 from "/public/assets/img/homepage/goldankauf_gold_versederten_home.png";
import GoldenKauf3 from "/public/assets/img/homepage/goldankauf_angebot_home.png";
import GoldenKauf4 from "/public/assets/img/homepage/goldankauf_zahlung_home.png";
// import GoldanNum1 from "/public/assets/img/homepage/goldankauf_1_home.png";
// import GoldanNum2 from "/public/assets/img/homepage/goldankauf_2_home.png";
// import GoldanNum3 from "/public/assets/img/homepage/goldankauf_3_home.png";
// import GoldanNum4 from "/public/assets/img/homepage/goldankauf_4_home.png";
import GoldankaufArrow from "/public/assets/img/homepage/goldankauf_arrow_home.png";

const PriceValueForm3 = () => {
  return (
    <div></div>
    // <div className="position-relative overflow-hidden form-column price_value_form2 price_value_form3">
    //   <a class="sold_out" href="#">
    //     <div class="sold_out_text">Kostenlos</div>
    //   </a>

    //   <div className="">
    //     <div className="golden-fauf">
    //       <h2 className="text-center">Goldankauf in nur 4 Schritten</h2>
    //       <p className="para text-center">
    //         Detaillierte Informationen finden Sie{" "}
    //         <span style={{ textDecoration: "underline" }}>hier</span>
    //       </p>
    //     </div>
    //     <div className="pricevalue_form3_cards row">
    //       <div className="col-6 col-lg-3 golden_fauf_card_col">
    //         <div className="golden_fauf_card">
    //           <div className="golden_fauf_card_body">
    //             <div>
    //               <Image
    //                 src={GoldanNum1}
    //                 alt=""
    //                 className="golden_fauf_num_img"
    //                 width={28.58}
    //                 height={28.59}
    //               />
    //             </div>
    //             <div className="golden_fauf_card_inner golden_fauf_card_inner_first">
    //               <Image src={GoldenKauf1} alt="" width={29} height={53} />
    //             </div>
    //             <div className="goldenkauf_arrow_home_wrapper">
    //               <div className="goldenkauf_arrow_home">
    //                 <Image
    //                   src={GoldankaufArrow}
    //                   alt=""
    //                   width={28.12}
    //                   height={28.13}
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //           <div className="golden_fauf_card_text">
    //             <p>
    //               Versandtasche <br />
    //               Bestellen
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-6 col-lg-3 golden_fauf_card_col">
    //         <div className="golden_fauf_card">
    //           <div className="golden_fauf_card_body golden_fauf_card_bod2">
    //             <div>
    //               <Image
    //                 src={GoldanNum2}
    //                 alt=""
    //                 className="golden_fauf_num_img"
    //                 width={28.58}
    //                 height={28.59}
    //               />
    //             </div>
    //             <div className="golden_fauf_card_inner">
    //               <Image src={GoldenKauf2} alt="" width={52} height={48} />
    //             </div>
    //             <div className="golden_fauf_card_body_epmty d-flex d-md-none d-lg-none"></div>
    //             <div className="goldenkauf_arrow_home_wrapper goldenkauf_arrow_home_wrapper2 d-none d-md-flex d-lg-flex">
    //               <div className="goldenkauf_arrow_home">
    //                 <Image
    //                   src={GoldankaufArrow}
    //                   alt=""
    //                   width={28.12}
    //                   height={28.13}
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //           <div className="golden_fauf_card_text">
    //             <p>
    //               Gold
    //               <br />
    //               versenden
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-6 col-lg-3 golden_fauf_card_col">
    //         <div className="golden_fauf_card">
    //           <div className="golden_fauf_card_body">
    //             <div>
    //               <Image
    //                 src={GoldanNum3}
    //                 alt=""
    //                 className="golden_fauf_num_img"
    //                 width={28.58}
    //                 height={28.59}
    //               />
    //             </div>
    //             <div className="golden_fauf_card_inner">
    //               <Image src={GoldenKauf3} alt="" width={43} height={51} />
    //             </div>
    //             <div className="goldenkauf_arrow_home_wrapper">
    //               <div className="goldenkauf_arrow_home">
    //                 <Image
    //                   src={GoldankaufArrow}
    //                   alt=""
    //                   width={28.12}
    //                   height={28.13}
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //           <div className="golden_fauf_card_text">
    //             <p>
    //               Angebot
    //               <br />
    //               erhalten
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-6 col-lg-3 golden_fauf_card_col">
    //         <div className="golden_fauf_card">
    //           <div className="golden_fauf_card_body golden_fauf_card_body4">
    //             <div>
    //               <Image
    //                 src={GoldanNum4}
    //                 alt=""
    //                 className="golden_fauf_num_img"
    //                 width={28.58}
    //                 height={28.59}
    //               />
    //             </div>
    //             <div className="golden_fauf_card_inner golden_fauf_card_innerlast_child">
    //               <Image src={GoldenKauf4} alt="" width={53} height={44} />
    //             </div>
    //             <div className="golden_fauf_card_body_epmty"></div>
    //           </div>
    //           <div className="golden_fauf_card_text">
    //             <p>
    //               Zahlung
    //               <br />
    //               erhalten
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="pricevalue_form3_cards_mobile">
    //       <div className="golden_fauf_card">
    //         <div className="golden_fauf_card_body">
    //           <div>
    //             <Image
    //               src={GoldanNum1}
    //               alt=""
    //               className="golden_fauf_num_img"
    //               width={28.58}
    //               height={28.59}
    //             />
    //           </div>
    //           <div className="golden_fauf_card_inner golden_fauf_card_inner_first">
    //             <Image src={GoldenKauf1} alt="" width={29} height={53} />
    //           </div>
    //           <div className="golden_fauf_card_body_epmty"></div>
    //         </div>
    //         <div className="golden_fauf_card_text">
    //           <p>
    //             Versandtasche <br />
    //             Bestellen
    //           </p>
    //         </div>
    //       </div>
    //       <div className="golden_fauf_card">
    //         <div className="golden_fauf_card_body">
    //           <div>
    //             <Image
    //               src={GoldanNum2}
    //               alt=""
    //               className="golden_fauf_num_img"
    //               width={28.58}
    //               height={28.59}
    //             />
    //           </div>
    //           <div className="golden_fauf_card_inner">
    //             <Image src={GoldenKauf2} alt="" width={52} height={48} />
    //           </div>
    //           <div className="golden_fauf_card_body_epmty"></div>
    //         </div>
    //         <div className="golden_fauf_card_text">
    //           <p>
    //             Gold
    //             <br />
    //             versenden
    //           </p>
    //         </div>
    //       </div>
    //       <div className="golden_fauf_card">
    //         <div className="golden_fauf_card_body">
    //           <div>
    //             <Image
    //               src={GoldanNum3}
    //               alt=""
    //               className="golden_fauf_num_img"
    //               width={28.58}
    //               height={28.59}
    //             />
    //           </div>
    //           <div className="golden_fauf_card_inner">
    //             <Image src={GoldenKauf3} alt="" width={43} height={51} />
    //           </div>
    //           <div className="golden_fauf_card_body_epmty"></div>
    //         </div>
    //         <div className="golden_fauf_card_text">
    //           <p>
    //             Angebot
    //             <br />
    //             erhalten
    //           </p>
    //         </div>
    //       </div>
    //       <div className="golden_fauf_card">
    //         <div className="golden_fauf_card_body">
    //           <div>
    //             <Image
    //               src={GoldanNum4}
    //               alt=""
    //               className="golden_fauf_num_img"
    //               width={28.58}
    //               height={28.59}
    //             />
    //           </div>
    //           <div className="golden_fauf_card_inner golden_fauf_card_innerlast_child">
    //             <Image src={GoldenKauf4} alt="" width={53} height={44} />
    //           </div>
    //           <div className="golden_fauf_card_body_epmty"></div>
    //         </div>
    //         <div className="golden_fauf_card_text">
    //           <p>
    //             Zahlung
    //             <br />
    //             erhalten
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <h3 className="price_value_form3_heading">
    //     Kostenlose Versandtasche bestellen
    //   </h3>
    //   <form>
    //     <div className="d-flex flex-column flex-md-row flex-lg-row">
    //       <div className="d-flex mb-3">
    //         <input
    //           type="text"
    //           className="form-control w-50 me-2"
    //           id="Vorname"
    //           placeholder="Vorname*"
    //         />
    //         <input
    //           type="text"
    //           className="form-control w-50 me-sm-0 me-xs-0 me-md-2"
    //           id="Nachname"
    //           placeholder="Nachname*"
    //         />
    //       </div>
    //       <div className="d-flex mb-3">
    //         <input
    //           type="text"
    //           className="form-control w-75 me-2"
    //           id="Straße"
    //           placeholder="Straße*"
    //         />
    //         <input
    //           type="text"
    //           className="form-control w-25"
    //           id="Nr."
    //           placeholder="Nr.*"
    //         />
    //       </div>
    //     </div>
    //     <div className="d-flex flex-column flex-md-row flex-lg-row">
    //       <div className="d-flex mb-3">
    //         <input
    //           type="text"
    //           className="form-control w-25 me-2"
    //           id="PLZ"
    //           placeholder="PLZ*"
    //         />
    //         <input
    //           type="text"
    //           className="form-control w-75 me-sm-0 me-xs-0 me-md-2"
    //           id="Wohnort"
    //           placeholder="Wohnort*"
    //         />
    //       </div>
    //       <div className="d-flex mb-3">
    //         <input
    //           type="text"
    //           className="form-control me-2"
    //           id="Telefon"
    //           placeholder="Telefon*"
    //         />
    //         <input
    //           type="text"
    //           className="form-control "
    //           id="E-Mail"
    //           placeholder="E-Mail*"
    //         />
    //       </div>
    //     </div>
    //   </form>
    //   <div className="d-flex justify-content-center flex-wrap gap-1">
    //     <Image
    //       className="trusted1"
    //       src={EkomiVektor}
    //       alt=""
    //       width="68"
    //       height="68"
    //       // style={{ marginTop: "-2px" }}
    //     />
    //     <Image
    //       className="trusted2"
    //       src={TrustedShops}
    //       alt=""
    //       width="68"
    //       height="68"
    //     />
    //     <Image
    //       className="trusted2"
    //       src={Trustami1}
    //       alt=""
    //       width="68"
    //       height="68"
    //     />
    //     <Image
    //       className="trusted2"
    //       src={BankingCheck49}
    //       alt=""
    //       width="68"
    //       height="68"
    //     />
    //     <Image
    //       className="trusted2 price_value3_proven_expert_img"
    //       src={ProvenExpert}
    //       alt=""
    //       width="86"
    //       height="86"
    //       style={{ marginTop: "-9px" }}
    //     />
    //   </div>

    //   <div className="price_value_form3_btn_submit">
    //     <Button
    //       btnText="Versandtasche bestellen"
    //       width="auto"
    //       borderRadius="100px"
    //       height="38px"
    //       fontSize="18px"
    //       fontWeight="bold"
    //       padding="1px 30px"
    //       margin="10px 0px 0px 0px"
    //       backgroundColor="#019BA5"
    //     />
    //   </div>
    // </div>
  );
};

export default PriceValueForm3;
