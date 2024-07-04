import Image from "next/image";
import UnherfAnkaufTriangle from "/public/assets/img/unhreftriangle.png";

const StepCard = ({
  heading,
  src,
  alt = "image",
  para,
  marginTop = "",
  marginBottom = "",
  borderRadius = "20px",
  height = "100%",
  num = "",
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
        {num}
        <p className="step_card_heading">{heading}</p>
      </div>
      <div className="step_card_body">
        <Image src={src} alt={alt} className="step_card_body_img" />
        {index === 0 ? (
          ""
        ) : (
          <Image
            src={UnherfAnkaufTriangle}
            alt=""
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translate(-45%, -50%)",
              width: "53px",
              height: "60px",
            }}
          />
        )}
      </div>
      <p className="text-center ">{para}</p>
    </div>
  );
};

export default StepCard;
