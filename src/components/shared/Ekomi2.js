import Image from "next/image";
import EkomiLogo from "/public/assets/img/ekomi-vektor.png";
import EkomiFeedbackLogo from "/public/assets/img/ekomi_feedback_logo.png";

const Ekomi2 = ({ marginTop }) => {
  return (
    <div
      className="e_trusted_shops_card e_trusted_shops_card2 e_trusted_shops_card3 mb-3"
      style={{ marginTop: marginTop }}
    >
      <div className="d-flex align-items-center etrustedlogo2">
        <Image
          src={EkomiLogo}
          alt=""
          width={82}
          height={82}
          className="e_trusted_shops_card_img"
        />
        <div className="e_trusted_shops_card_list">
          <ul>
            <li>• eKomi Siegel Gold</li>
            <li>• Unabhängig & transparent</li>
          </ul>
        </div>
      </div>
      <div className="e_trusted_shops_card_subcard e_trusted_shops_card_subcard2">
        <div className="e_trusted_shops_card_subcard_innercard">
          <div className="d-flex justify-content-between align-items-center">
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
          <div className="review2_para d-flex justify-content-center align-items-center">
            <p className="e_trusted_shops_card_subcard_innercard_para2">
              Abwicklung und Zahlung hat alles prima geklappt! Man kann sich auf
              Euch verlassen. Gerne weiter so!
            </p>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center text-center mt-1">
          <p className="e_trusted_shop_value">4.9</p>
          <p className="e_trusted_shop_text">Durchschnittliche Bewertung</p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <p className="e_trusted_shops_card_subcard_innercard_star2">
            {
              <>
                <i className="fa fa-star" style={{ fontSize: "15px" }}></i>
                <i className="fa fa-star" style={{ fontSize: "15px" }}></i>
                <i className="fa fa-star" style={{ fontSize: "15px" }}></i>
                <i className="fa fa-star" style={{ fontSize: "15px" }}></i>
                <i className="fa fa-star" style={{ fontSize: "15px" }}></i>
              </>
            }
          </p>
        </div>
        <div>
          <p className="text-center e_trusted_shop_uber">
            Basierend aus uber 8.000 Bewertungen
          </p>
          <p className="text-center e_trusted_shop_date">Stand 01.06.2023</p>
        </div>
      </div>
      <div className="ekomi_power_by_logo_last_section">
        <p>Powered by</p>
        <Image src={EkomiFeedbackLogo} alt="" width={115} height={48} />
      </div>
    </div>
  );
};

export default Ekomi2;
