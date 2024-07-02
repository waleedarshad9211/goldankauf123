import Image from "next/image";
import React from "react";
import Ntv from "/public/assets/img/ntv.png";
import whiteStar from "/public/assets/img/white-star.png";

const Gesamtsieger = () => {
  return (
    <section className="gesamtsieger_main_wrapper">
      <div className="gesamtsieger_wrapper">
        <div className="gesamtsieger_img">
          <Image src={Ntv} alt="" width={202} height={202} />
        </div>
        <div>
          <p className="gesamtsieger_para ">
            DEUTSCHLANDS BESTE ONLINE-PORTALE 2022
          </p>
        </div>
        <div className="gesamtsieger_btn">
          <Image src={whiteStar} alt="" />
          <p className="gesamtsieger_btn_txt">GESAMTSIEGER</p>
          <Image src={whiteStar} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Gesamtsieger;
