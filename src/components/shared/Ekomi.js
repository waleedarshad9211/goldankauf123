import Image from "next/image";
import EkomiLogo from "/public/assets/img/ekomi-vektor.png";
import EkomiFeedbackLogo from "/public/assets/img/ekomi_feedback_logo.png";

const Ekomi = ({ marginTop, marginBottom }) => {
  return (
    <div className="ekomi_wrapper_main">
      <div
        className="e_trusted_shops_card e_trusted_shops_card2 e_trusted_shops_card3 mb-3"
        style={{ marginTop: marginTop, marginBottom: marginBottom }}
      >
        <div className="d-flex align-items-center etrustedlogo2">
          <Image
            src={EkomiLogo}
            alt=""
            width={98}
            height={98}
            className="e_trusted_shops_card_img"
          />
          <div className="e_trusted_shops_card_list">
            <ul>
              <li>• eKomi Siegel Gold</li>
              <li>• Unabhängig & transparent</li>
            </ul>
          </div>
        </div>
        <div className="e_trusted_shops2_main_heading">
          <p className="e_trusted_shop_text">Durchschnittliche Bewertung</p>
          <div className=" e_trusted_shops2_rating">
            <p className="e_trusted_shop_value">4.9</p>
            <p className="e_trusted_shops_card_subcard_innercard_star2">
              {
                <>
                  <i className="fa fa-star" style={{ fontSize: "19px" }}></i>
                  <i className="fa fa-star" style={{ fontSize: "19px" }}></i>
                  <i className="fa fa-star" style={{ fontSize: "19px" }}></i>
                  <i className="fa fa-star" style={{ fontSize: "19px" }}></i>
                  <i className="fa fa-star" style={{ fontSize: "19px" }}></i>
                </>
              }
            </p>
          </div>
        </div>
        <p className="text-white" style={{ marginLeft: "10px" }}>
          Basierend auf über{" "}
          <span style={{ fontWeight: "bold" }}>2.000 Bewertungen</span>
        </p>
        <p
          className="text-white"
          style={{ fontSize: "11px", marginLeft: "10px" }}
        >
          Stand 01.01.2024
        </p>
        <div className="etrusted_shop2_heading2">
          <div
            className="etrusted_heading2_line"
            style={{ marginLeft: "10px" }}
          />
          <p>KUNDENBEWERTUNGEN</p>
          <div
            className="etrusted_heading2_line"
            style={{ marginRight: "10px" }}
          />
        </div>
        <div className="e_trusted_shops_card_subcard_innercard">
          <div className="d-flex justify-content-between align-items-center">
            <p className="e_trusted_shops_card_subcard_innercard_points">
              5.00/5.0
            </p>
            <p className="e_trusted_shops_card_subcard_innercard_star">
              {
                <>
                  <i className="fa fa-star" style={{ fontSize: "11px" }}></i>
                  <i className="fa fa-star" style={{ fontSize: "11px" }}></i>
                  <i className="fa fa-star" style={{ fontSize: "11px" }}></i>
                  <i className="fa fa-star" style={{ fontSize: "11px" }}></i>
                  <i className="fa fa-star" style={{ fontSize: "11px" }}></i>
                </>
              }
            </p>
            <div className="d-flex align-items-center">
              <p className="e_trusted_shops_card_subcard_innercard_para">
                19.04.2023
              </p>

              <i className="fa fa-caret-down" style={{ fontSize: "13px" }}></i>
            </div>
          </div>
          <div className="review2_para ">
            <p className="e_trusted_shops_card_subcard_innercard_para2">
              Abwicklung und Zahlung hat alles prima geklappt! Man kann sich auf
              Euch verlassen. Gerne weiter so!
            </p>
          </div>
        </div>
        <div className="ekomi_power_by_logo_last_section">
          <p>Powered by</p>
          <Image src={EkomiFeedbackLogo} alt="" width={115} height={48} />
        </div>
      </div>
    </div>
  );
};

export default Ekomi;
