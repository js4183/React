import React, {useRef, useState, useEffect} from 'react'

const Join = () => {

    const [userData,setUserDate] = useState({})
    const idRef = useRef()
    const pwRef = useRef()
    const nameRef = useRef()
    const selRef = useRef()
    const btnCk=()=>{
        // console.log('id :',idRef.current.value)
        // console.log('pw :',pwRef.current.value)
        // console.log('name :',nameRef.current.value)
        // console.log('selected :',selRef.current.value)

        setUserDate({
            'id' : idRef.current.value,
            'pw' : pwRef.current.value,
            'name' : nameRef.current.value,
            'select' : selRef.current.value
        })
        // console.log(userData)
        // alert(`${userData.select}을 좋아하는 ${userData.name}님 환영합니다.`)
    }

    useEffect(()=>{
        console.log('현재 data',userData)
        // 여기에서 backend로 값을 보내줌
        // userData.id !== undefined && alert(userData.id)
    },[userData])
  return (
    <div>
        ID : <input type="text" placeholder="ID를 입력하세요." ref={idRef}></input>
        <button>아이디 중복확인</button>
        <br/>
        PW : <input type="password" placeholder='PW를 입력하세요.' ref={pwRef}></input><br/>
        이름 : <input type="text" placeholder='이름을 입력하세요.' ref={nameRef}></input><br/>
        좋아하는 계절 : 
        <select ref={selRef}>
            <option>봄</option>
            <option>여름</option>
            <option>가을</option>
            <option>겨울</option>
        </select><br/>
        <button onClick={btnCk}>회원가입</button>
    </div>
  )
}

export default Join