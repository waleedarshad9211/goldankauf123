import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import PriceValueForm from "@/components/shared/PriceValueForm";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Image from "next/image";
import Link from "next/link";
import Auswahlen from "/public/assets/img/funktionierts_auswahlen.png";
import Auswahlen2 from "/public/assets/img/funktionierts_auswahlen2.png";
import Auswahlen3 from "/public/assets/img/funktionierts_auswahlen3.png";
import Auswahlen4 from "/public/assets/img/funktionierts_auswahlen4.png";
import KitcoGoldTab from "@/components/shared/KitcoGoldTab";

const page = () => {
  return (
    <section className="funktionierts_wrapper">
      <div className="container">
        <Breadcrumbs />
        {/* <div className="d-lg-none funktionierts_price_form">
          <PriceValueForm />
        </div> */}
        <div className="row">
          <div className="col-12 col-lg-8">
            <div>
              <h2 className="funktionierts_wrapper_heading1">
                So funktioniert unser Goldankauf in 4 Schritten
              </h2>
              <p className="funktionierts_wrapper_para1">
                Zu 100% kostenlos und absolut unverbindlich ist unser
                Goldankauf.
              </p>
            </div>
            <div className="funktionierts_wrapper_auswahlen d-none d-md-flex d-lg-flex">
              <div className="funktionierts_wrapper_auswahlen1">
                <Image src={Auswahlen} alt="auswahlen" />
                <div className="funktionierts_wrapper_auswahlen1_heading_paras">
                  <h3 className="funktionierts_wrapper_auswahlen_heading1">
                    Versicherte Versandart auswählen
                  </h3>
                  <Link
                    className="versandtasche_link"
                    href="/versandtasche-bestellen"
                    passHref
                  >
                    1. Versandtasche
                  </Link>
                  <p className="funktionierts_wrapper_auswahlen_para2">
                    Bei einem Wert von bis zu 1.000 Euro können Sie das
                    Bestellformular für unsere kostenlose Versandtasche
                    ausfüllen und Sie erhalten Ihre persönliche
                    Versandunterlagen in wenigen Tagen per Post zugeschickt.
                  </p>
                  <Link
                    className="versandtasche_link2"
                    href="/eigenes-versandmaterial"
                    passHref
                  >
                    2. Eigenes Versandmaterial
                  </Link>
                  <p className="funktionierts_wrapper_auswahlen_para3">
                    Bei einem Wert von unter 1.000 Euro können Sie auch Ihren
                    eigenen Versandkarton nutzen und die Versandunterlagen
                    ausdrucken.
                  </p>
                  <Link
                    className="versandtasche_link3"
                    href="/wertsendung"
                    passHref
                  >
                    3. Abholung per Wertkurier
                  </Link>
                  <p className="funktionierts_wrapper_auswahlen_para4">
                    Bei größeren Edelmetall-Werten ab 1.000 Euro bis 100.000
                    Euro nutzen Sie bitte unseren kostenlosen Wertkurier.
                  </p>
                </div>
              </div>
              <div className="funktionierts_wrapper_triangle">
                <div className="triangle-down"></div>
              </div>
              <div className="funktionierts_wrapper_auswahlen2">
                <Image
                  src={Auswahlen2}
                  alt="auswahlen"
                  className="auswahlen_img2"
                />
                <div className="funktionierts_wrapper_auswahlen2_heading_paras">
                  <h3 className="funktionierts_wrapper_auswahlen2_heading1">
                    Edelmetalle versenden
                  </h3>
                  <p className="funktionierts_wrapper_auswahlen2_para1">
                    Befüllen Sie die Versandtasche mit den zu verkaufenden
                    Edelmetallen / Schmuckstücken und geben die Versandtasche
                    bei der nächsten Filiale der Deutschen Post kostenlos ab.
                    Wir haben die Versandtasche bereits automatisch bis zu einem
                    Wert von 1.000 Euro versichert. Ab einem Wert von 1.000 Euro
                    empfehlen wir die Buchung der kostenlosen Wertabholung,
                    welche bis zu einem Wert von 1,5 Millionen Euro versichert
                    ist.
                  </p>
                </div>
              </div>
              <div className="funktionierts_wrapper_triangle">
                <div className="triangle-down"></div>
              </div>
              <div className="funktionierts_wrapper_auswahlen2">
                <Image
                  src={Auswahlen3}
                  alt="auswahlen"
                  className="auswahlen_img3"
                />
                <div className="funktionierts_wrapper_auswahlen2_heading_paras">
                  <h3 className="funktionierts_wrapper_auswahlen2_heading1">
                    Angebot erhalten
                  </h3>
                  <p className="funktionierts_wrapper_auswahlen2_para1">
                    Füllen Sie bitte das Bestellformular für die kostenlose
                    Versandtasche aus und Sie erhalten umgehend Ihre
                    persönlichen Versandunterlagen über den Postweg zugesendet.
                    Unsere Versandtasche ist automatisch bis 1.000€ versichert.
                  </p>
                </div>
              </div>
              <div className="funktionierts_wrapper_triangle">
                <div className="triangle-down"></div>
              </div>
              <div className="funktionierts_wrapper_auswahlen2">
                <Image
                  src={Auswahlen4}
                  alt="auswahlen"
                  className="auswahlen_img4"
                />
                <div className="funktionierts_wrapper_auswahlen2_heading_paras">
                  <h3 className="funktionierts_wrapper_auswahlen2_heading1">
                    Zahlung erhalten
                  </h3>
                  <p className="funktionierts_wrapper_auswahlen2_para1">
                    Befüllen Sie die Versandtasche mit den zu verkaufenden
                    Edelmetallen / Schmuckstücken und geben die Versandtasche
                    bei der nächsten Filiale der Deutschen Post kostenlos ab.
                    Wir haben die Versandtasche bereits automatisch bis zu einem
                    Wert von 1.000 Euro versichert. Ab einem Wert von 1.000 Euro
                    empfehlen wir die Buchung der kostenlosen Wertabholung,
                    welche bis zu einem Wert von 1,5 Millionen Euro versichert
                    ist.
                  </p>
                </div>
              </div>
            </div>
            <div className="funktionierts_wrapper_auswahlen d-sm-flex d-md-none d-lg-none">
              <div className="funktionierts_wrapper_auswahlen1 row">
                <div className="col-12">
                  <div className="d-flex justify-content-center align-items-center">
                    <Image src={Auswahlen} alt="auswahlen" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="funktionierts_wrapper_auswahlen1_heading_paras">
                    <h3 className="funktionierts_wrapper_auswahlen_heading1">
                      Versicherte Versandart auswählen
                    </h3>
                    <Link
                      className="versandtasche_link"
                      href="/versandtasche-bestellen"
                      passHref
                    >
                      1. Versandtasche
                    </Link>
                    <p className="funktionierts_wrapper_auswahlen_para2">
                      Bei einem Wert von bis zu 1.000 Euro können Sie das
                      Bestellformular für unsere kostenlose Versandtasche
                      ausfüllen und Sie erhalten Ihre persönliche
                      Versandunterlagen in wenigen Tagen per Post zugeschickt.
                    </p>
                    <Link
                      className="versandtasche_link2"
                      href="/eigenes-versandmaterial"
                      passHref
                    >
                      2. Eigenes Versandmaterial
                    </Link>
                    <p className="funktionierts_wrapper_auswahlen_para3">
                      Bei einem Wert von unter 1.000 Euro können Sie auch Ihren
                      eigenen Versandkarton nutzen und die Versandunterlagen
                      ausdrucken.
                    </p>
                    <Link
                      className="versandtasche_link3"
                      href="/wertsendung"
                      passHref
                    >
                      3. Abholung per Wertkurier
                    </Link>
                    <p className="funktionierts_wrapper_auswahlen_para4">
                      Bei größeren Edelmetall-Werten ab 1.000 Euro bis 100.000
                      Euro nutzen Sie bitte unseren kostenlosen Wertkurier.
                    </p>
                  </div>
                </div>
              </div>
              <div className="funktionierts_wrapper_triangle">
                <div className="triangle-down"></div>
              </div>
              <div className="funktionierts_wrapper_auswahlen2 row">
                <div className="col-12">
                  <div className="d-flex justify-content-center align-items-center">
                    <Image
                      src={Auswahlen2}
                      alt="auswahlen"
                      className="auswahlen_img2"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="funktionierts_wrapper_auswahlen2_heading_paras">
                    <h3 className="funktionierts_wrapper_auswahlen2_heading1">
                      Edelmetalle versenden
                    </h3>
                    <p className="funktionierts_wrapper_auswahlen2_para1">
                      Befüllen Sie die Versandtasche mit den zu verkaufenden
                      Edelmetallen / Schmuckstücken und geben die Versandtasche
                      bei der nächsten Filiale der Deutschen Post kostenlos ab.
                      Wir haben die Versandtasche bereits automatisch bis zu
                      einem Wert von 1.000 Euro versichert. Ab einem Wert von
                      1.000 Euro empfehlen wir die Buchung der kostenlosen
                      Wertabholung, welche bis zu einem Wert von 1,5 Millionen
                      Euro versichert ist.
                    </p>
                  </div>
                </div>
              </div>
              <div className="funktionierts_wrapper_triangle">
                <div className="triangle-down"></div>
              </div>
              <div className="funktionierts_wrapper_auswahlen2 row">
                <div className="col-12">
                  <div className="d-flex justify-content-center align-items-center">
                    <Image
                      src={Auswahlen3}
                      alt="auswahlen"
                      className="auswahlen_img3"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="funktionierts_wrapper_auswahlen2_heading_paras">
                    <h3 className="funktionierts_wrapper_auswahlen2_heading1">
                      Angebot erhalten
                    </h3>
                    <p className="funktionierts_wrapper_auswahlen2_para1">
                      Füllen Sie bitte das Bestellformular für die kostenlose
                      Versandtasche aus und Sie erhalten umgehend Ihre
                      persönlichen Versandunterlagen über den Postweg
                      zugesendet. Unsere Versandtasche ist automatisch bis
                      1.000€ versichert.
                    </p>
                  </div>
                </div>
              </div>
              <div className="funktionierts_wrapper_triangle">
                <div className="triangle-down"></div>
              </div>
              <div className="funktionierts_wrapper_auswahlen2 row">
                <div className="col-12">
                  <div className="d-flex justify-content-center align-items-center">
                    <Image
                      src={Auswahlen4}
                      alt="auswahlen"
                      className="auswahlen_img4"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="funktionierts_wrapper_auswahlen2_heading_paras">
                    <h3 className="funktionierts_wrapper_auswahlen2_heading1">
                      Zahlung erhalten
                    </h3>
                    <p className="funktionierts_wrapper_auswahlen2_para1">
                      Befüllen Sie die Versandtasche mit den zu verkaufenden
                      Edelmetallen / Schmuckstücken und geben die Versandtasche
                      bei der nächsten Filiale der Deutschen Post kostenlos ab.
                      Wir haben die Versandtasche bereits automatisch bis zu
                      einem Wert von 1.000 Euro versichert. Ab einem Wert von
                      1.000 Euro empfehlen wir die Buchung der kostenlosen
                      Wertabholung, welche bis zu einem Wert von 1,5 Millionen
                      Euro versichert ist.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="funktionierts_wrapper_price_value_form">
              <PriceValueForm />
            </div>
            <div className="funktionierts_wrapper_form">
              <KitcoGoldTab />
            </div>
            <div className="">
              <EtrusredShop2 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
