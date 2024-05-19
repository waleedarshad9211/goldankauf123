import Image from "next/image";
import KostenloserVersand from "/public/assets/img/homepage/kostenloser_versand.png";
import VorteileTick from "/public/assets/img/homepage/vorteile_tick.png";

const VorteileBei = () => {
  return (
    <div className="risiko_card vorteil_card">
      <div className="risiko_card_body">
        <h2 className="risiko_card_heading text-center ">
          Ihre Vorteile bei Zahngold123.de
        </h2>
        <Image
          src={KostenloserVersand}
          alt=""
          className="risiko_card_body_img"
        />
      </div>
      <p className="vorteil_card_para1">
        <Image src={VorteileTick} alt="" />
        Kostenloser Versand
      </p>
      <p className="vorteil_card_para1">
        <Image src={VorteileTick} alt="" />
        Schnelle und unverbindliche Abwicklung
      </p>
      <p className="vorteil_card_para1">
        <Image src={VorteileTick} alt="" />
        Sicherer Versand
      </p>
    </div>
  );
};

export default VorteileBei;
