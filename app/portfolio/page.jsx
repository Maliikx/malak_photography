"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import allPicsData from "../data/allPicsData";
import AnimatedLine from "@/components/AnimatedLine";

const spacetroops = localFont({
  src: [
    {
      path: "../fonts/Spacetroops-Free-2.ttf",
      weight: "600",
      style: "bold",
    },
  ],
});

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const router = useRouter();
  const containerRef = useRef(null); // Ref for the main container to scope animations
  const sessionRefs = useRef([]); // Ref for session containers
  const style = [
    "h-30 xl:h-50 2xl:h-70",
    "h-100 xl:h-60 2xl:h-100",
    "h-70 xl:h-130 2xl:h-150",
    "h-30 xl:h-30 2xl:h-50",
    "h-80 xl:h-80 2xl:h-120",
  ];

  const filteredImages = useMemo(() => {
    return selectedCategory === "all"
      ? allPicsData
      : allPicsData.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      sessionRefs.current.forEach((sessionEl, index) => {
        if (sessionEl) {
          const imageContainers = gsap.utils.toArray(
            ".portfolio-img",
            sessionEl
          );
          console.log(`Session ${index} images:`, imageContainers); // Debug: Log images per session
          gsap.to(
            imageContainers,

            {
              opacity: 1,

              duration: 1.2,
              ease: "power2.out",
              stagger: 0.1, // Stagger images within the session
              delay: 0.2, // Initial delay for the session
              scrollTrigger: {
                trigger: sessionEl, // Trigger on the session container
                start: "top 80%", // Start when session top hits 80% from viewport top
                end: "top 20%",
                toggleActions: "play none none reverse", // Play on enter, reverse on leave
                // markers: true, // Uncomment for debugging
              },
            }
          );
        }
      });
    }, containerRef);

    ScrollTrigger.refresh(); // Refresh triggers after setup

    return () => {  
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div ref={containerRef} className="min-h-screen pt-0 flex flex-col gap-10">
      <div className="w-full uppercase flex justify-center ">
        <h1 className="">(Portfolio)</h1>
      </div>
      {allPicsData.map((session, index) => (
        <div key={index} className="flex flex-col gap-10">
          <AnimatedLine/>
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col">
              <h1 className="text-xl uppercase">{session.title}</h1>
              <h1 className="text-sm text-white/75 uppercase">
                {session.category}
              </h1>
            </div>
            <Link href={`/portfolio/${session.id}`} key={session.id}>
              <button className="border h-full px-5 hover:bg-white hover:text-black cursor-pointer transition-colors duration-200 ease-in">
                (View Album)
              </button>
            </Link>
          </div>

          <div
     ref={(el) => (sessionRefs.current[index] = el)}
          className="flex flex-row overflow-hidden border-t justify-between min-h-[70vh]">
            {session.images.slice(0, 5).map((img, i) => (
              <div
                key={i}
                className={` bg-white aspect-[3/4.5] relative border-5 overflow-hidden ${style[i]}`}
              >
                <Image
                  src={img}
                  style={{ objectFit: "cover" }}
                  fill
                  className="portfolio-img opacity-0"
                  alt={`Image ${i}`}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;