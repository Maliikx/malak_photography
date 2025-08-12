"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Menu from "../Menu";
import MalaksLogo from "./MalaksLogo";

gsap.registerPlugin(ScrollTrigger);
function Frame() {
  console.log(MalaksLogo); // should be a function, NOT an object
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuText, setMenuText] = useState('Menu');
  const logoRef = useRef(null);
  const pathname = usePathname();


  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.killTweensOf(logoRef.current);
    gsap.set(logoRef.current, { clearProps: 'all' });

    const logo = logoRef.current;

    if (pathname === '/') {
     


    gsap.to(logo, {
      scrollTrigger: {
        trigger: document.body,
        start: "-112px top", // Start at top of page
        end: "+=1000", // Animate over 1000px of scrolling
        scrub: 0.5, // Smoothly tie animation to scroll progress
        // markers: process.env.NODE_ENV === "development", // Debugging markers
      },
      top: "30px",
      left: "30px",
      translateX: '50%',
      translateY: '50%',
      scale: 1,
      ease: "power2.inOut",
    });
  }else {
    gsap.to(logo, {
      top: "30px",
      left: "30px",
      translateX: '0%',
      translateY: '0%',


    });
    
    }
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  
    return () => {
      document.body.style.overflow = '';
    };
  }, [pathname, isMenuOpen]);
  const showMenu = () => {
    setIsMenuOpen((prev) => !prev); // toggle
    isMenuOpen? setMenuText('Menu') : setMenuText('Close')
    console.log('toggled')

    return !isMenuOpen;             // return the new value (immediately, if needed)
  };
  const handleLogoClick = () => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Logo clicked, navigating to /');
    }
    router.push('/');
  };
  
  return (
    <>
     
        <Menu className={ ` ${isMenuOpen? 'opacity-100 pointer-events-auto ' : 'opacity-0 pointer-events-none '}`} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>

        <div className={`topRight  fixed z-7 top-[20px] right-[20px]  border-r-3 border-white border-t-3 w-20 h-20 flex justify-center items-center transition-all duration-300 ease-in-out ${isMenuOpen? 'bg-white text-black': ''}`}>
        {" "}
        <span className={` p-5 py-7 cursor-pointer select-none hover:underline `} onClick={showMenu}>{menuText}</span>
      </div>
    <div className="all fixed z-6 ">

        <div
          ref={logoRef}
          className={`image  as fixed   ${
            pathname === '/'
              ? 'top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 scale-500 '
              : 'top-[30px] left-[30px] '
          }`}
        >

                <div className="w-[150px] h-auto"><MalaksLogo/></div>

        </div>


        <div className="topLeft text-white  fixed top-[20px] left-[20px]  border-l-3 border-white border-t-3 w-20 h-20"></div>
      <Link href="/" className=" fixed w-42 h-20  top-[20px] left-[20px] "></Link>
      {/* <nav className="fixed  top-5 w-full flex items-center justify-center gap-2">
        <a href="">[Home</a>
        <a href="">Portfolio</a>
        <a href="">About</a>
        <a href="">Contact]</a>
      </nav> */}
      
      <div className="BottomRight text-white fixed bottom-[20px] right-[20px]  border-r-3 border-white border-b-3 w-20 h-20"></div>
      <div className="Bottomleft flex justify-center items-center text-white mix-blend-difference fixed bottom-[20px] left-[20px]  border-l-3 border-white border-b-3 pl-3 w-20 h-20">
        <span className="">Based in Germany</span>
      </div>
      <div className="bottomCenter fixed  bottom-3 w-full flex items-center justify-center">
        <span>
          <span className=" font-black">Photo</span>graphy
        </span>
      </div>
    </div>
    
    </>
  );
}

export default Frame;
