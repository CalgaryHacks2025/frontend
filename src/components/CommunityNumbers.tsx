import React from "react";
import communityIcon from "../assets/community-gray.svg";

interface CommunityNumbersProps {
  spots: number;
}

const CommunityNumbers: React.FC<CommunityNumbersProps> = ({ spots }) => {
  return (
    <div className="flex items-center pb-1">
      <img
        src={communityIcon}
        alt="community icon"
        className="w-5 h-5 cursor-pointer mr-3"
      />
      <div>
        <p>{spots} volunteers joined</p>
      </div>
    </div>
  );
};

export default CommunityNumbers;
