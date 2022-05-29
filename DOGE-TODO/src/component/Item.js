import React from 'react'
import './item.css'

export default function Item(props) {
  return (
    <div className='items'>
        <p className='item-row'>{props.item.item}</p>
        <button className='item-btn' onClick={props.deleteItem(props.item.id)}><ion-icon name="trash-outline"></ion-icon></button>
        <button className='item-btn' onClick={props.handleCheck(props.item.id)}><ion-icon name="trash-outline"></ion-icon></button>
    </div>
  )
}
