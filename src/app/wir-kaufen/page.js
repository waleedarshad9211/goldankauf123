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
            <h2 className="wirkaufen_page_wrapper_heading1">
              Zahngold123.de - Ihr fairer Edelmetallpartner
            </h2>
            <p className="wirkaufen_page_wrapper_para1">
              Wir kaufen Altgold, Bruchgold, Zahngold, Goldbarren, Goldmünzen,
              Nuggets, Silber, Platin und Palladium zu sehr hohen Preisen an.
              Wir kaufen alles, indem sich Gold, Silber, Platin oder Palladium
              befindet.
            </p>
            <p className="wirkaufen_page_wrapper_para2">
              Sie sind unsicher, ob beispielsweise Ihr Goldschmuck oder Zahngold
              Ankauf infrage kommt? Kontaktieren Sie uns einfach über unser
              Kontaktformular oder telefonisch von Mo. - Do. von 10 - 17 Uhr
              sowie Fr. 10 - 15 Uhr unter 040 64539254. Unser Kundenservice-Team
              freut sich auf Ihre Anfrage und wird Ihnen umgehend weiterhelfen.
            </p>
            <p className="wirkaufen_page_wrapper_para3">
              Hier eine Übersicht mit Beispielgegenständen, die wir zu unseren
              börsenaktuellen Preisen ankaufen:
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
      </div>
    </section>
  );
};

export default page;
