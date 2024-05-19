import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Image from "next/image";
import InformationCard from "@/components/shared/InformationCard";
import ProvenExpertCard from "@/components/shared/ProvenExpertCard";
import Ausdrucken from "/public/assets/img/ausdrucken.png";
import EdelmetalleVersenden from "/public/assets/img/edelmetalle_versenden.png";
import Werabholung from "/public/assets/img/werabholung.png";
import Link from "next/link";

const page = () => {
  return (
    <section className="abgeschlossen_wertsendung_wrapper">
      <div className="container">
        <Breadcrumbs />
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8">
            <h2 className="sind_unterwegs_heading">Nur noch wenige Schritte</h2>
            <div className="funktionierts_wrapper_auswahlen d-none d-md-flex d-lg-flex">
              <div className="abgeschlossen_wertsendung_wrapper_auswahlen1">
                <Image
                  src={Ausdrucken}
                  alt="ausdrucken"
                  width={257}
                  height={195}
                />
                <div className="funktionierts_wrapper_auswahlen1_heading_paras">
                  <h2 className="abgeschlossen_wertsendung_box_card_black_heading2">
                    Begleitschreiben ausdrucken
                  </h2>
                  <Link className="versandtasche_link" href="/" passHref>
                    Hier finden Sie das Begleitschreiben
                  </Link>
                  <p className="funktionierts_wrapper_auswahlen_para2">
                    Drucken Sie das Begleitschreiben bitte aus und legen es
                    ausgefüllt in den Karton. Sie erhalten dieses auch an Ihre
                    E-Mail zugeschickt.
                  </p>
                </div>
              </div>
              <div className="funktionierts_wrapper_triangle">
                <div className="triangle-down"></div>
              </div>
              <div className="abgeschlossen_wertsendung_wrapper_auswahlen2">
                <Image
                  src={EdelmetalleVersenden}
                  alt="auswahlen"
                  className="auswahlen_img2"
                  width={257}
                  height={195}
                />
                <div className="funktionierts_wrapper_auswahlen2_heading_paras">
                  <h3 className="funktionierts_wrapper_auswahlen2_heading1">
                    Edelmetalle versenden
                  </h3>
                  <p className="funktionierts_wrapper_auswahlen2_para1">
                    Verpacken Sie die Edelmetalle sicher und legen Sie diese zum
                    Begleitschreiben in den Karton.
                  </p>
                </div>
              </div>
              <div className="funktionierts_wrapper_triangle">
                <div className="triangle-down"></div>
              </div>
              <div className="abgeschlossen_wertsendung_wrapper_auswahlen2">
                <Image
                  src={Werabholung}
                  alt="auswahlen"
                  className="auswahlen_img3"
                  width={257}
                  height={195}
                />
                <div className="funktionierts_wrapper_auswahlen2_heading_paras">
                  <h3 className="funktionierts_wrapper_auswahlen2_heading1">
                    Wertabholung
                  </h3>
                  <p className="funktionierts_wrapper_auswahlen2_para1">
                    Halten Sie die verschlossene Sendung bereit. Unser
                    Sicherheitskurier holt die Sendung am gewünschten Tag bei
                    der angegeben Adresse ab. Die Zustellung in unsere
                    Geschäftsräume erfolgt in der Regel am nächsten Werktag.
                  </p>
                </div>
              </div>
            </div>
            <div className="funktionierts_wrapper_auswahlen d-sm-flex d-md-none d-lg-none">
              <div className="abgeschlossen_wertsendung_wrapper_auswahlen1 row">
                <div className="col-12">
                  <div className="d-flex justify-content-center align-items-center">
                    <Image src={Ausdrucken} alt="auswahlen" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="funktionierts_wrapper_auswahlen1_heading_paras">
                    <h2 className="abgeschlossen_wertsendung_box_card_black_heading2">
                      Begleitschreiben ausdrucken
                    </h2>
                    <Link className="versandtasche_link" href="/" passHref>
                      Hier finden Sie das Begleitschreiben
                    </Link>
                    <p className="funktionierts_wrapper_auswahlen_para2">
                      Drucken Sie das Begleitschreiben bitte aus und legen es
                      ausgefüllt in den Karton. Sie erhalten dieses auch an Ihre
                      E-Mail zugeschickt.
                    </p>
                  </div>
                </div>
              </div>
              <div className="funktionierts_wrapper_triangle">
                <div className="triangle-down"></div>
              </div>
              <div className="abgeschlossen_wertsendung_wrapper_auswahlen2 row">
                <div className="col-12">
                  <div className="d-flex justify-content-center align-items-center">
                    <Image
                      src={EdelmetalleVersenden}
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
                      Verpacken Sie die Edelmetalle sicher und legen Sie diese
                      zum Begleitschreiben in den Karton.
                    </p>
                  </div>
                </div>
              </div>
              <div className="funktionierts_wrapper_triangle">
                <div className="triangle-down"></div>
              </div>
              <div className="abgeschlossen_wertsendung_wrapper_auswahlen2 row">
                <div className="col-12">
                  <div className="d-flex justify-content-center align-items-center">
                    <Image
                      src={Werabholung}
                      alt="auswahlen"
                      className="auswahlen_img3"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="funktionierts_wrapper_auswahlen2_heading_paras">
                    <h3 className="funktionierts_wrapper_auswahlen2_heading1">
                      Wertabholung
                    </h3>
                    <p className="funktionierts_wrapper_auswahlen2_para1">
                      Halten Sie die verschlossene Sendung bereit. Unser
                      Sicherheitskurier holt die Sendung am gewünschten Tag bei
                      der angegeben Adresse ab. Die Zustellung in unsere
                      Geschäftsräume erfolgt in der Regel am nächsten Werktag.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 gold_and_etrustedshpw_wrapper">
            <div className="abgeschlossen_wertsendung_rightside">
              <div className="">
                <InformationCard />
              </div>
              <ProvenExpertCard marginTop="20px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
