'use client'
import React, { useRef, useState } from 'react'
import Image from "next/image";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


function Services() {
  const ref = useRef(null)
  const animation_left1 = useRef(null)
  const animation_left2 = useRef(null)
  const animation_center1 = useRef(null)
  const animation_center2 = useRef(null)
  const animation_right1 = useRef(null)
  const animation_right2 = useRef(null)
  const fadeAnim1 = useRef(null)
  const fadeAnim2 = useRef(null)
  const fadeAnim3 = useRef(null)
  // const [visible1, setVisible1] = useState(false)


  
   useGSAP(() =>{
    animation_left1.current = gsap.to(".move-left-1",{
      x:'150%',
      zIndex: 4,
      paused: true,
      reversed: true,
      ease: "Cubic.easeInOut"
     })
     animation_left2.current = gsap.to(".move-left-2",{
      x:'300%',
      zIndex: 4,
      paused: true,
      reversed: true,
      ease: "Cubic.easeInOut"
     })

    animation_center1.current = gsap.to(".move1",{
      x:'-150%',
      zIndex: 4,
      paused: true,
      reversed: true,
      ease: "Cubic.easeOut"
     })
     animation_center2.current = gsap.to(".move2",{
      x:'150%',
      zIndex: 4,
      paused: true,
      reversed: true,
      ease: "Cubic.easeOut"
     })

     animation_right1.current = gsap.to(".move-right-1",{
      x:'-150%',
      zIndex: 4,
      paused: true,
      reversed: true,
      ease: "Cubic.easeInOut"
     })
     animation_right2.current = gsap.to(".move-right-2",{
      x:'-300%',
      zIndex: 4,
      paused: true,
      reversed: true,
      ease: "Cubic.easeInOut"
     })

     fadeAnim1.current = gsap.to('.info-box1', {
      opacity: 1,
      duration: 0.5,
      paused: true,
      reversed: true,
    })

     fadeAnim2.current = gsap.to('.info-box2', {
      opacity: 1,
      duration: 0.5,
      paused: true,
      reversed: true,
    })
    fadeAnim3.current = gsap.to('.info-box3', {
      opacity: 1,
      duration: 0.5,
      paused: true,
      reversed: true,
    })
  })

  const handlecHover = () =>{
    const anim_center1 = animation_center1.current
    if(!anim_center1) return
    if (anim_center1.reversed()) {
      anim_center1.play()
    } else {
      anim_center1.reverse()
    }    const anim_center2 = animation_center2.current
    if(!anim_center2) return
    anim_center2.reversed()? anim_center2.play() : anim_center2.reverse()
    fadeAnim2.current?.reversed() ? fadeAnim2.current.play() : fadeAnim2.current.reverse()

    
  }

  const handlecHover_right = () =>{
    const anim_right1 = animation_right1.current
    if(!anim_right1) return
    if (anim_right1.reversed()) {
      anim_right1.play()
    } else {
      anim_right1.reverse()
    }    
    const anim_right2 = animation_right2.current
    if(!anim_right2) return
    anim_right2.reversed()? anim_right2.play() : anim_right2.reverse()
    fadeAnim3.current?.reversed() ? fadeAnim3.current.play() : fadeAnim3.current.reverse()

    
  }


  const handlecHover_left = () =>{
    const anim_left1 = animation_left1.current
    if(!anim_left1) return
    if (anim_left1.reversed()) {
      anim_left1.play()
    } else {
      anim_left1.reverse()
    }    
    const anim_left2 = animation_left2.current
    if(!anim_left2) return
    anim_left2.reversed()? anim_left2.play() : anim_left2.reverse()
    fadeAnim1.current?.reversed() ? fadeAnim1.current.play() : fadeAnim1.current.reverse()

    
  }
  

  return (
    <div className='  flex flex-col gap-10 justify-center items-center'>
        <h1 className='text-3xl'>Services</h1>
        <div className='flex  gap-20'>
        <div className=' flex flex-col gap-3  justify-center items-center'>
        <div  className='flex flex-row gap-42 justify-center w-full '>

        {/* Left */}

        <div 
          className=' flex flex-row justify-center '>
            {/* tigger div */}
            <div
             onMouseEnter={handlecHover_left} 
             onMouseLeave={handlecHover_left}
            className="absolute z-5  w-[360px] h-[535]"></div>
            <div   className='  border-5 rotate-5 absolute'>
            
              <Image
            
                  src="/imgs/opt4.jpeg"
                  alt=""
                  width={350}
                  height={1133}
                  className='object-cover h-full'
                  />
                  </div>
            <div  className='move-left-1  border-white  border-5 rotate-3 absolute '>
              <Image
                  src="/imgs/opt2.jpeg"
                  alt=""
                  width={350}
                  height={1133}
                  className=' object-cover h-full '
                  />
                  </div>
            <div  className=' move-left-2 border-white border-5 rotate-[-1deg]  '>
              <Image
                  src="/imgs/opt1.jpeg"
                  alt=""
                  width={350}
                  height={1133}
                  className='object-cover h-full'
                  />
                  </div>
          </div>

          {/* Center */}
          <div 
          className=' flex flex-row justify-center '>
            {/* tigger div */}
            <div
             onMouseEnter={handlecHover} 
             onMouseLeave={handlecHover}
            className="absolute z-5  w-[360px] h-[535]"></div>
            <div   className='move1  border-white border-5 rotate-5 absolute'>
            
              <Image
            
                  src="/imgs/wed6.jpeg"
                  alt=""
                  width={350}
                  height={1133}
                  className='object-cover h-full'
                  />
                  </div>
            <div  className='  border-white  border-5 rotate-3  '>
              <Image
                  src="/imgs/wed3.jpeg"
                  alt=""
                  width={350}
                  height={1133}
                  className=' object-cover h-full '
                  />
                  </div>
            <div  className='move2 border-white border-5 rotate-[-1deg]  absolute'>
              <Image
                  src="/imgs/wed1.jpeg"
                  alt=""
                  width={350}
                  height={1133}
                  className='object-cover h-full'
                  />
                  </div>
          </div>

          {/* Right */}

          <div 
          className=' flex flex-row justify-center '>
            {/* tigger div */}
            <div
             onMouseEnter={handlecHover_right} 
             onMouseLeave={handlecHover_right}
            className="absolute z-5  w-[360px] h-[535]"></div>
            <div   className='border-white border-5 rotate-5 absolute'>
            
              <Image
            
                  src="/imgs/opt3.jpeg"
                  alt=""
                  width={350}
                  height={1133}
                  className='object-cover h-full'
                  />
                  </div>
            <div  className='move-right-1  border-white  border-5 rotate-3  '>
              <Image
                  src="/imgs/portraits.jpeg"
                  alt=""
                  width={350}
                  height={1133}
                  className=' object-cover h-full '
                  />
                  </div>
            <div  className='move-right-2 border-white border-5 rotate-[-1deg]  absolute'>
              <Image
                  src="/imgs/fashion.jpeg"
                  alt=""
                  width={350}
                  height={1133}
                  className='object-cover h-full'
                  />
                  </div>
          </div>

        </div>
        <div className=' flex flex-row justify-between items-center select-none '>
          <div className='flex flex-col  gap-5 w-1/4'>
                  <h1 className=' text-2xl'>EVENTS</h1>
                      <span
                      className='info-box1 opacity-0'
                      >"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut molestie lacus. Etiam et pulvinar mauris. Morbi cursus commodo magna congue condimentum. Vestibulum vitae placerat nisl, vitae aliquet lacus."</span>
                </div>
                <div className='flex flex-col  gap-5 w-1/4'>
                  <h1 className=' text-2xl'>WEDDINGS</h1>
                      <span
                      className='info-box2 opacity-0'
                      >"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut molestie lacus. Etiam et pulvinar mauris. Morbi cursus commodo magna congue condimentum. Vestibulum vitae placerat nisl, vitae aliquet lacus."</span>
                </div>
                <div className='flex flex-col  gap-5 w-1/4'>
                  <h1 className=' text-2xl'>PORTRAITS</h1>
                      <span
                      className='info-box3 opacity-0'
                      >"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut molestie lacus. Etiam et pulvinar mauris. Morbi cursus commodo magna congue condimentum. Vestibulum vitae placerat nisl, vitae aliquet lacus."</span>
                </div>
        </div>
        </div>
        
        </div>
        
    
    </div>
  )
}

export default Services