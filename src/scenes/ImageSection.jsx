import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import style from '../style'
import { building_1, building_2, building_3 } from '../assets'
import { motion } from 'framer-motion'
import constant from '../constant'

const ImageSection = () => {
  const isDesktop = useMediaQuery("(min-width: 1060px)")
  return (
      <>
      {isDesktop ? (
            <section className={`${style.half_Container_col} md:flex-row justify-between`}>
              <motion.div
                className='w-1/2'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4 }}
                variants={{
                    hidden: { opacity: 0, x:  50 },
                    visible: { opacity: 1, x: 0 },
                }}
              >
                <h1 className={`${style.title} text-3xl`}> {constant.ImageSection_Title}</h1>
                <p className='w-1/2 text-xl'> {constant.ImageSection_Description} </p>
              </motion.div>
              <motion.div
                className='grid grid-cols-3 grid-rows-1 gap-6'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
              >
            <img src={building_1} alt="" className={`hover:filter hover:saturate-200 ${style.delay}`}/>
            <img src={building_2} alt="" className={`hover:filter hover:saturate-200 ${style.delay}`}/>
            <img src={building_3} alt="" className={`hover:filter hover:saturate-200 ${style.delay}`}/>
            </motion.div>
            </section>
      ) :
        (
          <section className={`${style.half_Container_col} justify-center`}>
            <div
              className='w-full mb-10'>
                <h1 className={`${style.title}`}>Efol Hakkında Başlık</h1>
                <p className='w-full text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellendus quisquam, autem cumque tempore a. Minus temporibus magni quia ad?</p>
            </div>
            <div className='grid grid-cols-2 grid-rows-1 gap-6'>
            <img src={building_1} alt="" className={`${style.Image_Saturate} ${style.delay}`}/>
            <img src={building_2} alt="" className={`${style.Image_Saturate} ${style.delay}`}/>
            </div>
          </section>
        )}
      </>     
  )
}

export default ImageSection