import React from 'react'
import './styles/ItemList.css'

const ItemList = () => {
  return (
    <div className='item__container'>
        <div className='item__container--img'>
            <img src='#' alt="each items's individual picture" />
        </div>
        <div className='item__container--details'>
            <p className='item__container--name'>Name</p>
            <p className='item__container--descriptioin'>Description</p>
            <p className='item__container--type'>Type</p>
        </div>
    </div>
  )
}

export default ItemList