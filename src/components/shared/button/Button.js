import Image from "next/image";

const Button = ({
  btnText = "",
  height = "auto",
  width = "auto",
  borderRadius = "30px",
  backgroundColor = "#4E4E4E",
  boxShadow = "",
  color = "#ffffff",
  margin = "",
  fontSize = "",
  fontWeight = "",
  border = "none",
  padding = "1px 20px",
  className = "",
  type = "",
  textTransform = "",
  rightSide = false,
  style = {},
  iconDetails = { allowIcon: false, icon: null },
}) => {
  let { allowIcon, icon } = iconDetails;
  return (
    <button
      className={`gold_btn ${className}`}
      style={{
        height: height,
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
        boxShadow: boxShadow,
        color: color,
        margin: margin,
        fontSize: fontSize,
        fontWeight: fontWeight,
        border: border,
        padding: padding,
        width: width,
        textTransform: textTransform,
        ...style,
      }}
      type={type}
    >
      {btnText}
      {rightSide && allowIcon ? (
        <Image
          src={icon}
          style={{ padding: "0px 5px 0px 5px", height: "28px", width: "28px" }}
        />
      ) : (
        ""
      )}
    </button>
  );
};

export default Button;
