import React from 'react'
import Product from './Product'

// 데이터가 들어있는 json 파일
import sell from '../json/sell.json'

const Products = () => {

//   let container ={
//     display : 'flex',
//     flexDirection : 'row',
//     alignItems : 'center',
//     justifyContents: 'center'
// }
// <div style={container}>
//   {sell.list.map((item=>(
//     <div key={item.title}><br/>
//       {item.title}<br/>
//       <img src={item.photo} width="100px"></img><br/>
//       {item.price}<br/>
//       {item.place}<br/>
//     </div>
//   )))}
// </div>
  
  const con ={
    display : 'flex',
    flexWrap : 'wrap'
  }

  let renderSellList = sell.list.map((item,idx)=>(<Product key={idx+item.title} item={item} idx={idx}></Product>))
  return (
      <div style={con}>
        {/* {sell.list.map((item.idx)=>(
          <Product key={idx+item.title} item={item} idx={idx}/>
        ))} */}
        {renderSellList}
      </div>
  )
}

export default Products