import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Image from "next/image";
import React from "react";
import neutral_recycling from "/public/assets/img/neutral_recycling.png";
import neutral_recycling1 from "/public/assets/img/neutral_gold.png";
import neutral_1 from "/public/assets/img/neutral_1.png";
import neutral_2 from "/public/assets/img/neutral_2.png";
import neutral_3 from "/public/assets/img/neutral_3.png";
import neutral_right_triangle from "/public/assets/img/neutral_right_triangle.png";

const page = () => {
  return (
    <section className="nachhaltig_wrapper">
      <div className="container">
        <Breadcrumbs />
      </div>
      <section className="nachhaltig_main_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <p className="nachhaltig_main_wrapper_heading">
                Wir schützen die Umwelt mit unserer Nachhaltigkeitsstrategie
              </p>
              <p className="nachhaltig_main_wrapper_para1">
                Ein sehr wichtiger Punkt unserer Nachhaltigkeitsstrategie ist
                es, dass wir auf einen neutralen CO₂-Recyclingprozess setzen.
                Dies bedeutet, dass wir CO₂-neutral arbeiten und dass durch den
                Schmelzvorgang CO₂-neutrales Goldes entsteht.
              </p>
            </div>
            <div className="col-12 col-md-6 nachhaltig_main_wrapper_column"></div>
          </div>
        </div>
      </section>
      <section className="co_neutrals">
        <div className="container">
          <p>
            Nachhaltigkeit ist in der DNA unseres Unternehmens seit jeher
            verankert. Dies betrifft nachhaltiges Wirtschaften als Unternehmen,
            Verantwortung für die Gesellschaft und im Besonderen für die Umwelt.
            Deshalb haben wir uns die CO2-Neutralität des gesamten Unternehmens
            zum Ziel gesetzt. Bei der Umsetzung der Maßnahmen setzen wir auf
            maximale Effizienz und höchste Transparenz.
          </p>
          <div className="co_neutrals_inner_wrapper">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-7 co_neutrals_inner_wrapper_left_column">
                <div className="co_neutrals_inner_wrapper_left_side">
                  <p className="co_neutrals_inner_wrapper_heading">
                    CO2-NEUTRALES RECYCLING
                  </p>
                  <p className="co_neutrals_inner_wrapper_para">
                    Wir verarbeiten aus Tradition ausschließlich Sekundärgold –
                    also Altgold aus Altschmuck, Produktionsabfällen der
                    Schmuckindustrie und Dentalabfällen, die wir mithilfe
                    modernster Verfahren und regenerativer Energien CO2-neutral
                    aufbereiten.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-5 co_neutrals_inner_wrapper_column">
                <div className="co_neutrals_inner_wrapper_column_img">
                  <Image src={neutral_recycling} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="co_neutrals_inner_wrapper1">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-5 co_neutrals_inner_wrapper_column">
                <div className="co_neutrals_inner_wrapper_column_img">
                  <Image src={neutral_recycling1} />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-7 co_neutrals_inner_wrapper_left_column">
                <div className="co_neutrals_inner_wrapper_left_side">
                  <p className="co_neutrals_inner_wrapper_heading">
                    CO2-NEUTRALES GOLD
                  </p>
                  <p className="co_neutrals_inner_wrapper_para">
                    Unternehmen, die sich selbst mit ihrer Ökobilanz
                    auseinandersetzen und sich CO2-neutral stellen möchten,
                    bieten wir mit CO2-neutralem Gold ein Produkt mit 0
                    Emissionen. Das bedeutet, dieses Produkt ist bereits neutral
                    in der eigenen Bilanz und muss nicht zusätzlich kompensiert
                    werden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="unser_nachhaltig">
        <div className="container">
          <p className="text-center unser_nachhaltig_heading">
            Unser Weg zur Nachhaltigkeit in drei Schritten
          </p>
          <div className="unser_nachhaltig_card_wrapper">
            <div className="unser_nachhaltig_card1">
              <Image src={neutral_1} alt="" />
              <p className="unser_nachhaltig_card_upper_heading">
                Vermeidung CO₂
              </p>
              <div className="unser_nachhaltig_card_lower">
                <p>
                  Recyceltes Gold bedeutet gelebte Nachhaltigkeit. Hohe CO₂
                  Emissionen durch den Abbau von Gold in Minen wird vermieden.
                  Der CO₂-Fußabdruck von recyceltem Gold ist deutlich kleiner.
                </p>
              </div>
            </div>
            <Image
              src={neutral_right_triangle}
              alt=""
              className="neutral_right_triangle"
            />
            <div className="unser_nachhaltig_card2">
              <Image src={neutral_2} alt="" />
              <p className="unser_nachhaltig_card_upper_heading">
                Reduzierung CO₂
              </p>
              <div className="unser_nachhaltig_card_lower">
                <p>
                  Der Einsatz moderner Techniken, sorgsamer Umgang mit
                  Ressourcen und Verwendung von regenerativen Energien sorgt für
                  eine Reduktion von CO₂-Ausstoß.
                </p>
              </div>
            </div>
            <Image
              src={neutral_right_triangle}
              alt=""
              className="neutral_right_triangle"
            />
            <div className="unser_nachhaltig_card3">
              <Image src={neutral_3} alt="" />
              <p className="unser_nachhaltig_card_upper_heading">
                KOMPENSATION CO₂
              </p>
              <div className="unser_nachhaltig_card_lower">
                <p>
                  CO₂-Ausstoß der nicht verhindert werden kann, wird durch
                  Investition in nachweislich etablierte Nachhaltigkeitsprojekte
                  kompensiert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="nachhaltig_umfangr_emission container">
        <p className="text-center nachhaltig_umfangr_emission_heading">
          Umfangreiche Emissionsbilanzierung durch Goldankauf123
        </p>
        <p className="nachhaltig_umfangr_emission_para">
          Wir nutzen die Emissionsbilanzierung nach dem Greenhouse Gas (GHG)
          Protocol und inkludieren damit auch alle indirekten
          Treibhausgas-Emissionen, die wir nicht direkt kontrollieren können.
          Wir sind uns unseres Corporate Carbon Footprints bewusst und wollen
          durch die strenge Ökobilanzierung nach Scope 3 alle vor- und
          nachgelagerten Aktivitäten entlang unserer Wertschöpfungskette
          bilanzieren. Diese umfassende Berichterstattung hilft uns dabei,
          unsere Emissionen zu reduzieren und unsere Nachhaltigkeitsstrategie zu
          stärken.
        </p>
      </section>
      <section className="nachhaltig_goldabbau_wrapper">
        <div className="container">
          <p className="nachhaltig_goldabbau_wrapper_heading">
            Goldabbau führt zu Umweltzerstörungen
          </p>
          <p>
            Der Goldabbau hat weitreichende ökologische Auswirkungen, die sowohl
            die Umwelt als auch die Biodiversität in betroffenen Regionen stark
            beeinträchtigen. Zu den gravierendsten Umweltproblemen gehören die
            Landschaftszerstörung, der Verlust an Biodiversität, der hohe
            Wasserverbrauch und die Verschmutzung durch den Einsatz von
            Chemikalien.
          </p>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-7">
              <p className="nachhaltig_goldabbau_sub_heading">
                Landschaftszerstörung und Biodiversitätsverlust
              </p>
              <p className="nachhaltig_goldabbau_para2">
                Der Goldabbau, insbesondere der Tagebau, führt oft zu einer
                erheblichen Veränderung der Landschaft. Große Flächen werden
                gerodet, um Zugang zu den Goldvorkommen zu erhalten, was zur
                Zerstörung natürlicher Lebensräume führt. Diese Abholzung und
                die anschließenden Bodenerosionen tragen maßgeblich zum Verlust
                der Biodiversität bei, da viele Pflanzen- und Tierarten ihre
                natürlichen Lebensräume verlieren. Die Wiederherstellung dieser
                Gebiete ist schwierig und zeitaufwendig, wodurch die
                ökologischen Schäden langfristig anhalten können.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 nachhaltig_goldabbau_column"></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
