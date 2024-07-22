import Image from "next/image";
import BlogCoin from "/public/assets/img/blog_coin_img.png";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import PriceValueForm from "@/components/shared/PriceValueForm";
import KitcoGoldTab from "@/components/shared/KitcoGoldTab";
import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import InformationCard from "@/components/shared/InformationCard";
import Gemacht from "/public/assets/img/gemacht_img.png";
import BruchGold from "/public/assets/img/bruchgold_img.png";
import BlogGarantee from "/public/assets/img/blog_garantee_img.png";
import BlogRing from "/public/assets/img/blog_ring.png";
import GarantedPrice from "@/components/shared/garantedPrice/GarantedPrice";
import ValueCalc from "@/components/shared/ValueCalc";

const page = () => {
  return (
    <section className="zahngolg_blog_wrapper">
      <div className="container">
        <Breadcrumbs />
        <p className="blog_main_heading d-block d-md-block d-lg-none  mb-2">
          GOLDANKAUF123 BLOG
        </p>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12">
            <div className=" d-md-flex d-lg-none d-flex justify-content-center align-items-center">
              <Image
                src={BlogCoin}
                alt=""
                className="d-block d-md-block d-lg-none img-fluid"
              />
            </div>

            <div className="zahngolg_blog_wrapper_upper">
              <div>
                <p className="blog_main_heading d-none d-md-none d-lg-block">
                  GOLDANKAUF123 BLOG
                </p>
                <p className="zahngolg_blog_wrapper_para1">
                  Schauen Sie regelmäßig vorbei und bekommen von uns
                  interessante Artikel aus dem Bereich der Edelmetalle
                  geliefert. Nicht zwangsläufig beschäftigen wir uns mit dem
                  Thema Goldankauf, sondern blicken auch in dem einen oder
                  anderen Artikel über den Tellerrand hinaus!
                </p>
              </div>

              <Image
                src={BlogCoin}
                alt=""
                className="d-none d-md-none d-lg-block"
              />
            </div>
            <div className="zahngolg_blog_wrapper_box">
              <div className=" row blog_row">
                <div className="zahngolg_blog_wrapper_box_inner1 ">
                  <Image src={Gemacht} alt="" />
                </div>
                <div className="zahngolg_blog_wrapper_box_inner2 ">
                  <p className="zahngolg_blog_wrapper_box_inner_para1">
                    Wieso lohnt es sich, online Gold zu verkaufen mit
                    Goldankauf123.de?<br></br>
                    <span className="blog_para_green">
                      Es gibt zahlreiche Vorteile, welche für einen
                      Online-Goldankauf bei Goldankauf123.de sprechen.
                    </span>
                  </p>
                  <p className="zahngolg_blog_wrapper_box_inner_para2">
                    Auf Wunsch lassen wir Ihre Wertgegenstände kostenlos von
                    einem diskreten Werttransport Unternehmen bei Ihnen zu Hause
                    oder im Büro abholen. Für uns arbeiten drei voneinader
                    unabhängige Unternehmen, die teils auch für Banken und
                    Sparkassen tätig sind. Kleinere Sendungen bis zu einem Wert
                    von 5.000 Euro werden vom Spezialservice der Deutschen Post
                    abgeholt. Großsendungen mit einem Wert von über 5.000 Euro
                    bis 1,5 Millionen Euro von der Firma Securelog oder einem
                    anderen Werttransport oder Kurierdienst.
                  </p>
                  <p className="zahngolg_blog_wrapper_box_inner_para3">
                    Weiterlesen »
                  </p>
                </div>
              </div>
            </div>
            <div className="zahngolg_blog_wrapper_box">
              <div className=" row blog_row">
                <div className="zahngolg_blog_wrapper_box_inner1 ">
                  <Image src={BruchGold} alt="" />
                </div>
                <div className="zahngolg_blog_wrapper_box_inner2 ">
                  <p className="zahngolg_blog_wrapper_box_inner_para1">
                    Die größten Diamanten
                    <br></br>
                    <span className="blog_para_green">
                      Lernen Sie die bekanntesten Diamanten der Welt genauer
                      kennen.
                    </span>
                  </p>
                  <p className="zahngolg_blog_wrapper_box_inner_para2">
                    Diamanten gehören zu den außergewöhnlichsten Schöpfungen der
                    Natur und zählen zu den weltweit wertvollsten Edelsteinen.
                    Sie haben schon von je her die Phantasien der Menschen
                    beflügelt. Besonders große und auffällige Diamanten haben
                    eine ganz besondere Anziehungskraft. Durch ihre einzigartige
                    Lichtbrechung und Reflexion ziehen sie die Menschen in ihren
                    Bann. Der Preis eines Diamanten hängt von unterschiedlichen
                    Faktoren ab. Hierzu zählen der Schliff, die Farbe, die
                    Reinheit, das Gewicht sowie die historische und kulturelle
                    Bedeutung.
                  </p>
                  <p className="zahngolg_blog_wrapper_box_inner_last_para">
                    Die Seltenheit und Einzigartigkeit macht die großen Steine
                    zu den teuersten Diamanten auf der Welt und motiviert manche
                    Reiche und Mächtige die höchsten Preise zu zahlen, um einen
                    dieser teuren Edelsteine zu besitzen, welche einst schon
                    einmal im Besitz von Königshäusern oder Berühmtheiten
                    gewesen sind. Nachfolgend finden Sie einige Informationen zu
                    den acht teuersten Diamanten auf dem gesamten Globus.
                  </p>
                  <p className="zahngolg_blog_wrapper_box_inner_para3">
                    Weiterlesen »
                  </p>
                </div>
              </div>
            </div>
            <div className="zahngolg_blog_wrapper_box">
              <div className=" row blog_row">
                <div className="zahngolg_blog_wrapper_box_inner1 ">
                  <Image src={BlogGarantee} alt="" />
                </div>
                <div className="zahngolg_blog_wrapper_box_inner2 ">
                  <p className="zahngolg_blog_wrapper_box_inner_para1">
                    Berühmte Diamanten - Sancy-Diamant & Perfect-Pink-Diamant
                    <br></br>
                    <span className="blog_para_green">
                      Zwei weitere interessante Diamanten stellen wir Ihnen in
                      unserem Artikel vor.
                    </span>
                  </p>
                  <p className="zahngolg_blog_wrapper_box_inner_para2">
                    Im ersten Teil der berühmten Diamanten Serie haben wir Ihnen
                    schon eine ganze Reihe von interessanten Diamanten
                    vorgestellt. Im zweiten Teil widmen wir uns den Sancy
                    Diamant und dem Perfect Pink. Gerne können sie uns auch Ihre
                    Diamanten zum Ankauf anbieten.
                  </p>
                  <p className="zahngolg_blog_wrapper_box_inner_last_para">
                    Wir vergüten Diamanten ab einem Gewicht von 0,2 Karat und
                    zusätzlich erhalten Sie noch den Edelmetallwert seperat
                    vergütet, falls der Diamant in einem Goldring etc.
                    eingefasst sein sollte. Sprechen Sie uns direkt an, falls
                    Sie noch Fragen zum Ablauf haben sollten.
                  </p>
                  <p className="zahngolg_blog_wrapper_box_inner_para3">
                    Weiterlesen »
                  </p>
                </div>
              </div>
            </div>
            <div className="zahngolg_blog_wrapper_box">
              <div className=" row blog_row">
                <div className="zahngolg_blog_wrapper_box_inner1 ">
                  <Image src={BlogRing} alt="" />
                </div>
                <div className="zahngolg_blog_wrapper_box_inner2 ">
                  <p className="zahngolg_blog_wrapper_box_inner_para1">
                    So reinigen Sie Ihren Schmuck<br></br>
                    <span className="blog_para_green">
                      Falls Sie nicht reinigen wollen, bleibt auch noch die
                      Alternative des Ankaufs.
                    </span>
                  </p>
                  <p className="zahngolg_blog_wrapper_box_inner_para2">
                    Vor allem Silberschmuck läuft mit der Zeit an und muss
                    entsprechend bearbeitet werden, um wieder im alten Glanz zu
                    erstrahlen. Aber auch Goldchmuck sollte gepflegt werden,
                    damit Sie lange Freude an den Gegenständen haben. Wir
                    stellen Ihnen einige Methode zur Schmuckreinigung und Pflege
                    vor.
                  </p>
                  <p className="zahngolg_blog_wrapper_box_inner_last_para">
                    Sollten Sie letztendlich keine Lust haben den Schmuck zu
                    reinigen, können Sie selbstverständlich Goldankauf123 als
                    kompetenten Edelmetallankauf für Ihre Belange in Anspruch
                    nehmen.
                  </p>
                  <p className="zahngolg_blog_wrapper_box_inner_para3">
                    Weiterlesen »
                  </p>
                </div>
              </div>
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
