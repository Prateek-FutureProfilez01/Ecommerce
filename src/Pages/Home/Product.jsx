import React from 'react'
import Card from "../../common/Card"
import Prodctdata from "../../Json/product.json"

export default function Product() {

    return (
    <>
        <div className='flex flex-col items-center justify-center mx-auto  pt-[40px] pb-[13px] m-5  max-w-[600px]'>
            <h2 className='text-[#080808] text-center text-xl uppercase font-sans '>Welcome</h2>
            <p className=' m-3 text-gray-500 md:tracking-[-0.04em] text-[24px] md:text-[18px] font-normal  text-center 
'>Successful brands get into the mind slowly. A blurb in a magazine. A mention in a newspaper.</p>
        </div>
        <Card product={Prodctdata}/>
    </>
    )
}
