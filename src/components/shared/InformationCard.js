import Image from "next/image";
import Forest from "/public/assets/img/forest_info.png";
import Button from "./button/Button";
const InformationCard = ({
  marginTop = "",
  marginBottom = "",
  borderRadius = "10px",
  border = "1px solid #2f2f2f",
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
          border: border,
        }}
      >
        <div className="d-flex justify-content-center align-items-center flex-column">
          <Image src={Forest} alt="" className="img-fluid info_card_img" />
          <h3 className={"info_card_bestsellen_heading2"}>
            Umweltschutz & Nachhaltigkeit
          </h3>
          <p className="info_card_img_para">
            Wir recyclen Ihre Edelmetalle und diese gelangen zu 100% wieder in
            den Kreislauf der Schmuckindustrie, Investments (Barren), Industrie,
            Medizin etc.
          </p>
          <div className="info_car_btn">
            <Button
              btnText="Weitere Informationen finden Sie hier"
              margin="15px"
              padding="1px 20px"
              height="26px"
              backgroundColor="#2f2f2f"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
