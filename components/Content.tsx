import React, { useState } from "react";
import Group from "./Group";

const groups = [
  {
    name: "Group A",
    symbol: "A",
    teams: [
      {
        name: "Qatar",
        flag: "/images/flags/QAT.avif",
        symbol: "",
      },
      {
        name: "Ecuador",
        flag: "/images/flags/ECU.avif",
        symbol: "",
      },
      {
        name: "Senegal",
        flag: "/images/flags/SEN.avif",
        symbol: "",
      },
      {
        name: "Netherlands",
        flag: "/images/flags/NED.avif",
        symbol: "",
      },
    ],
  },
  {
    name: "Group B",
    symbol: "B",
    teams: [
      {
        name: "England",
        flag: "/images/flags/ENG.avif",
        symbol: "",
      },
      {
        name: "IR Iran",
        flag: "/images/flags/IRN.avif",
        symbol: "",
      },
      {
        name: "USA",
        flag: "/images/flags/USA.avif",
        symbol: "",
      },
      {
        name: "Wales",
        flag: "/images/flags/WAL.avif",
        symbol: "",
      },
    ],
  },
  {
    name: "Group C",
    symbol: "C",
    teams: [
      {
        name: "Argentina",
        flag: "/images/flags/ARG.avif",
        symbol: "",
      },
      {
        name: "Saudi Arabia",
        flag: "/images/flags/KSA.avif",
        symbol: "",
      },
      {
        name: "Mexico",
        flag: "/images/flags/MEX.avif",
        symbol: "",
      },
      {
        name: "Poland",
        flag: "/images/flags/POL.avif",
        symbol: "",
      },
    ],
  },
  {
    name: "Group D",
    symbol: "D",
    teams: [
      {
        name: "France",
        flag: "/images/flags/FRA.avif",
        symbol: "",
      },
      {
        name: "Denmark",
        flag: "/images/flags/DEN.avif",
        symbol: "",
      },
      {
        name: "Tunisia",
        flag: "/images/flags/TUN.avif",
        symbol: "",
      },
      {
        name: "Australia",
        flag: "/images/flags/AUS.avif",
        symbol: "",
      },
    ],
  },
  {
    name: "Group E",
    symbol: "E",
    teams: [
      {
        name: "Spain",
        flag: "/images/flags/ESP.avif",
        symbol: "",
      },
      {
        name: "Germany",
        flag: "/images/flags/GER.avif",
        symbol: "",
      },
      {
        name: "Japan",
        flag: "/images/flags/JPN.avif",
        symbol: "",
      },
      {
        name: "Costa Rica",
        flag: "/images/flags/CRC.avif",
        symbol: "",
      },
    ],
  },
  {
    name: "Group F",
    symbol: "F",
    teams: [
      {
        name: "Belgium",
        flag: "/images/flags/BEL.avif",
        symbol: "",
      },
      {
        name: "Canada",
        flag: "/images/flags/CAN.avif",
        symbol: "",
      },
      {
        name: "Morocco",
        flag: "/images/flags/MAR.avif",
        symbol: "",
      },
      {
        name: "Croatia",
        flag: "/images/flags/CRO.avif",
        symbol: "",
      },
    ],
  },
  {
    name: "Group G",
    symbol: "G",
    teams: [
      {
        name: "Brazil",
        flag: "/images/flags/BRA.avif",
        symbol: "",
      },
      {
        name: "Serbia",
        flag: "/images/flags/SRB.avif",
        symbol: "",
      },
      {
        name: "Switzerland",
        flag: "/images/flags/SUI.avif",
        symbol: "",
      },
      {
        name: "Cameroon",
        flag: "/images/flags/CMR.avif",
        symbol: "",
      },
    ],
  },
  {
    name: "Group H",
    symbol: "H",
    teams: [
      {
        name: "Portugal",
        flag: "/images/flags/POR.avif",
        symbol: "",
      },
      {
        name: "Ghana",
        flag: "/images/flags/GHA.avif",
        symbol: "",
      },
      {
        name: "Uruguay",
        flag: "/images/flags/URU.avif",
        symbol: "",
      },
      {
        name: "Korea Republic",
        flag: "/images/flags/KOR.avif",
        symbol: "",
      },
    ],
  },
];

export default function Content() {
  const [teams, setTeams] = useState(groups);
  return (
    <div
      className="container mx-auto shadow-xl  rounded-lg  pb-5"
      style={{
        background:
          "linear-gradient(rgb(138, 21, 56) -205.33%, rgb(210, 10, 70) 186.82%)",
      }}
    >
      <div className="flex justify-between  items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-[70px] h-[70px] lg:w-auto lg:h-auto "
          src="/images/flagIcon.svg"
          alt=""
        />
        <div className="text-white font-bold text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mx-3 ">
          <h1
            className="italic text-center lg:text-start"
            style={{ color: "rgb(223, 206, 109)" }}
          >
            DRAW PREDICTOR
          </h1>
          <h1 className="text-center lg:text-start">
            Predict the FIFA World Cup Qatar 2022 group rankings and share with
            your friends
          </h1>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-[70px] h-[70px] lg:w-auto lg:h-auto relative -top-1"
          src="/images/gatesIcon.svg"
          alt=""
        />
      </div>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5">
        {groups.map((group, i) => (
          <div key={i} className={`mt-5`}>
            <Group group={group} />
          </div>
        ))}

        {/* <div>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className={`mt-5`}>
              <Group position="after" />
              {(i + 1) % 2 !== 0 && (
                <div
                  className="space-y-4"
                  style={{ position: "relative", left: "400px" }}
                >
                  <div className="w-[200px] h-[50px] bg-white"></div>
                  <div className="w-[200px] h-[50px] bg-white"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="space-y-20 relative -top-32">
          <div className="space-y-4">
            <div className="  flex justify-center">
              <img
                className=" mt-40 "
                src={"/images/FIFA-World-Cup-Qatar-2022-emblem.webp"}
                alt=""
              />
            </div>
            <div className="w-[200px] h-[50px] bg-white mx-auto"></div>
            <div className="w-[200px] h-[50px] bg-white mx-auto"></div>
          </div>
          <div className="text-center font-extrabold text-3xl text-white">
            The award
            <div className="w-[250px] h-[50px] bg-white top-52 mx-auto"></div>
          </div>
        </div>

        <div>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className={`mt-5`}>
              <Group position="before" />
              {(i + 1) % 2 !== 0 && (
                <div
                  className="space-y-4 "
                  style={{ position: "relative", right: "125px" }}
                >
                  <div className="w-[200px] h-[50px] bg-white"></div>
                  <div className="w-[200px] h-[50px] bg-white"></div>
                </div>
              )}
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
