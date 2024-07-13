"use client";
import Ekomi from "@/components/shared/Ekomi";
import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import InformationCard from "@/components/shared/InformationCard";
import KitcoGoldTab from "@/components/shared/KitcoGoldTab";
import PriceValueForm from "@/components/shared/PriceValueForm";
import ValueCalc from "@/components/shared/ValueCalc";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Button from "@/components/shared/button/Button";
import GarantedPrice from "@/components/shared/garantedPrice/GarantedPrice";
import { accordionArray } from "@/public/static/HomepageStatic";

const page = () => {
  return (
    <section className="haufig_fragen_wrapper">
      <div className="container">
        <Breadcrumbs />
        <div className="row">
          <div className="col-12 col-md-12 d-lg-none">
            <div className="gold_zuruck_garantie_pricing mt-2">
              <PriceValueForm />
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-8">
            <h2 className="gold_zuruck_garantie_wrapper_heading1">
              Wichtige Fragen & schnelle Antworten zum Goldankauf
            </h2>
            <p className="haufig_fragen_wrapper_para">
              Mehr zum Thema rund um die Abwicklung finden Sie hier in einer
              Zusammenfassung der meist gestellten Fragen unserer Kunden
              leichtverständlich beantwortet:
            </p>
            <ul className="mt-2">
              {accordionArray.map((item, index) => {
                return (
                  <div
                    className="accordion"
                    id="accordionPanelsStayOpenExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id={`panelsStayOpen-headingOne${index}`}
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#panelsStayOpen-collapseOne${index}`}
                          aria-expanded="true"
                          aria-controls={`panelsStayOpen-collapseOne${index}`}
                        >
                          <div className="me-2">{item.img}</div>
                          <div className="accordion_heading">{item.tilte}</div>
                        </button>
                      </h2>
                      <div
                        id={`panelsStayOpen-collapseOne${index}`}
                        className={
                          index === 0
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse"
                        }
                        aria-labelledby={`panelsStayOpen-headingOne${index}`}
                      >
                        <div className="accordion-body">{item.description}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="gold_zuruck_garantie_right_side">
              <div className=" d-none d-lg-block">
                <PriceValueForm home />
              </div>
              <div className="">
                <KitcoGoldTab />
              </div>
              <div className="">
                <EtrusredShop2 />
              </div>
              <div>
                <InformationCard marginTop="20px" />
              </div>
              <div>
                <Ekomi marginTop="20px" />
              </div>
            </div>
          </div>
        </div>
        <section className=" garantie_price_container ">
          <GarantedPrice />
        </section>
        <section className="mb-2 goldrechner-last-section">
          <ValueCalc />
        </section>
      </div>
    </section>
  );
};

export default page;
