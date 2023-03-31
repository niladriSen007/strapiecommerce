import React from 'react'

const CategoryHover = ({text}) => {

    return (
        <div className={`absolute  rounded-sm bg-gray-200 shadow-2xl text-black font-bold top-[50%] left-[50%] translate-x-[-50%] p-2 `}>
            {text}
        </div>
    )
}

export default CategoryHover