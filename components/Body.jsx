import React from 'react'
import Image from "next/image";
import Frame from './sections/Frame';
import Services from './sections/Services';

const imgs = [
    {src:"/imgs/WhatsApp Image 2025-04-30 at 14.07.54.jpeg",
      className:" rotate-3 border-white border-5 sticky bottom-10 z-4",
    },
    {src:"/imgs/WhatsApp Image 2025-04-30 at 14.07.55 (1).jpeg",
      className:" rotate-5 border-white border-5 sticky bottom-10 z-3",
    },
    {src:"/imgs/WhatsApp Image 2025-04-30 at 14.07.55 (2).jpeg",
      className:" rotate-2 border-white border-5 sticky bottom-10 z-2",
    },
    {src:"/imgs/WhatsApp Image 2025-04-30 at 14.07.55 (3).jpeg",
      className:" rotate-4 border-white border-5 sticky bottom-10 z-1",
    },
    {src:"/imgs/WhatsApp Image 2025-04-30 at 14.07.55.jpeg",
      className:" rotate-7 border-white border-5 sticky bottom-10 z-0",
    },
    
  ]

function Body() {
  return (
      
      <div className='bg-black z-5  relative w-full pb-26'>
          <Frame/>
        <div className='m-28 flex flex-col gap-40'>
            <div className=" flex  gap-20 justify-evenly flex-row ">
                <div className="  bg-ambcer-700  w-[50%] bg-ambser-500    ">
              <div className="sticky top-[160px] text-2xl">
                <h1 className="text-white/50 "><div className='text-white'>++ PORTFOLIO</div> | PORTIATS | STREETS | VIDEOS </h1>
                {/* <h1 className="text-white/50">++ STREETS</h1>
                <h1 className="text-white/50">++ PORTIATS</h1>
                <h1 className="text-white/50">++ VIDEOS</h1> */}
          
                <p className="mt-[35rem] sticky bottom-40">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut molestie lacus. Etiam et pulvinar mauris. Morbi cursus commodo magna congue condimentum. Vestibulum vitae placerat nisl, vitae aliquet lacus."</p>
              </div>
              {/* <img src="/imgs/logo2.png"/> */}
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut molestie lacus. Etiam et pulvinar mauris. Morbi cursus commodo magna congue condimentum. Vestibulum vitae placerat nisl, vitae aliquet lacus. Curabitur imperdiet lorem a dignissim varius. Vestibulum accumsan nisl orci, aliquam congue lorem scelerisque a. Quisque gravida quam eget mattis aliquet. Morbi in semper neque. Mauris quis sagittis magna, vitae lacinia risus. Cras at egestas dui, lacinia tristique urna. Praesent id sem turpis. Quisque eu velit nulla.</p> */}
          
          
            {/* <h1 className="text-[110px] leading-24 font-light"><span className="font-medium">Malak's</span> Photography</h1> */}
          
                </div>
                <div className="flex mt-[5rem] flex-col gap-20">
            <div className=" "></div>
            <div className="flex  flex-col gap-40 items-center justify-center ">
              {imgs.map((img, index) => (
              <Image
                key={index}
                src={img.src}
                alt={`Image ${index}`}
                width={600}
                height={1133}
                className={img.className}
              />
            ))}
              </div>
                </div>
              </div>
            <Services/>
        </div>
      </div>
  )
}

export default Body