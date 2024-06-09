import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import PriceValueForm from "@/components/shared/PriceValueForm";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Image from "next/image";
import Link from "next/link";
import Auswahlen from "/public/assets/img/funktionierts_auswahlen.png";
import Auswahlen2 from "/public/assets/img/funktionierts_auswahlen2.png";
import Auswahlen3 from "/public/assets/img/funktionierts_auswahlen3.png";
import Auswahlen4 from "/public/assets/img/funktionierts_auswahlen4.png";
import KitcoGoldTab from "@/components/shared/KitcoGoldTab";
import GarantedPrice from "@/components/shared/garantedPrice/GarantedPrice";
import ValueCalc from "@/components/shared/ValueCalc";

const page = () => {
  return (
    <section className="funktionierts_wrapper">
      <div className="container">
        <Breadcrumbs />
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
