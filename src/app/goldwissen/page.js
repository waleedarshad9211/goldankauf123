"use client";
import {
  goldWissenfArray,
  goldWissenfArray1,
  stadteankaufArrayMobile,
} from "@/public/static/HomepageStatic";
import React from "react";
import BtnArrow from "@/components/home/BtnArrow";
import BtnArrowMobile from "@/components/home/BtnArrowMobile";
import Ekomi from "@/components/shared/Ekomi";
import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import InformationCard from "@/components/shared/InformationCard";
import KitcoGoldTab from "@/components/shared/KitcoGoldTab";
import PriceValueForm from "@/components/shared/PriceValueForm";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Munzen_keypad from "/public/assets/img/Munzen_keypad.png";
import Munzen_keypad_mobile from "/public/assets/img/Munzen_keypad_mobile.png";
import Image from "next/image";
import GarantedPrice from "@/components/shared/garantedPrice/GarantedPrice";
import ValueCalc from "@/components/shared/ValueCalc";
import Keyboard from "@/components/shared/Keyboard";

const Goldwissen = () => {
  return (
    <section className="stadteankauf_wrapper goldwissen_wrapper_box">
      <div className="container">
        <Breadcrumbs />
        <div className="d-flex d-lg-none wirkaufen_page_price mt-2">
          <PriceValueForm home />
        </div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8">
            <h2 className="stadteankauf_wrapper_main_heading">Goldwissen</h2>
            <p className="stadteankauf_wrapper_para1">
              Ein sehr wichtiger Bestandteil unserer Webseite ist das
              Goldwissen, welches Ihnen detaillierte Informationen aus der Welt
              der Edelmetalle liefert. Wir sind stetig dabei das Lexikon weiter
              auszubauen, sodass es sich lohnt regelmäßig hier vorbeizuschauen.
              Dies gilt sowohl für neue Artikel, als auch für alte Artikel,
              welche wir weiterentwickeln.
            </p>
            <p className="stadteankauf_wrapper_para2">
              Gerne nehmen wir auch ihre hinweise an, falls Sie einen speziellen
              Artikelwunsch haben, oder einen unserer Artikel mit Ihrem Wissen
              verbessern wollen. Wir wünschen Ihnen viel Spaß mit unserem
              Goldwissen und hoffen Sie als Stammleser gewinnen zu können.
            </p>
            <Keyboard />
            {/* <Image
              src={Munzen_keypad}
              alt=""
              className="d-none d-md-block d-lg-block"
            />
            <Image
              src={Munzen_keypad_mobile}
              alt=""
              className="d-block d-md-none d-lg-none"
            /> */}
            <div>
              <p className="verkaufsrelavantes_wissen_heading ">
                Verkaufsrelavantes wissen
              </p>
            </div>
            <div className=" goldwissen_wrapper_box row d-none d-md-flex d-lg-flex">
              {goldWissenfArray.map((item, index) => {
                return (
                  <div
                    className="col-6 col-md-6 stadteankauf_wrapper_box_column"
                    key={index}
                  >
                    <div className="img_box_wrapepr">
                      <div className="img_box">
                        <Image src={item.src} alt="" />
                        <div className="zahngold_last_img_wrapper">
                          <div className="zahngold_last_img_wrapper_body">
                            <div>
                              <p className="wir_verkaufer_name">{item.text}</p>
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
            <p className="verkaufsrelavantes_wissen_heading d-none d-md-flex d-lg-flex">
              Detailwissen für Wissbegierige
            </p>
            <div className=" goldwissen_wrapper_box row d-none d-md-flex d-lg-flex">
              {goldWissenfArray1.map((item, index) => {
                return (
                  <div
                    className="col-6 col-md-6 stadteankauf_wrapper_box_column"
                    key={index}
                  >
                    <div className="img_box_wrapepr">
                      <div className="img_box">
                        <Image src={item.src} alt="" />
                        <div className="zahngold_last_img_wrapper">
                          <div className="zahngold_last_img_wrapper_body">
                            <div>
                              <p className="wir_verkaufer_name">{item.text}</p>
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
            <div className="stadteankauf_wrapper_box row d-flex d-md-none d-lg-none">
              {goldWissenfArray.map((item, index) => {
                return (
                  <div className="col-12 col-md-12" key={index}>
                    <div className="img_box_wrapepr">
                      <div className="img_box">
                        <Image src={item.src} alt="" />
                        <div className="zahngold_last_img_wrapper">
                          <div className="zahngold_last_img_wrapper_body">
                            <div>
                              <p className="wir_verkaufer_name">{item.text}</p>
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
            <p className="verkaufsrelavantes_wissen_heading d-flex d-md-none d-lg-none">
              Detailwissen für Wissbegierige
            </p>
            <div className="stadteankauf_wrapper_box row d-flex d-md-none d-lg-none">
              {goldWissenfArray1.map((item, index) => {
                return (
                  <div className="col-12 col-md-12" key={index}>
                    <div className="img_box_wrapepr">
                      <div className="img_box">
                        <Image src={item.src} alt="" />
                        <div className="zahngold_last_img_wrapper">
                          <div className="zahngold_last_img_wrapper_body">
                            <div>
                              <p className="wir_verkaufer_name">{item.text}</p>
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
          <div className="col-12 col-md-12 col-lg-4">
            <div className="d-none d-lg-flex wirkaufen_page_price">
              <PriceValueForm home />
            </div>
            <KitcoGoldTab />
            <EtrusredShop2 />
            <InformationCard />
            <Ekomi marginTop="15px" />
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

export default Goldwissen;
