import React from 'react'

function Frame() {
  return (
    <div className='fixed z-6  '> <div className=" w-36 fixed top-[15px] left-[40px]"><img src="/imgs/logo2.png"/></div>
    <div className="text-white  fixed top-[20px] left-[20px]  border-l-3 border-white border-t-3 w-20 h-20"> 
    </div>
    <div className="text-white fixed top-[20px] right-[20px]  border-r-3 border-white border-t-3 w-20 h-20 flex justify-center items-center "> <span className="">Menu</span></div>
    <div className="text-white fixed bottom-[20px] right-[20px]  border-r-3 border-white border-b-3 w-20 h-20"></div>
    <div className="flex justify-center items-center text-white mix-blend-difference fixed bottom-[20px] left-[20px]  border-l-3 border-white border-b-3 pl-3 w-20 h-20"><span className="">Based in Germany</span></div>
    <div className="fixed  bottom-0 w-full flex items-center justify-center"><span><span className=" font-black">Photo</span>graphy</span></div>
</div>
  )
}

export default Frame