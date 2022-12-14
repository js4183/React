import React from 'react'
import {useState} from 'react'
import imPic from './img/pic.jpeg'

const Ex02 = () => {

    const [liken, setLiken] = useState(0)
    const [likes, setLikes] = useState('π')
    const [likeimg, setLikeimg] = useState('π€')
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

        likes=='π'? setLikeimg('π') : setLikeimg('π€')
        likeimg=='π€'? setLikes('π') : setLikes('π')
    }
    
    // 1. 'μ’μμ' λ²νΌ ν΄λ¦­ μ, λ²νΌμ λ΄μ©μ΄ 'μ’μμ μ·¨μ'λ‘ λ³κ²½
    //      'μ’μμ μ·¨μ' λ²νΌ ν΄λ¦­ μ, λ²νΌμ λ΄μ©μ΄ 'μ’μμ'λ‘ λ³κ²½
    
    // 2. 'μ’μμ' λ²νΌ ν΄λ¦­ μ, λΉμ΄μλ ννΈκ° κ½μ°¬ ννΈλ‘ λ³κ²½
    //      'μ’μμ μ·¨μ' λ²νΌ ν΄λ¦­ μ, κ½μ°¬ ννΈκ° λΉμ΄μλ ννΈλ‘ λ³κ²½

    // 3. '+1' λ²νΌ ν΄λ¦­ μ, μ«μκ° 1μ© μ¦κ°

    // 4. '-1' λ²νΌ ν΄λ¦­ μ, μ«μκ° 1μ© κ°μ(λ¨, 0λ°μΌλ‘λ λ΄λ €κ°μ§ μλλ‘!)

    // μλ£ μ, κ½μ°¬ ννΈλ‘ μ’μμ 5κ° λ§λ€μ΄μ μΊ‘μ³ => slack

  return (
    <div>
        {/* μ΄λ―Έμ§, μ’μμ λ²νΌ, +1 λ²νΌ, -1 λ²νΌ */}
        <img width="200px" src={imPic}></img>
        <p>{likeimg} {liken}</p>
        <br/>
        <button onClick={likeup}>{likes}</button>
        <button onClick={like}>β</button>
        <button onClick={dislike}>β</button>
    </div>
  )
}

export default Ex02