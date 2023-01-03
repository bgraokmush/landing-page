import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import constant from '../constant'
import style from '../style'
const Partnership = () => {
    

  return (
    <section className={style.half_Container_col}>
          <motion.h1
              className={`${style.title}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
              }}
          >{constant.partnership_title}</motion.h1>
          <div className='grid sm:grid-rows-3 grid-rows-4 sm:grid-cols-3 grid-cols-2 pay-5 sm:gap-16'>
              {constant.partnership.map((partner) => (
                  <div key={partner.id}>
                      <a href={partner.link} target="_blank">
                          <motion.img
                              //todo : filter yapılacak
                              src={partner.img}
                              alt={partner.alt}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.5 }}
                              transition={{ duration: 0.5 }}
                              variants={{
                                  hidden: { opacity: 0, y: 50 },
                                  visible: { opacity: 1, y: 0 },
                              }}  
                              className={`hover:filter hover:blur-sm ${style.delay}`}
                          />
                      </a>
                  </div>
              ))}
        </div>
    </section> 
  )
}

export default Partnership