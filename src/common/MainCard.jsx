import { useParams } from 'react-router-dom';
import Chair from '../Json/chair.json'
import RatingList from './RatingList';
import { useState } from 'react';

export default function MainCard() {
  const { Id } = useParams();
  const product = Chair.find((p) => p.id === Id);

  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ["S", "M", "L"];
  return (
    <div className='container mx-auto '>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-15 gap-10 md:mt-24 mt-16 mb-16">
        <div className="">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[560px] rounded-xl"
          />

        </div>
        <div className="">
          <h5 className="text-4xl font-bold ">{product.name}</h5>
          <div className='m-4 flex gap-1 items-center'>
            <RatingList value={product.rating} /><spam>( {product.rating} )</spam>
          </div>
          <p className="text-4xl">
            <strong></strong> ${product.price}.00
          </p>

          <p className="mt-5 text-xl text-gray-400">
            <strong></strong> {product.description}
          </p>
          <h5 className='mt-10 text-xl font-medium'>Color:</h5>
          <div className="flex items-center gap-1 mt-2">
            {product.colors?.map((clr) => (
              <span className={`w-5 h-5 rounded-full cursor-pointer relative ${clr?.selected === true ? "border-2 absolute  border-blue-600  " : "border-2 border-gray-300"}`}
                style={{ backgroundColor: clr.value }}>
              </span>
            ))}
          </div>

          {/* <div className='flex flex-wrap'>
            <button type='radio' className="w-9 h-9 rounded-[4px] cursor-pointer border border-[#E5E2E1] uppercase flex justify-center items-center text-sm leading-[171%] text-gray-1-foreground">S</button>
            <button className="w-9 h-9 rounded-[4px] cursor-pointer border border-[#E5E2E1] uppercase flex justify-center items-center text-sm leading-[171%] bg-primary">M</button>
            <button className="w-9 h-9 rounded-[4px] cursor-pointer border border-[#E5E2E1] uppercase flex justify-center items-center text-sm leading-[171%] text-gray-1-foreground">L</button>
          </div> */}

<p className='mt-10 text-xl font-medium'>Size:</p>
<div className="flex gap-4 my-2">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => setSelectedSize(size)}
          className={`w-10 h-10 rounded-md border-2 font-semibold flex justify-center items-center ${
            selectedSize === size
              ? "bg-black text-white border-black"
              : "bg-white text-black border-gray-300"
          }`}
        >
          {size}
        </button>
      ))}
    </div>
         
          <button className='bg-black text-white hover:bg-white hover:text-black rounded-md font-normal h-12 w-28 p-1 my-3 hover:border-2 hover:border-black'>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}