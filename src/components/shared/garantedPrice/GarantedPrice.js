"use client";
import { goldrechnerArray } from "@/public/static/HomepageStatic";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const GarantedPrice = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="row">
      {goldrechnerArray.map((item, index) => {
        return (
          <div className="col-12 col-md-12 col-lg-4" key={index}>
            <div className="granted-price-card-wrapper">
              <div
                className="granted-price-card"
                style={{
                  marginBottom:
                    index !== 2 && isMobile
                      ? "75px"
                      : index === 2 && isMobile
                      ? "20px"
                      : "5px",
                }}
              >
                <Image src={item.imageSrc} alt="" />
                <div className="d-flex flex-column align-items-center">
                  <p className="head">{item.heading}</p>
                  <p className="para">{item.para}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GarantedPrice;
