import React from 'react'
import CategoryHover from './CategoryHover'

const Categories = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between px-2 md:px-20 gap-1 md:gap-2 my-16'>
            <div className='categoty-flexbox '>
                <div className='relative'>
                    <img className='category-image ' src="https://images.unsplash.com/photo-1577538928305-3807c3993047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                   <CategoryHover text="SALE" />
                </div>
                <div className='relative'>
                    <img className='category-image' src="https://images.unsplash.com/photo-1590649880765-91b1956b8276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <CategoryHover text="WOMEN"/>
                </div>
            </div>
            <div className='relative'>
                <img className='w-[348px]  opacity-90 hover:opacity-95' src="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                <CategoryHover text="NEW SEASON"/>
            </div>
            <div>
                <div className='flex flex-col md:flex-row  gap-1 md:gap-2'>
                    <div className='relative'>
                        <img className='category-image' src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
                        <CategoryHover text="MEN"/>
                    </div>
                    <div className='relative'>
                        <img className='category-image' src="https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                        <CategoryHover text="ACCESORIES"/>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-1 md:gap-2'>
                    <div className='relative'>
                        <img className='category-image' src="https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                        <CategoryHover text="WATCHES"/>
                    </div>
                    <div className='relative'>
                        <img className='category-image' src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
                        <CategoryHover text="SHOES"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories