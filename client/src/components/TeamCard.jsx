import React from "react";

const TeamCard = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="flex-col justify-start items-center gap-[23px] flex">
          <img
            className="w-[334px] h-[428px] rounded-[15px]"
            src="https://via.placeholder.com/334x428"
          />
          <div className="text-black text-3xl font-bold font-['Istok Web'] leading-7">
            Juan Mendez
          </div>
          <div className="text-black text-[25px] font-bold font-['Istok Web'] uppercase leading-normal">
            Programador
          </div>
        </div>
        <div className="justify-start items-start gap-3.5 inline-flex">
          <img
            className="w-[45px] h-[45px]"
            src="https://via.placeholder.com/45x45"
          />
          <img
            className="w-[45px] h-[45px]"
            src="https://via.placeholder.com/45x45"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
