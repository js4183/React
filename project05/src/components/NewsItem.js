import React from 'react'

const NewsItem = ({item}) => {

  const con = {
    border : '1px solid gray',
    display : 'flex',
    flexDirection : 'row'
  }

  return (
    <div style={con}>
      <img src={item.urlToImage} width="200px"></img>
      <div><h2><a href={item.url}>{item.title}</a></h2>
      <p>{item.description}</p></div>
    </div>
  )
}

export default NewsItem