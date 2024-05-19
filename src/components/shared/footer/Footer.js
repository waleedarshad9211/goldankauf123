import Image from "next/image";
import FooterLogo from "/public/assets/img/footer-logo.png";
import TrustedShops from "/public/assets/img/trusted-shops.png";
import EkomiVektor from "/public/assets/img/ekomi-vektor.png";
import SSL from "/public/assets/img/homepage/ssl.png";
import Trustami from "/public/assets/img/homepage/hero-trustami.png";
import Img49 from "/public/assets/img/homepage/4-9.png";
import ProvenExpert from "/public/assets/img/proven-expert.png";
import Guarentee100 from "/public/assets/img/homepage/100_ gurantee.png";
import Versand from "/public/assets/img/homepage/kostenloser_versand.png";
import Tienstleister from "/public/assets/img/homepage/top-dienstleister.png";
import Empfehlung from "/public/assets/img/homepage/top-empfehlung.png";

const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5 ">
            <div className="row">
              <div className="col-12">
                <Image className="mb-2" src={FooterLogo} alt="footer-logo" />
              </div>
              <p className="footer_left_txt">Sicher verkaufen ____________</p>
              <div className="d-flex mt-3">
                <div className="d-flex footer_leftside_second_img footer_leftside_second_img1">
                  <div className="me-1">
                    <Image
                      className="trusted"
                      src={TrustedShops}
                      alt=""
                      width="76"
                      height="76"
                    />
                  </div>
                  <div className="footer_leftside_seal">
                    <p className="fw-bold">Bewertungen</p>
                    <div className="footer_rating">
                      <div className="ratings footer_star_color">
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star rating-color"></i>
                      </div>
                    </div>
                    <div className="">
                      <p className="fw-bold">SEHR GUT</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex footer_leftside_second_img">
                  <div className="me-1">
                    <Image
                      className="trusted"
                      src={EkomiVektor}
                      alt=""
                      width="76"
                      height="76"
                    />
                  </div>
                  <div className="footer_leftside_seal">
                    <p className="fw-bold">Bewertungen</p>
                    <div className="footer_rating">
                      <div className="ratings footer_star_color">
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star rating-color"></i>
                      </div>
                    </div>
                    <div className="">
                      <p className="fw-bold">SEHR GUT</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex footer_images">
                <Image src={Trustami} alt="Trustami" />
                <Image src={Img49} alt="" />
                <Image
                  src={ProvenExpert}
                  alt="Proven Expert"
                  width={96}
                  height={76}
                  className="footer_proven_expert"
                />
                <Image src={SSL} alt="ssl" />
              </div>
              <div className="d-flex footer_images">
                <Image src={Guarentee100} alt="Guarentee seal" />
                <Image src={Versand} alt="Versand" />
                <Image
                  src={Tienstleister}
                  alt="Tienstleister"
                  className="footer_second_last_img"
                />
                <Image
                  src={Empfehlung}
                  alt="Empfehlung"
                  className="footer_last_img"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-7 ">
            <div className="footer_rightside">
              <div className="row">
                <div className="col-6 col-md-6 col-lg-4">
                  <div>
                    <p className="fw-bold">Städteankauf</p>
                    <div className="footer_brdr_bottom"></div>
                  </div>
                  <div className="mt-2">
                    <p className="mb-1">Hamburg</p>
                    <p className="mb-1">Berlin</p>
                    <p className="mb-1">München</p>
                    <p className="mb-1">Köln</p>
                    <p className="mb-1">Bremen</p>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-lg-4">
                  <div>
                    <p className="fw-bold">Goldlegierungen</p>
                    <div className="footer_brdr_bottom"></div>
                  </div>
                  <div className="mt-2">
                    <p className="mb-1">333 Gold</p>
                    <p className="mb-1">585 Gold</p>
                    <p className="mb-1">750 Gold</p>
                    <p className="mb-1">916 Gold</p>
                    <p className="mb-1">999 Gold</p>
                  </div>
                </div>
                <div className="d-none d-md-none d-lg-block col-lg-4">
                  <div>
                    <p className="fw-bold">Über Zahngold123.de</p>
                    <div className="footer_brdr_bottom"></div>
                  </div>
                  <div className="mt-2">
                    <p className="mb-1">Kontakt</p>
                    <p className="mb-1">Impressum</p>
                    <p className="mb-1">AGB</p>
                    <p className="mb-1">Datenschutz</p>
                    <p className="mb-1">Blog</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6 col-md-6 col-lg-4 mt-2">
                  <div>
                    <p className="fw-bold">Service</p>
                    <div className="footer_brdr_bottom"></div>
                  </div>
                  <div className="mt-2">
                    <p className="mb-1">Goldankauf Lexikon</p>
                    <p className="mb-1">Städteankauf</p>
                    <p className="mb-1">Edelmetall Charts</p>
                    <p className="mb-1">Goldpreis pro Gramm</p>
                    <p className="mb-1">Goldankauf Preise</p>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-lg-4 mt-2">
                  <div>
                    <p className="fw-bold">Sicherheit</p>
                    <div className="footer_brdr_bottom"></div>
                  </div>
                  <div className="mt-2">
                    <p className="mb-1">Videos über Zahngold</p>
                    <p className="mb-1">Gold zurück Garantie</p>
                    <p className="mb-1">Verkaufsanleitungen</p>
                    <p className="mb-1">Häufige Fragen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
