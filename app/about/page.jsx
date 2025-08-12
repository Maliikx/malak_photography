import AnimatedLine from '@/components/AnimatedLine'
import React from 'react'

const About = () => {
  return (
    <div className=' '>
        <div className='flex flex-col gap-10 '>
            <h1 className='uppercase w-full text-center '>(About me?)</h1>
            <AnimatedLine/>
        </div>
        <div className='flex flex-row justify-around pt-20'>
            <div className="w-1/2"> 
            <h1 className='text-[15rem]/[12rem] uppercahse '>Malak<br/>Omar,</h1>
            </div>
            <div className="w-1/3 text-xl flex flex-col justify-between">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta excepturi laborum, ipsam animi cupiditate quasi voluptate illum ducimus vero iusto ut, ipsum at. Omnis delectus, hic iste doloremque sed molestiae.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta excepturi laborum, ipsam animi cupiditate quasi voluptate illum ducimus vero iusto ut, ipsum at. Omnis delectus, hic iste doloremque sed molestiae.</p>
            </div>
        </div>
    </div>
  )
}

export default About