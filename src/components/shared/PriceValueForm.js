import Image from "next/image";
import HeroTrustami from "/public/assets/img/homepage/hero-trustami.png";
import TrustedShops from "/public/assets/img/trusted-shops.png";
import insurance from "/public/assets/img/insurance.png";
import NTV from "/public/assets/img/ntv.png";
import ProvenExpert from "/public/assets/img/proven-expert.png";

const PriceValueForm = ({
  btnText = "Versandtasche bestellen",
  home = false,
}) => {
  return (
    <div className="price_value_form_wrapepr">
      <div
        className="position-relative overflow-hidden form-column kostenlos"
        style={{
          border: home ? "2px solid #ffffff" : "",
          boxShadow: home ? "-0.052px 3px 10px 0px rgba(6, 0, 14, 0.51)" : "",
        }}
      >
        <div className="sold_out_wrapper">
          <a className="sold_out" href="#">
            <div className="sold_out_text">Kostenlos</div>
          </a>
        </div>
        <h5 className="Kostenlos-heading">
          Versandtasche anfordern <br />
          <strong className="text-gold">Kostenlos &amp; Unverbindlich</strong>
        </h5>
        <form>
          <div className="d-flex ">
            <input
              type="text"
              className="form-control w-50 me-2"
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
              className="form-control w-75 me-2"
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
              className="form-control w-25 me-2"
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
          <button type="submit" className="btn-bg w-100  fw-bold">
            {btnText}
          </button>
          <div className="line-text">
            <div className="white-line1 me-2"></div>
            <div className=" me-2 text-white garantiert_txt">
              Garantierte Sicherheit
            </div>
            <div className="white-line2"></div>
          </div>
          <div className="d-flex flex-wrap justify-content-between price-value-form-images my-2">
            <Image src={NTV} width={65} height={65} />
            <Image src={TrustedShops} width={65} height={65} />
            <Image src={HeroTrustami} width={65} height={65} />
            <Image
              src={ProvenExpert}
              width={82}
              height={65}
              className="price-value-form-proven-img"
            />
          </div>
          <div className="d-flex">
            <Image src={insurance} className="me-1 price_value_form_last_img" />
            <p className="text-center price_value_form_last_para">
              Die Versandtasche (DHL) ist bis 1.500 € versichert.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PriceValueForm;
