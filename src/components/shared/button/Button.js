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
}) => {
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
      }}
      type={type}
    >
      {btnText}
    </button>
  );
};

export default Button;
