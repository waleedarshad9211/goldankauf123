"use client";
import React from "react";
import Ekomi from "@/components/shared/Ekomi";
import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import InformationCard from "@/components/shared/InformationCard";
import KitcoGoldTab from "@/components/shared/KitcoGoldTab";
import PriceValueForm from "@/components/shared/PriceValueForm";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import ankaufpreise_money from "/public/assets/img/ankaufpreise_money.png";
import Image from "next/image";
import GarantedPrice from "@/components/shared/garantedPrice/GarantedPrice";
import ValueCalc from "@/components/shared/ValueCalc";
import {
  ankaufpreiseArray1,
  ankaufpreiseArray2,
  ankaufpreiseArray3,
  ankaufpreiseArray4,
  ankaufpreiseArray5,
  ankaufpreiseArray6,
  hamburgerTableArray,
} from "@/public/static/HomepageStatic";

const Ankaufpreise = () => {
  return (
    <section className="ankaufspreise_wrapper">
      <div className="container">
        <Breadcrumbs />
        <div className="d-flex d-lg-none wirkaufen_page_price mt-2">
          <PriceValueForm home />
        </div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8">
            <p className="ankaufspreise_wrapper_heading1">
              Ankaufspreise für Edelmetalle
            </p>
            <div className="ankaufspreise_wrapper_para">
              <p>
                Wir bieten überdurchschnittlich hohe Ankaufspreise für
                Edelmetalle aller Arten. Unsere Ankaufspreise sind hoch, denn
                unsere Preisgestaltung beruht auf dem brandaktuellen Börsenkurs
                für Gold und Silber. Sobald sich der Rohstoffwert an der Börse
                verändert, verändert sich auch unser Ankaufspreis.
              </p>
              <Image src={ankaufpreise_money} alt="" />
            </div>
            <div>
              <p className="ankaufspreise_wrapper_heading2">
                Nutzen Sie unseren Goldrechner!
              </p>
              <p>
                Unsere Ankaufspreise können Sie live mit unserem Goldrechner
                abfragen. Der Goldrechner berechnet Ihren persönlichen
                Auszahlungsbetrag auf Grundlage der aktuellen Rohstoffpreise,
                die an den Börsenplätzen Frankfurt, London und New York bestimmt
                werden. Kursveränderungen werden schnellstmöglich (werktags in
                der Regel sogar alle 60 Sekunden) an unsere Kunden
                weitergegeben. Wenn der Goldkurs also steigt, steigt unser
                Ankaufspreis sekundengenau mit.
              </p>
            </div>
            <div className="hamburg_valuecal">
              <ValueCalc padding="10px" />
            </div>
            <div className="hamburg_table_wrapper ">
              <p className="ankaufspreise_table_heading1">
                Unsere Ankaufspreise für 999 Goldmünzen
              </p>
              <div className="hamburg_table_header">
                <p>1/10 Unze</p>
                <p>1/8 Unze</p>
                <p>1/4 Unze </p>
                <p>1/2 Unze </p>
                <p>1 Unze </p>
              </div>
              {ankaufpreiseArray1.map((item, index) => {
                return (
                  <div key={index} className="hamburg_table">
                    <p>{item.val1}</p>
                    <p>{item.val2}</p>
                    <p>{item.val3}</p>
                    <p>{item.val4}</p>
                    <p>{item.val5}</p>
                  </div>
                );
              })}
            </div>
            <p>
              Neben dem Ankauf von Goldmünzen können Sie an uns auch Goldschmuck
              verschiedenster Goldlegierungen verkaufen.{" "}
            </p>
            <p className="mrt-10">
              Wir garantieren Ihnen eine schnelle und diskrete Abwicklung über
              den Postweg. Bei Fragen zur Wertbestimmung nutzen Sie bitte
              unseren Kundenservice!
            </p>
            <div className="hamburg_table_wrapper ankaufpreise_table_wrapper1">
              <p className="ankaufspreise_table_heading2">
                Unsere Ankaufspreise für Goldlegierungen (Schmuckgold)
              </p>
              <div className="hamburg_table_header">
                <p className="ankaufpreise_table_column1">Legierung</p>
                <p className="ankaufpreise_table_column2">1g</p>
                <p className="ankaufpreise_table_column3">5g</p>
                <p className="ankaufpreise_table_column4">20g</p>
                <p className="ankaufpreise_table_column5">50g</p>
              </div>
              {ankaufpreiseArray2.map((item, index) => {
                return (
                  <div key={index} className="hamburg_table">
                    <p className="ankaufpreise_table_column1">{item.val1}</p>
                    <p className="ankaufpreise_table_column2">{item.val2}</p>
                    <p className="ankaufpreise_table_column3">{item.val3}</p>
                    <p className="ankaufpreise_table_column4">{item.val4}</p>
                    <p className="ankaufpreise_table_column5">{item.val5}</p>
                  </div>
                );
              })}
            </div>
            <p>
              Gerne kaufen wir Goldbarren aller Gewichtseinheiten zu sehr guten
              Goldbarren-Ankaufspreisen an. Schauen Sie sich unsere Preisliste
              für Goldbarren an oder nutzen Sie den Goldrechner, um eigenständig
              den Wert bestimmen zu können.
            </p>
            <p className="mrt-10">
              Gerne können Sie sich auch im Detail darüber informieren, wie der
              aktuelle Goldpreis durch Ereignisse beeinflusst wird.
            </p>
            <div className="hamburg_table_wrapper ">
              <p className="ankaufspreise_table_heading1">
                Unsere Ankaufspreise für beliebte Goldbarren
              </p>
              <div className="hamburg_table_header">
                <p className="ankaufpreise_table2_column1">10g</p>
                <p className="ankaufpreise_table2_column2">20g</p>
                <p className="ankaufpreise_table2_column3">31,1g (Unze)</p>
                <p className="ankaufpreise_table2_column4">50g</p>
                <p className="ankaufpreise_table2_column5">100g</p>
              </div>
              {ankaufpreiseArray3.map((item, index) => {
                return (
                  <div key={index} className="hamburg_table">
                    <p className="ankaufpreise_table2_column1">{item.val1}</p>
                    <p className="ankaufpreise_table2_column2">{item.val2}</p>
                    <p className="ankaufpreise_table2_column3">{item.val3}</p>
                    <p className="ankaufpreise_table2_column4">{item.val4}</p>
                    <p className="ankaufpreise_table2_column5">{item.val5}</p>
                  </div>
                );
              })}
            </div>
            <p>
              Neben dem Ankauf von Goldlegierungen bieten wir Ihnen auch den
              Ankauf von Silberlegierungen an. Bestimmen Sie den Wert Ihrer
              Gegenstände aus Silber mithilfe der Punzen und wiegen die
              Gegenstände mit einer haushaltsüblichen Küchenwaage ab.
            </p>
            <p className="mrt-10">
              Gerne übernehmen auch unsere Experten in der Analyse die Bewertung
              Ihrer Silbergegenstände.
            </p>
            <div className="hamburg_table_wrapper ankaufpreise_table_wrapper1">
              <p className="ankaufspreise_table_heading2">
                Unsere Ankaufspreise für Silber
              </p>
              <div className="hamburg_table_header">
                <p className="ankaufpreise_table_column1">Silberlegierung</p>
                <p className="ankaufpreise_table_column2">1g</p>
                <p className="ankaufpreise_table_column3">100g</p>
                <p className="ankaufpreise_table_column4">250g</p>
                <p className="ankaufpreise_table_column5">500g</p>
              </div>
              {ankaufpreiseArray4.map((item, index) => {
                return (
                  <div key={index} className="hamburg_table">
                    <p className="ankaufpreise_table_column1">{item.val1}</p>
                    <p className="ankaufpreise_table_column2">{item.val2}</p>
                    <p className="ankaufpreise_table_column3">{item.val3}</p>
                    <p className="ankaufpreise_table_column4">{item.val4}</p>
                    <p className="ankaufpreise_table_column5">{item.val5}</p>
                  </div>
                );
              })}
            </div>
            <p>
              Ein großer Ankaufsbereich umfasst Zahngold aller Art. Egal, ob Sie
              uns Zahngold mit Zähnen oder Zahngold ohne Zähne verkaufen
              möchten. Lassen Sie sich den Ankaufspreis für Zahngold nicht
              entgehen.
            </p>
            <p className="mrt-10">
              Selbst kleine Zahngoldmengen ergeben einen ansehnlichen
              Ankaufspreis. Es lohnt sich darüber hinaus Sendungen zu
              kombinieren, um den Ankaufspreis noch weiter zu steigern.
            </p>
            <div className="hamburg_table_wrapper ankaufpreise_table_wrapper1">
              <p className="ankaufspreise_table_heading2">
                Unsere Ankaufspreise für Zahngold
              </p>
              <div className="hamburg_table_header">
                <p className="ankaufpreise_table_column1">Silberlegierung</p>
                <p className="ankaufpreise_table_column2">1g</p>
                <p className="ankaufpreise_table_column3">5g</p>
                <p className="ankaufpreise_table_column4">10g</p>
                <p className="ankaufpreise_table_column5">20g</p>
              </div>
              {ankaufpreiseArray5.map((item, index) => {
                return (
                  <div key={index} className="hamburg_table">
                    <p className="ankaufpreise_table_column1">{item.val1}</p>
                    <p className="ankaufpreise_table_column2">{item.val2}</p>
                    <p className="ankaufpreise_table_column3">{item.val3}</p>
                    <p className="ankaufpreise_table_column4">{item.val4}</p>
                    <p className="ankaufpreise_table_column5">{item.val5}</p>
                  </div>
                );
              })}
            </div>
            <p>
              Gerne bieten wir Ihnen auch den Ankauf von Platin und Palladium
              über unsere Plattform an. Berechnen Sie den möglichen Ankaufspreis
              mithilfe des Goldrechners und staunen Sie über die hohen
              Ankaufspreise.
            </p>
            <div className="hamburg_table_wrapper ankaufpreise_table_wrapper1">
              <p className="ankaufspreise_table_heading2">
                Unsere Ankaufspreise für Silber
              </p>
              <div className="hamburg_table_header">
                <p className="ankaufpreise_table_column1">Legierung</p>
                <p className="ankaufpreise_table_column2">1g</p>
                <p className="ankaufpreise_table_column3">5g</p>
                <p className="ankaufpreise_table_column4">10g</p>
                <p className="ankaufpreise_table_column5">20g</p>
              </div>
              {ankaufpreiseArray6.map((item, index) => {
                return (
                  <div key={index} className="hamburg_table">
                    <p className="ankaufpreise_table_column1">{item.val1}</p>
                    <p className="ankaufpreise_table_column2">{item.val2}</p>
                    <p className="ankaufpreise_table_column3">{item.val3}</p>
                    <p className="ankaufpreise_table_column4">{item.val4}</p>
                    <p className="ankaufpreise_table_column5">{item.val5}</p>
                  </div>
                );
              })}
            </div>
            <p className="ankaufspreise_wrapper_heading1">
              So können Sie Edelmetalle an uns verkaufen
            </p>
            <p className="mrt-10">
              Der Goldankauf bei Goldankauf123 verläuft äußerst reibungslos und
              effizient. Wir haben kontinuierlich an der Verbesserung unseres
              Angebots gearbeitet, um den Bedürfnissen unserer geschätzten
              Kunden gerecht zu werden. Um den Prozess erfolgreich zu starten,
              empfehlen wir Ihnen, unsere Verkaufsanleitung sorgfältig zu lesen
              und die passende Versandarten sorgfältig auszuwählen.
            </p>
            <p className="mrt-10">
              Sobald Ihre Edelmetalle sicher verpackt und an uns versandt
              wurden, übernehmen unsere Experten die Prüfung. Diese erfahrenen
              Fachleute nutzen modernste Edelmetallanalysegeräte, um eine genaue
              Bewertung durchzuführen. Nach Abschluss der Analyse erhalten Sie
              umgehend die Ankaufspreise. Die Entscheidung, ob Sie zu diesen
              Konditionen verkaufen möchten, liegt ganz bei Ihnen. Wenn Sie sich
              dafür entscheiden, wird der Betrag sofort auf Ihr Bankkonto
              überwiesen. Wenn Sie sich gegen den Verkauf entscheiden, können
              Sie sich auf unsere Gold-zurück-Garantie verlassen.
            </p>
            <p className="mrt-10">
              Wir bemühen uns, den gesamten Goldankaufsprozess so schnell wie
              möglich abzuwickeln. Falls es dennoch zu unvorhergesehenen
              Verzögerungen kommen sollte, werden wir Sie selbstverständlich
              umgehend benachrichtigen. Auf unserer Website finden Sie
              umfassende Informationen, um sich im Voraus über den
              Edelmetallankauf zu informieren. Wir sind stolz auf unsere
              positiven Kundenbewertungen, unseren erstklassigen Kundenservice
              und unsere wettbewerbsfähigen Goldankauf-Preise. Bei Fragen stehen
              Ihnen unsere engagierten Kundenservice-Mitarbeiter jederzeit gerne
              zur Verfügung.
            </p>
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

export default Ankaufpreise;
