"use client";
import Services from "@/components/sections/Services";
import Image from "next/image";
import React from "react";

export default function Home() {
  const imgs = [
    {
      src: "/imgs/WhatsApp Image 2025-04-30 at 14.07.54.jpeg",
      className: "h-[900px] w-[600px]  rotate-2 border-white border-5 sticky bottom-9 z-4",
    },
    {
      src: "/imgs/WhatsApp Image 2025-04-30 at 14.07.55 (1).jpeg",
      className: "h-[900px] w-[600px]  rotate-3 border-white border-5 sticky bottom-9 z-3",
    },
    {
      src: "/imgs/WhatsApp Image 2025-04-30 at 14.07.55 (2).jpeg",
      className: "h-[900px] w-[600px]  rotate-0 border-white border-5 sticky bottom-9 z-2",
    },
    {
      src: "/imgs/WhatsApp Image 2025-04-30 at 14.07.55 (3).jpeg",
      className: "h-[900px] w-[600px]  rotate-[-3deg] border-white border-5 sticky bottom-9 z-1",
    },
    {
      src: "/imgs/WhatsApp Image 2025-04-30 at 14.07.55.jpeg",
      className: "h-[900px] w-[600px]  rotate-[-1deg] border-white border-5 sticky bottom-9 z-0",
    },
  ];

  return (
    <>
   <div className="flex flex-col gap-40">
     <div className="h-[100vh] "></div>
        <div className=" flex  gap-20 justify-evenly flex-row ">
          <div className=" flex-1   ">
            <div className="sticky top-[160px] ">
              <h1 className="text-white text-6xl">
                "With every flash a memory is born"
              </h1>
              {/* <h1 className="text-white/50">++ STREETS</h1>
                  <h1 className="text-white/50">++ PORTIATS</h1>
                  <h1 className="text-white/50">++ VIDEOS</h1> */}
              <p className="mt-[35rem] text-xl sticky bottom-40">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi placeat eligendi expedita, voluptate itaque dolore illum debitis amet saepe delectus iste vitae inventore mollitia sint. Eius laboriosam quisquam dolorum quo.
              </p>
            </div>
            {/* <img src="/imgs/logo2.png"/> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut molestie lacus. Etiam et pulvinar mauris. Morbi cursus commodo magna congue condimentum. Vestibulum vitae placerat nisl, vitae aliquet lacus. Curabitur imperdiet lorem a dignissim varius. Vestibulum accumsan nisl orci, aliquam congue lorem scelerisque a. Quisque gravida quam eget mattis aliquet. Morbi in semper neque. Mauris quis sagittis magna, vitae lacinia risus. Cras at egestas dui, lacinia tristique urna. Praesent id sem turpis. Quisque eu velit nulla.</p> */}
            {/* <h1 className="text-[110px] leading-24 font-light"><span className="font-medium">Malak's</span> Photography</h1> */}
          </div>
          <div className="flex mt-[-10rem] flex-col gap-20">
            <div className=" "></div>
            <div className="flex  flex-col gap-40 items-center justify-center ">
              {imgs.map((img, index) => (
                <div 
                  key={index}
                className={img.className}>
                  <Image
                    src={img.src}
                    alt={`Image ${index}`}
                    fill
                    className='object-cover'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Services />
   </div>
    </>
  );
}
