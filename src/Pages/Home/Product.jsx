import React from 'react'
import Card from "../../common/Card"
import Prodctdata from "../../Json/product.json"

export default function Product() {

    return (
    <>
        <div className='flex flex-col items-center justify-center  px-[270px] py-[50px]'>
            <h2 className='text-black  text-xl uppercase'>Welcome</h2>
            <p className='text-gray-400 font-normal text-3xl text-center'>Successful brands get into the mind slowly. A blurb in a magazine. A mention in a newspaper.</p>
        </div>
        <Card product={Prodctdata}/>
    </>
    )
}
