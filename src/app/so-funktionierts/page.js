import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import GarantedPrice from "@/components/shared/garantedPrice/GarantedPrice";
import ValueCalc from "@/components/shared/ValueCalc";
import Versandarten from "@/components/home/Versandarten";

const page = () => {
  return (
    <section className="funktionierts_wrapper">
      <div className="container">
        <Breadcrumbs />
        <Versandarten heading="Unsere Versandarten" />
        <section className=" garantie_price_container">
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
