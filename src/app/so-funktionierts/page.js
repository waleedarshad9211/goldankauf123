import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import GarantedPrice from "@/components/shared/garantedPrice/GarantedPrice";
import ValueCalc from "@/components/shared/ValueCalc";
import Image from "next/image";
import garanteeImg from "/public/assets/img/homepage/100_ gurantee.png";
import FunktioniertVersndarten from "@/components/shared/funktioniertVersndarten";

const page = () => {
  return (
    <section className="funktionierts_wrapper">
      <div className="container">
        <Breadcrumbs />
        <div className="d-flex justify-content-between">
          <div className="funktionierts_wrapper_head_paras">
            <p className="funktionierts_wrapper_heading">So funktioniert's</p>
            <p className="funktionierts_wrapper_sub_head">
              Goldankauf im Internet mit Gold-zurück-Garantie
            </p>
            <p className="funktionierts_wrapper_paras">
              Unser Ankaufservice ist einfach, schnell und unkompliziert. Wählen
              Sie aus folgenden drei Varianten um Ihr Gold per Post zu
              verkaufen:
            </p>
          </div>
          <Image
            src={garanteeImg}
            alt=""
            width={192}
            height={191}
            className="funktionierts_wrapper_img"
          />
        </div>
        <div className="mb-2">
          <FunktioniertVersndarten />
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
