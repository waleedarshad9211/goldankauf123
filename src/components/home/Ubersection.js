import { UberSectionArray } from "@/public/static/HomepageStatic";
import Image from "next/image";
import Button from "../shared/button/Button";

const Ubersection = () => {
  return (
    <section className="uber_section_wrapper">
      <div className="container">
        <h2 className="uber_section_heading">Unser Erfolg in Zahlen</h2>
        <div className="row">
          {UberSectionArray.map((item, index) => {
            return (
              <div
                className={`col-6 col-md-6 col-lg-3 uber_section_wrapper_column${index}`}
                key={index}
              >
                <div className="uber_section_card">
                  <div className="uber_section_card_upper_half">
                    <div className="uber_sec_img">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                      />
                    </div>
                    <div className="text-white uberText">{item.uberText}</div>
                    <div className="uber_btn_line_section">
                      <Button
                        btnText={item.h2}
                        backgroundColor="#F5B435"
                        borderRadius="100px"
                        width="100%"
                        className="uber_btn"
                        height="45px"
                        fontSize="26px"
                        fontWeight="bold"
                        textTransform="uppercase"
                      />
                    </div>
                  </div>
                  <div className="uber_section_card_bottom_half">
                    <div className="uber_line"></div>
                    <div className="text-white paidOut">{item.paidOut}</div>
                    <div className="text-white sinceInception">
                      {item.sinceInception}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ubersection;
