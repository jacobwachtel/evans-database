import React from 'react'


const ItemList = ({tools}) => {
  
  const {name, description, image, owner, id} = tools

  return (
    <div className='border'>
        <div className=''>
            <img className='xl:h-55 md:h-36 lg:h-52 xl:w-55 md:w-36 lg:w-52' src={image} alt="each items's individual picture" />
        </div>
        <div className='flex flex-col items-center justify-between text-xl'>
          <div className='w-[100%] flex justify-center items-center'>
            <p className='font-medium justify-self-start'>Tool Name:</p>
            <p className='items-center ml-3'>{name}</p>
          </div>
          <div className='w-[100%] flex justify-center items-center'>
            <p className='font-medium justify-self-start'>Description:</p>
            <p className='items-center ml-3'>{description}</p>
          </div>
          <div className='w-[100%] flex justify-center items-center'>
            <p className='font-medium justify-self-start'>Owner:</p>
            <p className='items-center ml-3'>{owner}</p>
          </div>
        </div>
    </div>
  )
}

export default ItemList