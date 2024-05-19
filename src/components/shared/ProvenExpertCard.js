import Image from "next/image";
import ProvenExpert from "/public/assets/img/proven-expert.png";
import ProvenExperttop from "/public/assets/img/proven_experrt_card_top__img.png";
const ProvenExpertCard = ({
  marginTop = "",
  borderRadius = "10px",
  border = "1px solid #afafaf",
}) => {
  return (
    <div
      className="proven_expert_card"
      style={{
        marginTop: marginTop,
        borderRadius: borderRadius,
        border: border,
      }}
    >
      <div className="proven_expert_card_top">
        <Image
          src={ProvenExperttop}
          alt=""
          className="proven_expert_card_img1"
        />
        <Image
          src={ProvenExpert}
          alt=""
          width={233}
          height={177}
          className="proven_expert_card_img2"
        />
      </div>
      <div className="proven_expert_card_bottom">
        <div className="proven_expert_card_bottom_para1">
          <p className="text-center">Kundenbewertungen</p>
        </div>
        <div className="proven_expert_card_bottom_lower">
          <div className="text-center proven_expert_card_rating">
            <div className="ratings star-color">
              <i className="fa fa-star rating-color"></i>
              <i className="fa fa-star rating-color"></i>
              <i className="fa fa-star rating-color"></i>
              <i className="fa fa-star rating-color"></i>
              <i className="fa fa-star rating-color"></i>
            </div>
          </div>
          <div className="text-center proven_expert_card_bottom_lower_para1">
            <p className="text-center">SEHR GUT</p>
          </div>
          <p className="proven_expert_card_empfehlungen">99% Empfehlungen</p>
          <p className="proven_expert_card_stand">Stand 01.01.2024</p>
        </div>
      </div>
    </div>
  );
};

export default ProvenExpertCard;
