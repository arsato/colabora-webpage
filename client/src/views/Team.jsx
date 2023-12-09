import { useEffect, useState } from "react";
import TeamCard from "../components/TeamCard";
import getData from "../utils/getData";

const Team = () => {

  const [teamMember, setTeamMember] = useState([]);

  const url = "http://localhost:3000/users/";

  useEffect(() => {
   getData(url)
      .then((data) => {
        setTeamMember(data);
      })
  },[])

  return (
    <main className="flex flex-col justify-center items-center">
      <div className="relative h-[500px] w-full">
        <img
          src="https://s3-alpha-sig.figma.com/img/b03c/f5c8/7358f46685abc87113a291da0835488c?Expires=1702252800&Signature=e14RSGCYZW9IQB7CSrAGcbQgxweHWvZXz6X99ktFkzmG4ePhXQWTNsaVSJmJ1ctOPSCm48SAB-VzGvOQmp6gCF5csUe0t4EoPeg~5L3uzOqqcv8noVtEELDPG2ysy8~SgD8pTbetPUclT8Idqxqg37WmNyxuv3IWhbv3-eo8RuIUXHF6DJIjCcjBB3o1jM4WncdG~fiTqEHaWGihFSabog21nSFE62LfEjitAW~iEmX903acSAWRC5tZwbBIRA5eiC0S6NKXUwjdzsV5XGRAgyklaV3DsrCg~tS5MQKe5eFZrVTU1tqsCbvLKnY-J8LIT9aqD8v-pr2ivKB9c3AYyQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="text-[25px] font-bold">
            Lorem ipsum dolor sit amet, consectetur
          </div>
          <div className="text-[112px] font-bold">
            Lorem Ipsum
            <br />
            adipiscing elit
          </div>
        </div>
      </div>
    <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
      {teamMember.map((member) => (
        <TeamCard key={member.userId} name={member.firstName + member.lastName} id={member.userId} />
      ))}
      </div>
    </main>
  );
};

export default Team;
