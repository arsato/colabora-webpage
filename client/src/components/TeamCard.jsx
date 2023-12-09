import React, { useEffect, useState } from "react";
import getData from "../utils/getData";

const TeamCard = ({id, name}) => {

  const [additionalInfo, setAdditionalInfo] = useState([]);
  const url = "http://localhost:3000/users/";

  useEffect(() => {
   getData(url+id)
      .then((data) => {
        setAdditionalInfo(data);
      })
  },[])

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="flex-col justify-start items-center gap-[23px] flex">
          <img
            className="w-[334px] h-[428px] rounded-[15px]"
            src={additionalInfo.secureUrl}
          />
          <div className="text-black text-3xl font-bold font-['Istok Web'] leading-7">
            {name}
          </div>
          <div className="text-black text-[25px] font-bold font-['Istok Web'] uppercase leading-normal">
            {additionalInfo.position}
          </div>
        </div>
        <div className="justify-start items-start gap-3.5 inline-flex">
          <a href={additionalInfo.github} target="_blank" rel="noreferrer">
          <img
            className="w-[45px] h-[45px]"
            src="/images/logos/githublogo.png"
          />
          </a>
          <a href={additionalInfo.linkedin} target="_blank" rel="noreferrer">
          <img
            className="w-[45px] h-[45px]"
            src="/images/logos/linkedinlogo.png"
          />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
