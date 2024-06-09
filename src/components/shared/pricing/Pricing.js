const Pricing = ({
  priceHeading = "Berechnen Sie den börsenaktuellen Wert Ihrer Edelmetalle",
  textAlign = "center",
  paragraph = "",
  goldrechner,
}) => {
  return (
    <div className="pricing-form">
      <h3
        className={
          goldrechner
            ? "mb-1 pricing-form-heading"
            : "mb-4 pricing-form-heading"
        }
        style={{ textAlign: textAlign }}
      >
        {priceHeading}
      </h3>
      {goldrechner && (
        <p
          dangerouslySetInnerHTML={{ __html: paragraph }}
          className="goldrechner_pricing_para"
        />
      )}
      <div
        className={
          goldrechner
            ? "row row-cols-1 row-cols-md-3 mt-2"
            : "row row-cols-1 row-cols-md-3 mt-3"
        }
      >
        <div className="col-6 col-md-6 col-lg-3 mb-2 mt-2 gold-wrapper">
          <div className="silver gold-border ">
            <div className="gold-gradiant">
              <h4 className=" text-center">GOLD</h4>
            </div>
            <div className="gold-gradiant-body">
              <ul className="list-unstyled">
                <li className="li1">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className=" gold-prices">999er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li2">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className=" gold-prices">986er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li1">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className=" gold-prices">916er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li2">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className=" gold-prices">900er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li1">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className=" gold-prices">750er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li2">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className=" gold-prices">585er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li1">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className=" gold-prices">417er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li2">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className=" gold-prices">375er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li1">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className=" gold-prices">333er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-6 col-lg-3 mb-2 mt-2 gold-wrapper2">
          <div className="silver zahn-border ">
            <div className="text-black zahngold-gradiant">
              <h4 className="text-center">ZAHNGOLD</h4>
            </div>
            <div className="zahngold-gradiant-body">
              <ul className="list-unstyled">
                <li className="li1">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className=" gold-prices">750er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li2">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className=" gold-prices">600er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li1">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className=" gold-prices">500er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li2">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className=" gold-prices">400er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li1">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className=" gold-prices">300er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li2">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className=" gold-prices">200er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li1">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className=" gold-prices">150er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li2">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className=" gold-prices">100er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li1">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className=" gold-prices">50er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3 mb-2 mt-2 silver-wrapper gold-wrapper">
          <div className="silver silver-border ">
            <div className=" silber-gradiant">
              <h4 className="text-center">SILBER</h4>
            </div>
            <div className="silber-gradiant-body">
              <ul className="list-unstyled">
                <li className="li1">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className="gold-prices">999er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li2">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className="gold-prices">925er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li1">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className="gold-prices">900er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li2">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className="gold-prices">835er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li1">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className="gold-prices">800er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li2">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className="gold-prices">700er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li1">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className="gold-prices">625er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li2">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className="gold-prices">500er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li1">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className="gold-prices">333er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3 mb-2 mt-2 platin-wrapper gold-wrapper2">
          <div className="silver platin-border ">
            <div className="platin-gradiant">
              <h4 className="text-center">PLATIN</h4>
            </div>
            <div className="platin-gradiant-body">
              <ul className="list-unstyled">
                <li className="li1">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className="gold-prices">999er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li2">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className="gold-prices">950er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li1">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className="gold-prices">500er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div className="palladium-gradiant">
              <h4 className="">PALLADIUM</h4>
            </div>
            <div className="palladium-gradiant-body">
              <ul>
                <li className="li1">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className="gold-prices">999er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li2">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className="gold-prices">950er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
                <li className="li1">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className="gold-prices">500er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div className="rhodium-gradiant">
              <h4 className="">RHODIUM</h4>
            </div>
            <div className="rhodium-gradiant-body">
              <ul>
                <li className="li1">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                      <div className="gold-prices">999er</div>
                      <div className=" gram-price">(19,18 €/g)</div>
                    </div>
                    <input
                      className="pricing-gramm form-control"
                      type="text"
                      placeholder="Gramm"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
