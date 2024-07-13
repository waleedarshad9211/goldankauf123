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
          <Image src={EkomiLogo} alt="" className="e_trusted_shops_card_img" />
          <div className="e_trusted_shops_card_list">
            <ul>
              <li>• eKomi Siegel Gold</li>
              <li>• Unabhängig & transparent</li>
            </ul>
          </div>
        </div>
        <p className="e_trusted_shop_text_ekomi">Durchschnittliche Bewertung</p>
        <div className="e_trusted_shops2_main_heading">
          <div className=" e_trusted_shops2_rating_ekomi">
            <div>
              <p className="e_trusted_shop_value">4.9</p>
            </div>
            <div>
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
        </div>
        <p className="text-white text-center" style={{ fontSize: "14px" }}>
          Basierend auf über 8.000 Bewertungen
        </p>
        <p className="text-white text-center" style={{ fontSize: "10px" }}>
          Stand 01.01.2024
        </p>
        <div className="etrusted_shop2_heading2 etrusted_shop2_heading2_ekomi">
          <p>Kundenbewertungen</p>
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
              </div>
            </div>
            <div className="review2_para ">
              <p className="e_trusted_shops_card_subcard_innercard_para2">
                Abwicklung und Zahlung hat alles prima geklappt! Man kann sich
                auf Euch verlassen. Gerne weiter so!
              </p>
            </div>
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
