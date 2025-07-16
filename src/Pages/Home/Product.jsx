import React from 'react'
import Card from "../../common/Card"
import Prodctdata from "../../Json/product.json"
import '../../'

export default function Product() {


    return (
        <>
            <div className='flex flex-col items-center justify-center mx-auto  pt-[40px] pb-[13px] m-5  max-w-[800px]'>
                <h2 className='text-[#080808] text-center text-xl uppercase Bebas-font '>Welcome</h2>
                <p className='  text-[#999999]  text-[30px] text-center leading-[40px] '>Successful brands get into the mind slowly. A blurb in a magazine. A mention in a newspaper.</p>
            </div>
            <Card product={Prodctdata} />
        </>
    )
}
