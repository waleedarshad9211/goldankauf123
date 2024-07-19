"use client";
import Ekomi from "@/components/shared/Ekomi";
import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import InformationCard from "@/components/shared/InformationCard";
import KitcoGoldTab from "@/components/shared/KitcoGoldTab";
import PriceValueForm from "@/components/shared/PriceValueForm";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import sicherheitspaket from "/public/assets/img/sicherheitspaket .png";
import { sicherheitArray } from "@/public/static/HomepageStatic";
import Image from "next/image";
import GarantedPrice from "@/components/shared/garantedPrice/GarantedPrice";
import ValueCalc from "@/components/shared/ValueCalc";

const Sicherheit = () => {
  return (
    <section className="sicherheit_wrapper">
      <div className="container">
        <Breadcrumbs />
        <div className="row">
          <div className="col-12 col-md-12 d-lg-none">
            <div className="gold_zuruck_garantie_pricing">
              <PriceValueForm />
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-8">
            <div>
              <h2 className="videos_uber_zahngold_wrapper_heading1">
                SICHERHEIT
              </h2>
              <p className="sicherheit_wrapper_sub_heading">
                Unser Sicherheitspaket - Sicher Gold verkaufen
              </p>
              <div className="sicherheit_wrapper_paras">
                <p className="sicherheit_wrapper_para1">
                  Wenn es um Gold und viel Geld geht, sind umfassende
                  Sicherheitsvorkehrungen unerlässlich. Daher haben wir für
                  unsere Kunden ein einzigartiges Sicherheitssystem entwickelt,
                  das den Verkauf völlig ohne Risiko möglich macht. Wenn man es
                  genau nimmt, ist der Verkauf bei uns sogar sicherer als bei
                  einem Juwelier, einem Leihhaus oder einem Bankinstitut, da Sie
                  bei uns
                </p>
                <Image src={sicherheitspaket} alt="" />
              </div>
              <p className="mb-2">
                völlig anonym bleiben und absolut niemand Ihren Goldverkauf
                beobachten kann. Wenn Sie es wünschen, lassen wir Ihr Gold sogar
                kostenlos von einem diskreten Werttransport-Unternehmen bei
                Ihnen zu Hause oder im Büro abholen.
              </p>
              {sicherheitArray?.map((item, index) => {
                return (
                  <div key={index} className="sicherheit_wrapper_main">
                    <h3 className="sicherheit_wrapper_heading">
                      {item.heading}
                    </h3>
                    <div className="sicherheit_wrapper_inner">
                      <div className="sicherheit_wrapper_column1 ">
                        <Image
                          src={item.src}
                          alt=""
                          width={item.width}
                          height={item.height}
                        />
                      </div>
                      <div className="sicherheit_wrapper_column2">
                        <p className="sicherheit_wrapper_para">{item.para}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="sicherheit_wrapper_last_heading">
              Unser Sicherheitspaket - Sicher Gold verkaufen
            </p>
            <p>
              Wenn es um Gold und viel Geld geht, sind umfassende
              Sicherheitsvorkehrungen unerlässlich. Daher haben wir für unsere
              Kunden ein einzigartiges Sicherheitssystem entwickelt, das den
              Verkauf völlig ohne Risiko möglich macht. Wenn Sie es wünschen,
              lassen wir Ihr Gold sogar kostenlos von einem diskreten
              Werttransport-Unternehmen bei Ihnen zu Hause oder im Büro abholen.
            </p>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className=" d-none d-lg-block">
              <PriceValueForm />
            </div>
            <div className="">
              <KitcoGoldTab />
            </div>
            <div className="">
              <EtrusredShop2 />
            </div>
            <div>
              <InformationCard marginTop="20px" marginBottom="30px" />
            </div>
            <div>
              <Ekomi marginTop="15px" />
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

export default Sicherheit;
