import Image from "next/image";
import React from "react";
import { BiShareAlt } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
export default function Footer() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="w-full bg-white flex flex-col sm:flex-row items-center justify-between px-5 py-5 rounded-lg space-y-4 ">
      <div>
        <p className="flex items-center justify-center sm:justify-start space-x-1 italic">
          <BiShareAlt className="text-2xl" />
          <span className="text-lg">Share</span>
        </p>
        <p className="text-xl">Share your prediction results</p>
      </div>
      <div>
        <button
          onClick={() => setShowModal(true)}
          className="px-14 font-bold text-xl p-2  bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-400 active:to-yellow-500"
        >
          SHARE
        </button>

        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 lg:mx-auto mx-3 max-w-3xl ">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="textxl lg:text-2xl font-semibold">
                      Share your prediction results
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
                    <p className="my-4 text-slate-500 text-lg leading-relaxed text-center">
                      Share your FIFA World Cup Qatar 2022™️ group rankings
                      predictions with your friends and see if they agree with
                      you!
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b space-x-2">
                    <FaFacebookSquare className="text-5xl text-blue-600 hover:text-blue-700 cursor-pointer" />
                    <FaInstagramSquare className="text-5xl text-red-600 hover:text-red-700 cursor-pointer" />
                    <FaTwitterSquare className="text-5xl text-blue-500 hover:text-blue-600 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
}
