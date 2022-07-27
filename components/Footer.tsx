import Image from "next/image";
import React from "react";
import { BiShareAlt } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import * as htmlToImage from "html-to-image";

export default function Footer() {
  const [showModal, setShowModal] = React.useState(false);
  const [isComplete, setIsComplete] = React.useState(true);
  const [dataUrl, setDataUrl] = React.useState("");
  const prepareImage = async () => {
    const scale = 2;
    const node = document.getElementById("groups")!;
    const newNode = node;
    node.classList.remove("grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4");
    node.classList.add("grid-cols-4", "w-[1300px]");
    const style = {
      transform: "scale(" + scale + ")",
      transformOrigin: "top left",
      width: node.offsetWidth + "px",
      height: node.offsetHeight + "px",
    };

    const param = {
      backgroundColor: "#dfce6d",
      height: node.offsetHeight * scale,
      width: node.offsetWidth * scale,
      quality: 1,
      style,
    };

    const DATA_URL = await htmlToImage.toPng(newNode, param);
    setDataUrl(DATA_URL);

    node.classList.add("grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4");
    node.classList.remove("grid-cols-4", "w-[1300px]");
    setIsComplete(true);
  };
  const downloadImage = () => {
    let link = document.createElement("a");
    link.download = "my-prediction.png";
    link.href = dataUrl;
    link.click();
  };
  return (
    <div className="w-full bg-white flex flex-col sm:flex-row items-center justify-between px-5 py-2 md:py-5 rounded-lg space-y-2 md:space-y-4 ">
      <div>
        <p className="flex items-center justify-center sm:justify-start space-x-1 italic">
          <BiShareAlt className="text-2xl" />
          <span className="text-lg">Share</span>
        </p>
        <p className="text-xl">Share your prediction results</p>
      </div>
      <div>
        <button
          onClick={async () => {
            setIsComplete(false);
            setShowModal(true);
            await prepareImage();
          }}
          className="px-14 font-bold text-lg md:text-xl p-2  bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-400 active:to-yellow-500"
        >
          SHARE
        </button>

        {showModal ? (
          <>
            <div
              className={`${
                !isComplete && "bg-[#8a1538]"
              } justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  z-50 outline-none focus:outline-none`}
            >
              {isComplete && (
                <div className="relative w-auto my-6 lg:mx-auto mx-3 max-w-3xl ">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-md lg:text-2xl font-semibold">
                        Share your prediction results{" "}
                        {JSON.stringify(isComplete)}
                      </h3>
                      <button
                        className="p-1 ml-auto border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <GrFormClose />
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <div className="flex justify-center">
                        <Image
                          src={"/images/shareModalIcon.svg"}
                          width={160}
                          height={125}
                          alt=""
                        />
                      </div>
                      <p className="my-4 text-slate-500 text-sm md:text-md lg:text-lg leading-relaxed text-center">
                        Share your FIFA World Cup Qatar 2022™️ group rankings
                        predictions with your friends and see if they agree with
                        you!
                      </p>
                      <div className="mt-5 lg:px-10 mx-auto ">
                        <p className="text-slate-700 text-semibold text-sm md:text-md lg:text-lg py-1">
                          Signup for our newsletter to get the latest news in
                          your inbox.
                        </p>
                        <div className="flex items-center h-12 rounded-md flex-grow bg-purple-800 hover:bg-purple-900 p-1">
                          <input
                            type="text"
                            className="p-2 w-6 h-full flex-grow flex-shrink rounded-l-md focus:outline-none"
                          />
                          <MdEmail className="h-12 w-12 p-2 text-white" />
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 text-sm text-semibold py-1">
                          Your email is safe with us. We don&apos;t spam.
                        </p>
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b space-x-2">
                      <FaFacebookSquare
                        onClick={downloadImage}
                        className="text-5xl text-blue-600 hover:text-blue-700 cursor-pointer"
                      />
                      <FaInstagramSquare className="text-5xl text-red-600 hover:text-red-700 cursor-pointer" />
                      <FaTwitterSquare className="text-5xl text-blue-500 hover:text-blue-600 cursor-pointer" />
                    </div>
                  </div>
                </div>
              )}
              {!isComplete && (
                <div className="flex flex-col space-y-52 md:space-y-20 lg:space-y-5 w-full h-full justify-center items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={"/images/FIFA-World-Cup-Qatar-2022-emblem.webp"}
                    alt=""
                    className="w-[300px] md:w-[160px] lg:w-[80px]"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/ball.svg"
                    className="animate-spin w-[300px] md:w-[160px] lg:w-[80px]"
                    alt=""
                  />
                </div>
              )}
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
}
