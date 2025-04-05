import React from "react";

function Section() {
  return (
    <>
      <div className="h-screen w-full   bg-black  text-black  flex items-center justify-center">
        <div className=" h-[70%] w-[70%] bg-blue-500 rounded-xl flex flex-col gap-4 items-center justify-center">
          <h1 className="text-white text-4xl italic">
            welcome to problems-hub
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure
            minus labore vitae quas aliquam quos exercitationem sint, nihil
            fugiat ipsa, itaque expedita accusamus commodi illum optio. Ipsam,
            officiis atque?
          </p>
          <input type="search" placeholder="search here" className="border-white px-2 py-2 border-solid" ></input>
        </div>
      </div>
    </>
  );
}

export default Section;
