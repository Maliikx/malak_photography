import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'

const FlipBtn = ({dataCal, ref, children, onClick , className = '', hoverStyle = '', type, data}) => {
  return (
    <motion.button
    data-cal-link={dataCal}
    type={type}
    onClick={onClick}
    initial={'initial'}
    whileHover={'hovered'}
    className={`relative cursor-pointer  overflow-hidden whitespace-nowrap w-fit  ${className}`}
    >
        <motion.div
        ref={ref}
          transition={{ ease: 'easeInOut', duration: 0.2 }}

         variants = {{
            initial: {y: 0},
            hovered: {y: '-100%',}
        }}
        >
        {children}
        </motion.div>
        <motion.button
        data-cal-link={dataCal}
          transition={{ ease: 'easeInOut', duration: 0.2 }}
          className={`absolute inset-0 cursor-pointer  ${hoverStyle}`}
         variants = {{
            initial: {y: '100%'},
            hovered: {y: 0,}
        }}
        >
        {children}
        </motion.button>
    </motion.button>
  )
}

export default FlipBtn