import React from 'react'
import { Hero,ImageSection,Partnership, Detail, About, Mission, Features, Footer} from '../scenes'
import constant from '../constant'
const Home = () => {
  return (
    <>
      <Hero/>
      <Partnership />
      <ImageSection />
      <Detail />
      <About
        title={constant.About_Section_Title}
        content={constant.About_Section_Description}
        buttonLink={"/about"}
        buttonContent={"Daha Fazla"}
      />
      <Mission />
      <Features />
      <About
        content={constant.content}
        buttonLink={"/contact"}
        buttonContent={"Şimdi Başla"}
      />
      <Footer />
    </>
  )
}

export default Home