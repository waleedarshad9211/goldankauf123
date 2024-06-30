import Image from "next/image";
import Ntv from "/public/assets/img/ntv.png";
import TrustedShops from "/public/assets/img/trusted-shops.png";
import Trustami from "/public/assets/img/hero-trustami.png";
import provenExpert from "/public/assets/img/proven-expert.png";
import insuranceDHL from "/public/assets/img/insurance_bestellen.png";

export const PriceValueForm2 = ({
  bestellen = false,
  abThousand = false,
  eigenes = false,
  topHeading = "Versandtasche anfordern ",
  btnText = "",
}) => {
  return (
    <div className="price_value_form_wrapepr">
      <div className="position-relative overflow-hidden form-column price_value_form2">
        <a className="sold_out" href="#">
          <div className="sold_out_text">Kostenlos</div>
        </a>
        <h5 className="Kostenlos-heading">
          {topHeading} <br />
          <span className="" style={{ fontSize: "18px", fontWeight: "500" }}>
            Kostenlos &amp; Unverbindlich
          </span>
        </h5>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <form className="price_value_form2_form_left">
              <div className={abThousand ? "d-flex ab_f1" : "d-flex f1"}>
                <input
                  type="text"
                  className="form-control w-50 me-2"
                  id="Vorname"
                  placeholder="Vorname*"
                />
                <input
                  type="text"
                  className="form-control w-50"
                  id="Nachname"
                  placeholder="Nachname*"
                />
              </div>
              <div className={abThousand ? "d-flex ab_f1" : "d-flex f1"}>
                <input
                  type="text"
                  className="form-control w-75 me-2"
                  id="Straße"
                  placeholder="Straße*"
                />
                <input
                  type="text"
                  className="form-control w-25"
                  id="Nr."
                  placeholder="Nr.*"
                />
              </div>
              <div className={abThousand ? "d-flex ab_f1" : "d-flex f1"}>
                <input
                  type="text"
                  className="form-control w-25 me-2"
                  id="PLZ"
                  placeholder="PLZ*"
                />
                <input
                  type="text"
                  className="form-control w-75"
                  id="Wohnort"
                  placeholder="Wohnort*"
                />
              </div>
              <input
                type="text"
                className={
                  abThousand ? "form-control ab_f1" : "form-control f1"
                }
                id="Telefon"
                placeholder="Telefon*"
              />
              <input
                type="text"
                className={
                  abThousand ? "form-control ab_f1" : "form-control f1"
                }
                id="E-Mail"
                placeholder="E-Mail*"
              />
              {abThousand && (
                <div>
                  <select
                    className={
                      abThousand
                        ? "bestellen_select form-select ab_f1"
                        : "bestellen_select form-select f1"
                    }
                    aria-label="Default select"
                    defaultValue={
                      abThousand ? "Versicherungssumme" : "Versandtaschen"
                    }
                  >
                    {abThousand && <option>Versicherungssumme</option>}
                    <option>Versandtaschen</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              )}
            </form>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <form className="price_value_form2_form_right">
              {abThousand && (
                <select
                  className={
                    abThousand
                      ? "bestellen_select form-select ab_f1"
                      : "bestellen_select form-select f1"
                  }
                  aria-label="Default select"
                  defaultValue={"Versandtaschen"}
                >
                  <option>Abholdatum</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              )}
              {(abThousand || bestellen) && (
                <div>
                  <select
                    className={
                      abThousand
                        ? "bestellen_select form-select ab_f1"
                        : "bestellen_select form-select f1"
                    }
                    aria-label="Default select"
                    defaultValue={"Versandtaschen"}
                  >
                    <option>
                      {bestellen
                        ? "1 Versandtasche"
                        : abThousand
                        ? "Abholadresse wie angegeben"
                        : ""}
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              )}
              <div className="price_value2_textarea">
                <textarea
                  className="form-control "
                  id="comment"
                  rows={eigenes ? "6" : abThousand ? "3" : "8"}
                  placeholder={
                    "Hier können Sie unter anderem Beschreibungen über Ihre Sendung angeben."
                  }
                ></textarea>
              </div>
            </form>
          </div>
        </div>
        <div
          className={
            bestellen
              ? "price_value_form_bestellen_submit_btn d-flex d-md-none d-lg-none"
              : eigenes
              ? "price_value_form_eigenes d-flex d-md-none d-lg-none"
              : "price_value_form2_submit_btn d-flex d-md-none d-lg-none"
          }
        >
          <button type="submit" className="btn-bg">
            {abThousand
              ? "Abholung kostenlos buchen"
              : bestellen
              ? "Versandtasche kostenlos anfordern"
              : eigenes
              ? "DHL Paketschein kostenlos anfordern"
              : "Paketschein kostenlos anfordern"}
          </button>
        </div>
        <div className="row">
          <div className="col-12 col-m-12 col-lg-6">
            <div className="price_value_form2_last_line">
              <div className="white-line" />
              <p className="price_value_form2_last_txt">
                Garantierte Sicherheit
              </p>
              <div className="white-line" />
            </div>
          </div>
          <div className="col-12 col-m-12 col-lg-6 d-none d-md-block d-lg-block">
            <div className="price_value_form2_bestellen_last_txt_wrapper">
              <Image src={insuranceDHL} alt="" />
              <p className="price_value_form2_bestellen_last_txt">
                Die Versandtasche (DHL) ist bis 1.500 € versichert.
              </p>
            </div>
          </div>
        </div>

        <div className="price_value_form2_last_part">
          <div className="d-flex align-items-center gap-2 trusted-shops">
            <Image
              className="trusted"
              src={Ntv}
              alt=""
              width={abThousand ? "70" : "70"}
              height={abThousand ? "70" : "70"}
            />
            <Image
              className="trusted"
              src={TrustedShops}
              alt=""
              width={abThousand ? "70" : "70"}
              height={abThousand ? "70" : "70"}
            />
            <Image
              className="trusted"
              src={Trustami}
              alt=""
              width={abThousand ? "70" : "70"}
              height={abThousand ? "70" : "70"}
            />
            <Image
              className="trusted proven_expert"
              src={provenExpert}
              alt=""
              width={"87"}
              height={"69"}
            />
          </div>
          <div className="d-block d-md-none d-lg-none">
            <div className="price_value_form2_bestellen_last_txt_wrapper">
              <Image src={insuranceDHL} alt="" />
              <p className="price_value_form2_bestellen_last_txt">
                Die Versandtasche (DHL) ist bis 1.500 € versichert.
              </p>
            </div>
          </div>
          <div
            className={
              bestellen
                ? "price_value_form_bestellen_submit_btn d-none d-md-flex d-lg-flex"
                : eigenes
                ? "price_value_form_eigenes d-none d-md-flex d-lg-flex"
                : "price_value_form2_submit_btn d-none d-md-flex d-lg-flex"
            }
          >
            <button type="submit" className="btn-bg">
              {abThousand
                ? "Abholung kostenlos buchen"
                : bestellen
                ? "Versandtasche kostenlos anfordern"
                : eigenes
                ? "DHL Paketschein kostenlos anfordern"
                : "Paketschein kostenlos anfordern"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
