import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Image from "next/image";
import InformationCard from "@/components/shared/InformationCard";
import ProvenExpertCard from "@/components/shared/ProvenExpertCard";
import Ausdrucken from "/public/assets/img/ausdrucken.png";
import EdelmetalleVersenden from "/public/assets/img/edelmetalle_versenden.png";
import Werabholung from "/public/assets/img/Paketschein.png";
import downTriangle from "/public/assets/img/donw_triangle.png";
import Link from "next/link";
import Gesamtsieger from "@/components/shared/Gesamtsieger";

const page = () => {
  return (
    <section className="abgeschlossen_wertsendung_wrapper">
      <div className="container">
        <Breadcrumbs />
        <h2 className="sind_unterwegs_heading">Nur noch wenige Schritte</h2>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8">
            <div className="abgeschlossen_material_wrapper">
              <div className="funktionierts_wrapper_auswahlen abgeschlossen_eigenes d-none d-md-flex d-lg-flex">
                <div className="abgeschlossen_wertsendung_wrapper_auswahlen1">
                  <Image
                    src={Ausdrucken}
                    alt="ausdrucken"
                    width={235}
                    height={174}
                  />
                  <div className="funktionierts_wrapper_auswahlen1_heading_paras">
                    <h2 className="abgeschlossen_wertsendung_box_card_black_heading2">
                      Begleitschreiben ausdrucken
                    </h2>
                    <p className="versandtasche_link">
                      Hier finden Sie das Begleitschreiben
                    </p>
                    <p className="funktionierts_wrapper_auswahlen_para2">
                      Drucken Sie das Begleitschreiben bitte aus und legen es
                      ausgefüllt in den Karton. Sie erhalten dieses auch an Ihre
                      E-Mail zugeschickt.
                    </p>
                  </div>
                </div>
                <div className="funktionierts_wrapper_triangle">
                  <Image src={downTriangle} className="down_triang" />
                </div>
                <div className="abgeschlossen_wertsendung_wrapper_auswahlen2">
                  <Image
                    src={EdelmetalleVersenden}
                    alt="auswahlen"
                    className="auswahlen_img2"
                    width={235}
                    height={174}
                  />
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
                <div className="funktionierts_wrapper_triangle">
                  <Image src={downTriangle} className="down_triang" />
                </div>
                <div className="abgeschlossen_wertsendung_wrapper_auswahlen2 abgeschlossen_wertsendung_wrapper_auswahlen3">
                  <Image
                    src={Werabholung}
                    alt="auswahlen"
                    className="auswahlen_img3"
                    width={235}
                    height={174}
                  />
                  <div className="funktionierts_wrapper_auswahlen2_heading_paras">
                    <h3 className="funktionierts_wrapper_auswahlen2_heading1">
                      Paketschein ausdrucken
                    </h3>
                    <p className="versandtasche_link">
                      Hier finden Sie den DHL Paketschein
                    </p>
                    <p className="funktionierts_wrapper_auswahlen2_para1 funktionierts_wrapper_auswahlen2_para3">
                      Den Paketschein ausdrucken und auf Ihr Paket kleben und
                      dieses einfach bei der Deutschen Post kostenlos abgeben.
                      Sie erhalten ebenfalls per E-Mail den Link zum Paketschein
                      zugeschickt.
                    </p>
                  </div>
                </div>
              </div>
              <div className="funktionierts_wrapper_auswahlen d-sm-flex d-md-none d-lg-none">
                <div className="abgeschlossen_wertsendung_wrapper_auswahlen1 row">
                  <div className="col-12">
                    <div className="d-flex justify-content-center align-items-center">
                      <Image
                        src={Ausdrucken}
                        alt="auswahlen"
                        className="auswahlen_img1"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="funktionierts_wrapper_auswahlen1_heading_paras">
                      <h2 className="abgeschlossen_wertsendung_box_card_black_heading2">
                        Begleitschreiben ausdrucken
                      </h2>
                      <p className="versandtasche_link">
                        Hier finden Sie das Begleitschreiben
                      </p>
                      <p className="funktionierts_wrapper_auswahlen_para2">
                        Drucken Sie das Begleitschreiben bitte aus und legen es
                        ausgefüllt in den Karton. Sie erhalten dieses auch an
                        Ihre E-Mail zugeschickt.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="funktionierts_wrapper_triangle">
                  <Image src={downTriangle} className="down_triang" />
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
                  <Image src={downTriangle} className="down_triang" />
                </div>
                <div className="abgeschlossen_wertsendung_wrapper_auswahlen2 row abgeschlossen_wertsendung_wrapper_auswahlen3">
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
                      <p className="versandtasche_link">
                        Hier finden Sie das Begleitschreiben
                      </p>
                      <p className="funktionierts_wrapper_auswahlen2_para1">
                        Den Paketschein ausdrucken und auf Ihr Paket kleben und
                        dieses einfach bei der Deutschen Post kostenlos abgeben.
                        Sie erhalten ebenfalls per E-Mail den Link zum
                        Paketschein zugeschickt.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 gold_and_etrustedshpw_wrapper">
            <div className="">
              <Gesamtsieger />
              <InformationCard marginTop="20px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
