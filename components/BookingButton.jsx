'use client'
import { getCalApi } from "@calcom/embed-react";
import React, { useEffect } from "react";

const BookingButton = ({children, ref, className=''}) => {
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
    <button ref={ref} data-cal-link="malak-photography/photo-session" className={`cursor-pointer ${className}`}>
      {children}
      </button>
  )

}
  export default BookingButton;
