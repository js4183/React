import React from 'react'

const Menu = ({name,price}) => {
  return (
    <div>
    <div>{name}</div>
    {price? <div>{price}</div>:<div>3500원</div>}
    </div>
  )
}

export default Menu