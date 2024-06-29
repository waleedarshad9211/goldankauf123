"use client";
import BtnArrow from "@/components/home/BtnArrow";
import BtnArrowMobile from "@/components/home/BtnArrowMobile";
import KitcoGoldTab from "@/components/shared/KitcoGoldTab";
import PriceValueForm from "@/components/shared/PriceValueForm";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import { WirAnkafunPageArray } from "@/public/static/HomepageStatic";
import Image from "next/image";
import InformationCard from "@/components/shared/InformationCard";
import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import Ekomi from "@/components/shared/Ekomi";
import GarantedPrice from "@/components/shared/garantedPrice/GarantedPrice";
import ValueCalc from "@/components/shared/ValueCalc";

const page = () => {
  return (
    <section className="wirkaufen_page_wrapper">
      <div className="container">
        <Breadcrumbs />
        <div className="d-flex d-lg-none wirkaufen_page_price">
          <PriceValueForm />
        </div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8">
            <h2 className="wirkaufen_page_wrapper_heading1">Wirkaufen</h2>
            <p className="wirkaufen_page_wrapper_para1">
              Alle Edelmetalle und Edelsteine, die wir ankaufen sehen Sie hier!
            </p>
            <p className="wirkaufen_page_wrapper_para2">
              Wir verstehen uns als zuverlässiger Partner für den Ankauf von
              Edelmetallen aller Art. Unter den folgenden Menüpunkten erfahren
              Sie mehr zu den Gegenständen, welche Sie über Goldankauf123.de
              verkaufen können. Doch auch wenn ein Gegenstand hier nicht
              aufgezählt sein sollte, bedeutet dies noch lange nicht, dass wir
              diesen Gegenstand nicht auch ankaufen. Sprechen Sie im Zweifel
              immer unseren Kundenservice an. Wir sind sehr darum bemüht, Ihnen
              einen schnellen und diskreten Goldankauf Service anbieten zu
              können. Seit vielen Jahren am Markt präsent steht Goldankauf123
              für den einfachen und sicheren Edelmetallankauf über den Postweg.
            </p>
            <section className="wir_ankaufun_wrapper">
              <div className="container">
                <div className="row">
                  {WirAnkafunPageArray.map((item, index) => {
                    return (
                      <div
                        className="col-6 col-md-6 col-lg-6 wir_ankaufun_card_column"
                        key={index}
                      >
                        <div className="wir_ankaufun_card">
                          <div className="d-flex flex-column justify-content-center align-items-center wir_ankaufun_card_img">
                            <div className="wir_ankaufun_card_container_wrapper">
                              <Image src={item.src} alt="" />
                              <div className="text_list_container">
                                <ul>
                                  <li>Goldbarren</li>
                                  <li>Feingoldbarren</li>
                                  <li>Goldbarren</li>
                                  <li>Goldbarren</li>
                                  <li>Feingoldbarren</li>
                                  <li>Goldbarren</li>
                                </ul>
                              </div>
                            </div>
                            <div className="wir_verkaufer_bottom_wrapper">
                              <div className="wir_verkaufer">
                                <div>
                                  <p className="wir_verkaufer_name">
                                    {item.name}
                                  </p>
                                  <p className="wir_verkaufer_text">
                                    {item.text}
                                  </p>
                                </div>
                                <div className="wir_verkaufer_btn">
                                  <div className="wir_verkaufer_btn_arrow">
                                    <BtnArrowMobile />
                                    <BtnArrow />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="">
              <div className="d-none d-lg-flex ">
                <PriceValueForm />
              </div>
              <div className="">
                <KitcoGoldTab />
              </div>
              <EtrusredShop2 marginTop="20px" />
              <InformationCard marginTop="20px" />
              <Ekomi marginTop="20px" />
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
