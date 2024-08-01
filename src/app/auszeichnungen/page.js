"use client";
import React from "react";
import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import KitcoGoldTab from "@/components/shared/KitcoGoldTab";
import PriceValueForm from "@/components/shared/PriceValueForm";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Button from "@/components/shared/button/Button";
import Image from "next/image";
import GarantedPrice from "@/components/shared/garantedPrice/GarantedPrice";
import ValueCalc from "@/components/shared/ValueCalc";
import Ekomi from "@/components/shared/Ekomi";
import InformationCard from "@/components/shared/InformationCard";
import EkomiVector from "/public/assets/img/ekomi-vektor.png";
import tickIcon from "/public/assets/img/bestelen_tick.png";
import {
  auszeichnungenArray1,
  auszeichnungenArray2,
} from "@/public/static/HomepageStatic";

const auszeichnungenArray = [
  {
    src: tickIcon,
    txt: "BEREITS ÜBER 100.000 KUNDEN",
  },
  {
    src: tickIcon,
    txt: "HOHE ANKAUFPREISE",
  },
  {
    src: tickIcon,
    txt: "KEINE GEBÜHREN UND ABZÜGE",
  },
  {
    src: tickIcon,
    txt: "KEINE VERSANDKOSTEN",
  },
];

const page = () => {
  return (
    <section className="auszeichnungen_wrapper">
      <div className="container">
        <Breadcrumbs />
        <div className="d-flex d-lg-none wirkaufen_page_price mt-2">
          <PriceValueForm home />
        </div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8">
            <p className="auszeichnungen_wrapper_main_heading">
              Unsere Auszeichnungen
            </p>
            <p className="auszeichnungen_wrapper_main_subheading">
              Vertrauen ist uns wichtig!
            </p>
            <p>
              Wir von Goldankauf123.de seid schon lange auf dem Markt vertreten
              und seid daher sehr stolz darauf, dass unser Service sehr positiv
              von unseren Kunden wahrgenommen wird. Auf dieser Unterseite finden
              Sie eine Übersicht über eine Reihe von Bewertungsportalen sowie
              kurze Zusammenfassungen von TV-Beiträgen über unser Angebot.
            </p>
            <p className="mrt-5">
              Die Kundenzufriedenheit ist uns sehr wichtig! Bei Fragen nehmen
              Sie bitte direkt Kontakt mit uns auf und wenden sich via E-Mail
              oder Telefon vertrauensvoll an unseren Kundenservice.
            </p>
            <p className="auszeichnungen_wrapper_second_heading">
              eKomi Qualitätssiegel „Gold“
            </p>
            <p className="auszeichnungen_wrapper_second_subheading">
              100% Sicherheit durch echte Kundenbewertungen
            </p>
            <div className="d-flex align-items-center mt-1 auszeichnungen_list_wrapper">
              <Image src={EkomiVector} alt="" width={119} height={119} />
              <div>
                {auszeichnungenArray.map((item, index) => {
                  return (
                    <div className="auszeichnungen_list" key={index}>
                      <Image src={item.src} />
                      <p>{item.txt}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <p className="auszeichnungen_wrapper_second_heading ">
              Bewertungen bei eKomi
            </p>
            <p className="mrt-10">
              Wir legen sehr großen Wert auf die Meinung unserer Kunden.
              Zahlreiche Kunden von Goldankauf123.de haben uns bereits auf dem
              unabhängigen Bewertungsportal eKomi bewertet. Auf eKomi werden Sie
              viele positive Kundenmeinungen zu uns und unserer Arbeitsweise
              finden.
            </p>
            <p className="mrt-10">
              eKomi ist ein unabhängiges, externes Bewertungsportal, welches
              sich auf Bewertungen von online Dienstleistern oder online
              Verkäufern spezialisiert hat. Durch eKomi haben Käufer, aber auch
              potenzielle Kunden die Möglichkeit, ein Feedback zu den gekauften
              Produkten, Dienstleistungen oder dem Service im Allgemeinen
              abzugeben oder sich im Vorfeld über das Unternehmen zu erkundigen.
              Durch diese unabhängigen Kundenbewertungen erhalten wir sehr
              hilfreiche und wichtige Informationen über die Wünsche unserer
              Kunden geliefert, um so unseren Service stetig verbessern zu
              können.
            </p>
            <Button
              btnText="Jetzt Wert berechnen"
              width="322px"
              fontSize="18px"
              padding="1px 20px"
              height="40px"
              margin="10px 0px"
            />
            <div className="auszeichnungen_wrapper_card">
              {auszeichnungenArray1.map((item, index) => {
                return (
                  <div className="auszeichnungen_wrapper_card_body" key={index}>
                    <Image
                      src={item.src}
                      alt=""
                      width={item.width}
                      height={item.height}
                    />
                    <div className="auszeichnungen_wrapper_card_body_para">
                      <p className="auszeichnungen_wrapper_card_body_heading">
                        {item.heading}
                      </p>
                      <p>{item.para}</p>
                      <p className="mrt-5">{item.para2}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="auszeichnungen_wrapper_card_middle_paras">
              <p className="auszeichnungen_wrapper_second_heading">
                GOLDANKAUF123 IM TV
              </p>
              <p>
                Auf Grund unserer hoch seriösen Arbeitsweise hat es unser
                Unternehmen schon mehrfach ins öffentlich rechtliche Fernsehen
                gebracht. Die bisherige Krönung unserer Fernsehauftritte war
                eine eigene Dokumentation über unseren Goldankauf und unsere
                Kunden.
              </p>
              <p className="mrt-5">
                Aktueller Hinweis: derzeit wird schon wieder am nächsten TV
                Projekt gearbeitet, dass in den nächsten Monaten ausgestrahlt
                wird. Selbstverständlich informieren wir Sie noch über den
                genauen Termin. erkundigen.
              </p>
            </div>
            <div className="auszeichnungen_wrapper_card">
              {auszeichnungenArray2.map((item, index) => {
                return (
                  <div className="auszeichnungen_wrapper_card_body" key={index}>
                    <Image
                      src={item.src}
                      alt=""
                      width={item.width}
                      height={item.height}
                    />
                    <div className="auszeichnungen_wrapper_card_body_para">
                      <p className="auszeichnungen_wrapper_card_body_heading">
                        {item.heading}
                      </p>
                      <p>{item.para}</p>
                      <p className="mrt-5">{item.para2}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="auszeichnungen_wrapper_card_middle_paras">
              <p className="auszeichnungen_wrapper_second_heading">
                Video Bewertungen zu Goldankauf123.de
              </p>
              <p>
                Auf Grund unserer hoch seriösen Arbeitsweise hat es unser
                Unternehmen schon mehrfach ins öffentlich rechtliche Fernsehen
                gebracht. Die bisherige Krönung unserer Fernsehauftritte war
                eine eigene Dokumentation über unseren Goldankauf und unsere
                Kunden.
              </p>
              <p className="mrt-5">
                Aktueller Hinweis: derzeit wird schon wieder am nächsten TV
                Projekt gearbeitet, dass in den nächsten Monaten ausgestrahlt
                wird. Selbstverständlich informieren wir Sie noch über den
                genauen Termin.
              </p>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="vedio_card">
                  <div class="black-corner-top top-left"></div>
                  <div class="black-corner-bottom bottom-right"></div>
                  <iframe
                    width={"100%"}
                    height={"202"}
                    src="https://www.youtube.com/embed/mraDy40U7CY"
                    title={""}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-center mt-3">
                  Bericht des WDR zu <br />
                  Goldankauf123
                </p>
              </div>
              <div className="col-12 col-md-6">
                <div className="vedio_card">
                  <div class="black-corner-top top-left"></div>
                  <div class="black-corner-bottom bottom-right"></div>
                  <iframe
                    width={"100%"}
                    height={"202"}
                    src="https://www.youtube.com/embed/l1sFx_RNGRk"
                    title={""}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-center mt-3">
                  Auch der MDR hat über
                  <br />
                  Goldankauf123 berichtet
                </p>
              </div>
              <div className="ard_phenix">
                <p className="ard_phenix_heading">ARD, PHOENIX ...</p>
                <p className="ard_phenix_para text-center">
                  Auch auf weiteren Sendern wie der ARD im Format Brisant oder
                  einer Reportage auf Phoenix wurde unser Goldankauf Angebot
                  Goldankauf123.de positiv erwähnt.
                </p>
                <Button
                  btnText="Jetzt Wert berechnen"
                  height="40px"
                  width="320px"
                />
              </div>
              <div>
                <p className="ard_phenix_heading text-center mrt-20">
                  AUCH AUF YOUTUBE WIRD ÜBER UNS BERICHTET
                </p>
                <div className="vedio_card">
                  <div class="black-corner-top top-left"></div>
                  <div class="black-corner-bottom bottom-right"></div>
                  <iframe
                    width={"100%"}
                    height={"435"}
                    src="https://www.youtube.com/embed/l1sFx_RNGRk"
                    title={""}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div>
                <p className="ard_phenix_last_heading text-center mrt-20">
                  GOLDANKAUF123 <br />
                  BEI AKTE VON SAT1
                </p>
                <div className="vedio_card">
                  <div class="black-corner-top top-left"></div>
                  <div class="black-corner-bottom bottom-right"></div>
                  <iframe
                    width={"100%"}
                    height={"435"}
                    src="https://www.youtube.com/embed/l1sFx_RNGRk"
                    title={""}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="d-none d-lg-flex wirkaufen_page_price">
              <PriceValueForm home />
            </div>
            <KitcoGoldTab />
            <EtrusredShop2 marginTop="10px" />
            <InformationCard />
            <Ekomi marginTop="15px" />
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
