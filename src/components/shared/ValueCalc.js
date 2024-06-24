import Image from "next/image";
import KitcoGoldTab from "./KitcoGoldTab";
import Button from "./button/Button";
import Ntv from "/public/assets/img/homepage/100_ gurantee.png";

const ValueCalc = ({ home = false }) => {
  return (
    <div className="">
      <div
        className="goldankauf_valuecalc"
        style={{
          backgroundColor: "#36a18b",
          padding: "10px 20px",
          borderRadius: "10px",
          marginTop: "15px",
        }}
      >
        <h2 className="goldankauf_valuecalc_heading">
          Berechnen Sie den Wert Ihrer Edelmetalle
        </h2>
        <form action="">
          <div className="goldankauf_valuecalc_form">
            <div className="d-flex align-items-center value-calculate-input">
              <label className="lbl">Gramm</label>
              <input className="form-control" name="gramm" type="text" />
            </div>
            <div className="d-flex align-items-center justify-content-center position-relative value-calculate-select">
              <label className="lbl">Karat</label>
              <select className="form-select mb-0">
                <option selected="">Bitte auswählen</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="zahngold_valuecalc_btn">
              <Button
                btnText="Jetzt Wert berechnen"
                height="42px"
                width="252px"
                fontSize="17px"
                fontWeight="500"
                margin="10px 0px"
                backgroundColor="#C8E6E0"
                color="#121212"
                borderRadius="10px"
              />
            </div>
          </div>
        </form>
      </div>
      {home && (
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8">
            <div className="d-flex flex-sm-column flex-lg-row GoldankaufKotenloser-img align-items-center">
              <h2 className="text-left GoldankaufKotenloser-heading d-block d-md-block d-lg-none">
                Goldankauf online mit Gold-zurück-Garantie
              </h2>
              <Image
                src={Ntv}
                alt="Goldankauf bei moneyGold.de"
                title="Goldankauf bei moneyGold.de"
              />
              <div>
                <h2 className="text-left GoldankaufKotenloser-heading d-none d-lg-block">
                  Goldankauf online mit Gold-zurück-Garantie
                </h2>
                <p className="text-left Goldankauf_para1_">
                  Wenn Sie Ihr Gold beziehungsweise Altgold, Silber oder andere
                  Edelmetalle zu Geld machen möchten, haben Sie bei
                  Zahngold123.de jetzt die Möglichkeit dazu.
                </p>
                <p className="Goldankauf_para1_ mt-2">
                  Ist es Ihr großer Wunsch, für nicht mehr benötigte
                  Wertgegenstände einen hohen Preis zu erzielen, sollten Sie
                  sich näher mit unserem bewährten Ankaufsverfahren befassen.
                </p>
                <p className="Goldankauf_para1_ mt-2">
                  Wir bieten Ihnen einen bequemen und unverbindlichen Goldankauf
                  online respektive per Post und sichern Ihnen eine schnelle
                  Abwicklung sowie einen überaus fairen Auszahlungsbetrag zu.
                </p>
              </div>
            </div>
            <h2 className="GoldankaufKotenloser-heading2">
              Sehr viele zufriedene Kunden
            </h2>
            <p className="text-left Goldankauf_para2_">
              Unsere zahlreichen Kunden können sich nicht irren! Wir bieten
              Ihnen den Ankauf von Zahngold, Silber- und Goldbarren, Goldmünzen
              und Goldschmuck zu sehr attraktiven Ankaufskonditionen an.
            </p>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <KitcoGoldTab marginTop="15px" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ValueCalc;
