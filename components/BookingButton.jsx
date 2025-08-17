'use client'
import { getCalApi } from "@calcom/embed-react";
import React, { useEffect } from "react";
import FlipBtn from "./FlibBtn";

const BookingButton = ({children, ref, className='', hoverStyle =''}) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#0000ff",
            "cal-text": "#6F61ff",
            "cal-text-emphasis": "#4D40ff",
           
            "cal-border-booker-width": "3px",
            // More CSS variables are defined here
            // https://github.com/calcom/cal.com/blob/main/packages/config/tailwind-preset.js
          },
          dark: {
            "cal-brand": "#FFB900",


           
            "cal-border-booker-width": "3px",
            // Set the similar variables as in light theme but for dark mode.
          },
        },
      });
    })();
  }, []);
  return(
    <FlipBtn
    hoverStyle={hoverStyle}
    ref={ref} data-cal-link="malak-photography/photo-session" className={`cursor-pointer ${className}`}>
      {children}
      </FlipBtn>
  )

}
  export default BookingButton;
