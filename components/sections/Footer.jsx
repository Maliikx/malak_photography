
import Link from "next/link";
import BookingButton from "../BookingButton";
import AnimatedLine from "../AnimatedLine";

const Footer = () => {

  
  return (
    <footer className="h-[80vh] p-10 bg-primary bg-amber-400  sticky bottom-0  flex flex-col gap-10 items-center justify-start  text-black">
      
        <h1 className="w-[90%] text-center  text-2xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl select-none">
          YOUR LOCAL PHOTOGRAPHER IS <span className=" font-bold">ONE CLICK AWAY!</span>
        </h1>
      <AnimatedLine/>

        <ul className="flex  flex-row text-lg w-full  justify-between">
          <li className="w-[25rem]  flex justify-start">
            <span className="font-bold">Instagram:</span> @malak.omar97
            </li>
          <li className="w-[25rem]  flex justify-center"><span className="font-bold">Phone:</span> +49 172 7188254</li>
          <li className="w-[25rem]  flex justify-end"><span className="font-bold">Email:</span> Malak_photography@outlook.com</li>
        </ul>
        

      <BookingButton
      hoverStyle='font-bold text-black  uppercase px-10 py-5 border-white bg-white  rounded-2xl text-4xl'
      className=" font-bold text-white  uppercase px-10 py-5 border-white bg-black  rounded-2xl text-4xl">
       click!
      </BookingButton>
      {/* <button data-cal-link="malak-photography/photo-session" className="cursor-pointer text- px-10 py-5 border-black border-2 rounded-md text-4xl">
        Click
      </button> */}
    </footer>
  );
};

export default Footer;
