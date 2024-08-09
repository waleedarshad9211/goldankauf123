"use client";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Image from "next/image";
import React from "react";
import neutral_recycling from "/public/assets/img/neutral_recycling.png";
import neutral_recycling1 from "/public/assets/img/neutral_gold.png";
import BedeutungGoldEgg from "/public/assets/img/Bedeutung-gold-egg.png";
import neutral_1 from "/public/assets/img/neutral_1.png";
import neutral_2 from "/public/assets/img/neutral_2.png";
import neutral_3 from "/public/assets/img/neutral_3.png";
import das_1 from "/public/assets/img/das_1.png";
import das_2 from "/public/assets/img/das_2.png";
import das_3 from "/public/assets/img/das_3.png";
import gold_last_img from "/public/assets/img/gold_last_img.png";
import das_konzept_relevanz from "/public/assets/img/das_konzept_relevanz.png";
import ansatze_von_nachaltig from "/public/assets/img/ansatze_von_nachaltig.png";
import wertverlust_fuhrt_das from "/public/assets/img/wertverlust_fuhrt_das.png";
import fazit from "/public/assets/img/fazit.png";
import neutral_right_triangle from "/public/assets/img/neutral_right_triangle.png";
import {
  anteilVomArray,
  anteilVomArray1,
  anteilVomArray2,
  gliederungArray,
} from "@/public/static/HomepageStatic";
import ValueCalc from "@/components/shared/ValueCalc";

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
        <div className="nachhaltig_umfangr_emission_card_wrapper">
          <div className="nachhaltig_umfangr_emission_card">
            <div className="nachhaltig_umfangr_emission_card_header">
              SCOPE 1
            </div>
            <div className="nachhaltig_umfangr_emission_card_body">
              In der Bilanzierung nach Scope 1 werden alle direkten
              Treibhausgas-Emissionen eines Unternehmens erfasst.
            </div>
          </div>
          <div className="nachhaltig_umfangr_emission_card">
            <div className="nachhaltig_umfangr_emission_card_header">
              SCOPE 2
            </div>
            <div className="nachhaltig_umfangr_emission_card_body">
              In der Bilanzierung nach Scope 2 werden zusätzlich die indirekten
              Emissionen aus der Erzeugung von gekaufter Energie erfasst, die
              beim innerbetrieblichen Einsatz des Unternehmens zum Einsatz
              kommen.
            </div>
          </div>
          <div className="nachhaltig_umfangr_emission_card">
            <div className="nachhaltig_umfangr_emission_card_header">
              SCOPE 3
            </div>
            <div className="nachhaltig_umfangr_emission_card_body">
              In der Bilanzierung nach Scope 3 werden zusätzlich alle Emissionen
              entlang der Wertschöpfungskette bilanziert, die in vorgelagerten
              und nachgelagerten Prozessen emittiert werden.
            </div>
          </div>
        </div>
        <p className="nachhaltig_umfangr_emission_heading">
          Goldankauf und Nachhaltigkeit
        </p>
        <p className="nachhaltig_umfangr_emission_para">
          Das Thema Nachhaltigkeit und Goldankauf passenden wunderbar zusammen.
          Wir von Goldankauf123 bieten Ihnen über unser Portal die Möglichkeit
          Edelmetalle aller Art zu sehr guten Ankaufspreisen verkaufen zu können
          und damit gleichzeitig etwas für den Umweltschutz zu tun
        </p>
        <p>
          Jedes Gramm Gold, das durch uns aufgekauft wird, kommt wieder in den
          Kreislauf der Verwertung und muss nicht zusätzlich abgebaut werden.
          Bekannterweise ist der Abbau von Gold und anderen Edelmetallen nicht
          sehr zuträglich für die Umwelt. Vor allem der illegale Goldabbau
          beispielweise im Amazonas führt zu sehr großen Umweltzerstörungen, die
          zum Teil irreparable Schäden versursacht.{" "}
        </p>
        <p>
          Wir von Goldankauf123 sind uns dieser Verantwortung bewusst und
          unterstützen mit unseren attraktiven Goldpreisen im Ankauf die
          Nachhaltigkeitsbewegung. In diesem Text zum Thema Nachhaltigkeit
          möchten wir Ihnen gerne vorstellen, was wir unter Nachhaltigkeit
          verstehen, wie schädlich der Abbau von Edelmetallen sein kann und wie
          Edelmetalle durch Recycling wieder in den Umlauf gebracht werden
          können.{" "}
        </p>
        <p className="nachhaltig_umfangr_emission_heading">Gliederung</p>
        {gliederungArray.map((item, index) => {
          return (
            <div className="nachhaltig_wrapper_gliederung_list">
              <Image src={item.tickIcon} alt="" />
              <p className="nachhaltig_wrapper_gliederung_para">{item.txt}</p>
            </div>
          );
        })}
        <div className="anteil_vom_recycling_wrapper">
          <p className="text-center anteil_vom_recycling_wrapper_heading">
            Anteil vom Recycling-Gold am angebotenen Gold weltweit
          </p>
          <div className="anteil_vom_recycling_table">
            <div className="anteil_vom_recycling_table_wrapper">
              <div className="anteil_vom_recycling_table_header">
                <div>Jahr</div>
                <div>%-Anteil</div>
              </div>
              {anteilVomArray.map((item, index) => {
                return (
                  <div className="anteil_vom_recycling_table_body" key={index}>
                    <div>{item.year}</div>
                    <div>{item.percentage}</div>
                  </div>
                );
              })}
            </div>
            <div className="anteil_vom_recycling_table_wrapper">
              <div className="anteil_vom_recycling_table_header">
                <div>Jahr</div>
                <div>%-Anteil</div>
              </div>
              {anteilVomArray1.map((item, index) => {
                return (
                  <div className="anteil_vom_recycling_table_body" key={index}>
                    <div>{item.year}</div>
                    <div>{item.percentage}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="co_neutrals_inner_wrapper1 co_neutrals_inner_wrapper2">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-7 co_neutrals_inner_wrapper_left_column">
                <div className="co_neutrals_inner_wrapper_left_side co_neutrals_inner_wrapper_left_side1">
                  <p className="co_neutrals_inner_wrapper_heading">
                    Bedeutung von Gold
                  </p>
                  <p className="co_neutrals_inner_wrapper_para co_neutrals_inner_wrapper_para1">
                    Gold ist seit Jahrtausenden ein begehrtes Gut, das als
                    Symbol für Reichtum, Macht und Beständigkeit gilt. Auch
                    heute noch spielt Gold eine zentrale Rolle in der globalen
                    Wirtschaft, sei es als Wertanlage, in der Schmuckindustrie
                    oder als Rohstoff in der Elektronik. Gleichzeitig gewinnt
                    das Thema Nachhaltigkeit zunehmend an Bedeutung, da die
                    Auswirkungen menschlichen Handelns auf die Umwelt und die
                    Gesellschaft immer deutlicher werden. Im Kontext des
                    Goldankaufs wird somit die Frage nach der Vereinbarkeit von
                    ökonomischen Interessen und nachhaltigem Handeln besonders
                    relevant.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-5 co_neutrals_inner_wrapper_column">
                <div className="co_neutrals_inner_wrapper_column_img co_neutrals_inner_wrapper_column_img1">
                  <Image src={BedeutungGoldEgg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="das_konzept_wrapper">
        <div className="container">
          <p className="das_konzept_heading">Das Konzept der Nachhaltigkeit</p>
          <p>
            Nachhaltigkeit bedeutet, dass gegenwärtige Bedürfnisse befriedigt
            werden, ohne die Fähigkeit künftiger Generationen zu gefährden, ihre
            eigenen Bedürfnisse zu befriedigen. Dieses Konzept basiert auf drei
            zentralen Säulen:
          </p>
          <div className="das_konzept_list_wrapper">
            <div className="das_konzept_list">
              <Image src={das_1} alt="" />
              <p>Schutz der Umwelt und der natürlichen Ressourcen.</p>
            </div>
            <div className="das_konzept_list">
              <Image src={das_2} alt="" />
              <p>Förderung eines stabilen und gerechten Wirtschaftssystems.</p>
            </div>
            <div className="das_konzept_list">
              <Image src={das_3} alt="" />
              <p>
                Sicherstellung von sozialer Gerechtigkeit und fairen
                Arbeitsbedingungen.
              </p>
            </div>
          </div>
          <p>
            Diese drei Säulen sind eng miteinander verknüpft und bedingen sich
            gegenseitig. Im Idealfall ergänzen sie sich, um eine nachhaltige
            Entwicklung zu gewährleisten.
          </p>
          <p className="das_konzept_heading">
            Relevanz der Nachhaltigkeit im Bereich Goldankauf
          </p>
          <p className="mrt-10">
            Der Goldsektor ist bekannt für seine erheblichen ökologischen und
            sozialen Herausforderungen. Der Abbau und die Verarbeitung von Gold
            haben weitreichende Auswirkungen, die die Relevanz von
            Nachhaltigkeit in diesem Bereich verdeutlichen:
          </p>
          <div className="row mrt-10">
            <div className="col-12 col-md-6 col-lg-7">
              <p className="das_konzept_sub_heading">Ökologische Aspekte:</p>
              <p className="mrt-10">
                Der Goldabbau führt oft zu massiven Landschaftsveränderungen,
                Abholzung und Verlust von Biodiversität. Große Mengen Wasser
                werden benötigt, und oft gelangen giftige Chemikalien wie Zyanid
                und Quecksilber in die Umwelt, was Wasserquellen verunreinigt.
                Der Energieverbrauch im Goldabbau und -verarbeitung trägt
                erheblich zu den Treibhausgasemissionen bei.
              </p>
              <p className="das_konzept_sub_heading mrt-10">Soziale Aspekte:</p>
              <p className="">
                In vielen Goldminen, insbesondere in Entwicklungsländern, sind
                die{" "}
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 ">
              <Image src={das_konzept_relevanz} alt="" />
            </div>
          </div>
          <p className="mrt-10">
            Arbeitsbedingungen prekär. Es gibt Berichte über Kinderarbeit,
            unzureichende Sicherheitsvorkehrungen und Gesundheitsgefährdungen.
            Der Goldabbau kann zu Konflikten mit lokalen und indigenen
            Gemeinschaften führen, deren Lebensgrundlagen bedroht werden.
          </p>
          <p className="das_konzept_sub_heading mrt-10">Ökonomische Aspekte:</p>
          <p className="mrt-5">
            Der globale Goldmarkt weist oft Ungleichheiten in der
            Wertschöpfungskette auf, wobei Arbeiter und lokale Gemeinschaften
            nicht fair entlohnt werden.
          </p>
        </div>
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
          <div>
            <p className="nachhaltig_goldabbau_sub_heading">
              Wasserverbrauch und Wasserverschmutzung
            </p>
            <p className="nachhaltig_goldabbau_para2">
              Ein weiterer wesentlicher ökologischer Aspekt des Goldabbaus ist
              der enorme Wasserverbrauch. Für die Gewinnung und Verarbeitung von
              Gold werden große Mengen Wasser benötigt, was besonders in
              wasserarmen Regionen zu erheblichen Problemen führen kann. Zudem
              wird das verwendete Wasser oft mit giftigen Chemikalien wie Zyanid
              und Quecksilber versetzt, die bei unsachgemäßer Handhabung in die
              Umwelt gelangen und Wasserquellen kontaminieren können. Diese
              Verschmutzung stellt nicht nur eine Gefahr für die lokale
              Bevölkerung dar, die auf sauberes Wasser angewiesen ist, sondern
              schädigt auch die aquatischen Ökosysteme und die darin lebenden
              Organismen.
            </p>
            <p className="nachhaltig_goldabbau_sub_heading">
              Verwendung und Entsorgung von Chemikalien
            </p>
            <p className="nachhaltig_goldabbau_para2">
              Die Verwendung von Chemikalien im Goldabbau ist ein weiteres
              zentrales Problem. Zyanid und Quecksilber werden häufig
              eingesetzt, um Gold aus dem Gestein zu lösen. Diese Chemikalien
              sind hochgiftig und können bei unzureichender Kontrolle und
              Entsorgung erhebliche Umweltschäden verursachen. Zyanid,
              beispielsweise, kann bei Freisetzung in die Umwelt schnell in
              Wasserquellen gelangen und tödliche Wirkungen auf Wasserlebewesen
              und andere Organismen haben. Quecksilber kann sich in der
              Nahrungskette anreichern und zu schweren Gesundheitsproblemen bei
              Menschen und Tieren führen.
            </p>
            <p className="nachhaltig_goldabbau_sub_heading">
              Beispiele für Umweltzerstörungen durch den Abbau von Gold
            </p>
            <p className="nachhaltig_goldabbau_para2">
              Konkrete Beispiele aus verschiedenen Regionen der Welt
              verdeutlichen die schwerwiegenden ökologischen Auswirkungen des
              Goldabbaus. In den Amazonas-Regenwäldern in Brasilien führt
              illegaler Goldabbau zu großflächiger Abholzung und
              Quecksilberverseuchung von Flüssen, was sowohl die Umwelt als auch
              die Gesundheit der indigenen Bevölkerung stark beeinträchtigt. In
              Ghana, einem der größten Goldproduzenten Afrikas, haben
              umfangreiche Goldminen das lokale Ökosystem erheblich geschädigt.
              Hier sind verschmutzte Flüsse und Böden eine direkte Folge des
              intensiven Goldabbaus, was die Lebensgrundlagen der ansässigen
              Gemeinden bedroht.
            </p>
            <p className="nachhaltig_goldabbau_para2">
              In Kanada, insbesondere in der Region British Columbia, haben
              Studien gezeigt, dass selbst gut regulierte Goldminen erhebliche
              Umweltprobleme verursachen können. Hier wurden Fälle von
              Wasserverschmutzung dokumentiert, bei denen Schwermetalle in die
              Flüsse gelangten und die Fischbestände gefährdeten.
            </p>
          </div>
        </div>
      </section>
      <section className="container mrt-20">
        <div className="goldforderung_nach">
          <p className="text-center goldforderung_nach_heading">
            Goldförderung nach Land in Tonnen im Jahr 2023
          </p>
          <div className="aanteil_vom_recycling_table_wrapper1">
            <div className="anteil_vom_recycling_table_header anteil_vom_recycling_table_header1">
              <div>Land</div>
              <div>Fördermenge in t</div>
            </div>
            {anteilVomArray2.map((item, index) => {
              return (
                <div
                  className="anteil_vom_recycling_table_body anteil_vom_recycling_table_body1"
                  key={index}
                >
                  <div>{item.year}</div>
                  <div>{item.percentage}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <p className="das_konzept_heading">
            Ansätze von Nachhaltigkeit für den Goldsektor
          </p>
          <p className="mrt-10">
            Der Goldsektor steht vor der Herausforderung, seine erheblichen
            ökologischen und sozialen Auswirkungen zu minimieren. Nachhaltige
            Ansätze bieten Lösungen, um die negativen Effekte des Goldabbaus und
            der -verarbeitung zu verringern und gleichzeitig ökonomische
            Vorteile zu erhalten. Diese Ansätze umfassen
            Zertifizierungsprogramme, Recyclinginitiativen und innovative
            Technologien.
          </p>
          <div className="row mrt-10">
            <div className="col-12 col-md-6 col-lg-7">
              <p className="das_konzept_sub_heading">
                Zertifizierung und Standards
              </p>
              <p className="mrt-5">
                Eine wichtige Strategie zur Förderung der Nachhaltigkeit im
                Goldsektor ist die Einführung und Verbreitung von
                Zertifizierungsprogrammen. Fairtrade-Gold ist ein prominentes
                Beispiel für eine solche Initiative.
              </p>
              <p className="mrt-5">
                Dieses Programm zielt darauf ab, gerechte Arbeitsbedingungen,
                faire Löhne und umweltfreundliche Praktiken im Goldbergbau zu
                gewährleisten. Durch die Zertifizierung wird sichergestellt,
                dass die gesamte Lieferkette – von der Mine bis zum
                Endverbraucher – bestimmte soziale und ökologische Standards
                einhält.
              </p>
              <p className="das_konzept_sub_heading mrt-10">Soziale Aspekte:</p>
              <p className="">
                In vielen Goldminen, insbesondere in Entwicklungsländern, sind
                die{" "}
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 ">
              <Image src={ansatze_von_nachaltig} alt="" />
            </div>
          </div>
          <p className="mrt-10">
            Neben Fairtrade-Gold gibt es weitere Zertifizierungsprogramme wie
            das Responsible Jewellery Council (RJC) und das Conflict-Free Gold
            Standard. Diese Programme setzen strenge Kriterien für ethische
            Geschäftspraktiken und umweltfreundlichen Bergbau und bieten
            Konsumenten die Möglichkeit, Gold aus verantwortungsvollen Quellen
            zu kaufen. Nichtregierungsorganisationen (NGOs) und internationale
            Organisationen spielen eine zentrale Rolle bei der Entwicklung und
            Umsetzung dieser Standards. Sie überwachen die Einhaltung der
            Richtlinien, bieten Schulungen und Unterstützung für
            Bergbauunternehmen und sensibilisieren die Öffentlichkeit für die
            Bedeutung nachhaltigen Konsums.
          </p>
          <p className="das_konzept_sub_heading mrt-10">
            Recycling und Sekundärmärkte
          </p>
          <p className="mrt-5">
            Das Recycling von Gold stellt einen weiteren wesentlichen
            nachhaltigen Ansatz dar. Durch das Recycling von Altgold,
            beispielsweise aus Elektronikschrott oder Schmuck, kann der Bedarf
            an neu abgebautem Gold erheblich reduziert werden. Dies hat direkte
            ökologische Vorteile, da der Energieverbrauch und die
            Umweltbelastung im Vergleich zum Primärabbau deutlich geringer sind.
            Die Prozesse des Goldrecyclings sind jedoch nicht ohne
            Herausforderungen. Die Sammlung und Trennung von Gold aus
            verschiedenen Quellen erfordert spezialisierte Technologien und gut
            organisierte Rücknahmesysteme. Zudem muss das recycelte Gold oft
            gereinigt und aufbereitet werden, um die Qualität und Reinheit
            sicherzustellen, die für verschiedene Verwendungszwecke erforderlich
            sind.
          </p>
          <p className="mrt-5">
            Trotz dieser Herausforderungen bietet das Goldrecycling erhebliche
            Vorteile. Es trägt zur Schonung natürlicher Ressourcen bei,
            reduziert die Umweltbelastung und kann gleichzeitig wirtschaftlich
            rentabel sein, da die Nachfrage nach recyceltem Gold in der
            Industrie stetig wächst. Wir als Goldankauf123 sehen uns hier in
            Verantwortung das Thema Nachhaltigkeit weiter voranzutreiben.
            Sollten Sie weitere Fragen zum Thema Edelmetallrecycling haben.,
            wenden Sie sich gerne an unseren Kundenservice.{" "}
          </p>
          <p className="das_konzept_sub_heading mrt-10">
            Innovative Ansätze und Technologien
          </p>
          <p className="mrt-5">
            Innovative Technologien im Goldsektor bieten weitere Möglichkeiten
            zur Verringerung des ökologischen Fußabdrucks. Neue
            Abbautechnologien zielen darauf ab, den Umweltimpact zu minimieren.
            Zum Beispiel wird zunehmend an Methoden geforscht, die den Einsatz
            von giftigen Chemikalien wie Zyanid und Quecksilber reduzieren oder
            ganz vermeiden. Biotechnologische Ansätze, wie der Einsatz von
            Mikroorganismen zur Goldgewinnung, sind vielversprechende
            Entwicklungen, die weniger schädlich für die Umwelt sind. Darüber
            hinaus spielen Entwicklungen in der Kreislaufwirtschaft eine
            entscheidende Rolle. Die Kreislaufwirtschaft zielt darauf ab,
            Materialkreisläufe zu schließen, indem Produkte und Materialien so
            lange wie möglich verwendet, wiederverwendet und recycelt werden. Im
            Goldsektor bedeutet dies, dass nicht nur Altgold recycelt wird,
            sondern auch Abfallprodukte aus dem Abbau und der Verarbeitung
            wieder in den Produktionskreislauf zurückgeführt werden. Dies
            reduziert Abfall und optimiert die Nutzung vorhandener Ressourcen.
          </p>
        </div>
      </section>
      <section className="fuhrt_das">
        <div className="container">
          <div className="row fuhrt_das_row">
            <div className="col-12 col-md-6 col-lg-6 co_neutrals_inner_wrapper_left_column">
              <div className="co_neutrals_inner_wrapper_left_side co_neutrals_inner_wrapper_left_side1">
                <p className="fuhrt_das_heading">
                  Führt das Recycling von Gold zu einem Wertverlust?
                </p>
                <p className="co_neutrals_inner_wrapper_para co_neutrals_inner_wrapper_para1">
                  Recyceltes Gold ist nicht weniger wert als neu abgebautes
                  Gold. Der Wert von Gold wird hauptsächlich durch seine
                  Reinheit und den aktuellen Marktpreis bestimmt, nicht durch
                  die Quelle, aus der es stammt. Der Wert von Gold hängt stark
                  von seiner Reinheit ab. Recyceltes Gold kann aus verschiedenen
                  Quellen stammen, wie Schmuck, Elektronik oder
                  Industrieabfällen, und muss oft gereinigt und aufbereitet
                  werden, um die gewünschte Reinheit zu erreichen. Sobald das
                  Gold jedoch auf den erforderlichen Reinheitsgrad gebracht
                  wurde, ist es genauso wertvoll wie neu abgebautes Gold. Der
                  Marktpreis von Gold wird auf den globalen Rohstoffmärkten
                  festgelegt und gilt für Gold unabhängig von seiner Herkunft.
                  Der Preis wird hauptsächlich durch Angebot und Nachfrage
                  bestimmt und schwankt entsprechend. Recyceltes Gold wird zum
                  gleichen Marktpreis gehandelt wie neu abgebautes Gold, sofern
                  es die gleiche Reinheit aufweist.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 co_neutrals_inner_wrapper_column">
              <div className="co_neutrals_inner_wrapper_column_img co_neutrals_inner_wrapper_column_img1">
                <Image src={wertverlust_fuhrt_das} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mrt-20">
        <div>
          <p className="das_konzept_heading">
            Kann durch Recycling von Gold der Abbau von Gold reduziert werden?
          </p>
          <p className="mrt-10">
            Durch das Recycling von Gold kann der Bedarf an neuem Goldabbau
            tatsächlich verringert werden. Dies hat mehrere Vorteile sowohl für
            die Umwelt als auch für die Gesellschaft.
          </p>
          <div className="row mrt-10">
            <div className="col-12 col-md-6 col-lg-7">
              <p className="das_konzept_sub_heading">
                Verringerung des Bedarfs an neuem Goldabbau
              </p>
              <p className="mrt-5">
                Goldrecycling ermöglicht die Wiederverwendung von bereits
                existierendem Gold, wodurch die Notwendigkeit, neue
                Goldvorkommen zu erschließen und abzubauen, reduziert wird. Da
                Gold ein endlicher Rohstoff ist, trägt das Recycling zur
                Schonung der natürlichen Ressourcen bei.
              </p>
              <p className="mrt-5">
                Der neue Goldabbau ist oft mit erheblichen ökologischen Schäden
                verbunden, einschließlich Landschaftszerstörung, Wasserverbrauch
                und Verschmutzung durch giftige Chemikalien. Durch die Reduktion
                des Bedarfs an neuem Abbau können diese negativen
                Umweltauswirkungen minimiert werden.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 ">
              <Image src={gold_last_img} alt="" />
            </div>
          </div>
          <p className="mrt-10">
            Der Recyclingprozess von Gold verbraucht im Allgemeinen weniger
            Energie als der Abbau und die Verarbeitung von neuem Gold aus Erz.
            Dies trägt zur Reduktion des CO2-Ausstoßes und zu einem geringeren
            ökologischen Fußabdruck bei.
          </p>
          <p className="das_konzept_sub_heading mrt-10">
            Nachhaltige Ressourcennutzung
          </p>
          <p className="mrt-5">
            Recyceltes Gold kann kostengünstiger als neu abgebautes Gold sein,
            da es keine aufwändigen Bergbauaktivitäten erfordert. Dies kann
            wirtschaftliche Vorteile für Unternehmen bringen, die Gold in ihren
            Produkten verwenden.
          </p>
          <p className="mrt-5">
            Gold aus elektronischen Geräten, Schmuck und Industrieabfällen
            stellt eine wertvolle sekundäre Quelle dar. Durch effiziente
            Rückgewinnung und Recyclingprozesse kann eine beträchtliche Menge an
            Gold zurückgewonnen werden, die sonst verloren gehen würde.
          </p>
          <p className="das_konzept_sub_heading mrt-10">
            Förderung der Kreislaufwirtschaft
          </p>
          <p className="mrt-5">
            Das Recycling von Gold unterstützt das Konzept der
            Kreislaufwirtschaft, bei dem Materialien so lange wie möglich
            genutzt und wiederverwendet werden. Dies trägt zu einer nachhaltigen
            und ressourceneffizienten Wirtschaft bei.
          </p>
          <p className="mrt-5">
            Verbesserte Recyclingtechnologien ermöglichen eine immer
            effizientere Rückgewinnung von Gold aus verschiedenen Produkten.
            Diese Technologien tragen dazu bei, den Anteil des recycelten Goldes
            im Vergleich zum neu abgebauten Gold zu erhöhen.
          </p>
          <p className="das_konzept_sub_heading mrt-10">
            Soziale und ethische Vorteile
          </p>
          <p className="mrt-5">
            In vielen Regionen der Welt ist der Goldabbau mit sozialen und
            ethischen Problemen verbunden, einschließlich
            Menschenrechtsverletzungen und Konflikten. Durch die Verringerung
            der Abhängigkeit von neuem Goldabbau können diese Probleme teilweise
            gemildert werden. Recyclingprozesse können unter kontrollierten und
            oft besseren Arbeitsbedingungen durchgeführt werden als einige
            Bergbauaktivitäten, insbesondere in Entwicklungsländern.
          </p>
        </div>
      </section>
      <section className="fazit">
        <div className="container">
          <div className="row fuhrt_das_row">
            <div className="col-12 col-md-6 col-lg-6 co_neutrals_inner_wrapper_left_column">
              <div className="co_neutrals_inner_wrapper_left_side co_neutrals_inner_wrapper_left_side1">
                <p className="fuhrt_das_heading">Fazit</p>
                <p className="co_neutrals_inner_wrapper_para co_neutrals_inner_wrapper_para1">
                  Nutzen Sie die Möglichkeit das Thema Nachhaltigkeit zu
                  unterstützen und profitieren Sie gleichzeitig von den sehr
                  ansprechenden Goldpreisen von Goldankauf123, die durch die
                  aktuelle Goldpreisentwicklung beeinflusst werden. Die
                  Abwicklung ist kinderleicht mit vielen Versandoptionen. Werfen
                  Sie einen Blick auf unser Goldlexikon oder die zahlreichen
                  Kundenvideos unserer Kunden. Wir von Goldankauf123 sind seit
                  vielen Jahren am Markt aktiv und konnten unseren Service in
                  diesem Zeitraum immer mehr auf die Bedürfnisse unserer Kunden
                  anpassen. Lesen Sie sich unbedingt die unabhängig verfassten
                  Kundenbewertungen durch, die Ihnen eine gute Übersicht über
                  unsere Arbeitsweise geben werden. Bei weiteren Fragen stehen
                  wir Ihnen gerne per E-Mail oder Telefon zur Verfügung und
                  unterstützen bei Ihrem Vorhaben Gold verkaufen zu wollen.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 co_neutrals_inner_wrapper_column">
              <div className="co_neutrals_inner_wrapper_column_img co_neutrals_inner_wrapper_column_img1">
                <Image src={fazit} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-2 goldrechner-last-section">
        <div className="container">
          <ValueCalc />
        </div>
      </section>
    </section>
  );
};

export default page;
