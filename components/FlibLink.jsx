import React from 'react'
import {motion} from 'framer-motion'
// import Link from 'next/link'


const FlipLink = ({children, href, isdownload, target, className = ''}) => {
  return (
    <motion.div
    initial={'initial'}
    whileHover={'hovered'}
    className={`relative  overflow-hidden whitespace-nowrap w-fit ${className}`}
    target={target} href={href}>
        <motion.div
          transition={{ ease: 'easeOut', duration: 0.2 }}

         variants = {{
            initial: {y: 0},
            hovered: {y: '-100%',}
        }}
        >
        {children}
        </motion.div>
        <motion.div
          transition={{ ease: 'easeOut', duration: 0.2 }}
          className={`absolute inset-0  ${className}`}
         variants = {{
            initial: {y: '100%'},
            hovered: {y: 0,}
        }}
        >
        {children}
        </motion.div>
    </motion.div>
  )
}

export default FlipLink;