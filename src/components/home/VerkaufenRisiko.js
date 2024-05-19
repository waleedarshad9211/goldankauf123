import Image from "next/image";
import Garantee from "/public/assets/img/homepage/100_ gurantee.png";

const VerkaufenRisiko = () => {
  return (
    <div className="risiko_card">
      <div className="risiko_card_body">
        <h2 className="risiko_card_heading text-center ">
          Gold verkaufen ohne Risiko
        </h2>
        <Image src={Garantee} alt="" className="risiko_card_body_img" />
      </div>
      <p className="risiko_card_para">
        Wenn Sie sich für einen Goldankauf bei Zahngold123.de entscheiden,
        können Sie sich auf unseren professionellen Service verlassen. Dafür
        steht unsere 100% Gold-Zurück-Garantie! Kostenlos und risikofrei!
      </p>
    </div>
  );
};

export default VerkaufenRisiko;
