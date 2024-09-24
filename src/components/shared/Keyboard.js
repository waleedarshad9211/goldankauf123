import React from "react";

const Keyboard = () => {
  const keysRow1 = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
  ];
  const keysRow2 = [
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "A",
    "123",
    "Münzen",
  ];

  return (
    <div className=" mt-4">
      {/* First row of keys */}
      <div className="row g-2 justify-content-start">
        {keysRow1.map((key, index) => (
          <div key={index} className="col-auto">
            <button className="btn btn-light border keyboard-btn">{key}</button>
          </div>
        ))}
      </div>

      {/* Second row of keys */}
      <div className="row g-2 justify-content-start mt-2">
        {keysRow2.map((key, index) => (
          <div key={index} className="col-auto">
            <button
              className={`btn btn-light border keyboard-btn ${
                key === "123" ? "num-btn" : key === "Münzen" ? "munzen-btn" : ""
              }`}
            >
              {key}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
