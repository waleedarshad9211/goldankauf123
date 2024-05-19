import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import InformationCard from "@/components/shared/InformationCard";
import KitcoGoldTab from "@/components/shared/KitcoGoldTab";
import PriceValueForm from "@/components/shared/PriceValueForm";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Button from "@/components/shared/button/Button";

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
              Videos über Zahngold123,de
            </h2>
            <p className="videos_uber_zahngold_wrapper_para1">
              Echte Kunden - Echte Video Bewertungen. Hier präsentieren wir
              Ihnen eine kleine Auswahl an Video Erfahrungsberichten.
            </p>
            <div className="videos_uber_zahngold_wrapper_video">
              <div className="vedio_card">
                <div class="black-corner-top top-left"></div>
                <div class="black-corner-bottom bottom-right"></div>
                <iframe
                  width={"99%"}
                  height={"360"}
                  src="https://www.youtube.com/embed/R2o0P4cgmQs"
                  title={
                    "Hartmut hat uns Zahngold verkauft und ist sehr zufrieden"
                  }
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="videos_uber_zahngold_wrapper_video_btn">
              <Button
                btnText="Gerhard bewertet Zahngold123.de"
                backgroundColor="#f7f7f7"
                color="#2f2f2f"
                borderRadius="30px"
                height="35px"
                padding="1px 20px"
                margin="3px 0px 0px 0px"
                width="92%"
              />
            </div>
            <p className="videos_uber_zahngold_wrapper_para2">
              Unsere Videobewertungen stehen in gleicher Linie wie die
              Kundenbewertungen auf der Bewertungsplattform eKomi. Hier finden
              Sie viele tausende positive Kundenmeinungen, welche auch Sie davon
              überzeugen sollten unser Goldankauf Angebot in Anspruch zu nehmen.
            </p>
            <div className="videos_uber_zahngold_wrapper_btn">
              <Button
                btnText="Ankauf unverbindlich starten"
                backgroundColor="#2f2f2f"
                padding="1px 20px"
                height="40px"
                margin="20px 0px"
              />
            </div>
            <p className="videos_uber_zahngold_wrapper_para3">
              Selbstverständlich stehen wir auch kritischen Beiträgen offen
              gegenüber und würden in diesem Fall gerne in Diskussion treten.
              Für unseren Service ist es enorm wichtig, auf mögliche
              Schwachstellen hingewiesen zu werden, um letztendlich zum Wohle
              unserer Kunden den Service verbessern zu können. Daher machen Sie
              von der Möglichkeit Gebrauch uns Kundenbewertungsvideos einsenden
              zu können.
            </p>
            <p className="videos_uber_zahngold_wrapper_para4">
              Selbstverständlich freuen wir uns auch über Videos, welche einen
              positiven Tenor haben. Mit Ihrem Video helfen Sie auch anderen
              Kunden zu erkennen, dass man sich auf Zahngold123 verlassen kann.
            </p>
            <p className="videos_uber_zahngold_wrapper_para4">
              Sollten Sie nicht genau wisssen, wie Sie ein Video erstellen und
              dies bei youtube hochladen können, wenden Sie sich bitte
              vertrauensvoll an unseren Kundenservice. Wir geben Ihnen gerne
              Ratschläge und Hilfestellungen, werden uns aber niemals inhaltich
              in das von Ihnen produzierte Video einmischen.
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
      </div>
    </section>
  );
};

export default page;
