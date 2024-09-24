import Image from "next/image";
import ZahngoldBox from "/public/assets/img/zahngold_box.png";
import ZahngoldProfile from "/public/assets/img/zahngold_profile.png";
const WeitereVersandartenCard = () => {
  return (
    <div className="weitere_versandarten_card_wrapper">
      <div className="zahngold_varsandarten">
        <div className="zahngold_varsandarten_body">
          <div className="zahngold_varsandarten_heading">
            Weitere Versandarten
          </div>
          <ul>
            <li>
              <div>
                <Image src={ZahngoldBox} alt="" />
              </div>
              <div className="zahngold_varsandarten_body_div2">
                Eigenes Versandmaterial
              </div>
            </li>
            <li>
              <div>
                <Image src={ZahngoldProfile} alt="" />
              </div>
              <div className="zahngold_varsandarten_body_div2">
                Wertsendung ab 1.500 €
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeitereVersandartenCard;
