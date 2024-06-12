import Button from "@/components/shared/button/Button";
import Image from "next/image";
import SmilingExecutive from "/public/assets/img/contact_smiling_executive.png";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";

const Contact = () => {
  return (
    <div></div>
    // <section className="contact_section">
    //   <div className="container">
    //     <Breadcrumbs />
    //     <div className="contact_wrapper">
    //       <div className="row">
    //         <div className="col-12 col-md-8">
    //           <h2 className="contact_wrapper_heading1">
    //             Nehmen Sie Kontakt zu moneyGold.de auf
    //           </h2>
    //           <p className="contact_wrapper_para1">
    //             Ob per Telefon, E-Mail, Kontaktformular oder über unseren
    //             Live-Chat: wir sind jederzeit für Sie erreichbar und helfen
    //             Ihnen immer gerne und schnell bei Ihren Fragen weiter.
    //           </p>

    //           <form>
    //             <div className="row">
    //               <div className="col-12 col-md-6">
    //                 <div className="contact_wrapper_salute_radio">
    //                   <div className="contact_wrapper_salute">Anrede</div>
    //                   <div className="form-check">
    //                     <input
    //                       className="form-check-input"
    //                       type="radio"
    //                       name="flexRadioDefault"
    //                       id="flexRadioDefault1"
    //                     />
    //                     <label
    //                       className="form-check-label"
    //                       for="flexRadioDefault1"
    //                     >
    //                       Herr
    //                     </label>
    //                   </div>
    //                   <div className="form-check">
    //                     <input
    //                       className="form-check-input"
    //                       type="radio"
    //                       name="flexRadioDefault"
    //                       id="flexRadioDefault2"
    //                     />
    //                     <label
    //                       className="form-check-label"
    //                       for="flexRadioDefault2"
    //                     >
    //                       Frau
    //                     </label>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="contact_form_input">
    //               <div className="row">
    //                 <div className="col-12 col-md-6">
    //                   <input
    //                     type="text"
    //                     className="form-control"
    //                     id="contactVorname"
    //                     placeholder="Vorname"
    //                   />
    //                 </div>
    //                 <div className="col-12 col-md-6">
    //                   <input
    //                     type="text"
    //                     className="form-control"
    //                     id="contactNachname"
    //                     placeholder="Nachname"
    //                   />
    //                 </div>
    //                 <div className="col-12 col-md-12">
    //                   <input
    //                     type="email"
    //                     className="form-control"
    //                     id="contactEmail"
    //                     placeholder="E-Mail"
    //                   />
    //                 </div>
    //                 <div className="col-12 col-md-12">
    //                   <input
    //                     type="text"
    //                     className="form-control"
    //                     id="contactBetreff"
    //                     placeholder="Betreff"
    //                   />
    //                 </div>
    //                 <div className="col-12 col-md-12">
    //                   <textarea
    //                     className="form-control"
    //                     id="contactTextArea"
    //                     rows="6"
    //                     placeholder="Ihre Nachricht"
    //                   ></textarea>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="contact_form_submit_btn">
    //               <Button
    //                 btnText="Nachricht absenden"
    //                 width="330px"
    //                 height="41px"
    //                 borderRadius="30px"
    //                 margin="25px 0px 0px 0px"
    //                 backgroundColor="#019BA5"
    //                 color="#ffffff"
    //                 boxShadow="-0.035px 2px 3px 0px rgba(6, 0, 14, 0.2)"
    //               />
    //             </div>
    //           </form>
    //         </div>
    //         <div className="col-12 col-md-4">
    //           <div className="contact_wrapper_card">
    //             <div className="contact_wrapper_card_upper_div">
    //               <div className="contact_wrapper_card_upper_div_img ">
    //                 <Image
    //                   src={SmilingExecutive}
    //                   alt="contact smilling executive"
    //                   className="img-fluid"
    //                 />
    //               </div>
    //               <div className="contact_wrapper_card_upper_div_heading_wrapper">
    //                 <h2 className="contact_wrapper_card_upper_div_heading">
    //                   KUNDENSUPPORT
    //                 </h2>
    //               </div>
    //               <div className="contact_phone_fax">
    //                 <span className="">HOTLINE</span>{" "}
    //                 <span className="fw-bold">040 64539254</span>
    //                 <br />
    //                 <span className="">FAX</span>{" "}
    //                 <span className="fw-bold">040 76118502</span>
    //                 <br />
    //                 <span>MO - DO 10 - 17 UHR</span>
    //                 <br />
    //                 <span>FR 10-15 UHR</span>
    //                 <br />
    //                 <span>info@zahngold123.de</span>
    //               </div>
    //             </div>
    //             <div className="contact_wrapper_card_lower_div">
    //               <div className="text-center text-white">
    //                 <span className="fw-bold">Zahngold123.de</span> <br />
    //                 ist ein Service der Firma
    //                 <br />
    //                 <span className="fw-bold">Elias Consulting GmbH</span>
    //                 <br />
    //                 Strucksbarg 33a <br />
    //                 21077 Hamburg
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Contact;
