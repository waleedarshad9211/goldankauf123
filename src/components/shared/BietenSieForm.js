import Image from "next/image";
import Button from "./button/Button";
import EkomiVector from "/public/assets/img/ekomi-vektor.png";
import TrustedShops from "/public/assets/img/trusted-shops.png";
import Trustami from "/public/assets/img/hero-trustami.png";
import Check49 from "/public/assets/img/banking_check4-9.png";
import ProvenExpert from "/public/assets/img/proven-expert.png";

const BietenSieForm = ({
  heading = "",
  luxusehren = false,
  diamanten = false,
  textareaHeading = "",
  termsLabel = "",
  className = "",
}) => {
  return (
    <div
      className={
        luxusehren
          ? "bieten_sie_form_luxusehren position-relative overflow-hidden"
          : "bieten_sie_form position-relative overflow-hidden "
      }
    >
      <a className="bieten_sie_form_kostenlos" href="#">
        <p>
          Kostenlos<br></br>bewerten lassen
        </p>
      </a>
      {diamanten && (
        <h2 className="bieten_sie_form_heading1 d-none d-md-block d-lg-block">
          Bieten Sie uns lhre Diamanten an!
        </h2>
      )}
      {diamanten && (
        <h2 className="bieten_sie_form_heading1 d-block d-md-none d-lg-none">
          Bieten Sie uns<br></br> lhre Diamanten an!
        </h2>
      )}
      {luxusehren && (
        <h2 className="bieten_sie_form_heading1 d-none d-md-block d-lg-block">
          Bieten Sie uns lhre Uhr an!
        </h2>
      )}
      {luxusehren && (
        <h2 className="bieten_sie_form_heading1 d-block d-md-none d-lg-none">
          Bieten Sie uns<br></br> lhre Uhr an!
        </h2>
      )}
      <form>
        <div className="row">
          <div className="col-12 col-md-6">
            {luxusehren && (
              <div className="bieten_sie_form_label_input">
                <label>Marke</label>
                <select
                  className="bieten_sie_form_select form-select "
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            )}
            {diamanten && (
              <div className="bieten_sie_form_label_input">
                <label>Karat</label>
                <select
                  className="bieten_sie_form_select form-select"
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            )}
          </div>
          <div className="col-12 col-md-6">
            {luxusehren && (
              <div className="bieten_sie_form_label_input">
                <label className="material">Gehäuse / Material</label>
                <select
                  className="bieten_sie_form_select form-select bieten_sie_form_select_material"
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            )}
            {diamanten && (
              <div className="bieten_sie_form_label_input">
                <label>Farbe</label>
                <select
                  className="bieten_sie_form_select form-select "
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            )}
          </div>
          <div className="col-12 col-md-6">
            {luxusehren && (
              <div className="bieten_sie_form_label_input">
                <label>Modell</label>
                <select
                  className="bieten_sie_form_select form-select "
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            )}
            {diamanten && (
              <div className="bieten_sie_form_label_input">
                <label>Diamantenform</label>
                <select
                  className="bieten_sie_form_select form-select "
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            )}
          </div>
          <div className="col-12 col-md-6">
            {luxusehren && (
              <div className="bieten_sie_form_label_input">
                <label>Material Armband</label>
                <select
                  className="bieten_sie_form_select form-select "
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            )}
            {diamanten && (
              <div className="bieten_sie_form_label_input">
                <label>Schliff</label>
                <select
                  className="bieten_sie_form_select form-select "
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            )}
          </div>
          <div className="col-12 col-md-6">
            {luxusehren && (
              <div className="bieten_sie_form_label_input">
                <label>Kaufdatum</label>
                <input type="text" placeholder="Kaufdatum*" />
              </div>
            )}
            {diamanten && (
              <div className="bieten_sie_form_label_input">
                <label>Rheinheit</label>
                <select
                  className="bieten_sie_form_select form-select "
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            )}
          </div>
          <div className="col-12 col-md-6">
            {luxusehren && (
              <div className="bieten_sie_form_label_input">
                <label>Kaufland</label>
                <input type="text" placeholder="Kaufland*" />
              </div>
            )}
            {diamanten && (
              <div className="bieten_sie_form_label_input">
                <label>Zertifikat</label>
                <select
                  className="form-select bieten_sie_form_select"
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            )}
          </div>
        </div>
        {diamanten && (
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="bieten_sie_form_label_input">
                <label>Verpackung</label>
                <select
                  className="bieten_sie_form_select form-select "
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="bieten_sie_form_label_input">
                <label>Preisvorstellung</label>
                <input type="text" placeholder="Preisvorstellung" />
              </div>
            </div>
          </div>
        )}
        {luxusehren && (
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="d-flex justify-content-center text-center ">
                <h3 className="bieten_sie_form_heading2">Zustand und Umfang</h3>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="bieten_sie_form_label_input">
                <label>Zustand</label>
                <select
                  className="bieten_sie_form_select form-select "
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="bieten_sie_form_label_input">
                <label>Inkl. Box?</label>
                <select
                  className="bieten_sie_form_select form-select "
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="bieten_sie_form_label_input">
                <label>Inkl. Papieren?</label>
                <select
                  className="bieten_sie_form_select form-select "
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="bieten_sie_form_label_input">
                <label>lhr Wunschpreis</label>
                <select
                  className="bieten_sie_form_select form-select "
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
        )}
        {luxusehren && (
          <div className="row">
            <div className="col-12">
              <div className="bieten_sie_form_bilder">
                <h3 className="bieten_sie_form_heading3">Bilder der Uhr</h3>
                <div className="bieten_sie_form_bilder_input">
                  <input
                    type="text"
                    placeholder="Bisher keine Bilder ausgewählt"
                  />
                  <Button
                    btnText="Bild auswählen"
                    height="26px"
                    borderRadius="10px"
                    backgroundColor="#C8E6E0"
                  />
                </div>
                <div className="bieten_sie_form_bilder_input">
                  <input
                    type="text"
                    placeholder="Bisher keine Bilder ausgewählt"
                  />
                  <Button
                    btnText="Bild auswählen"
                    height="26px"
                    borderRadius="10px"
                    backgroundColor="#C8E6E0"
                  />
                </div>
                <div className="bieten_sie_form_bilder_input">
                  <input
                    type="text"
                    placeholder="Bisher keine Bilder ausgewählt"
                  />
                  <Button
                    btnText="Bild auswählen"
                    height="26px"
                    borderRadius="10px"
                    backgroundColor="#C8E6E0"
                  />
                </div>
                <div className="bieten_sie_form_bilder_input">
                  <input
                    type="text"
                    placeholder="Bisher keine Bilder ausgewählt"
                  />
                  <Button
                    btnText="Bild auswählen"
                    height="26px"
                    borderRadius="10px"
                    backgroundColor="#C8E6E0"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {diamanten && (
          <div className="row">
            <div className="col-12">
              <div className="bieten_sie_form_bilder">
                <h3 className="bieten_sie_form_heading3">
                  Bilder der Diamanten bzw. Zertifikate
                </h3>
                <div className="bieten_sie_form_bilder_input ">
                  <input
                    type="text"
                    placeholder="Bisher keine Bilder ausgewählt"
                  />
                  <Button
                    btnText="Bild auswählen"
                    height="26px"
                    borderRadius="10px"
                    backgroundColor="#C8E6E0"
                  />
                </div>
                <div className="bieten_sie_form_bilder_input">
                  <input
                    type="text"
                    placeholder="Bisher keine Bilder ausgewählt"
                  />
                  <Button
                    btnText="Bild auswählen"
                    height="26px"
                    borderRadius="10px"
                    backgroundColor="#C8E6E0"
                  />
                </div>
                <div className="bieten_sie_form_bilder_input">
                  <input
                    type="text"
                    placeholder="Bisher keine Bilder ausgewählt"
                  />
                  <Button
                    btnText="Bild auswählen"
                    height="26px"
                    borderRadius="10px"
                    backgroundColor="#C8E6E0"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5">
            <h3 className=" bieten_sie_form_heading4">lhre Kontaktdaten</h3>
            <div className="bieten_sie_form_label_input">
              <label>Vorname</label>
              <input type="text" placeholder="Vorname" />
            </div>
            <div className="bieten_sie_form_label_input">
              <label>Nachname</label>
              <input type="text" placeholder="Nachname" />
            </div>
            <div className="bieten_sie_form_label_input">
              <label>Email</label>
              <input type="text" placeholder="Email" />
            </div>
            <div className="bieten_sie_form_label_input">
              <label>Telefon</label>
              <input type="text" placeholder="Telefon" />
            </div>
          </div>
          <div className="d-none d-lg-block col-lg-1"></div>
          <div className="col-12 col-md-6 col-lg-5">
            <h3 className="bieten_sie_form_heading5">{textareaHeading}</h3>
            <div className="bieten_sie_form_label_input bieten_sie_form_last_input">
              <textarea rows={5} placeholder="Nachricht" />
            </div>
          </div>
        </div>
        {luxusehren && (
          <div class="form-check bieten_sie_form_last_checkbox">
            <input
              className="form-check-input"
              type="checkbox"
              id="bieten_sie_form_checkbox"
            />
            <label className="form-check-label" for="bieten_sie_form_checkbox">
              Ich habe die Datenschutzbestimmungen zur Kenntnis genommen.
            </label>
          </div>
        )}
        <div className="d-flex justify-content-center bieten_sie_form_logos">
          <Image
            src={EkomiVector}
            alt=""
            width={75}
            height={80}
            style={{ marginTop: "-4px" }}
          />
          <Image src={TrustedShops} alt="" width={70} height={70} />
          <Image src={Trustami} alt="" width={70} height={70} />
          <Image src={Check49} alt="" width={70} height={70} />
          <Image
            src={ProvenExpert}
            alt=""
            width={87}
            height={90}
            style={{ marginTop: "-10px" }}
          />
        </div>
        <div className="d-flex justify-content-center">
          <Button
            btnText="Anfrage senden"
            height="38px"
            width="256px"
            color="#121212"
            margin="25px 0px 10px 0px"
            padding="1px 10px"
            borderRadius="10px"
            backgroundColor="#C8E6E0"
            box-shadow="1.03px 1.714px 5px 0px rgba(35, 31, 32, 0.15)"
          />
        </div>
      </form>
    </div>
  );
};

export default BietenSieForm;
