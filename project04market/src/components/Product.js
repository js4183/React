import React from 'react'
import { Link } from 'react-router-dom'


const Product = ({ item, idx }) => {
  // const Product = (props) => {

  let boxStyle = {
    border: '1px solid gray',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContents: 'center',
    backgroundColor: 'lightgray',
    width: '200px',
    height: '300px'
  }

  const linkStyle = {
    textDecoration: 'none',
    color: 'black'
  }
  {/* <img src={props.item.photo} width="100px" height="100px"></img>
  <Link to="./detail" style={linkStyle}>
    {props.item.title}
  </Link><br/>
  <span>{props.item.price}</span><br />
  <span>{props.item.place}</span> */}

  return (
    <div style={boxStyle}>
      <img src={item.photo} width="100px" height="100px"></img>
      <h2>
        <Link to={'/detail'+(idx+1)+'?title='+item.title+'&price='+item.price+'&place='+item.place} style={linkStyle}>
          {item.title}
        </Link>
      </h2>
      <p>{item.price}</p>
      <p>{item.place}</p>
    </div>
  )
}

export default Product