"use client";
import {
  review2CardArray,
  review2StarArray,
} from "@/public/static/HomepageStatic";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TrustedShopsLogo from "/public/assets/img/homepage/trusted-shops-logo.png";
import TrustedShop from "/public/assets/img/trusted-shops.png";
import reviewTick from "/public/assets/img/homepage/review_tick.png";
import reviewTickBlack from "/public/assets/img/homepage/custome-review2-tick.png";

const CustomerReview2 = () => {
  return (
    <div className="container">
      <section className="customer_review_section2_wrapper">
        <h2 className="text-center customer_review_sec2_heading">
          100% echte und vertrauenswürdige Kundenbewertungen
        </h2>
        <div className="row ">
          <div className="col-12 col-md-6 ">
            <div className="d-flex align-items-center customer_review2_trusted_shops d-none d-md-block d-lg-block">
              <div className="ekomi_trusted_shops">
                <Image
                  src={TrustedShop}
                  alt=""
                  width={132}
                  height={132}
                  className="trusted_img"
                />
                <ul>
                  <li>
                    <Image src={reviewTickBlack} alt="" />{" "}
                    <p>Note: ,,SEHR GUT”</p>{" "}
                  </li>
                  <li>
                    <Image src={reviewTickBlack} alt="" />{" "}
                    <p>Unabhängig & transparent</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="customer_review2_right_text">
              <div className="d-flex align-items-center customer_review2_text">
                <div>
                  <Image src={reviewTick} alt="" />
                </div>
                <p>2.000 Trusted Shops Bewertungen</p>
              </div>
              <div className="d-flex align-items-center customer_review2_text">
                <div>
                  <Image src={reviewTick} alt="" />
                </div>
                <p>Hohe Ankaufspreise</p>
              </div>
              <div className="d-flex align-items-center customer_review2_text">
                <div>
                  <Image src={reviewTick} alt="" />
                </div>
                <p>Sichere und seriöse Abwicklung</p>
              </div>
              <div className="d-flex align-items-center customer_review2_text">
                <div>
                  <Image src={reviewTick} alt="" />
                </div>
                <p>Keine Versandkosten</p>
              </div>
              <div className="d-flex justify-content-end">
                <Image
                  src={TrustedShopsLogo}
                  alt=""
                  width={138}
                  height={57}
                  className="trusted_img_logo d-sm-block d-md-none d-lg-none"
                />
              </div>
              <div className="d-flex align-items-center customer_review2_trusted_shops d-sm-block d-md-none d-lg-none">
                <div className="ekomi_trusted_shops">
                  <Image
                    src={TrustedShop}
                    alt=""
                    width={132}
                    height={132}
                    className="trusted_img"
                  />
                  <ul>
                    <li>
                      <Image src={reviewTickBlack} alt="" />{" "}
                      <p>Note: ,,SEHR GUT”</p>{" "}
                    </li>
                    <li>
                      <Image src={reviewTickBlack} alt="" />{" "}
                      <p>Unabhängig & transparent</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row review2_slider2_row">
          <div className="col-6 col-md-8 col-lg-9 ">
            <div className="customer_review2_logo_img">
              <Image
                src={TrustedShopsLogo}
                alt=""
                width={138}
                height={57}
                className="trusted_img_logo d-none d-lg-block"
              />
              <p>Kundenbewertungen</p>
              <p></p>
            </div>
            <div className="review_slider2_column">
              <Swiper
                className="review2_slider2_slides"
                modules={[Navigation]}
                slidesPerView={3}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  993: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                navigation
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {review2CardArray.map((item, index) => {
                  return (
                    <SwiperSlide>
                      <div className="review2_slider2_card" key={index}>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="reviewStar2Text">{item.reviewNum}</p>
                          <p className="reviewStar2">{item.reviewStar}</p>{" "}
                          <p className="reviewDate2 d-none d-md-block d-lg-block">
                            {item.reviewDate}
                          </p>
                          <div className="review2_triangle_down"></div>
                        </div>
                        <div className="review2_para d-flex justify-content-center align-items-center">
                          <p className="">
                            Abwicklung und Zahlung hat alles prima geklappt! Man
                            kann sich auf Euch verlassen. Gerne weiter so!
                          </p>
                        </div>
                        <p className="reviewDate2 d-sm-block d-md-none d-lg-none text-center mt-1">
                          {item.reviewDate}
                        </p>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 review2_card_column">
            <div className="review2_card">
              <div className="d-flex align-items-center Bewertung2">
                <p>Durchschnittliche Bewertung</p>
              </div>
              <div className="review2_card_rating">
                <h2>4.98</h2>
                <div className="review2">
                  <i className="fa fa-star" style={{ fontSize: "20px" }}></i>
                  <i className="fa fa-star" style={{ fontSize: "20px" }}></i>
                  <i className="fa fa-star" style={{ fontSize: "20px" }}></i>
                  <i className="fa fa-star" style={{ fontSize: "20px" }}></i>
                  <i className="fa fa-star" style={{ fontSize: "20px" }}></i>
                </div>
              </div>
              <div className="review2_card_content_body">
                <p className="text-center review2_gut">SEHR GUT</p>
                <p className="text-center review2_uber">
                  Basierend auf über 2.000 Bewertungen
                </p>
                <div className="review2_percenage">
                  {review2StarArray.map((item, index) => {
                    return (
                      <div
                        className="d-flex align-items-center justify-content-between"
                        key={index}
                      >
                        <div className="positive">
                          {item.starNum}{" "}
                          <i
                            className="fa fa-star"
                            style={{ fontSize: "9px" }}
                          ></i>
                        </div>
                        <div className="percentage2-bar">
                          <div
                            className="review2_fill"
                            style={{ width: item.percentage }}
                          ></div>
                        </div>

                        <div className="review2_percentage">
                          {item.starNum == 3 ||
                          item.starNum == 2 ||
                          item.starNum == 4
                            ? `< ${item.percentage}`
                            : item.percentage}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <p className="text-center review2_date">Stand 01.01.2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerReview2;
