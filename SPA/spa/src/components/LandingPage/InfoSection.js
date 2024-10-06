import React from "react";

import mainBg from "../../assets/common/valle_asset.jpg";

const InfoSection = ({ ref1 }) => {
  return (
    <div
      className="w-full h-[300px] bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url("${mainBg}")` }}
      ref={ref1}
    >
      <div className="bg-[#FFFCF7] h-[70%] w-[80%] bg-opacity-50 backdrop-blur-md rounded-[10px] flex justify-items-center items-center px-5 py-2">
        <span className="text-center">
          This project is dedicated to supporting wine producers by leveraging
          advanced weather forecasting and NASA data to optimize vineyard
          management. By providing daily, data-driven insights, we help farmers
          monitor soil moisture, temperature extremes, and other key
          environmental factors that influence grape quality and yield. With
          precise predictions and timely alerts, vineyard managers can make
          informed decisions to improve crop health, manage water resources
          effectively, and mitigate risks related to climate challenges. Our
          goal is to enhance productivity and ensure the highest quality wine
          from the ground up.
        </span>
      </div>
    </div>
  );
};

export default InfoSection;
