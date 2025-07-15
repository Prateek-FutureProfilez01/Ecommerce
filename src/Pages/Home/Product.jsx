import React from 'react'
import Card from "../../common/Card"
import Prodctdata from "../../Json/product.json"

export default function Product() {

    return (
    <>
        <div className='flex flex-col items-center justify-center mx-auto  p-[65px] m-5 '>
            <h2 className='text-[#080808] text-center text-xl uppercase font-sans '>Welcome</h2>
            <p className='text-gray-400 font-normal text-3xl text-center h-[45px]'>Successful brands get into the mind slowly. A blurb in a <br /> magazine. A mention in a newspaper.</p>
        </div>
        <Card product={Prodctdata}/>
    </>
    )
}
