"use client";
import { goldrechnerArray } from "@/public/static/HomepageStatic";
import Image from "next/image";
import React from "react";

const GarantedPrice = () => {
  return (
    <div className="row">
      {goldrechnerArray.map((item, index) => {
        return (
          <div className="col-6 col-md-4 col-lg-4">
            <div className="granted-price-card">
              <Image src={item.imageSrc} alt="" />
              <div className="d-flex flex-column align-items-center">
                <p className="head">{item.heading}</p>
                <p className="para">{item.para}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GarantedPrice;
