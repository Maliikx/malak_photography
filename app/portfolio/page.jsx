'use client'
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from 'react';
import allPicsData from '../data/allPicsData';

function Portfolio() {

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredImages = useMemo(() => {
    return selectedCategory === 'all'
      ? allPicsData
      : allPicsData.filter((img) => img.category === selectedCategory);
  }, [allPicsData, selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
    <div className='flex flex-row justify-between min-h-[70vh] pt-10'>
      <div className=' flex flex-wrap gap-30 px-10 w-4/3'>
        {filteredImages.map((img) => (
            <Link key={img.id} href='/'>
          <div  className='flex flex-col gap-3'>
              <div  className='w-70 overflow-hidden  hover:cursor-pointer  aspect-[3/4.5] relative transition-all duration-150 ease-in'>
                <Image
                key={img.id}
                src={img.thumbnail}
                alt={img.alt}
                fill
                style={{ objectFit: 'cover',
                  overflow: 'clip'
                 }}
              
                />
              </div>
            <h1 className='uppercase'>({img.title})</h1>
            <div className='absolute border-black border-0 hover:border-3 hover:cursor-pointer  w-70 aspect-[3/4.5]  transition-all duration-300 ease-in'>
            </div>
          </div>
            </Link>
        ))}
       
      </div>
      <div className='w-1/3'>
      <div className='sticky top-39 flex flex-col gap-10 pl-5'>
        <ul className='uppercase select-none'>
        {['all', 'weddings', 'portraits', 'fashion', 'commerial'].map((category) => (
              <li
                key={category}
                className={` w-fit cursor-pointer hover:text-white  ${
                  selectedCategory === category ? ' underline' : 'text-gray-500'
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
        </ul>
        <p className='text-white/75'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit alias, vel dolor unde, illo asperiores esse officiis accusamus aspernatur, a dolores. Ipsam porro dignissimos corporis nesciunt incidunt necessitatibus ad libero.</p>
      </div>
      </div>
    </div>
    </>
  )
}

export default Portfolio;
