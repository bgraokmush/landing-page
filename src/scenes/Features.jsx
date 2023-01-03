import React from 'react'
import style from '../style'
import { features } from '../assets'
import constant from '../constant'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'

const Features = () => {
    const isDesktop = useMediaQuery("(min-width: 768px)")
  return (
      <>
          {isDesktop ? (
              <section className={`${style.Container} gap-8`}>
                  <motion.div
                      className='grid grid-rows-2 grid-cols-2 gap-8'
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.6 }}
                      variants={{
                          hidden: { opacity: 0, x: -50 },
                          visible: { opacity: 1, x: 0 },
                      }}
                  >
              {constant.Features_Details.map((feature) => (
                  <div key={feature.title} className='bg-black-hover w-72 h-[209px] flex flex-col p-6'>
                  <h1 className='text-4xl font-bold'>{feature.title} </h1>
                  <p className='text-grey font-light text-sm py-6'> {feature.content} </p>
              </div>
              ) )}
          </motion.div>
          <div>
          <motion.img
              src={features}
              alt="features image"
              className='hidden md:block'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
              }}/>
          </div>
    </section>
          ) : (
                  <section className={`${style.Container_col} items-end justify-end mt-44`}>
                      <div className='flex flex-col gap-4'>
                          {constant.Features_Details.map((feature) => (
                              <div key={feature.title} className='bg-black-hover w-full  flex flex-col p-6'>
                              <h1 className='text-4xl font-bold'>{feature.title} </h1>
                              <p className='text-grey font-light text-sm py-6'> {feature.content} </p>
                          </div>
                          ) )}
                      </div>
                  </section>
        )}
      </>
  )
}

export default Features