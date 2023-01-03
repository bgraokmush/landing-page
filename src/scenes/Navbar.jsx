import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { burger, close, logo } from '../assets'
import { Link } from 'react-router-dom'
import style from '../style'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  return (
    <nav className='z-40 w-full fixed top-0 py-6 bg-black'>
      <div className='flex items-center justify-between mx-auto w-5/6'>
        <Link to={'/'} className='mr-24'>
          <motion.img
            src={logo}
            alt="logo"
            className='w-24 md:w-36'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.2 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
            }}/></Link>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className='flex justify-between items-center w-full '>
            <motion.div
              className='flex justify-between gap-4 lg:gap-16 text-sm font-semibold'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4 }}
              variants={{
                  hidden: { opacity: 0, y: -25 },
                  visible: { opacity: 1, y: 0 },
              }}
            >
              <Link to={'/'} className={`hover:text-primary ${style.delay}`}>Anasafa</Link>
              <Link to={'/about'} className={`hover:text-primary ${style.delay}`}>Hakkımızda</Link>
              <Link to={'/products'} className={`hover:text-primary ${style.delay}`}>Projeler</Link>
              <Link to={'/resources'} className={`hover:text-primary ${style.delay}`}>Kaynaklar</Link>
          </motion.div>
          
            <Link to={'/contact'} className={`bg-primary py-3 px-5 text-sm font-semibold hover:bg-primary-hover hover:shadow-md ${style.delay}`}>Bize Ulaş</Link>
          </div>
        ): (
            <button
              className={`${style.button} ${style.delay}`}
              onClick={() => setIsMenuToggled(!isMenuToggled)}  
            >
              <img src={burger} alt="burger menu"  />
            </button>
        )}
        
        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className='fixed top-0 right-0 bottom-0 h-full w-[65%] bg-black-hover'>
              {/* CLOSE ICON */}
            <div className='flex justify-end px-[55px] py-9'>
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img src={close} alt="close icon" />
              </button>
            </div>
            
            {/* MENU ITEMS */}
            <div className='flex flex-col justify-center my-[65px] gap-14  mx-[65px] text-xl text-white'>
            <Link to={'/'} className={`hover:text-primary ${style.delay}`}>Anasafa</Link>
              <Link to={'/about'} className={`hover:text-primary ${style.delay}`}>Hakkımızda</Link>
              <Link to={'/products'} className={`hover:text-primary ${style.delay}`}>Projeler</Link>
              <Link to={'/resorces'} className={`hover:text-primary ${style.delay}`}>Kaynaklar</Link>
              <Link to={'/contact'} className={`hover:text-primary ${style.delay}`}>İletişim</Link>

            </div>
              
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar