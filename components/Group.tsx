import Image from "next/image";
import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";

export default function Group({ group }: { group: any }) {
  const [teams, setTeams] = useState(group.teams);
  return (
    <div className="lg:flex items-center space-x-5">
      <div className="w-[300px] sm:w-[300px] md:w-[350px] lg:w-[250px] xl:w-[300px] bg-white rounded-2xl p-3">
        <div
          style={{ color: "rgb(223, 206, 109)" }}
          className="text-xl md:text-2xl font-bold text-center"
        >
          {group.name}
        </div>
        <ReactSortable list={teams} setList={setTeams}>
          {teams.map((team: any, i: number) => (
            <div
              key={i}
              className="flex items-center space-x-1 bg-gray-100 my-2 cursor-move"
            >
              <h1 className="p-2 text-xl md:text-2xl font-bold">
                {group.symbol + (i + 1)}
              </h1>
              <div className="w-[40px] h-[30px] flex justify-center bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={team.flag ?? ""} width={40} height={30} alt="" />
              </div>
              <h1 className="text-lg md:text-xl font-bold text-gray-500">
                {team.name}
              </h1>
            </div>
          ))}
        </ReactSortable>
        <div className="flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/prediction.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
