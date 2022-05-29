import React from 'react'
import dog from './doge.jpg';
import './header.css';

export default function Header() {
  return (
    <div className='header'>
        <img src={dog} alt="..." />
        <h2 className="tophead">DOGE-TODO</h2>
        <h4>make your day organised</h4>
    </div>
  )
}
