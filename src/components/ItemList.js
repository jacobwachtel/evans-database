import React from 'react'
import './styles/ItemList.css'

const ItemList = ({tools}) => {
  
  const {name, description, image, owner, id} = tools

  return (
    <div className='item__container'>
        <div className='item__container--img'>
            <img src={image} alt="each items's individual picture" />
        </div>
        <div className='item__container--details'>
            <p className='item__container--name'>{name}</p>
            <p className='item__container--descriptioin'>{description}</p>
            <p className='item__container--type'>{owner}</p>
        </div>
    </div>
  )
}

export default ItemList