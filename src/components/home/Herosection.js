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
import { slider2Arr } from "@/public/static/HomepageStatic";
import GoldShmchk from "/public/assets/img/homepage/GOLDSCHMUCK.png";
import Silber from "/public/assets/img/homepage/slider2silber.png";
import Zahngold from "/public/assets/img/homepage/slider2_zahngold.png";
import GoldBar from "/public/assets/img/homepage/slider2_goldbar.png";
import Goldmunzen from "/public/assets/img/homepage/slider2_goldmunzen.png";
import Industries from "/public/assets/img/homepage/slider2_industries.png";
import Platin from "/public/assets/img/homepage/slider2_platin.png";
import Pladium from "/public/assets/img/homepage/slider2_pladium.png";
import Rhodium from "/public/assets/img/homepage/slider2_rhodium.png";
import Slider3Tick from "/public/assets/img/homepage/small-tick.png";
import slider5Ntv from "/public/assets/img/homepage/slider-5-ntv.png";

const Herosection = () => {
  return (
    <section className="hero_section_wrapper">
      <div className="container">
        <div className="row hero_section_row">
          <div className="col-12 col-md-7 col-lg-5 col-xl-5">
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
                <div className="herobg2">
                  <div className="slider1-left">
                    <h2 className="slide2-h2">
                      Ankauf von <br />
                      Zahngold und <br />
                      Dentalgold
                    </h2>

                    {slider2Arr.map((item, index) => {
                      return (
                        <div className="slide2-p1" key={index}>
                          <Image src={item.src} alt="" />
                          <p>{item.para}</p>
                        </div>
                      );
                    })}
                    <div className="slider2-btn">
                      <Button
                        btnText="Jetzt Angebot einholen"
                        fontSize="18px"
                        fontWeight="400"
                        padding="8px 10px"
                        width="60%"
                        boxShadow="rgba(0, 0, 0, 0.15) 0px 3px 3px 0px"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="herobg3">
                  <div className="hero_slide2">
                    <h2 className="slide2_ankauf">Ankauf von</h2>
                    <h2 className="slide2_h2_mehr">
                      Gold, Silber, Platin, Zahngold etc.
                    </h2>
                    <div className="card_img ">
                      <Image src={GoldShmchk} alt="" />

                      <Image src={Silber} alt="" />

                      {/* <Image src={TafelSilber} alt="" /> */}

                      <Image src={Zahngold} alt="" />

                      {/* <Image src={Diamond} alt="" /> */}

                      {/* <Image src={Luxury} alt="" /> */}

                      <Image src={GoldBar} alt="" className="" />

                      <Image src={Goldmunzen} alt="" className="" />

                      <Image src={Industries} alt="" className="" />

                      <Image src={Platin} alt="" className="" />

                      <Image src={Pladium} alt="" className="" />

                      <Image src={Rhodium} alt="" className="" />
                    </div>
                    <div className="slider2-btn">
                      <Button
                        btnText="Jetzt Verkauf starten"
                        fontSize="18px"
                        fontWeight="400"
                        padding="8px 10px"
                        margin="0px 0px 0px 12px"
                        width="60%"
                        boxShadow="rgba(0, 0, 0, 0.15) 0px 3px 3px 0px"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="herobg4">
                  <div className="hero_slide3">
                    <h2 className="slide5_ankauf">
                      Edelmetalle <br></br> verkaufen ist
                      <br />
                      Vertrauenssache
                    </h2>
                    <div className="d-flex align-items-center">
                      <div>
                        <Image
                          src={Slider3Tick}
                          alt=""
                          className="slide3_tick_img"
                        />
                      </div>
                      <div className="slider5_text">
                        Kostenloser & versicherter Versand
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
                      <div className="slider5_text">
                        KKostenlos & unverbindlich
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
                      <div className="slider5_text">
                        Keine Verkaufsverpflichtung
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
                      <div className="slider5_text">Gold-zurück-Garantie</div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div>
                        <Image
                          src={Slider3Tick}
                          alt=""
                          className="slide3_tick_img"
                        />
                      </div>
                      <div className="slider5_text">
                        Sehr hohe Ankaufspreise
                      </div>
                    </div>
                    <div className="slider_5_sicherheit">
                      <div className="slider_5_line_1"></div>
                      <div className="slider_5_btn1">BEKANNT AUS DEM TV</div>
                      <div className="slider_5_line_1"></div>
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
                <div className="herobg5">
                  <div className="hero_slide3">
                    <h2 className="slide5_ankauf">
                      lhr altes Gold zu <br></br> Geld machen
                    </h2>
                    <h2 className="slide5_h2_mehr">Warum Goldankauf123.de?</h2>
                    <div className="d-flex align-items-center">
                      <div>
                        <Image
                          src={Slider3Tick}
                          alt=""
                          className="slide3_tick_img"
                        />
                      </div>
                      <div className="slider5_text">
                        Schnelle Online-Abwicklung
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
                      <div className="slider5_text">
                        Kostenloser & versicherter Versand
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
                      <div className="slider5_text">
                        Sehr hohe Ankaufspreise
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
                      <div className="slider5_text">Gold-zurück-Garantie</div>
                    </div>
                    <div className="slider-5-ntv">
                      <div className="slider-5-para">
                        <p className="p1">Verkaufen Sie Ihre</p>
                        <p className="p2">Edelmetalle</p>
                        <p className="p3">beim Testsieger</p>
                      </div>
                      <div>
                        <Image src={slider5Ntv} alt="" />
                      </div>
                    </div>
                    <div className="slider_5_sicherheit">
                      <div className="slider_5_line_1"></div>
                      <div className="slider_5_btn1">
                        Garantierte Sicherheit:
                      </div>
                      <div className="slider_5_line_1"></div>
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
            </Swiper>
          </div>
          <div className="col-12 col-md-4 col-lg-3 col-xl-3 small-slider-column">
            <Swiper
              className="hero_slider hero_small_slider"
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
                        fontSize="17px"
                        fontWeight="400"
                        padding="8px 10px"
                        width="90%"
                        boxShadow="rgba(0, 0, 0, 0.15) 0px 3px 3px 0px"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="herobgsmall2">
                  <div className="slider1-left">
                    <h2 className="smallslide2-h2">
                      Ankauf von <br /> Diamanten
                    </h2>
                    <p className="herobgsmall1_para1">
                      Wir kaufen Ihre Diamanten ab einer Größe von 0.25 CT je
                      Stein an.
                    </p>
                    <div className="herobgsmall1_btn">
                      <Button
                        btnText="Jetzt Angebot einholen"
                        fontSize="17px"
                        fontWeight="400"
                        padding="8px 10px"
                        width="90%"
                        boxShadow="rgba(0, 0, 0, 0.15) 0px 3px 3px 0px"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="herobgsmall3">
                  <div className="slider1-left">
                    <h2 className="smallslide3-h2">
                      Ankauf von <br /> Markenschmuck
                    </h2>
                    <p className="herobgsmall3_para1">
                      Schmuck der Marken Cartier,
                      <br /> Bulgari, Wellendorff, Chopard,
                      <br />
                      Pomellato, Fope, Niessing, ...
                    </p>
                    <div className="herobgsmall1_btn">
                      <Button
                        btnText="Jetzt Angebot einholen"
                        fontSize="17px"
                        fontWeight="400"
                        padding="8px 10px"
                        width="90%"
                        boxShadow="rgba(0, 0, 0, 0.15) 0px 3px 3px 0px"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="herobgsmall3-b">
                  <div className="slider1-left">
                    <h2 className="smallslide3-h2">
                      Ankauf von <br /> Markenschmuck
                    </h2>
                    <p className="herobgsmall3_para1">
                      Schmuck der Marken Cartier,
                      <br /> Bulgari, Wellendorff, Chopard,
                      <br />
                      Pomellato, Fope, Niessing, ...
                    </p>
                    <div className="herobgsmall1_btn">
                      <Button
                        btnText="Jetzt Angebot einholen"
                        fontSize="17px"
                        fontWeight="400"
                        padding="8px 10px"
                        width="90%"
                        boxShadow="rgba(0, 0, 0, 0.15) 0px 3px 3px 0px"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="herobgsmall4">
                  <div className="slider1-left">
                    <h2 className="smallslide4-h2">
                      Ankauf von <br /> Diamantschmuck
                    </h2>
                    <p className="herobgsmall4_para1">
                      Wir vergüten neben Edelmetallen
                      <br /> auch Diamanten mit einer
                      <br />
                      Mindestgröße von <br />
                      0.25 CT je Stein.
                    </p>
                    <div className="herobgsmall1_btn">
                      <Button
                        btnText="Jetzt Angebot einholen"
                        fontSize="17px"
                        fontWeight="400"
                        padding="8px 10px"
                        width="90%"
                        boxShadow="rgba(0, 0, 0, 0.15) 0px 3px 3px 0px"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="herobgsmall5"></div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-3 col-md-12 col-lg-4 heome_pricevalue kostenlos-wrapper">
            <PriceValueForm home />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
//
