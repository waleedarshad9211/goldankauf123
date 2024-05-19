import Image from "next/image";
import EkomiVektor from "/public/assets/img/ekomi-vektor.png";
import TrustedShops from "/public/assets/img/trusted-shops.png";
const PriceValueForm = ({ btnText = "Versandtasche bestellen" }) => {
  return (
    <div className="price_value_form_wrapepr">
      <div className="position-relative overflow-hidden form-column kostenlos">
        <a className="sold_out" href="#">
          <div className="sold_out_text">Kostenlos</div>
        </a>
        <h5 className="Kostenlos-heading">
          Versandtasche anfordern <br />
          <strong className="text-gold">Kostenlos &amp; Unverbindlich</strong>
        </h5>
        <form>
          <div className="d-flex ">
            <input
              type="text"
              className="form-control w-50 me-1"
              id="Vorname"
              placeholder="Vorname"
            />
            <input
              type="text"
              className="form-control w-50"
              id="Nachname"
              placeholder="Nachname"
            />
          </div>
          <div className="d-flex ">
            <input
              type="text"
              className="form-control w-75 me-1"
              id="Straße"
              placeholder="Straße"
            />
            <input
              type="text"
              className="form-control w-25"
              id="Nr."
              placeholder="Nr."
            />
          </div>
          <div className="d-flex ">
            <input
              type="text"
              className="form-control w-25 me-1"
              id="PLZ"
              placeholder="PLZ"
            />
            <input
              type="text"
              className="form-control w-75"
              id="Wohnort"
              placeholder="Wohnort"
            />
          </div>
          <input
            type="text"
            className="form-control"
            id="Telefon"
            placeholder="Telefon"
          />
          <input
            type="text"
            className="form-control"
            id="E-Mail"
            placeholder="E-Mail"
          />

          <div className="trusted-shops price_value_trusted_shops_card">
            <div className="price_value_form_inner_card">
              <div className="price_value_form_inner_card_content">
                <Image
                  className="trusted"
                  src={EkomiVektor}
                  alt=""
                  width="65"
                  height="65"
                />
                <p className="price_value_form_inner_card_content_para">
                  Bewertungen
                </p>
                <div className="text-center price_value_rating">
                  <div className="ratings star-clr">
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                  </div>
                </div>
                <div className="price_value_form_inner_card_content_last_para">
                  <h6 className="font-normal text-white ">SEHR GUT</h6>
                </div>
              </div>
            </div>
            <div className="price_value_form_inner_card price_value_form_inner_card2">
              <div className="price_value_form_inner_card_content">
                <Image
                  className="trusted trusted_shops"
                  src={TrustedShops}
                  alt=""
                  width="63"
                  height="61"
                />
                <p className="price_value_form_inner_card_content_para">
                  Bewertungen
                </p>
                <div className="text-center price_value_rating">
                  <div className="ratings star-clr">
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                  </div>
                </div>
                <div className="price_value_form_inner_card_content_last_para">
                  <h6 className="text-white ">SEHR GUT</h6>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn-bg w-100 rounded-pill fw-bold">
            {btnText}
          </button>
          <p className="text-center price_value_form_last_para">
            Mit Klick auf "Versandtasche kostenlos anfordern" stimme ich den{" "}
            <u>AGB</u> zu und habe die
            <u> Datenschutzerklärung</u> zur Kenntnis genommen.
          </p>
        </form>
      </div>
    </div>
  );
};

export default PriceValueForm;
