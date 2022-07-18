import Image from "next/image";
import React from "react";

export default function Header() {
  const restTimeToQatar = [
    { label: "days", value: "129" },
    { label: "hours", value: "12" },
    { label: "minutes", value: "34" },
  ];
  return (
    <div className="lg:flex lg:justify-between items-center p-2 sm:p-3 md:p-3 lg:p-4">
      <div className="w-[80px] h-[80px] mx-auto lg:mx-0 sm:w-[130px] sm:h-[130px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px]">
        <div className="aspect-w-1 aspect-h-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={"/images/FIFA-World-Cup-Qatar-2022-emblem.webp"} alt="" />
        </div>
      </div>
      <div className="md:flex  justify-center relative space-x-3 mt-5 lg:mt-0">
        <div className="md:flex items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <h1 className="font-extrabold text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">
            Countdown to Qatar 2022™
          </h1>
          <div className="space-y-2 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/ball.svg"
              className="transform md:rotate-90"
              alt=""
            />
          </div>
        </div>

        <div className="flex justify-center mt-5 md:mt-0">
          {restTimeToQatar.map((val, i) => (
            <div key={i} className="flex items-center ">
              <div className=" text-white">
                <h1 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-extrabold text-center">
                  {val.value}
                </h1>
                <h2 className="text-center">{val.label}</h2>
              </div>
              <div>
                {val.label !== "minutes" && (
                  <div className="space-y-2 mx-5">
                    <div className="flex justify-center">
                      <h1
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor: "rgb(223, 206, 109)",
                        }}
                      ></h1>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
