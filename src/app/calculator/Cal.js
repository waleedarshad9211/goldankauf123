import PriceValueForm from "@/components/shared/PriceValueForm";
import WeitereVersandartenCard from "@/components/shared/WeitereVersandartenCard";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Button from "@/components/shared/button/Button";
import Pricing from "@/components/shared/pricing/Pricing";
import RightTriangle from "/public/assets/img/right-triangle.png";
import Image from "next/image";

const Cal = () => {
  return (
    <div className="container">
      <div>
        <Breadcrumbs />
        <div className="goldankauf_valuecalculator mt-4">
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
        <section className="current-metal-values">
          <div className="d-flex flex-column justify-content-center align-items-center current-metal-values-wrapper">
            <h2 className="text-center">Aktueller Wert lhrer Edelmetalle:</h2>
            <div className="value">2.656,00 €</div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="btn-values text-center">
              Ankauf unverbindlich starten
            </div>
            <p className="text-center current-metal-values-para">
              Der endgültige Auszahlungsbetrag wird anhand der Ankaufskurse bei
              Sendungseingang ermittelt.
            </p>
          </div>
        </section>
      </div>
      <section className="pricing">
        <Pricing />
      </section>
      <section className="values-form">
        <div className="current-value">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="current-value-left">
                <div className="d-flex flex-column justify-content-center align-items-center current-metal-values-wrapper">
                  <span className="text-center">
                    Aktueller Wert lhrer Edelmetalle:
                  </span>
                  <div className="value">2.656,00 €</div>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-lg-row flex-column">
                  <div className="calc-table flex-fill">
                    <h5 className="text-center p-2">
                      Ihre Berechnung im Detail:
                    </h5>
                    <table className="table">
                      <tbody>
                        <tr className="">
                          <td>20 Gramm</td>
                          <td className="text-center">999er Feingold</td>
                          <td className="text-end">zu 1.158,40 €</td>
                        </tr>
                        <tr className="">
                          <td>40 Gramm</td>
                          <td className="text-center">986er Gold</td>
                          <td className="text-end">zu 2.280,40 €</td>
                        </tr>
                        <tr className="brdr-btm">
                          <td colSpan="2" className="fw-bold">
                            Ihr Auszahlungsbetrag
                          </td>
                          <td className="fw-bold text-end">2.656,000 €</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="cal_table_para">
                  <p>
                    Der endgültige Auszahlungsbetrag wird anhand der
                    Ankaufskurse bei Sendungseingang ermittelt.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-1 d-flex align-items-center flex-column justify-content-center triangle-container">
              <div className="d-none d-lg-block">
                <Image src={RightTriangle} alt="" />
              </div>
              <div className="triangle-down d-block d-lg-none"></div>
            </div>
            <div className="col-md-12 col-lg-4 kostenlos-wrapper">
              <div className="calculator-right-side">
                <PriceValueForm />
                <WeitereVersandartenCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cal;
