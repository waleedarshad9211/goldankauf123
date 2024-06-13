"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PriceValueForm from "../shared/PriceValueForm";
import NTV from "/public/assets/img/ntv.png";
import TrustAmi from "/public/assets/img/homepage/hero-trustami.png";
import TopDienstleister from "/public/assets/img/homepage/top-dienstleister.png";
import TopEmpfehlung from "/public/assets/img/homepage/top-empfehlung.png";
import ProvenExpert from "/public/assets/img/proven-expert.png";
import TrustedShops from "/public/assets/img/trusted-shops.png";
import Button from "../shared/button/Button";
import GoldShmchk from "/public/assets/img/homepage/GOLDSCHMUCK.png";
import Silber from "/public/assets/img/homepage/slider2silber.png";
import TafelSilber from "/public/assets/img/homepage/slider2_tafelsilber.png";
import Zahngold from "/public/assets/img/homepage/slider2_zahngold.png";
import Diamond from "/public/assets/img/homepage/slider2_diamond.png";
import Luxury from "/public/assets/img/homepage/slider2_luxury.png";
import GoldBar from "/public/assets/img/homepage/slider2_goldbar.png";
import Goldmunzen from "/public/assets/img/homepage/slider2_goldmunzen.png";
import Industries from "/public/assets/img/homepage/slider2_industries.png";
import Platin from "/public/assets/img/homepage/slider2_platin.png";
import Pladium from "/public/assets/img/homepage/slider2_pladium.png";
import Rhodium from "/public/assets/img/homepage/slider2_rhodium.png";
import Slider3Tick from "/public/assets/img/homepage/slider3_tick.png";

