import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const Menu = ({ isMenuOpen, className = '' }) => {
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const menuRef = useRef(null);


  useEffect(() => {
    const menu = menuRef.current;

    // Split the text into characters
    const portfolioSplit = new SplitText(portfolioRef.current, {
      type: "chars",
    });
    const aboutSplit = new SplitText(aboutRef.current, { type: "chars" });
    const contactSplit = new SplitText(contactRef.current, { type: "chars" });
    if (isMenuOpen) {
      gsap.to(menu, {
        backdropFilter: "blur(24px)",
        webkitBackdropFilter: "blur(24px)",
        backgroundColor: 'rgba(0, 0, 0, 0.25)', // For browser compatibility
        duration: 0.2,
        ease: "power2.in",
      });
    } else {
      gsap.to(menu, {
        backdropFilter: "blur(0px)",
        webkitBackdropFilter: "blur(0px)",
        duration: 0.2,
        ease: "power2.out",
      });
    }

    if (
      (isMenuOpen && portfolioRef.current) ||
      aboutRef.current ||
      contactRef.current
    ) {
      gsap.from(portfolioSplit.chars, {
        opacity: 0,
        y: -20,
        stagger: 0.05,
        duration: 0.2,
        delay: 0.6,
        ease: "power2.out",
      });
      gsap.from(aboutSplit.chars, {
        opacity: 0,
        y: -20,
        stagger: 0.05,
        duration: 0.2,
        delay: 0.6,
        ease: "power2.out",
      });

      gsap.from(contactSplit.chars, {
        opacity: 0,
        y: -20,
        stagger: 0.05,
        duration: 0.2,
        delay: 0.6,
        ease: "power2.out",
      });
      return () => {
        portfolioSplit.revert();
        aboutSplit.revert();
        contactSplit.revert();
      };
    }
  }, [isMenuOpen]);
  // if (!isMenuOpen) return null;

  return (
    <div
      ref={menuRef}
      className={`fixed z-7  top-0 p-5 pt-35   w-screen h-screen  backdrop-blur-0 transition-all duration-400 ease-in-out ${className} `}
    >
      <nav className="uppercase flex flex-col text-white/75   justify-between h-full text-5xl">
        <div className="flex flex-col   items-end">
          <a ref={portfolioRef} href="" className="hover:text-white w-fit ">
            Portfolio
          </a>
          <a ref={aboutRef} href="" className="hover:text-white w-fit ">
            About
          </a>
        </div>
        <div className="w-full flex flex-col items-start  text-9xl ">
          <a ref={contactRef} className="self-start hover:text-white  " href="">
            Contact
          </a>

          <div className="flex flex-row text-xl gap-6 justify-end">
            <h2>Instagram</h2>
            <h2>Email</h2>
            <h2>Phone number</h2>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
