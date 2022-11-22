import React from 'react'
//매개변수로 object 를 적을 때 주의!
// 1) ({속성}) => 중괄호 생략 금지!
// 2) 다중 속성을 가져올 때
    // ({속성},{속성}) => XXXX 금지!
    // ({속성,속성}) => OOOO 하나의 객체 안에 다중 속성

const Member = ({name,teamName,grade}) => {
    const boxStyle ={
        backgroundColor : 'ivory',
        border : '1px solid brown',
        textAlign : 'center',
        marginTop : '20px',
        borderRadius : '10px',
        // display : 'flex',
        // flexDirection : 'column',
        // alignItems : 'center',
        fontFamily : 'TrebuchetMS'
    }
  return (
    <div style={boxStyle}>
        <h2>{teamName}</h2>
        <h4>{name}</h4>
        {grade ? <h6>{grade}</h6> : <h6>팀원</h6>}
    </div>
  )
}

export default Member