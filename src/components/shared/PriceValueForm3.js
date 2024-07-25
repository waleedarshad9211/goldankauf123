import Image from "next/image";
import Button from "./button/Button";
import EkomiVektor from "/public/assets/img/ekomi-vektor.png";
// import TrustedShops from "/public/assets/img/trusted-shops.png";
import Trustami1 from "/public/assets/img/hero-trustami.png";
import BankingCheck49 from "/public/assets/img/banking_check4-9.png";
import ProvenExpert from "/public/assets/img/proven-expert.png";
import Ntv from "/public/assets/img/ntv.png";
import TrustedShops from "/public/assets/img/trusted-shops.png";
import Trustami from "/public/assets/img/hero-trustami.png";
import provenExpert from "/public/assets/img/proven-expert.png";
import insuranceDHL from "/public/assets/img/insurance_bestellen.png";
import GoldenKauf1 from "public/assets/img/homepage/goldankauf_bestellen_home.png";
import GoldenKauf2 from "/public/assets/img/homepage/goldankauf_gold_versederten_home.png";
import GoldenKauf3 from "/public/assets/img/homepage/goldankauf_angebot_home.png";
import GoldenKauf4 from "/public/assets/img/homepage/goldankauf_zahlung_home.png";
import GoldanfaufTriangle from "/public/assets/img/pricevalue3_triangle.png";

const PriceValueForm3 = () => {
  return (
    <div className="position-relative overflow-hidden form-column price_value_form2 price_value_form3">
      <a class="sold_out" href="#">
        <div class="sold_out_text">Kostenlos</div>
      </a>

      <div className="">
        <div className="golden-fauf">
          <h2 className="text-center">Goldankauf in nur 4 Schritten</h2>
          <p className="para text-center">
            Detaillierte Informationen finden Sie{" "}
            <span style={{ textDecoration: "underline" }}>hier</span>
          </p>
        </div>
        <div className="pricevalue_form3_cards row">
          <div className="col-6 col-md-6 col-lg-3 golden_fauf_card_col">
            <div className="golden_fauf_card">
              <div className="golden_fauf_card_body">
                <span
                  style={{
                    fontSize: "18px",
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
                    fontSize: "18px",
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
                    transform: "translate(-52%, 7%)",
                    width: "24px",
                    height: "34px",
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
                    fontSize: "18px",
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
                    transform: "translate(-52%, 7%)",
                    width: "24px",
                    height: "34px",
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
                    fontSize: "18px",
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
                    transform: "translate(-52%, 7%)",
                    width: "24px",
                    height: "34px",
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
        {/* <div className="pricevalue_form3_cards_mobile">
          <div className="golden_fauf_card">
            <div className="golden_fauf_card_body">
              <div>
                <Image
                  src={GoldanNum1}
                  alt=""
                  className="golden_fauf_num_img"
                  width={28.58}
                  height={28.59}
                />
              </div>
              <div className="golden_fauf_card_inner golden_fauf_card_inner_first">
                <Image src={GoldenKauf1} alt="" width={29} height={53} />
              </div>
              <div className="golden_fauf_card_body_epmty"></div>
            </div>
            <div className="golden_fauf_card_text">
              <p>
                Versandtasche <br />
                Bestellen
              </p>
            </div>
          </div>
          <div className="golden_fauf_card">
            <div className="golden_fauf_card_body">
              <div>
                <Image
                  src={GoldanNum2}
                  alt=""
                  className="golden_fauf_num_img"
                  width={28.58}
                  height={28.59}
                />
              </div>
              <div className="golden_fauf_card_inner">
                <Image src={GoldenKauf2} alt="" width={52} height={48} />
              </div>
              <div className="golden_fauf_card_body_epmty"></div>
            </div>
            <div className="golden_fauf_card_text">
              <p>
                Gold
                <br />
                versenden
              </p>
            </div>
          </div>
          <div className="golden_fauf_card">
            <div className="golden_fauf_card_body">
              <div>
                <Image
                  src={GoldanNum3}
                  alt=""
                  className="golden_fauf_num_img"
                  width={28.58}
                  height={28.59}
                />
              </div>
              <div className="golden_fauf_card_inner">
                <Image src={GoldenKauf3} alt="" width={43} height={51} />
              </div>
              <div className="golden_fauf_card_body_epmty"></div>
            </div>
            <div className="golden_fauf_card_text">
              <p>
                Angebot
                <br />
                erhalten
              </p>
            </div>
          </div>
          <div className="golden_fauf_card">
            <div className="golden_fauf_card_body">
              <div>
                <Image
                  src={GoldanNum4}
                  alt=""
                  className="golden_fauf_num_img"
                  width={28.58}
                  height={28.59}
                />
              </div>
              <div className="golden_fauf_card_inner golden_fauf_card_innerlast_child">
                <Image src={GoldenKauf4} alt="" width={53} height={44} />
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
        </div> */}
      </div>
      <h3 className="price_value_form3_heading">
        Kostenlose Versandtasche bestellen
      </h3>
      <form>
        <div className="d-flex flex-column flex-md-row flex-lg-row">
          <div className="d-flex mb-3">
            <input
              type="text"
              className="form-control w-50 me-2"
              id="Vorname"
              placeholder="Vorname*"
            />
            <input
              type="text"
              className="form-control w-50 me-sm-0 me-xs-0 me-md-2"
              id="Nachname"
              placeholder="Nachname*"
            />
          </div>
          <div className="d-flex mb-3">
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
        </div>
        <div className="d-flex flex-column flex-md-row flex-lg-row">
          <div className="d-flex mb-3">
            <input
              type="text"
              className="form-control w-25 me-2"
              id="PLZ"
              placeholder="PLZ*"
            />
            <input
              type="text"
              className="form-control w-75 me-sm-0 me-xs-0 me-md-2"
              id="Wohnort"
              placeholder="Wohnort*"
            />
          </div>
          <div className="d-flex mb-3">
            <input
              type="text"
              className="form-control me-2"
              id="Telefon"
              placeholder="Telefon*"
            />
            <input
              type="text"
              className="form-control "
              id="E-Mail"
              placeholder="E-Mail*"
            />
          </div>
        </div>
      </form>
      <div className="d-block d-md-none d-lg-none">
        <button type="submit" className="btn-bg">
          {"Versandtasche bestellen"}
        </button>
      </div>
      <div className="row">
        <div className="col-12 col-m-12 col-lg-6">
          <div className="price_value_form2_last_line price_value_form3_last_line">
            <div className="white-line" />
            <p className="price_value_form2_last_txt">Garantierte Sicherheit</p>
            <div className="white-line" />
          </div>
        </div>
      </div>
      <div className="price_value_form2_last_part">
        <div className="d-flex align-items-center gap-2 trusted-shops">
          <Image
            className="trusted"
            src={Ntv}
            alt=""
            width={"70"}
            height={"70"}
          />
          <Image
            className="trusted"
            src={TrustedShops}
            alt=""
            width={"70"}
            height={"70"}
          />
          <Image
            className="trusted"
            src={Trustami}
            alt=""
            width={"70"}
            height={"70"}
          />
          <Image
            className="trusted proven_expert"
            src={provenExpert}
            alt=""
            width={"87"}
            height={"69"}
          />
        </div>

        <div className="d-none d-md-block d-lg-block">
          <button type="submit" className="btn-bg">
            {"Versandtasche bestellen"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceValueForm3;
