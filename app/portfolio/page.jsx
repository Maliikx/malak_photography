"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import allPicsData from "../data/allPicsData";

const spacetroops = localFont({
  src: [
    {
      path: "../fonts/Spacetroops-Free-2.ttf",
      weight: "600",
      style: "bold",
    },
  ],
});
function Portfolio2() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const router = useRouter();
  const style = [
    "h-30 xl:h-50  2xl:h-70" ,
    // lg:h-70",
    "h-100 xl:h-60 2xl:h-100 " ,
    // lg:h-100",
    "h-70 xl:h-130 2xl:h-150 " ,
    // lg:h-150",
    "h-30 xl:h-30 2xl:h-50",
    "h-80 xl:h-80 2xl:h-120",
  ];

  const filteredImages = useMemo(() => {
    return selectedCategory === "all"
      ? allPicsData
      : allPicsData.filter((img) => img.category === selectedCategory);
  }, [allPicsData, selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  console.log(allPicsData);

  return (
    <>
      <div className="min-h-screen pt-0 flex flex-col gap-10  ">
        <div className="w-full uppercase flex justify-center text-xl">
          <h1 className={`font-bold `}>(Portfolio)</h1>
        </div>
        {allPicsData.map((session, i) => (
          <div key={i} className="flex flex-col gap-10  ">
            <div className="flex flex-row justify-between border-t pt-5 ">
              <div className="flex flex-col">
                <h1 className="text-xl uppercase">{session.title}</h1>
                <h1 className="text-sm text-white/75 uppercase">
                  {session.category}
                </h1>
              </div>
              <Link href={`/portfolio/${session.id}`} key={session.id}>
                <button className="border h-full px-5  hover:bg-white hover:text-black cursor-pointer transition-all duration-200 ease-in">
                  (View Album)
                </button>
              </Link>
            </div>

            <div className="flex   flex-row overflow-hidden  border-t  justify-between  min-h-[70vh]">
              {session.images.slice(0, 5).map((img, i) => (
                <div
                  key={i}
                  className={`"  aspect-[3/4.5]  relative border-5  overflow-hidden  transition-all duration-200 ease-in" ${style[i]}`}
                >
                  <Image
                    src={img}
                    style={{ objectFit: "cover" }}
                    fill
                    className="  "
                    alt={`Image ${i}`}
                  />
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </>
  );
}

export default Portfolio2;