const Herosection = () => {
  return (
    <section className="hero_section_wrapper">
      <div className="container">
        <div className="row hero_section_row">
          <div className="col-12 col-md-5 col-lg-5">
            <Swiper
              className="hero_slider"
              modules={[Pagination, Navigation]}
              navigation
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log("")}
              style={{
                "--swiper-pagination-color": "#3e393e",
                "--swiper-pagination-bullet-inactive-color": "#fff",
                "--swiper-pagination-bullet-inactive-opacity": "0.5",
                "--swiper-pagination-bullet-size": "22px",
                "--swiper-pagination-bullet-horizontal-gap": "6px",
              }}
            >
              <SwiperSlide>
                <div className="herobg1">
                  <div className="slider1-left">
                    <h2 className="slide1-h2">
                      Hier verkaufen Sie <br />
                      lhr Altgold, Zahngold, <br />
                      Silber, Platin, <br /> Münzen, ...
                    </h2>
                    <div className="slide1-Warum">
                      <div
                        style={{
                          backgroundColor: "#36A18B",
                          padding: "0px 10px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                          width: "fit-content",
                        }}
                      >
                        Sicher
                      </div>
                      <div
                        style={{
                          backgroundColor: "#36A18B",
                          padding: "0px 10px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                          width: "fit-content",
                        }}
                      >
                        Schnell
                      </div>
                      <div
                        style={{
                          backgroundColor: "#36A18B",
                          padding: "0px 10px",
                          borderRadius: "10px",
                          width: "fit-content",
                        }}
                      >
                        Kostenlos
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: "18px",
                        textTransform: "uppercase",
                        margin: "40px 0px 0px",
                      }}
                    >
                      Garantierte Sicherheit:
                    </div>
                    <div className="slider1-garanty">
                      <div className="d-flex garanty-img">
                        <Image src={NTV} alt="" />
                        <Image src={TrustedShops} alt="" />
                        <Image src={TrustAmi} alt="" />
                        <Image
                          src={ProvenExpert}
                          alt=""
                          className="hero-proven"
                        />
                        <Image src={TopDienstleister} alt="" />
                        <Image src={TopEmpfehlung} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="herobg1">
                  <div className="slider1-left">
                    <h2 className="slide1-h2">
                      Hier verkaufen Sie <br />
                      lhr Altgold, Zahngold, <br />
                      Silber, Platin, <br /> Münzen, ...
                    </h2>
                    <div className="slide1-Warum">
                      <div
                        style={{
                          backgroundColor: "#36A18B",
                          padding: "2px 10px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                          width: "fit-content",
                        }}
                      >
                        Sicher
                      </div>
                      <div
                        style={{
                          backgroundColor: "#36A18B",
                          padding: "2px 10px",
                          borderRadius: "10px",
                          marginBottom: "5px",
                          width: "fit-content",
                        }}
                      >
                        Schnell
                      </div>
                      <div
                        style={{
                          backgroundColor: "#36A18B",
                          padding: "2px 10px",
                          borderRadius: "10px",
                          width: "fit-content",
                        }}
                      >
                        Kostenlos
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: "18px",
                        textTransform: "uppercase",
                        margin: "40px 0px 0px",
                      }}
                    >
                      Garantierte Sicherheit:
                    </div>
                    <div className="slider1-garanty">
                      <div className="d-flex garanty-img">
                        <Image src={NTV} alt="" />
                        <Image src={TrustedShops} alt="" />
                        <Image src={TrustAmi} alt="" />
                        <Image
                          src={ProvenExpert}
                          alt=""
                          className="hero-proven"
                        />
                        <Image src={TopDienstleister} alt="" />
                        <Image src={TopEmpfehlung} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* <SwiperSlide>
                <div className="herobg2">
                  <div className="slider1-left">
                    <h2 className="slide2-h2">Ankauf von</h2>
                    <h2 className="slide2-heading2">Luxusuhren</h2>
                    <div className="slide2-p1">
                      <p>
                        Sichern Sie sich lhr Angebot! Schnell und einfach lhre
                        Uhr verkaufen
                      </p>
                    </div>
                    <Button
                      btnText="Jetzt Angebot einholen"
                      backgroundColor="#4A4A4A"
                      padding="3px 25px"
                      fontSize="28px"
                      fontWeight="bold"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="herobg3">
                  <div className="hero_slide2">
                    <div className="slider1-left">
                      <h2 className="slide3-h2">Ankauf von</h2>
                      <h2 className="slide3-heading2">Diamanten</h2>
                      <div className="slide3-p1">
                        <p>
                          Wir kaufen lhre Diamanten ab einer Größe von
                          <br></br> 0,25 ct. pro Stein an.
                        </p>
                      </div>
                      <Button
                        btnText="Jetzt Angebot einholen"
                        backgroundColor="#4A4A4A"
                        padding="3px 25px"
                        fontSize="28px"
                        fontWeight="bold"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="herobg4">
                  <div className="hero_slide2">
                    <h2 className="slide2_ankauf">Ankauf von</h2>
                    <h2 className="slide2_h2_mehr">
                      Gold, Silber, Platin, Zahngold etc.
                    </h2>
                    <div className="card_img ">
                      <Image src={GoldShmchk} alt="" />

                      <Image src={Silber} alt="" />

                      <Image src={TafelSilber} alt="" />

                      <Image src={Zahngold} alt="" />

                      <Image src={Diamond} alt="" />

                      <Image src={Luxury} alt="" />

                      <Image src={GoldBar} alt="" className="" />

                      <Image src={Goldmunzen} alt="" className="" />

                      <Image src={Industries} alt="" className="" />

                      <Image src={Platin} alt="" className="" />

                      <Image src={Pladium} alt="" className="" />

                      <Image src={Rhodium} alt="" className="" />
                    </div>
                    <Button
                      btnText="Jetzt Verkauf starten"
                      backgroundColor="#4A4A4A"
                      padding="3px 25px"
                      fontSize="27px"
                      fontWeight="bold"
                      width="max-content"
                      margin="30px 0px 0px 0px"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="herobg5">
                  <div className="hero_slide3">
                    <h2 className="slide3_ankauf">Ankauf von</h2>
                    <h2 className="slide3_h2_mehr">
                      Zahngold und<br></br> Dentalgold
                    </h2>
                    <div className="d-flex align-items-center">
                      <div>
                        <Image
                          src={Slider3Tick}
                          alt=""
                          className="slide3_tick_img"
                        />
                      </div>
                      <div className="slider3_text">
                        Zahngold gelb-und silberfarbig
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div>
                        <Image
                          src={Slider3Tick}
                          alt=""
                          className="slide3_tick_img"
                        />
                      </div>
                      <div className="slider3_text">
                        Dental - sowie Gusslegierungen
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div>
                        <Image
                          src={Slider3Tick}
                          alt=""
                          className="slide3_tick_img"
                        />
                      </div>
                      <div className="slider3_text">
                        Zahngold auch mit Zahn - und Zementresten
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div>
                        <Image
                          src={Slider3Tick}
                          alt=""
                          className="slide3_tick_img"
                        />
                      </div>
                      <div className="slider3_text">
                        Zahnkronen, Inlays, Brücken und Prothesen
                      </div>
                    </div>
                    <Button
                      className="slide5_btn"
                      btnText="Jetzt Verkauf starten"
                      fontSize="28px"
                      fontWeight="bold"
                      padding="1px 20px"
                      margin="172px 0px 0px 0px"
                    />
                  </div>
                </div>
              </SwiperSlide> */}
            </Swiper>
          </div>
          <div className="col-12 col-md-3 col-lg-4">
            <Swiper
              className="hero_slider"
              modules={[Pagination, Navigation]}
              navigation
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log("")}
              style={{
                "--swiper-pagination-color": "#3e393e",
                "--swiper-pagination-bullet-inactive-color": "#fff",
                "--swiper-pagination-bullet-inactive-opacity": "0.5",
                "--swiper-pagination-bullet-size": "22px",
                "--swiper-pagination-bullet-horizontal-gap": "6px",
              }}
            >
              <SwiperSlide>
                <div className="herobgsmall1">
                  <div className="slider1-left">
                    <h2 className="slide1-h2">
                      Ankauf von <br /> Luxusuhren
                    </h2>
                    <p className="herobgsmall1_para1">
                      Sichern Sie sich lhr Angebot! Schnell und einfach lhre Uhr
                      verkaufen.
                    </p>
                    <div className="herobgsmall1_btn">
                      <Button
                        btnText="Jetzt Angebot einholen"
                        fontSize="18px"
                        fontWeight="400"
                        padding="8px 20px"
                        width="90%"
                        boxShadow="rgba(0, 0, 0, 0.15) 0px 3px 3px 0px"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="herobgsmall1">
                  <div className="slider1-left">
                    <h2 className="slide1-h2">
                      Ankauf von <br /> Luxusuhren
                    </h2>
                    <p className="herobgsmall1_para1">
                      Sichern Sie sich lhr Angebot! Schnell und einfach lhre Uhr
                      verkaufen.
                    </p>
                    <div className="herobgsmall1_btn">
                      <Button
                        btnText="Jetzt Angebot einholen"
                        fontSize="18px"
                        fontWeight="400"
                        padding="8px 20px"
                        width="90%"
                        boxShadow="rgba(0, 0, 0, 0.15) 0px 3px 3px 0px"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-lg-3 heome_pricevalue kostenlos-wrapper">
            <PriceValueForm home />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
//
