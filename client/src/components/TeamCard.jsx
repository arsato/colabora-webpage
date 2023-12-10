import React from "react";

const TeamCard = ({ id, name, position, github, linkedin, image }) => {

  return (
    <div>
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex-col justify-start items-center gap-3 flex">
            <img
              className="w-[334px] h-[428px] rounded-[15px]"
              src={image}
            />
            <div className="text-black text-[30px] font-bold leading-9">
              {name}
            </div>
            <div className="text-black text-[25px] font-bold uppercase">
              {position}
            </div>
          </div>
          <div className="justify-start items-start gap-3.5 inline-flex">
            {github && <a
              href={`https://www.github.com/${github}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-[45px] h-[45px]"
                src="/images/logos/githublogo.png"
              />
            </a>}
            {linkedin && <a
              href={`https://www.linkedin.com/in/${linkedin}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-[45px] h-[45px]"
                src="/images/logos/linkedinlogo.png"
              />
            </a>}
            
          </div>
        </div>
    </div>
  );
};

export default TeamCard;
