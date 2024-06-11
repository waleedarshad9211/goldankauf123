"use client";
import "swiper/css";
import ValueCalc from "../shared/ValueCalc";
import Pricing from "../shared/pricing/Pricing";
import CustomerReview2 from "./CustomerReview2";
import CustomerReviewsSection from "./CustomerReviewsSection";
import GoldenKauf from "./GoldenKauf";
import Herosection from "./Herosection";
import HomeVideoSection from "./HomeVideoSection";
import MeltingFacilities from "./MeltingFacilities";
import Professionalsection from "./Professionalsection";
import Ubersection from "./Ubersection";
import Unseresection from "./Unseresection";
import Versandarten from "./Versandarten";
import WirAnkafun from "./WirAnkafun";
import Umweltschutz from "./Umweltschutz";
import Button from "../shared/button/Button";
import InfoSection from "./InfoSection";

const MainPage = () => {
  return (
    <div className="site_home_page ">
      <Herosection />
      <GoldenKauf />
      <section className="container">
        <ValueCalc home={true} notValuecalc={true} />
      </section>
      <Umweltschutz />
      <CustomerReview2 />
      <section className="hier_sehen_wrapper">
        <div className="text-center wir_ankaufun_section">
          <h2 className="wir_ankaufun_h2">
            Hier sehen Sie eine Übersicht der Edelmetalle, die wir ankaufen
          </h2>
          <h3 className="wir_ankaufun_h3">
            Detaillierte Informationen finden Sie{" "}
            <span className="wir_ankaufun_link">hier</span>
          </h3>
        </div>
        <WirAnkafun />
      </section>
      <section className="pricing container">
        <Pricing />
        <div className="d-flex justify-content-center align-items-center">
          <Button
            className=" text-white pricing-btn"
            btnText="JETZT wert berechnen"
            backgroundColor="#36A18B"
            width="auto"
            fontSize="25px"
            padding="7px 60px"
            height="auto"
          />
        </div>
      </section>
      <Unseresection />
      <HomeVideoSection />
      <Versandarten heading="Unsere Versandarten" />
      <CustomerReviewsSection />
      <Professionalsection />
      <Ubersection />
      <MeltingFacilities />
    </div>
  );
};

export default MainPage;
