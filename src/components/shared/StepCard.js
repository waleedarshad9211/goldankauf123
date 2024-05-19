import Image from "next/image";
import StepcardArrow from "/public/assets/img/stepcard_arrow.png";

const StepCard = ({
  heading,
  src,
  alt = "image",
  para,
  marginTop = "",
  marginBottom = "",
  borderRadius = "20px",
  height = "100%",
  numSrc = "",
  index = "",
}) => {
  return (
    <div
      className="step_card"
      style={{
        marginTop: marginTop,
        borderRadius: borderRadius,
        marginBottom: marginBottom,
        height: height,
      }}
    >
      <div className="step_card_header">
        <Image src={numSrc} alt={alt} />
        <h2 className="step_card_heading">{heading}</h2>
      </div>
      <div className="step_card_body">
        <Image src={src} alt={alt} className="step_card_body_img" />
        <div className={`stepcard_arrow_wrapper${index}`}>
          <div className="stepcard_arrow">
            <Image src={StepcardArrow} alt="" />
          </div>
        </div>
      </div>
      <p className="text-center text-white">{para}</p>
    </div>
  );
};

export default StepCard;
