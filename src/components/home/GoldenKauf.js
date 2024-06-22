import Image from "next/image";
import PriceValueForm from "../shared/PriceValueForm";
import GoldenKauf1 from "public/assets/img/homepage/goldankauf_bestellen_home.png";
import GoldenKauf2 from "/public/assets/img/homepage/goldankauf_gold_versederten_home.png";
import GoldenKauf3 from "/public/assets/img/homepage/goldankauf_angebot_home.png";
import GoldenKauf4 from "/public/assets/img/homepage/goldankauf_zahlung_home.png";
import GoldanfaufTriangle from "/public/assets/img/homepage/goldanfauf-right-triangle.png";

const GoldenKauf = () => {
  return (
    <div className="golden-fauf-wrapper">
      <div className="container">
        <div className="golden-fauf">
          <h2 className="text-center">Goldankauf in nur 4 Schritten</h2>
          <p className="para text-center">
            Detaillierte Informationen finden Sie <span>hier</span>
          </p>
        </div>
        <div className=" row">
          <div className="col-6 col-md-6 col-lg-3 golden_fauf_card_col">
            <div className="golden_fauf_card">
              <div className="golden_fauf_card_body">
                <span
                  style={{
                    fontSize: "30px",
                    position: "absolute",
                    top: "-10px",
                    left: "0px",
                  }}
                >
                  1
                </span>
                <div className="golden_fauf_card_inner">
                  <Image src={GoldenKauf1} alt="" />
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
          <div className="col-6 col-md-6 col-lg-3 golden_fauf_card_col">
            <div className="golden_fauf_card">
              <div className="golden_fauf_card_body">
                <span
                  style={{
                    fontSize: "30px",
                    position: "absolute",
                    top: "-10px",
                    left: "0px",
                  }}
                >
                  2
                </span>
                <Image
                  src={GoldanfaufTriangle}
                  alt=""
                  style={{
                    position: "absolute",
                    left: "-4px",
                    top: "50%",
                    transform: "translate(-49%, -1%)",
                    width: "73px",
                    height: "73px",
                  }}
                />
                <div className="golden_fauf_card_inner">
                  <Image src={GoldenKauf2} alt="" />
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
          <div className="col-6 col-md-6 col-lg-3 golden_fauf_card_col">
            <div className="golden_fauf_card">
              <div className="golden_fauf_card_body">
                <span
                  style={{
                    fontSize: "30px",
                    position: "absolute",
                    top: "-10px",
                    left: "0px",
                  }}
                >
                  3
                </span>
                <Image
                  src={GoldanfaufTriangle}
                  alt=""
                  style={{
                    position: "absolute",
                    left: "-4px",
                    top: "50%",
                    transform: "translate(-49%, -1%)",
                    width: "73px",
                    height: "73px",
                  }}
                />
                <div className="golden_fauf_card_inner">
                  <Image src={GoldenKauf3} alt="" />
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
          <div className="col-6 col-md-6 col-lg-3 golden_fauf_card_col">
            <div className="golden_fauf_card">
              <div className="golden_fauf_card_body">
                <span
                  style={{
                    fontSize: "30px",
                    position: "absolute",
                    top: "-10px",
                    left: "0px",
                  }}
                >
                  4
                </span>

                <Image
                  src={GoldanfaufTriangle}
                  alt=""
                  style={{
                    position: "absolute",
                    left: "-4px",
                    top: "50%",
                    transform: "translate(-49%, -1%)",
                    width: "73px",
                    height: "73px",
                  }}
                />

                <div className="golden_fauf_card_inner golden_fauf_card_innerlast_child">
                  <Image src={GoldenKauf4} alt="" />
                </div>
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
