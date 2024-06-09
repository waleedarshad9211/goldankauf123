import Image from "next/image";

const Button = ({
  btnText = "",
  height = "auto",
  width = "auto",
  borderRadius = "10px",
  backgroundColor = "#36A18B",
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
  display = "flex",
  justifyContent = "space-between",
  alignItems = "center",
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
        display: allowIcon ? display : "",
        justifyContent: allowIcon ? justifyContent : "",
        alignItems: allowIcon ? alignItems : "",
        ...style,
      }}
      type={type}
    >
      {btnText}
      <span>
        {rightSide && allowIcon ? (
          <Image
            src={icon}
            style={{
              padding: "0px 5px 0px 5px",
              height: "28px",
              width: "28px",
            }}
          />
        ) : (
          ""
        )}
      </span>
    </button>
  );
};

export default Button;
