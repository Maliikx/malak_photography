'use client'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);


const AnimatedLine = () => {
    const lineRef =useRef(null);
    useEffect(() => {
        const context = gsap.context(()=>{
            gsap.to(lineRef.current,{
                scrollTrigger:{
                    trigger: lineRef.current,
                    start: 'top 90%'
                },
                width: '100%',
                ease:'power3.inOut',
                duration:1,
              });
        });
     
    
      return () => {
        context.revert();   
      }
    }, [])
    

  return (
    <hr className='w-[0%]' ref={lineRef} />
  )
}

export default AnimatedLine