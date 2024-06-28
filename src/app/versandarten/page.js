"use client";
import CustomerReviewsSection from "@/components/home/CustomerReviewsSection";
import Versandarten from "@/components/home/Versandarten";
import ValueCalc from "@/components/shared/ValueCalc";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import GarantedPrice from "@/components/shared/garantedPrice/GarantedPrice";

const Page = () => {
  return (
    <section className="versandarten_wrapper_main">
      <div className="container">
        <Breadcrumbs />
        <div className="versandarten_wrapper_hedading">
          <h2 className="versandarten_wrapper_main_heading1">
            Unsere Versandarten
          </h2>
        </div>
      </div>
      <Versandarten />
      <CustomerReviewsSection />
      <div className="container">
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

export default Page;
