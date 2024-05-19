import Button from "../shared/button/Button";

const HomeVideoSection = () => {
  return (
    <section className="video_section_wrapper">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center flex-column">
          <h2 className="text-center">Echte Video Bewertungen</h2>
          <p className="video_section_p1">
            Wir kaufen Ihr Altgold, Bruchgold, Zahngold, Silber, Platin, Münzen,
            Feingold, Goldbarren und Legierungen jeder Art über den Postweg an.
            Machen Sie Ihr Altgold oder Zahngold zu Bargeld! Egal ob
            Zahngoldreste aus dem Dentallabor oder Gusskegel aus der
            Zahnarztpraxis. Wir kaufen jede Art von Edelmetallen an. Gerne
            kaufen wir Ihr Zahngold auch mit Verbindungsstücken, Zahn-,
            Keramikresten etc. an. Wenn Sie Zahngold von Ihrer letzten
            Zahnersatzbehandlung zu Hause haben, Zahngold bei einer
            Wohnungsauflösung vorgefunden oder Zahngold von Ihren Großeltern
            geerbt haben, so sind Sie bei uns genau richtig!
          </p>
          <p className="video_section_p1">
            Wir bieten Ihnen im Vergleich zu Ihrem Juwelier und anderen
            Goldankäufern einen enorm hohen Goldpreis für Ihr Zahngold an. Zudem
            sind unsere Zahngold-Ankaufspreise beständig auf einem hohen Niveau.
            Daher machen Sie jetzt Ihren alten Goldzahn zu barem Geld! Sie
            werden sich wundern, welch hohen Preis Sie für Ihr altes Zahngold
            erhalten werden. Sehr viele unserer Kunden sind darüber erstaunt,
            wie hoch die Ankaufspreise selbst für kleine Mengen Zahngold sein
            können. Wir empfehlen immer uns das Zahngold einzusenden und den
            Zahngoldwert analysieren zu lassen und sich dann vom attraktiven
            Zahngold Preis überraschen zu lassen.
          </p>
          <div className="row video-row">
            <div className="col-12 col-md-6 col-lg-6 mb-4">
              <div className="vedio_card">
                <div class="black-corner-top top-left"></div>
                <div class="black-corner-bottom bottom-right"></div>
                <iframe
                  width={"90%"}
                  height={"280"}
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
            <div className="col-12 col-md-6 col-lg-6 mb-4 d-none d-md-block d-lg-block">
              <div className="vedio_card">
                <div class="black-corner-top top-left"></div>
                <div class="black-corner-bottom bottom-right"></div>
                <iframe
                  width={"90%"}
                  height={"280"}
                  src="https://www.youtube.com/embed/uBAsPeiV3ac"
                  title={"Tolle Bewertung unserer Kundin Tanja!"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div>
            <Button
              className=" text-white video-btn"
              btnText="Videos über Zahngold123.de"
              backgroundColor="#2F2F2F"
              width="auto"
              padding="1px 30px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeVideoSection;
