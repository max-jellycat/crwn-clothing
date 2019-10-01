import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => (
  <div style={{ backgroundImage: `url(${imageUrl})` }} className={`${size ? size : ''} menu-item`}>
    <div className='content'>
      <h2 className='title'>{title}</h2>
      <span className='subtitle'>Shop now</span>
    </div>
  </div>
)

export default MenuItem
