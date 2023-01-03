import React from 'react'
import style from '../style'
import { logo } from '../assets'
import constant from '../constant'
import useMediaQuery from '../hooks/useMediaQuery'

const Footer = () => {
    const isDesktop = useMediaQuery("(min-width: 1060px)")
    return (
        <>
            {isDesktop ? (
                
            <section className='border-t-2 border-primary'>
            
      <div className="flex justify-between items-start w-5/6 mx-auto py-24">
                <div className='w-1/6'>
                    <img src={logo} alt="" className='w-32'/>
                    <p className='text-grey my-5'> {constant.Footer_Description} </p>
                </div>

                <div className='flex w-2/6 justify-center gap-32'>
                    <div className=''>
                        <h1 className='text-xl font-semibold mb-8'>{constant.Footer_Title_1}</h1>
                        <ul>
                            {constant.Footer_Link_1.map((item) => (
                                <li key={item.id} className={`py-3 text-grey ${style.delay} hover:text-primary`}>
                                    <a href={item.content}> { item.content } </a>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className=''>
                        <h1 className='text-xl font-semibold mb-8'>{constant.Footer_Title_2}</h1>
                        <ul>
                            {constant.Footer_Link_2.map((item) => (
                                <li key={item.id} className={`py-3 text-grey ${style.delay} hover:text-primary`}>
                                    <a href={item.content}> { item.content } </a>
                            </li>
                        ))}
                        </ul>
                    </div>
              </div>
                <div className='w-2/6'>
                    <h1 className='text-xl font-semibold '>{constant.Footer_Title_3}</h1>
                    <p className='text-grey my-5 w-1/2'> {constant.Footer_Description_3}</p>
                    
                    <form method='' className='py-2'>
                        <input type="text" name="mail" className='bg-black-hover py-2 px-5 my-2 border-2 border-grey' placeholder=' Email adresinizi girin...' />
                        <input type="submit" value="Submit" className={`${style.button} ${style.delay} py-2 border-2 border-primary`} />
                    </form>
                </div>
        </div>

            <div className='border-t-2 border-black-hover py-3 flex justify-center'>
                <p className='mx-auto text-grey text-sm'>2022 ® EFOL AŞ | Tüm Hakkı Saklıdır.</p>
            </div>    
      </section>
            ) : (
                    <section className='border-t-2 border-primary'>
            
      <div className="flex flex-col justify-center items-start sm:items-center w-5/6 mx-auto py-24">
                <div className='flex flex-col justify-center sm:items-center items-start'>
                    <img src={logo} alt="" className='w-32'/>
                    <p className='text-grey my-5 sm:w-1/2 w-full'> {constant.Footer_Description} </p>
                </div>

                <div className='flex flex-row justify-center gap-20 py-10'>
                    <div>
                        <h1 className='text-xl font-semibold mb-8'>{constant.Footer_Title_1}</h1>
                        <ul>
                            {constant.Footer_Link_1.map((item) => (
                                <li key={item.id} className={`py-3 text-grey ${style.delay} hover:text-primary`}>
                                    <a href={item.content}> { item.content } </a>
                                </li>
                        ))}
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold mb-8'>{constant.Footer_Title_2}</h1>
                        <ul>
                            {constant.Footer_Link_2.map((item) => (
                                <li key={item.id} className={`py-3 text-grey ${style.delay} hover:text-primary`}>
                                    <a href={item.content}> { item.content } </a>
                            </li>
                        ))}
                        </ul>
                    </div>
              </div>
                <div>
                    <h1 className='text-xl font-semibold '>{constant.Footer_Title_3}</h1>
                    <p className='text-grey my-5 w-1/2'> {constant.Footer_Description_3}</p>
                    
                    <form method='' className='py-2'>
                        <input type="text" name="mail" className='bg-black-hover py-2 px-5 my-2 border-2 border-grey' placeholder=' Email adresinizi girin...' />
                        <input type="submit" value="Submit" className={`${style.button} ${style.delay} py-2 border-2 border-primary`} />
                    </form>
                </div>
        </div>

            <div className='border-t-2 border-black-hover py-3 flex justify-center'>
                <p className='mx-auto text-grey text-sm'>2022 ® EFOL AŞ | Tüm Hakkı Saklıdır.</p>
            </div>    
      </section>
        )}
        
        </>
  )
}

export default Footer