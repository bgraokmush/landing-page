import React from 'react'
import style from '../style'
import { hero_1, hero_2 } from '../assets'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import constant from '../constant'
const Hero = () => {
    const isDesktop = useMediaQuery("(min-width: 1060px)")

  return (
      <>
          {isDesktop ? (
              <div className={style.Container}>
                  <motion.div
                      className='flex flex-col z-20 md:px-12'
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.4 }}
                      variants={{
                          hidden: { opacity: 0, x: -50 },
                          visible: { opacity: 1, x: 0 },
                      }}
                  >
                <h1 className='text-5xl w-2/3 font-bold'>{constant.hero_title} </h1>
                <p className='text-2xl w-2/3 py-10'> {constant.hero_description} </p>
                      <button
                          className={`self-start ${style.button} ${style.delay} text-xl font-semibold`}
                        //todo: iletişim kısmına at
                      >
                    Şimdi Başla
                </button>
                </motion.div>
                  <motion.img
                      src={hero_1}
                      alt=""
                      className='absolute z-0 left-0 right-0 mx-auto'
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                          hidden: { opacity: 0, y: 50 },
                          visible: { opacity: 1, y: 0 },
                      }}
                  />
                  <motion.img
                      src={hero_2}
                      alt=""
                      className='absolute z-0 right-52 top-64 mx-auto'
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.3 }}
                      variants={{
                          hidden: { opacity: 0, x: 50 },
                          visible: { opacity: 1, x: 0 },
                      }}
                    />
                </div>
            ) : 
            (
                  <div className='flex justify-center items-center h-screen w-5/6 mx-auto'>
                    
                      <motion.div
                          className='flex flex-col z-20 md:px-12'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.3}}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                      >
                        <h1 className='text-5xl w-full sm:w-2/3 font-bold'>{constant.hero_title}</h1>
                        <p className='text-2xl w-full sm:w-2/3 py-10'>{constant.hero_description}</p>
                        <button className={`self-start ${style.button} ${style.delay} text-2xl font-semibold`}>
                            Şimdi Başla
                        </button>
                    </motion.div>

                        <img src={hero_1} className="absolute top-40 h-96 w-auto object-cover"/>

              </div>
            )}
      </>
  )
}

export default Hero