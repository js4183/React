import React from 'react'

import { useNavigate } from 'react-router-dom'

const MyPage = () => {
    // 유저들의 정보를 알려주는 페이지
    // <h3>유저 정보입니다.</h3>
    // '메인으로 돌아가기' 버튼
    // localhost:3000/mypage
    const navigate = useNavigate()

    const goToMain =()=>{
        navigate('/')
    }

  return (
    <div>
        <h3>유저 정보입니다.</h3>
        <button onClick={goToMain}>메인으로 돌아가기</button>
    </div>
  )
}


export default MyPage