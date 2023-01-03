import React from 'react'
import { motion } from 'framer-motion'
import useMediaQuery from '../hooks/useMediaQuery'
import style from '../style'
import { Link } from 'react-router-dom'

const About = ({title, content, buttonLink, buttonContent}) => {
    return (
    <div className={`${style.Container_col} justify-center`}>
        <motion.h1
          className={style.title}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          variants={{
              hidden: { opacity: 0, y: -25 },
              visible: { opacity: 1, y: 0 },
          }}
        >
          {title}
        </motion.h1>
        <motion.p
          className='text-2xl sm:text-5xl text-center font-semibold w-full md:w-1/2 text-grey'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
              hidden: { opacity: 0, y: -25 },
              visible: { opacity: 1, y: 0 },
          }}
        >{content} </motion.p>
        <motion.div
        className='my-10'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6}}
        transition={{ duration: 0.4 }}
        variants={{
            hidden: { opacity: 0, y: -25 },
            visible: { opacity: 1, y: 0 },
        }}>
          <Link to={buttonLink} className={`${style.button} ${style.delay} font-semibold`}>{ buttonContent }</Link>
        </motion.div>
        </div>
  )
}

export default About