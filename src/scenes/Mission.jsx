import React from 'react'
import style from '../style'
import { mission } from '../assets'
import constant from '../constant'
import { Link } from 'react-router-dom'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
const Mission = () => {
    
    const isDesktop = useMediaQuery("(min-width: 1060px)")
    
    return (
        <>
            {isDesktop
                ? (
                <section className={`${style.half_Container} justify-center gap-20`}>
                        <motion.img
                            src={mission}
                            alt="mission image"
                            className='w-1/2'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.4 }}
                            variants={{
                                hidden: { opacity: 0, x: -80 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            />
                        <motion.div
                            className='w-1/2'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.4 }}
                            variants={{
                                hidden: { opacity: 0, x: 80 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                      <h1 className={`${style.title} sm:w-2/3`}> {constant.Mission_Section_Title} </h1>
                      <p className='text-grey text-xl sm:w-3/4'> {constant.Mission_Section_Title_Description} </p>
                      {constant.Mission_Section_Features.map((feature) => (
                          <div key={feature.id} className='my-4 flex'>
                              <img src={feature.icon} alt="" />
                              <p className='mx-5 text-grey'>{ feature.content}</p>
                          </div>
                      ))}
                      <div className='py-10'>
                            <Link to="/products" className={`${style.button} ${style.delay}`}>Daha fazla</Link>
                      </div>
                  </motion.div>
                </section>
            ) : 
            (
                    <section className={`${style.half_Container_col} justify-center`}>
                        <img src={mission} alt="mission image" className='my-10'/>
                        <div>
                            <h1 className={`${style.title}`}> {constant.Mission_Section_Title} </h1>
                            <p className='text-grey text-xl'> {constant.Mission_Section_Title_Description} </p>
                            {constant.Mission_Section_Features.map((feature) => (
                                <div key={feature.id} className='my-8 flex'>
                                <img src={feature.icon} alt="" />
                                <p className='mx-5 text-grey'>{ feature.content}</p>
                                </div>
                            ))}
                            <div className='py-10'>
                            <Link to="/products" className={`${style.button} ${style.delay}`}>Daha fazla</Link>
                            </div>
                        </div>
                    </section>
        )}
        </>
  )
}

export default Mission