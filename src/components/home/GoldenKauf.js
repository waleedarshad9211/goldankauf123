import Image from "next/image";
import PriceValueForm from "../shared/PriceValueForm";
import GoldenKauf1 from "public/assets/img/homepage/goldankauf_bestellen_home.png";
import GoldenKauf2 from "/public/assets/img/homepage/goldankauf_gold_versederten_home.png";
import GoldenKauf3 from "/public/assets/img/homepage/goldankauf_angebot_home.png";
import GoldenKauf4 from "/public/assets/img/homepage/goldankauf_zahlung_home.png";
import GoldanNum1 from "/public/assets/img/homepage/goldankauf_1_home.png";
import GoldanNum2 from "/public/assets/img/homepage/goldankauf_2_home.png";
import GoldanNum3 from "/public/assets/img/homepage/goldankauf_3_home.png";
import GoldanNum4 from "/public/assets/img/homepage/goldankauf_4_home.png";
import GoldankaufArrow from "/public/assets/img/homepage/goldankauf_arrow_home.png";

const GoldenKauf = () => {
  return (
    <div className="golden-fauf-wrapper">
      <div className="container">
        <div className="golden_fauf_wrapper_pricing">
          <PriceValueForm />
        </div>
        <div className="golden-fauf">
          <h2 className="text-center">Goldankauf in nur 4 Schritten</h2>
          <p className="para text-center">
            Detaillierte Informationen finden Sie <span>hier</span>
          </p>
        </div>
        <div className=" row">
          <div className="col-6 col-lg-3 golden_fauf_card_col">
            <div className="golden_fauf_card">
              <div className="golden_fauf_card_body">
                <div>
                  <Image
                    src={GoldanNum1}
                    alt=""
                    className="golden_fauf_num_img"
                  />
                </div>
                <div className="golden_fauf_card_inner">
                  <Image src={GoldenKauf1} alt="" />
                </div>
                <div className="goldenkauf_arrow_home_wrapper">
                  <div className="goldenkauf_arrow_home">
                    <Image src={GoldankaufArrow} alt="" />
                  </div>
                </div>
              </div>
              <div className="golden_fauf_card_text">
                <p>
                  Versandtasche <br />
                  Bestellen
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3 golden_fauf_card_col">
            <div className="golden_fauf_card">
              <div className="golden_fauf_card_body">
                <div>
                  <Image
                    src={GoldanNum2}
                    alt=""
                    className="golden_fauf_num_img"
                  />
                </div>
                <div className="golden_fauf_card_inner">
                  <Image src={GoldenKauf2} alt="" />
                </div>
                <div className="golden_fauf_card_body_epmty d-flex d-md-none d-lg-none"></div>
                <div className="goldenkauf_arrow_home_wrapper goldenkauf_arrow_home_wrapper2 d-none d-md-flex d-lg-flex">
                  <div className="goldenkauf_arrow_home">
                    <Image src={GoldankaufArrow} alt="" />
                  </div>
                </div>
              </div>
              <div className="golden_fauf_card_text">
                <p>
                  Gold
                  <br />
                  versenden
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3 golden_fauf_card_col">
            <div className="golden_fauf_card">
              <div className="golden_fauf_card_body">
                <div>
                  <Image
                    src={GoldanNum3}
                    alt=""
                    className="golden_fauf_num_img"
                  />
                </div>
                <div className="golden_fauf_card_inner">
                  <Image src={GoldenKauf3} alt="" />
                </div>
                <div className="goldenkauf_arrow_home_wrapper">
                  <div className="goldenkauf_arrow_home">
                    <Image src={GoldankaufArrow} alt="" />
                  </div>
                </div>
              </div>
              <div className="golden_fauf_card_text">
                <p>
                  Angebot
                  <br />
                  erhalten
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3 golden_fauf_card_col">
            <div className="golden_fauf_card">
              <div className="golden_fauf_card_body">
                <div>
                  <Image
                    src={GoldanNum4}
                    alt=""
                    className="golden_fauf_num_img"
                  />
                </div>
                <div className="golden_fauf_card_inner golden_fauf_card_innerlast_child">
                  <Image src={GoldenKauf4} alt="" />
                </div>
                <div className="golden_fauf_card_body_epmty"></div>
              </div>
              <div className="golden_fauf_card_text">
                <p>
                  Zahlung
                  <br />
                  erhalten
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldenKauf;
