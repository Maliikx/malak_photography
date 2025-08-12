"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Services() {
  const router = useRouter();
  const ref = useRef(null);
  const animation_left1 = useRef(null);
  const animation_left2 = useRef(null);
  const animation_center1 = useRef(null);
  const animation_center2 = useRef(null);
  const animation_right1 = useRef(null);
  const animation_right2 = useRef(null);
  const fadeAnim1 = useRef(null);
  const fadeAnim2 = useRef(null);
  const fadeAnim3 = useRef(null);
  // const [visible1, setVisible1] = useState(false)

  useGSAP(() => {
    animation_left1.current = gsap.to(".move-left-1", {
      x: "150%",
      zIndex: 4,
      paused: true,
      reversed: true,
      ease: "Cubic.easeInOut",
    });
    animation_left2.current = gsap.to(".move-left-2", {
      x: "300%",
      zIndex: 4,
      paused: true,
      reversed: true,
      ease: "Cubic.easeInOut",
    });

    animation_center1.current = gsap.to(".move1", {
      x: "-150%",
      zIndex: 4,
      paused: true,
      reversed: true,
      ease: "Cubic.easeOut",
    });
    animation_center2.current = gsap.to(".move2", {
      x: "150%",
      zIndex: 4,
      paused: true,
      reversed: true,
      ease: "Cubic.easeOut",
    });

    animation_right1.current = gsap.to(".move-right-1", {
      x: "-150%",
      zIndex: 4,
      paused: true,
      reversed: true,
      ease: "Cubic.easeInOut",
    });
    animation_right2.current = gsap.to(".move-right-2", {
      x: "-300%",
      zIndex: 4,
      paused: true,
      reversed: true,
      ease: "Cubic.easeInOut",
    });

    fadeAnim1.current = gsap.to(".info-box1", {
      opacity: 1,
      duration: 0.5,
      paused: true,
      reversed: true,
    });

    fadeAnim2.current = gsap.to(".info-box2", {
      opacity: 1,
      duration: 0.5,
      paused: true,
      reversed: true,
    });
    fadeAnim3.current = gsap.to(".info-box3", {
      opacity: 1,
      duration: 0.5,
      paused: true,
      reversed: true,
    });
  });

  const handleHover = () => {
    const anim_center1 = animation_center1.current;
    if (!anim_center1) return;
    if (anim_center1.reversed()) {
      anim_center1.play();
    } else {
      anim_center1.reverse();
    }
    const anim_center2 = animation_center2.current;
    if (!anim_center2) return;
    anim_center2.reversed() ? anim_center2.play() : anim_center2.reverse();
    fadeAnim2.current?.reversed()
      ? fadeAnim2.current.play()
      : fadeAnim2.current.reverse();
  };

  const handleHover_right = () => {
    const anim_right1 = animation_right1.current;
    if (!anim_right1) return;
    if (anim_right1.reversed()) {
      anim_right1.play();
    } else {
      anim_right1.reverse();
    }
    const anim_right2 = animation_right2.current;
    if (!anim_right2) return;
    anim_right2.reversed() ? anim_right2.play() : anim_right2.reverse();
    fadeAnim3.current?.reversed()
      ? fadeAnim3.current.play()
      : fadeAnim3.current.reverse();
  };

  const handleHover_left = () => {
    const anim_left1 = animation_left1.current;
    if (!anim_left1) return;
    if (anim_left1.reversed()) {
      anim_left1.play();
    } else {
      anim_left1.reverse();
    }
    const anim_left2 = animation_left2.current;
    if (!anim_left2) return;
    anim_left2.reversed() ? anim_left2.play() : anim_left2.reverse();
    fadeAnim1.current?.reversed()
      ? fadeAnim1.current.play()
      : fadeAnim1.current.reverse();
  };
  const sections = [
    {
      key: "left",
      onHover: handleHover_left,
      className: "move-left",
      images: [
        { src: "/imgs/opt4.jpeg", className: "border-5 rotate-5 absolute w-[350px] h-[525]" },
        {
          src: "/imgs/opt2.jpeg",
          className: "move-left-1 border-white border-5 rotate-3 absolute w-[350px] h-[525]",
        },
        {
          src: "/imgs/opt1.jpeg",
          className: "move-left-2 border-white border-5 rotate-[-1deg] w-[350px] h-[525]",
        },
      ],
    },
    {
      key: "center",
      onHover: handleHover,
      className: "move-center",
      images: [
        {
          src: "/imgs/wed6.jpeg",
          className: "move1 border-white border-5 rotate-5 absolute w-[350px] h-[525]",
        },
        { src: "/imgs/wed3.jpeg", className: "border-white border-5 rotate-3 w-[350px] h-[525]" },
        {
          src: "/imgs/wed1.jpeg",
          className: "move2 border-white border-5 rotate-[-1deg] absolute w-[350px] h-[525]",
        },
      ],
    },
    {
      key: "right",
      onHover: handleHover_right,
      className: "move-right",
      images: [
        {
          src: "/imgs/opt3.jpeg",
          className: "border-white border-5 rotate-5 absolute w-[350px] h-[525]",
        },
        {
          src: "/imgs/portraits.jpeg",
          className: "move-right-1 border-white border-5 rotate-3 w-[350px] h-[525]",
        },
        {
          src: "/imgs/fashion.jpeg",
          className:
            "move-right-2 border-white border-5 rotate-[-1deg] absolute w-[350px] h-[525]",
        },
      ],
    },
  ];
  const handleClick = () => {
    router.push("/portfolio2");
  };
//TODO: fix post animation alignment
  return (
    <div className="  flex flex-col gap-10 justify-center items-center">
      <h1 className="text-3xl">SERVICES</h1>
      <div className="flex  gap-20">
        <div className=" flex flex-col gap-3  justify-center items-center">
          <div className="flex flex-row gap-42 justify-center w-full ">
            {sections.map(({ key, onHover, images }) => (
              <Link key={key}  href='/portfolio' >
                <div  className="flex flex-row justify-center">
                  <div
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    className="absolute z-5  w-[350px] h-[525]"
                  ></div>
                  {images.map(({ src, className }, index) => (
                    <div key={index} className={className}>
                      <Image
                        src={src}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <div className=" flex flex-row justify-between items-center select-none ">
            <div className="flex flex-col  gap-5 w-1/4">
              <h1 className=" text-2xl">EVENTS</h1>
              <span className="info-box1 opacity-0">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ut molestie lacus. Etiam et pulvinar mauris. Morbi cursus
                commodo magna congue condimentum. Vestibulum vitae placerat
                nisl, vitae aliquet lacus."
              </span>
            </div>
            <div className="flex flex-col  gap-5 w-1/4">
              <h1 className=" text-2xl">WEDDINGS</h1>
              <span className="info-box2 opacity-0">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ut molestie lacus. Etiam et pulvinar mauris. Morbi cursus
                commodo magna congue condimentum. Vestibulum vitae placerat
                nisl, vitae aliquet lacus."
              </span>
            </div>
            <div className="flex flex-col  gap-5 w-1/4">
              <h1 className=" text-2xl">PORTRAITS</h1>
              <span className="info-box3 opacity-0">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ut molestie lacus. Etiam et pulvinar mauris. Morbi cursus
                commodo magna congue condimentum. Vestibulum vitae placerat
                nisl, vitae aliquet lacus."
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
