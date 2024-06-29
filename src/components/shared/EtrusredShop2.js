"use client";
import Image from "next/image";
import PowerByTrustedShops from "/public/assets/img/Etrusted-shops-logo.png";
import TrustedShops from "/public/assets/img/trusted-shops.png";

const EtrusredShop2 = ({ marginTop = "20px" }) => {
  return (
    <div className="e_trusted_shop_wrapper">
      <div
        className="e_trusted_shops_card e_trusted_shops_card2 mb-3"
        style={{ marginTop: marginTop }}
      >
        <div className="etrustedlogo2">
          <div className="e_trusted_shops_card_list">
            <Image
              src={TrustedShops}
              alt=""
              width={82}
              height={82}
              className="e_trusted_shops_card_img"
            />
            <ul>
              <li>• Note: ,,SEHR GUT”</li>
              <li>• Unabhängig & transparent</li>
            </ul>
          </div>
        </div>
        <p className="e_trusted_shop_text">Durchschnittliche Bewertung</p>
        <div className="e_trusted_shops2_main_heading">
          <div className=" e_trusted_shops2_rating">
            <div>
              <p className="e_trusted_shop_value">4.98</p>
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
        <div className="text-center">
          <p className="" style={{ fontSize: "14px" }}>
            Basierend auf über{" "}
            <span style={{ fontWeight: "bold" }}>1.500 Bewertungen</span>
          </p>
          <p className="" style={{ fontSize: "10px" }}>
            Stand 01.01.2024
          </p>
        </div>
        <div className="etrusted_shop2_heading2">
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

                <i
                  className="fa fa-caret-down"
                  style={{ fontSize: "13px" }}
                ></i>
              </div>
            </div>
            <div className="review2_para d-flex justify-content-center align-items-center">
              <p className="e_trusted_shops_card_subcard_innercard_para2">
                Abwicklung und Zahlung hat alles prima geklappt! Man kann sich
                auf Euch verlassen. Gerne weiter so!
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center e_trusted_shop_last_logo">
          <Image src={PowerByTrustedShops} alt="" width={115} height={48} />
        </div>
      </div>
    </div>
  );
};

export default EtrusredShop2;
