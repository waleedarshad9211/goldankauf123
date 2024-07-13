import Button from "@/components/shared/button/Button";
import Image from "next/image";
import SmilingExecutive from "/public/assets/img/contact_smiling_executive.png";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import blauroLogo from "/public/assets/img/BELAURO-LOGO.png";

const Contact = () => {
  return (
    <section className="contact_section">
      <div className="container">
        <Breadcrumbs />
        <div className="contact_wrapper">
          <div className="row">
            <div className="col-12 col-md-8">
              <h2 className="contact_wrapper_heading1">
                Nehmen Sie Kontakt zu moneyGold.de auf
              </h2>
              <p className="contact_wrapper_para1">
                Ob per Telefon, E-Mai oder Kontaktformular:
              </p>
              <p className="contact_wrapper_para2">
                Wir sind jederzeit für Sie erreichbar und helfen Ihnen immer
                gerne und schnell bei Ihren Fragen weiter.
              </p>
              <form>
                <div className="row">
                  <div className="col-12 col-md-8">
                    <div className="contact_wrapper_salute_radio">
                      <div className="contact_wrapper_salute">Anrede</div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          for="flexRadioDefault1"
                        >
                          Herr
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label
                          className="form-check-label"
                          for="flexRadioDefault2"
                        >
                          Frau
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label
                          className="form-check-label"
                          for="flexRadioDefault2"
                        >
                          Firma
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact_form_input">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="contactVorname"
                        placeholder="Vorname"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="contactNachname"
                        placeholder="Nachname"
                      />
                    </div>
                    <div className="col-12 col-md-12">
                      <input
                        type="email"
                        className="form-control"
                        id="contactEmail"
                        placeholder="E-Mail"
                      />
                    </div>
                    <div className="col-12 col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        id="contactBetreff"
                        placeholder="Betreff"
                      />
                    </div>
                    <div className="col-12 col-md-12">
                      <textarea
                        className="form-control"
                        id="contactTextArea"
                        rows="6"
                        placeholder="Ihre Nachricht"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <p className="contact_form_input_txt">
                  Ich akzeptiere die AGB. Ich habe die Datenschutzerklärung
                  gelesen und zur Kenntnis genommen. Ich stimme zu, dass meine
                  Angaben und Daten zur Beantwortung meiner Anfrage elektronisch
                  erhoben und gespeichert werden.
                </p>
                <div className="contact_form_submit_btn">
                  <Button
                    btnText="Nachricht absenden"
                    width="330px"
                    height="41px"
                    borderRadius="10px"
                    margin="25px 0px 0px 0px"
                    backgroundColor="#C8E5E0"
                    color="#121212"
                    boxShadow="-0.035px 2px 3px 0px rgba(6, 0, 14, 0.2)"
                  />
                </div>
              </form>
            </div>
            <div className="col-12 col-md-4">
              <div className="contact_wrapper_card">
                <div className="contact_wrapper_card_upper_div">
                  <h2 className="contact_wrapper_card_upper_div_heading">
                    KUNDENSUPPORT
                  </h2>
                  <div className="contact_wrapper_card_upper_div_img ">
                    <Image
                      src={SmilingExecutive}
                      alt="contact smilling executive"
                      className="img-fluid"
                    />
                  </div>
                  <div className="contact_wrapper_card_upper_div_heading_wrapper"></div>
                  <div className="contact_phone_fax">
                    <span className="fw-bold">Fon: 040 76116444</span>
                    <br />
                    <span>(Mo. - Fr. 10.00 - 15.00 Uhr)</span>
                    <br />
                    <span>Fax: 040 76115867</span>
                    <br />
                    <span>info@goldankauf123.de</span>
                  </div>
                </div>
                <div className="contact_wrapper_card_lower_div">
                  <div className="text-center ">
                    <span className="fw-bold">Goldankauf123.de ist ein</span>{" "}
                    <br />
                    Service der Firma
                    <br />
                    <div className="d-flex justify-content-center align-items-center">
                      <Image src={blauroLogo} alt="" />
                    </div>
                    <span className="fw-bold">Belauro GmbH</span>
                    <br />
                    Blaumeisenweg 22
                    <br />
                    21077 Hamburg
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
