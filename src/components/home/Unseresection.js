import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import EkomiVector from "/public/assets/img/ekomi-vektor.png";
import Trustami from "/public/assets/img/hero-trustami.png";
import BankingCheck from "/public/assets/img/banking_check4-9.png";
import TopDienstleiester from "/public/assets/img/homepage/top-dienstleister.png";
import TopEmpfehlung from "/public/assets/img/homepage/top-empfehlung.png";
import ProvenExperts from "/public/assets/img/proven-expert-2.png";
import TrustedShops from "/public/assets/img/trusted-shops.png";

const Unseresection = () => {
  return (
    <section className="unsere_section_wrapper">
      <div className="container">
        <h2 className="text-center">
          Unsere Auszeichnungen - Vertrauen ist uns wichtig
        </h2>

        <Swiper
          modules={[Navigation]}
          slidesPerView={5}
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            993: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="d-flex align-items-center justify-content-center unsere_section_slide1_img">
              <Image src={EkomiVector} alt="" width={159} height={159} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex align-items-center justify-content-center unsere_section_slide1_img">
              <Image src={TrustedShops} alt="" width={159} height={159} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex align-items-center justify-content-center unsere_section_slide1_img">
              <Image
                src={ProvenExperts}
                alt=""
                width={208}
                height={159}
                className="unsere_proven_expert"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex align-items-center justify-content-center unsere_section_slide1_img">
              <Image src={TopDienstleiester} alt="" width={159} height={159} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex align-items-center justify-content-center unsere_section_slide1_img">
              <Image src={TopEmpfehlung} alt="" width={159} height={159} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex align-items-center justify-content-center unsere_section_slide1_img">
              <Image src={Trustami} alt="" width={159} height={159} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex align-items-center justify-content-center unsere_section_slide1_img">
              <Image
                src={BankingCheck}
                alt=""
                width={159}
                height={159}
                className="unsere_proven_expert"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Unseresection;
