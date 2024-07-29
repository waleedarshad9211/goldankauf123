"use client";

import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import InformationCard from "@/components/shared/InformationCard";
import KitcoGoldTab from "@/components/shared/KitcoGoldTab";
import PriceValueForm from "@/components/shared/PriceValueForm";
import ValueCalc from "@/components/shared/ValueCalc";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Button from "@/components/shared/button/Button";
import GarantedPrice from "@/components/shared/garantedPrice/GarantedPrice";
import {
  uberVideoArray,
  uberVideoArray2,
} from "@/public/static/HomepageStatic";

const page = () => {
  return (
    <section className="videos_uber_zahngold_wrapper">
      <div className="container">
        <Breadcrumbs />
        <div className="row">
          <div className="col-12 col-md-12 d-lg-none">
            <div className="gold_zuruck_garantie_pricing mt-2">
              <PriceValueForm />
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-8">
            <h2 className="videos_uber_zahngold_wrapper_heading1">
              Video Kundenbewertungen aus ganz Europa
            </h2>
            <p className="videos_uber_zahngold_wrapper_para1">
              Wir bieten Ihnen die Möglichkeit über unseren YouTube Kanal mehr
              über unsere Arbeitsweise kennenlernen zu können. Viele unserer
              Kunden haben sich hier die Mühe gemacht, unseren Service zu
              bewerten. Schauen Sie sich die einzelnen Videos einmal an und
              lernen mehr über Goldankauf123 aus der Sicht unserer Kunden
              kennen.
            </p>
            <p className="mrt-10">
              Gerne können Sie uns auch ein Video zukommen lassen, sofern Sie
              bereits einen Ankauf bei uns abgeschlossen haben. Für den Aufwand
              der Videoerstellung vergüten wir Ihnen einen kleinen Obolus. Lesen
              Sie sich hier unsere Anleitung dafür durch!
            </p>
            <p className="mrt-10">
              Wie auch auf unsere Kundenmeinungen haben wir auf die Erstellung
              der Videos keinen Einfluss. Authentizität ist und wichtig und wir
              hoffen auch Sie davon überzeugen zu können, dass Sie bei uns der
              richtigen Adresse für einen Edelmetallankauf sind.
            </p>
            <p className="videos_uber_zahngold_wrapper_heading1">Deutschland</p>
            <div className="row">
              {uberVideoArray.map((item, index) => {
                return (
                  <div className="col-12 col-md-6" key={index}>
                    <div className="videos_uber_zahngold_wrapper_video">
                      <div className="vedio_card">
                        <div class="black-corner-top top-left"></div>
                        <div class="black-corner-bottom bottom-right"></div>
                        <iframe
                          width={"100%"}
                          height={"202"}
                          src={item.src}
                          title={
                            "Hartmut hat uns Zahngold verkauft und ist sehr zufrieden"
                          }
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="videos_uber_zahngold_wrapper_heading1">
              Österreich & Schweiz
            </p>
            <div className="row">
              {uberVideoArray2.map((item, index) => {
                return (
                  <div className="col-12 col-md-6" key={index}>
                    <div className="videos_uber_zahngold_wrapper_video">
                      <div className="vedio_card">
                        <div class="black-corner-top top-left"></div>
                        <div class="black-corner-bottom bottom-right"></div>
                        <iframe
                          width={"100%"}
                          height={"202"}
                          src={item.src}
                          title={
                            "Hartmut hat uns Zahngold verkauft und ist sehr zufrieden"
                          }
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="videos_uber_zahngold_wrapper_heading1">
              Internationale Kunden
            </p>
            <div className="row">
              {uberVideoArray2.map((item, index) => {
                return (
                  <div className="col-12 col-md-6" key={index}>
                    <div className="videos_uber_zahngold_wrapper_video">
                      <div className="vedio_card">
                        <div class="black-corner-top top-left"></div>
                        <div class="black-corner-bottom bottom-right"></div>
                        <iframe
                          width={"100%"}
                          height={"202"}
                          src={item.src}
                          title={
                            "Hartmut hat uns Zahngold verkauft und ist sehr zufrieden"
                          }
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="videos_uber_zahngold_wrapper_heading1">
              Bewertung von Goldankauf123.de
            </p>
            <p className="videos_uber_zahngold_wrapper_para2">
              Gerne darf Ihr Video auch eine kritische Bewertung von unserem
              Service enthalten. Für diesen Fall treten wir mit Ihnen gerne in
              Diskussion, um möglichen Unklarheiten aus der Welt räumen zu
              können.
            </p>

            <p className="videos_uber_zahngold_wrapper_para3">
              Wir sind seit vielen Jahren am Markt präsent und haben seitdem
              unseren Service immer weiter verbessert. Trotzdem sind auch wir
              nicht unfehlbar und sehr dankbar darüber, wenn wir auf Probleme
              oder eine aus Sicht des Kunden schlechte Umsetzung hingewiesen
              werden.
            </p>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className=" d-none d-lg-block">
              <PriceValueForm />
            </div>
            <div className="">
              <KitcoGoldTab />
            </div>
            <div className="">
              <EtrusredShop2 />
            </div>
            <div>
              <InformationCard marginTop="20px" />
            </div>
          </div>
        </div>
        <section className=" garantie_price_container ">
          <GarantedPrice />
        </section>
        <section className="mb-2 goldrechner-last-section">
          <ValueCalc />
        </section>
      </div>
    </section>
  );
};

export default page;
