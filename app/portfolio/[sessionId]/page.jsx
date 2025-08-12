"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import allPicsData from "../../data/allPicsData";
import CircularGallery from "@/components/CircularGallery";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedLine from "@/components/AnimatedLine";

gsap.registerPlugin(ScrollTrigger);
export default function SessionGallery() {
  const imageRef = useRef([]);
  const sizes = [20, 40, 30, 25, 15, 30, 15]
  const params = useParams();
  const sessionId = params?.sessionId;

  //TODO: animation refinement
  useEffect(() => {
    const ctx = gsap.context(() => {
      session.images.forEach((_, i) => {

          gsap.to(
            imageRef.current[i],

            {
              opacity: 1,

              duration: 1.2,
              ease: "power2.out",
              delay: 0.2, // Initial delay for the session
              scrollTrigger: {
                trigger: imageRef.current[i], // Trigger on the session container
                start: "top 80%", // Start when session top hits 80% from viewport top
                end: "top 20%",
                // markers: true, // Uncomment for debugging
              },
            }
          );
         
      });
    });

    ScrollTrigger.refresh(); // Refresh triggers after setup

    return () => {  
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  
  if (!sessionId) return <p>Loading...</p>;

  const session = allPicsData.find((s) => s.id === String(sessionId));

  if (!session) {
    return <p>Session not found</p>;
  }

  return (
    <div className="py-2 md:pt-16  min-h-screen ">
      
      {/* <div className="absolute z-10 backdrop-blur-lg w-screen h-screen bg-amber-200/25"></div> */}
      <div className="flex flex-col gap-5 pb-20  ">
        <AnimatedLine/>
        <h1 className="text-xl font-bold ">{session.title}</h1>
      </div>
      {/* <div className=" sticky top-0 h-[50vh]">
  <CircularGallery items={session.data} bend={0} textColor="#ffffff" borderRadius={0} scrollEase={0.02} scrollSpeed={0.1} />
</div> */}
      <div className="flex flex-wrap gap-x-40 gap-y-150 justify-center items-start">


        {session.images.map((img, i) => (
          <div
            key={i}
            style={{width: `calc(1vw * ${sizes[i]})`}}
            className=" relative border-5  bg-white  aspect-[3/4.5] overflow-hidden  shadow group"
          >
            <Image
            ref={ref => imageRef.current[i]= ref}
              src={img}
              alt={`Photo ${i + 1}`}
              fill
              style={{ objectFit: "cover",  }}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="Photo opacity-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
