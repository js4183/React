import React from 'react'
import {useParams, useSearchParams} from 'react-router-dom'

const Detail = () => {
  
  // useParams() => 파라미터
  // Route path 값을 수정

  let {num} = useParams()

  // useSearchParams() => 쿼리
  // url 값을 수정
  const [query, setQuery] = useSearchParams()

  // 장소까지 추가로 가져와서
  // h2 => 타이틀
  // p => 가격
  // p => 장소
  // console.log(query.get('title'))
  // console.log(query.get('price'))
  // console.log(query.get('place'))

  const container = {
    width : "200px",
    backgroundColor : 'lightgray',
    marginTop : "50px",
    marginLeft : "200px"


  }

  return (
    <div style={container}>
      {num}번째 게시물
      <h2>{query.get('title')}</h2>
      <p>{query.get('price')}</p>
      <p>{query.get('place')}</p>
    </div>
  )
}

export default Detail