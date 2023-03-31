import React from 'react'
import {Link} from "react-router-dom"

const Card = ({item}) => {
  return (
    <Link to={`/products/${item.id}`}>
        <div className='flex flex-col gap-2 w-[200px] relative'>
            <div className='w-[100%] h-[300px] overflow-hidden relative hover:hover-img2'>
                <img className='w-[100%] h-[100%] object-cover absolute z-10 ' src={item.img1} alt="" />
                <img className='w-[100%] h-[100%] object-cover absolute img2 ' src={item.img2} alt="" />
            </div>
            <h2>{item.title}</h2>
            <div className='flex gap-4'>   
                <h3 className='text-gray-500 line-through' >₹{item.oldPrice}</h3>
                <h3>₹{item.price}</h3>
            </div>
            {item.isNew && <div className="absolute top-2 right-2 bg-slate-900 text-white z-50 p-1 rounded-md">
                <span className=''>New Arrival</span>
            </div>}
        </div>
    </Link>
  )
}

export default Card