import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import style from '../style'
import { motion } from 'framer-motion'
import constant from '../constant'

const Detail = () => {
    const isDesktop = useMediaQuery("(min-width: 768px)")
  return (
      <>
          {isDesktop ? (
              <motion.section
                  className={`${style.half_Container} justify-center`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4 }}
                  variants={{
                      hidden: { opacity: 0, y: -25 },
                      visible: { opacity: 1, y: 0 },
                  }}
              >
                  <div className={`bg-detail-2 w-[600px] h-[600px] flex items-center justify-center ${style.Image_Saturate} ${style.delay}`}>
                      <h2 className='text-4xl text-center font-bold'>
                          {constant.Detail_Left}
                      </h2>
                  </div>
                  <div className={`bg-detail-1 w-[600px] h-[600px] flex flex-col items-center justify-center ${style.Image_Saturate} ${style.delay}`}>
                      <h1 className='text-9xl text-center font-bold'>{ constant.Detail_Right_Title }</h1>
                      <h2 className='text-4xl text-center font-semibold'>{ constant.Detail_Right_Description }</h2>
                  </div>
              </motion.section>) : (
                  
                  <section className={`${style.half_Container} flex-col justify-center items-center`}>
                  <div className={`bg-detail-1 w-full h-[600px] flex items-center justify-center bg-no-repeat ${style.Image_Saturate} ${style.delay}`}>
                      <h2 className='text-3xl text-center font-bold'>
                          Green buildings have a higher asset value compared to non green ones
                      </h2>
                  </div>
                  <div className={`bg-detail-2 w-full h-[600px] flex flex-col items-center justify-center bg-no-repeat  ${style.Image_Saturate} ${style.delay}`}>
                      <h1 className='text-6xl text-center font-bold'>0.5%</h1>
                      <h2 className='text-4xl text-center font-semibold'>En Düşük</h2>
                  </div>
              </section>
              )}
      
      </>
  )
}

export default Detail