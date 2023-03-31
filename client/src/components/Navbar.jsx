import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineHeart, AiOutlineMenu } from "react-icons/ai"
import { BsPersonCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import MobileNavbar from './MobileNavbar'
const Navbar = () => {

    const [mobileNav, setMobileNav] = useState(false)

    return (
        <>
            <div className='flex justify-between items-center px-6 py-2 h-16' >
                <div className='hidden md:flex gap-6 '>
                    <div>
                        <img src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" alt="India-flag" className='w-6 h-6' />
                    </div>
                    <div className='flex items-center justify-center '>
                        <span className='text-size'>IND</span>
                        <AiOutlineDown />
                    </div>
                    <div className='text-size'>
                        <Link to="/products/1">Women</Link>
                    </div>
                    <div className='text-size'>
                        <Link to="/products/2">Men</Link>
                    </div>
                    <div className='text-size'>
                        <Link to="/products/3">Children</Link>
                    </div>
                </div>
                <div className='overflow-hidden'><Link to="/" className='font-bold text-2xl md:text-4xl h-64 text-blue-600'>BLUECART.</Link></div>
                <div className='hidden md:flex justify-between items-center gap-6 '>
                    <div className='text-size'>
                        <Link to="/">Home</Link>
                    </div>
                    <div className='text-size'>
                        <Link to="/about">About</Link>
                    </div>
                    <div className='text-size'>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className='text-size'>
                        <Link to="/store">Store</Link>
                    </div>
                    <AiOutlineSearch className='text-size' />
                    <BsPersonCircle className='text-size' />
                    <AiOutlineHeart className='text-size' />
                    <span >
                        <AiOutlineShoppingCart className='text-size relative' />
                        <div className='overflow-hidden absolute top-3 right-3 rounded-full w-5 h-5 flex items-center p-1  bg-violet-800 text-white'>5</div>
                    </span>
                </div>
                <div className='md:hidden'>
                    <AiOutlineMenu className='text-size' onClick={() => setMobileNav(!mobileNav)} />
                </div>
            </div>
                <MobileNavbar mobileNav={mobileNav} setMobileNav={setMobileNav} />
        </>
    )
}

export default Navbar