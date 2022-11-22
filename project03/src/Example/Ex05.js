import React from 'react'
import PhotoCard from './Ex05Com/PhotoCard'

const Ex05 = () => {

    // 조건1) Ex05Com 폴더 => PhotoCard.js 컴포넌트 사용!
    // 조건2) member라는 배열안에 name과 url 주소가 포함된
    //        객체들을 생성할 것
    // 조건3) 만약 배열에 값을 추가하면 바로 새로운 카드들이
    //        생기게 할 것

    // *** 다하면 디자인을 진행~

    let Member = [{
        name: '카리나',
        url : <img width='100px' height='120px' src='https://file.mk.co.kr/meet/neds/2022/03/image_readmed_2022_233456_16472225874973831.jpg'></img>
        // url : 'https://file.mk.co.kr/meet/neds/2022/03/image_readmed_2022_233456_16472225874973831.jpg'
    }, {
        name: '수지',
        url : <img width='100px' height='120px' src='https://file.mk.co.kr/meet/neds/2022/06/image_readtop_2022_537739_16557030505081253.jpg'></img>
    }, {
        name: "아이유",
        url : <img width='100px' height='120px' src='https://dimg.donga.com/ugc/CDB/WOMAN/Article/62/aa/bd/43/62aabd4312a1d2738250.jpg'></img>
    }
    ]
    let renderMember = Member.map(item => (<PhotoCard key={item.name} item={item}></PhotoCard>))

    let container ={
        display : 'flex'
    }
    return (
        // <div>
        //     <table border='1'>
        //         <tbody>
        //             <tr>
        //                 {renderMember}
        //             </tr>
        //         </tbody>
        //     </table>
        // </div>
        <div style={container}>
            {renderMember}
        </div>
    )
}

export default Ex05