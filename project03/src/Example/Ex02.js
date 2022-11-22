import React from 'react'
import {useState} from 'react'
import imPic from './img/pic.jpeg'

const Ex02 = () => {

    const [liken, setLiken] = useState(0)
    const [likes, setLikes] = useState('💗')
    const [likeimg, setLikeimg] = useState('🤍')
    const like = ()=>{
        setLiken(liken+1)
    }
    const dislike = ()=>{
        liken>0 && setLiken(liken-1)
        // if(liken>0){
        //     setLiken(liken-1)
        // }
    }
    const likeup =()=>{

        likes=='💗'? setLikeimg('💗') : setLikeimg('🤍')
        likeimg=='🤍'? setLikes('💔') : setLikes('💗')
    }
    
    // 1. '좋아요' 버튼 클릭 시, 버튼의 내용이 '좋아요 취소'로 변경
    //      '좋아요 취소' 버튼 클릭 시, 버튼의 내용이 '좋아요'로 변경
    
    // 2. '좋아요' 버튼 클릭 시, 비어있는 하트가 꽉찬 하트로 변경
    //      '좋아요 취소' 버튼 클릭 시, 꽉찬 하트가 비어있는 하트로 변경

    // 3. '+1' 버튼 클릭 시, 숫자가 1씩 증가

    // 4. '-1' 버튼 클릭 시, 숫자가 1씩 감속(단, 0밑으로는 내려가지 않도록!)

    // 완료 시, 꽉찬 하트로 좋아요 5개 만들어서 캡쳐 => slack

  return (
    <div>
        {/* 이미지, 좋아요 버튼, +1 버튼, -1 버튼 */}
        <img width="200px" src={imPic}></img>
        <p>{likeimg} {liken}</p>
        <br/>
        <button onClick={likeup}>{likes}</button>
        <button onClick={like}>➕</button>
        <button onClick={dislike}>➖</button>
    </div>
  )
}

export default Ex02