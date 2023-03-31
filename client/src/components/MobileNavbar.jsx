import React from 'react'
import { Link } from 'react-router-dom'
import {RxCross1} from 'react-icons/rx'

const MobileNavbar = ({mobileNav,setMobileNav}) => {
    console.log(mobileNav)
    return (
        <div className={`w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-slate-100 ${mobileNav===true ? "show" :"hide"}`}>
            <div className='text-size'>
                <Link to="/products/1" onClick={()=>setMobileNav(false)} >Women</Link>
            </div>
            <div className='text-size'>
                <Link to="/products/2" onClick={()=>setMobileNav(false)}>Men</Link>
            </div>
            <div className='text-size'>
                <Link to="/products/3" onClick={()=>setMobileNav(false)}>Children</Link>
            </div>
            <div className='text-size'>
                <Link to="/store" onClick={()=>setMobileNav(false)}>Store</Link>
            </div>
            <div className='text-size'>
                <Link to="/contact" onClick={()=>setMobileNav(false)}>Contact</Link>
            </div>
            <div className="absolute top-10 right-10">
                <RxCross1 onClick={()=>setMobileNav(false)} size={24}/>
            </div>
        </div>
    )
}

export default MobileNavbar