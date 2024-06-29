import Image from "next/image";
import Forest from "/public/assets/img/homepage/forest_mobile.png";
import Button from "./button/Button";
const InformationCard = ({
  marginTop = "",
  marginBottom = "",
  borderRadius = "10px",
  bestsellen = false,
}) => {
  return (
    <div className="info_car_wrapeer">
      <div
        className="info_card"
        style={{
          marginTop: marginTop,
          marginBottom: marginBottom,
          borderRadius: borderRadius,
        }}
      >
        <div className="d-flex flex-column">
          <h3 className={"info_card_bestsellen_heading2"}>
            Umweltschutz & Nachhaltigkeit
          </h3>
          <p className="info_card_img_para">
            Wir recyceln Ihre Edelmetalle, sodass diese zu 100% wieder in den
            Kreislauf der Schmuckindustrie, Investments (Barren), Industrie,
            Medizin etc. gelangen.
          </p>
          <Image src={Forest} alt="" className="img-fluid info_card_img" />
          <div className="info_car_btn">
            <Button
              btnText="Weitere Informationen finden Sie hier"
              margin="15px 0px 0px"
              padding="1px 20px"
              width="100%"
              height="26px"
              backgroundColor="#36A18B"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
