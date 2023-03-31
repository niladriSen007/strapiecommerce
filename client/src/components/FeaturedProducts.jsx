import React from 'react'
import Card from './Card'

const FeaturedProducts = ({type}) => {
    const data = [
        {
            id:1,
            img1:"https://rukminim1.flixcart.com/image/832/832/xif0q/top/z/q/r/xxl-stylish-hand-block-printed-top-ag136-neerafashion-original-imagmekzgnkm7n9q.jpeg?q=70",
            img2:"https://rukminim1.flixcart.com/image/832/832/xif0q/top/f/z/7/xxl-stylish-hand-block-printed-top-ag136-neerafashion-original-imagmekz3utznwkp.jpeg?q=70",
            title:"Casual Bell Sleeves Printed Women Maroon Top",
            isNew:true,
            oldPrice:499,
            price:369,
        },{
            id:2,
            img1:"https://rukminim1.flixcart.com/image/832/832/kyt0ya80/shopsy-top/w/3/5/xxl-mptop1-majisa-prints-original-imagaxsrphehs9tu.jpeg?q=70",
            img2:"https://rukminim1.flixcart.com/image/832/832/l34ry4w0/dress/d/h/o/xl-women-western-tunic-red-m-shivcreatione-original-imagebghaywcatxh.jpeg?q=70",
            title:"Casual Bell Sleeves Printed Women Maroon Top",
            isNew:true,
            oldPrice:499,
            price:369,
        },
        {
            id:3,
            img1:"https://rukminim1.flixcart.com/image/832/832/krntoy80/lehenga-choli/z/n/8/free-3-4-sleeve-future-wine-goroly-original-imag5ezdwczgyb5m.jpeg?q=70",
            img2:"https://rukminim1.flixcart.com/image/832/832/krntoy80/lehenga-choli/r/n/y/free-3-4-sleeve-future-wine-goroly-original-imag5ezd7zzhxz4p.jpeg?q=70",
            title:"Embroidered Semi Stitched Lehenga Choli  (Purple)",
            isNew:false,
            oldPrice:899,
            price:369,
        },
        {
            id:4,
            img1:"https://rukminim1.flixcart.com/image/832/832/xif0q/sari/w/5/n/free-pattu-saree-ejoty-fashion-unstitched-original-imag4abzywzyk5ry-bb.jpeg?q=70",
            img2:"https://rukminim1.flixcart.com/image/832/832/kq8dua80/sari/t/f/p/free-pattu-saree-ejoty-fashion-unstitched-original-imag4abzdtyuv7dd.jpeg?q=70",
            title:"Floral Print Bollywood Lycra Blend Saree  (Black)",
            isNew:true,
            oldPrice:699,
            price:439,
        }
    ]
    return (
        <>
            <div className='flex flex-col md:flex-row items-center justify-between px-12 md:px-56 my-16'>
                <h2 className='font-bold text-3xl  overflow-hidden'>{type} Products</h2>
                <p className='text-gray-500 w-[80vw] mt-4 md:mt-0 md:w-[40vw] text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque suscipit ab inventore dolores. 
                    Natus laudantium velit excepturi repellat aliquam laboriosam, qui corporis nesciunt possimus voluptates
                     eos asperiores laborum at vitae, non deserunt similique nisi ea vero </p>
            </div>
            <div className='flex flex-col md:flex-row gap-12 px-16 items-center justify-center md:px-72 mb-16'>
              {
                data.map(item=>(
                    <Card item={item} key={item.id}/>
                ))
              }
            </div>
        </>
    )
}

export default FeaturedProducts