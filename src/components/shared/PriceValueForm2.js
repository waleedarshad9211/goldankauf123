import Image from "next/image";
import EkomiVektor from "/public/assets/img/ekomi-vektor.png";
import TrustedShops from "/public/assets/img/trusted-shops.png";

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
              <div className={abThousand ? "d-flex mb-2" : "d-flex mb-3"}>
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
              <div className={abThousand ? "d-flex mb-2" : "d-flex mb-3"}>
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
              <div className={abThousand ? "d-flex mb-2" : "d-flex mb-3"}>
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
                  abThousand ? "form-control my-2" : "form-control my-3"
                }
                id="Telefon"
                placeholder="Telefon*"
              />
              <input
                type="text"
                className={
                  abThousand ? "form-control my-2" : "form-control my-3"
                }
                id="E-Mail"
                placeholder="E-Mail*"
              />
              {abThousand && (
                <div>
                  <select
                    className={
                      abThousand
                        ? "bestellen_select form-select my-2"
                        : "bestellen_select form-select my-3"
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
                      ? "bestellen_select form-select my-2"
                      : "bestellen_select form-select my-3"
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
                        ? "bestellen_select form-select mb-2"
                        : "bestellen_select form-select mb-3"
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
                  rows={eigenes ? "6" : abThousand ? "3" : "4"}
                  placeholder={
                    "Hier können Sie unter anderem Beschreibungen über Ihre Sendung angeben."
                  }
                ></textarea>
              </div>
            </form>
            <div className="position-relative pt-2 pb-1">
              <div className="d-flex justify-content-evenly align-items-center gap-1 trusted-shops">
                <Image
                  className="trusted"
                  src={EkomiVektor}
                  alt=""
                  width={abThousand ? "75" : "90"}
                  height={abThousand ? "75" : "90"}
                />
                <Image
                  className="trusted"
                  src={TrustedShops}
                  alt=""
                  width={abThousand ? "75" : "85"}
                  height={abThousand ? "75" : "85"}
                />
                <div className="text-center ">
                  <p className="px-2 text-center">Bewertungen</p>
                  <div className="ratings star-clr price_value_form2_rating">
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                  </div>
                  <p className="price_value_form2_text">Sehr Gut</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            bestellen
              ? "price_value_form_bestellen_submit_btn"
              : eigenes
              ? "price_value_form_eigenes"
              : "price_value_form2_submit_btn"
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
  );
};
