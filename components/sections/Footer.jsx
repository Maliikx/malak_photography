import React from "react";

const Footer = () => {
  return (
    <footer className="h-[80vh] p-10 bg-primary bg-amber-400  sticky bottom-0  flex flex-col justify-center items-center  text-black">
      <div className="text-9xl select-none">
        YOUR LOCAL PHOTOGRAPHER IS ONE CLICK AWAY!
      </div>
      <button className="cursor-pointer text- px-10 py-5 border-black border-2 rounded-md text-4xl">
        Click
      </button>
    </footer>
  );
};

export default Footer;
