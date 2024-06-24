import { reviewCardArray } from "@/public/static/HomepageStatic";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import EkomiVector from "/public/assets/img/ekomi-vektor.png";
import PowerBy from "/public/assets/img/homepage/ekomi_feedback_logo.png";
import PowerByMobile from "/public/assets/img/homepage/ekomi-white.png";
import Negative from "/public/assets/img/homepage/review_negative_icon.png";
import Neutral from "/public/assets/img/homepage/review_neutral_icon.png";
import Positive from "/public/assets/img/homepage/review_positive_icon.png";
import reviewArrow from "/public/assets/img/homepage/review_tick.png";
import reviewArrow2 from "/public/assets/img/homepage/review_tick_2.png";

const CustomerReviewsSection = () => {
  return (
    <div className="container">
      <section className="customer_review_section_wrapper">
        <div className="customer_review_section_wrapper_heading">
          <h2>100% Sicherheit durch echte Kundenbewertungen</h2>
        </div>
        <div className="row mt-2">
          <div className="col-12 col-md-4">
            <div>
              <div className="d-flex align-items-center customer_review_text">
                <p>» Bereits über 150.000 Kunden </p>
              </div>
              <div className="d-flex align-items-center customer_review_text">
                <p>» Über 8.000 eKomi Bewertungen</p>
              </div>
              <div className="d-flex align-items-center customer_review_text">
                <p>» Keine Gebühren und Abzüge</p>
              </div>
              <div className="d-flex align-items-center customer_review_text">
                <p>» Keine Versandkosten</p>
              </div>
            </div>
            <div className="pwered_by">
              <p className="d-md-none d-sm-block">Powered by</p>
              <Image
                src={PowerByMobile}
                alt=""
                width={139}
                height={37}
                className="pwered_by_img d-md-none d-sm-block"
              />
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="d-flex align-items-center customer_review_ekomi_powered_by">
              <Image
                src={EkomiVector}
                alt=""
                width={165}
                height={165}
                className="customer_review_ekomi_powered_by_img"
              />
              <div className="ekomi_powered_by">
                <ul>
                  <li className="d-flex"> • eKomi Siegel Gold</li>
                  <li className="d-flex "> • Unabhängig & transparent</li>
                </ul>
                <div className="ekomi_powered_by_inner_image d-none d-lg-block">
                  <div>Powered By</div>
                  <Image src={PowerBy} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row review_slider_row">
          <div className="col-6 col-md-4 col-lg-3 ">
            <div className="review_card">
              <p className="review_card_heading">Durchschnittliche Bewertung</p>
              <div className=" Bewertung">
                <h2>4.9</h2>
                <div className="review">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
              <div className="p2">
                <p>Basierend auf über 8.000 Bewertungen</p>
              </div>
              <div className="review_bottom_wrapper">
                <div className="d-flex align-items-center justify-content-between review_positiv">
                  <div className="positive">Positiv</div>
                  <div className="positive_icon">
                    <Image src={Positive} alt="" />
                  </div>
                  <div className="percentage-bar">
                    <div className="fill" style={{ width: "92.2%" }}></div>
                  </div>

                  <div className="review_percentage">99.2%</div>
                </div>
                <div className="d-flex align-items-center justify-content-between review_positiv">
                  <div className="positive">Neutral</div>
                  <div className="positive_icon">
                    <Image src={Neutral} alt="" />
                  </div>
                  <div className="percentage-bar">
                    <div className="fill" style={{ width: "10.35%" }}></div>
                  </div>
                  <div className="review_percentage">0.35%</div>
                </div>
                <div className="d-flex align-items-center justify-content-between review_positiv">
                  <div className="positive">Negativ</div>
                  <div className="positive_icon">
                    <Image src={Negative} alt="" />
                  </div>
                  <div className="percentage-bar">
                    <div className="fill" style={{ width: "12.45%" }}></div>
                  </div>
                  <div className="review_percentage">0.45%</div>
                </div>
                <div>
                  <p className="text-center review_date">Stand 01.06.2023</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-8 col-lg-9 review_slider_col">
            <div className="review_slider_column">
              <div className="review_heading2">
                <p>Kundenbewertungen</p>
              </div>
              <Swiper
                className="review_slider_slides"
                modules={[Navigation]}
                slidesPerView={3}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 30,
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
                {reviewCardArray.map((item, index) => {
                  return (
                    <SwiperSlide>
                      <div className="review_slider_card">
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="reviewNum">{item.reviewNum}</p>{" "}
                          <p className="reviewStar">{item.reviewStar}</p>{" "}
                          <p className="reviewDate d-none d-md-block d-lg-block">
                            {item.reviewDate}
                          </p>
                        </div>
                        <div className="review_para d-flex justify-content-center align-items-center">
                          <p className="">
                            Abwicklung und Zahlung hat alles prima geklappt! Man
                            kann sich auf Euch verlassen. Gerne weiter so!
                          </p>
                        </div>
                        <p className="reviewDate d-block d-md-none d-lg-none mt-2 text-center">
                          {item.reviewDate}
                        </p>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerReviewsSection;
