import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0)

  const data = [
    "https://ik.imagekit.io/ksaehdhru/login_form/dom-hill-nimElTcTNyY-unsplash-removebg-preview_U0p0_Csa0.png?updatedAt=1679480600065",
    "https://ik.imagekit.io/ksaehdhru/login_form/oleg-ivanov-QhR78CbFPoE-unsplash-removebg-preview_8484GtFlI.png?updatedAt=1679480604741",
    "https://ik.imagekit.io/ksaehdhru/login_form/naeim-jafari-6Xai7XxOgBc-unsplash-removebg-preview_Ropol3ljC.png?updatedAt=1679480600937",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
  }

  return (
    <div className='w-[100vw] h-[100vh] md:h-[80vh] overflow-hidden '>
      <div className={`w-[300vw]  flex `} style={{ transform: `translateX(-${currentSlide * 100}vw) `, transition: "all .5s ease-in-out" }}>
        <div className='bg-[#db9505] w-[100vw] h-[100vh] flex flex-col md:flex-row  items-center '>
          <img className='w-[65vw] md:w-[50vw] h-[50vh] md:h-[80vh] object-contain ' src={data[0]} alt="" />
          <div className='text-center px-4  md:w-[45vw] text-white'>
            <h2 className='text-3xl md:text-6xl h-20 md:h-32 overflow-hidden'>Unleash Your Inner Design</h2>
            <p className='text-lg md:text-3xl h-20'>Glow yourself Up And Show People Who You Are...</p>
          </div>
        </div>
        <div className='bg-[#141414]  w-[100vw]  h-[100vh] flex flex-col md:flex-row  items-center'>
          <img className='w-[60vw] md:w-[50vw] h-[48vh] md:h-[80vh] object-contain' src={data[1]} alt="" />
          <div className='text-center px-4 text-white md:w-[45vw]'>
            <h2 className='text-3xl md:text-6xl h-20 md:h-32 overflow-hidden'>Bring Your Inner Beauty Out Of The World</h2>
            <p className='text-lg md:text-3xl h-16'>Overcome the  Shyness and be others role model...</p>
          </div>
        </div>
        <div className='bg-[#7B1B37] w-[100vw]  h-[100vh] flex flex-col md:flex-row  items-center'>
          <img className='w-[60vw] md:w-[50vw] h-[48vh] md:h-[80vh] object-contain' src={data[2]} alt="" />
          <div className='text-center px-4  text-white md:w-[45vw]'>
            <h2 className='text-3xl md:text-6xl h-20 md:h-32 overflow-hidden'>Shop With Us And Win The World</h2>
            <p className='text-lg md:text-3xl h-20'>Your bank balance is stopping you from becoming a  successful model...</p>
          </div>
        </div>
      </div>
      <div className="icons flex gap-4 absolute bottom-[60px] md:bottom-[140px] mx-auto left-[50%] translate-x-[-50%]  ">
        <div className="icon bg-tranaparent border-2 border-white text-white p-3 cursor-pointer rounded-full" onClick={prevSlide}>
          <AiOutlineLeft />
        </div>
        <div className="icon bg-tranaparent border-2 border-white text-white p-3 cursor-pointer rounded-full" onClick={nextSlide}>
          <AiOutlineRight />
        </div>
      </div>
    </div>
  )
}

export default Slider