"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import allPicsData from "../../data/allPicsData";
import CircularGallery from "@/components/CircularGallery";
import { useLayoutEffect } from "react";
import gsap from "gsap";


export default function SessionGallery() {
  const sizes = [20, 40, 30, 25, 15, 30, 15]
  const params = useParams();
  const sessionId = params?.sessionId;

  //TODO: animation refinement
  useLayoutEffect(() => {
    gsap.to('.Photo',{
      // scrollTrigger:{
      //   trigger: '.Photo',
      //   start: 'top 80%',
      //   end: 'top top'
      // },
      opacity:1,
      ease:'power2.inOut',
      duration:0.5,
    });
  
    
  }, [])
  
  if (!sessionId) return <p>Loading...</p>;

  const session = allPicsData.find((s) => s.id === String(sessionId));

  if (!session) {
    return <p>Session not found</p>;
  }

  return (
    <div className="p-2 md:p-6  min-h-screen ">
      
      {/* <div className="absolute z-10 backdrop-blur-lg w-screen h-screen bg-amber-200/25"></div> */}
      <h1 className="text-xl font-bold mb-4">{session.title}</h1>
      {/* <div className=" sticky top-0 h-[50vh]">
  <CircularGallery items={session.data} bend={0} textColor="#ffffff" borderRadius={0} scrollEase={0.02} scrollSpeed={0.1} />
</div> */}
      <div className="flex flex-wrap gap-x-40 gap-y-150 justify-center items-start">


        {session.images.map((img, i) => (
          <div
            key={i}
            style={{width: `calc(1vw * ${sizes[i]})`}}
            className=" relative border-5  bg-white  aspect-[3/4.5] overflow-hidden rounded shadow group"
          >
            <Image
              src={img}
              alt={`Photo ${i + 1}`}
              fill
              style={{ objectFit: "cover", transform: "scale(1.1)" }}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="Photo opacity-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
