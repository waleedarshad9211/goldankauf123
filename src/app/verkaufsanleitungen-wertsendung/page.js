"use client";
import KitcoGoldTab from "@/components/shared/KitcoGoldTab";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Button from "@/components/shared/button/Button";
import Image from "next/image";
import VersandDelivery from "/public/assets/img/versandarten_card_img3.png";
import VersandDeliveryRecieved from "/public/assets/img/versandarten_card_img2.png";
import VersandMoneyGold from "/public/assets/img/versandarten_card_img1.png";
import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import InformationCard from "@/components/shared/InformationCard";
import tickIcon from "/public/assets/img/bestelen_tick.png";
import downTriangle from "/public/assets/img/down-triangle_verkaufen.png";
import {
  verkaufsanleitung_wrapperArray,
  verkaufsanleitung_wrapperArray1,
  verkaufsanleitungArray1,
  verkaufsanleitungArray2,
} from "@/public/static/HomepageStatic";

const Verkaufsanleitung = () => {
  return (
    <section className="verkaufsanleitung_wrapper zahngold_wrapper">
      <div className="container">
        <Breadcrumbs />
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8">
            <p className="verkaufsanleitung_wrapper_heading1">
              Verkaufsanleitung für den Edelmetallankauf
            </p>
            <p className="verkaufsanleitung_wrapper_para1">
              Wenn Sie mehr über den Verkaufsablauf erfahren wollen, lesen Sie
              bitte unsere Ausführungen zu den von uns angebotenen Versandarten.
              Sollten Sie darüber hinaus weitere Fragen haben, wenden Sie sich
              bitte an unseren Kundenservice, welcher Ihnen telefonisch oder per
              E-Mail zur Verfügung steht.
            </p>
            <p className="verkaufsanleitung_wrapper_heading2">
              Allgemeine Verkaufsinformationen
            </p>
            {verkaufsanleitung_wrapperArray.map((item, index) => {
              return (
                <div className="verkaufsanleitung_wrapper_list " key={index}>
                  <Image src={item.src} />
                  <p>{item.txt}</p>
                </div>
              );
            })}
            <div className="row verkaufsanleitung_card_row">
              <div className="col-12 col-md-4 col-lg-4 verkaufsanleitung_card_column">
                <div className="verkaufsanleitung_card1 ">
                  <p className="text-center">SELBSTVERSAND</p>
                  <div className="">
                    <Image
                      src={VersandMoneyGold}
                      alt="delivery"
                      width={136}
                      height={136}
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="verkaufsanleitung_triangle-up"></div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 verkaufsanleitung_card_column">
                <div className="verkaufsanleitung_card2 ">
                  <p className="text-center">VERSANDTASCHE</p>
                  <div className="">
                    <Image
                      src={VersandDeliveryRecieved}
                      alt="money gold"
                      width={136}
                      height={136}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 verkaufsanleitung_card_column">
                <div className="verkaufsanleitung_card2">
                  <p className="text-center">WERTTRANSPORT</p>
                  <div className="">
                    <Image
                      src={VersandDelivery}
                      alt="recieved"
                      width={136}
                      height={136}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="funktionierts_wrapper_auswahlen verkaufsanleitung_auswahlen">
              <p className="verkaufsanleitung_auswahlen_heading">
                SELBSTVERSAND
              </p>
              <div className="verkaufsanleitung_wrapper_selbstversand">
                {verkaufsanleitungArray1.map((item, index) => {
                  return (
                    <div className="verkaufsanleitung_wrapper_card" key={index}>
                      <div className="verkaufsanleitung_wrapper_card_triangle">
                        <Image
                          src={downTriangle}
                          alt=""
                          className="verkaufsanleitung_wrapper_card_triangle_img"
                        />
                      </div>
                      <Image src={item.src} alt="" />
                      <div className="verkaufsanleitung_wrapper_card_div">
                        <p className="verkaufsanleitung_wrapper_card_heading">
                          {item.heading}
                        </p>
                        <p className="verkaufsanleitung_wrapper_card_para">
                          {item.para}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="funktionierts_wrapper_auswahlen verkaufsanleitung_auswahlen">
              <p className="verkaufsanleitung_auswahlen_heading">
                VERSANDTASCHE
              </p>
              <div className="verkaufsanleitung_wrapper_selbstversand">
                {verkaufsanleitungArray2.map((item, index) => {
                  return (
                    <div className="verkaufsanleitung_wrapper_card" key={index}>
                      <div className="verkaufsanleitung_wrapper_card_triangle">
                        <Image
                          src={downTriangle}
                          alt=""
                          className="verkaufsanleitung_wrapper_card_triangle_img"
                        />
                      </div>
                      <Image src={item.src} alt="" />
                      <div className="verkaufsanleitung_wrapper_card_div">
                        <p className="verkaufsanleitung_wrapper_card_heading">
                          {item.heading}
                        </p>
                        <p className="verkaufsanleitung_wrapper_card_para">
                          {item.para}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="funktionierts_wrapper_auswahlen verkaufsanleitung_auswahlen">
              <p className="verkaufsanleitung_auswahlen_heading">WERTVERSAND</p>
              <div className="verkaufsanleitung_wrapper_selbstversand">
                {verkaufsanleitungArray2.map((item, index) => {
                  return (
                    <div className="verkaufsanleitung_wrapper_card" key={index}>
                      <div className="verkaufsanleitung_wrapper_card_triangle">
                        <Image
                          src={downTriangle}
                          alt=""
                          className="verkaufsanleitung_wrapper_card_triangle_img"
                        />
                      </div>
                      <Image src={item.src} alt="" />
                      <div className="verkaufsanleitung_wrapper_card_div">
                        <p className="verkaufsanleitung_wrapper_card_heading">
                          {item.heading}
                        </p>
                        <p className="verkaufsanleitung_wrapper_card_para">
                          {item.para}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="verkaufsanleitung_zusatzliche_heading">
                Zusätzliche Informationen
              </p>
              <p className="verkaufsanleitung_zusatzliche_para">
                Zusätzlich Informationen zum Ankaufsablauf liefern folgende
                Unterseiten:
              </p>
              {verkaufsanleitung_wrapperArray1.map((item, index) => {
                return (
                  <div className="verkaufsanleitung_wrapper_list " key={index}>
                    <Image src={item.src} />
                    <p>{item.txt}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="">
              <div className="">
                <KitcoGoldTab />
              </div>
              <div className="">
                <EtrusredShop2 />
              </div>
              <div className="">
                <InformationCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verkaufsanleitung;
