import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Q1. 영화 데이터를 테이블 형태로 렌더링
// 랭킹 - 영화 제목 - 개봉일자
// React JSX 특징 <table>를 <thead><tbody>없이 사용 불가
// <table>
//  <tbody>
//      <tr>td*3</tr>
//  <tbody>
// </table>
const Ex09 = () => {
    
    const [data, setData] = useState([])

    // 1) month 배열로 버튼을 01월 ~10월까지 제작
    // 2) 버튼을 눌렀을 때, 이벤트 처리된 값을 getData 매개변수 안에 넣어서 호출
    // 3) 아무것도 안누른 화면 첫 렌더링 : 오늘 날짜의 데이터
    //   -버튼을 누르면 해당 월의 1일 데이터로 변경
    let month = ['01','02','03','04','05','06','07','08','09','10']

    const getData = (selectMonth) => {
        console.log('원하는 달', selectMonth)
        let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=2022${selectMonth}01`
        
        // axios.get(url).then((res)=>{console.log(res.data.boxOfficeResult.dailyBoxOfficeList[0])}).catch(()=>{alert('error!')})
        // 영화 순위가 모여있는 배열 : data
        // 영화 순위(랭킹) : rank / 영화 이름 : movieNm / 개봉일자 : openDt
        axios.get(url).then((res)=>{setData(res.data.boxOfficeResult.dailyBoxOfficeList)}).catch(()=>{alert('error!')})
    }

    const btnClick = (e) => {
        // selectMonth = e.target.value
        getData(e.target.value)
    }

    useEffect(()=>{
        // 현재 날짜 => 몇월
        let todayMonth = new Date().getMonth()+1
        getData(todayMonth)
    },[])

  return (
    <div>
        <h1>2022년 올해의 영화</h1>
        <p>매달 1일 순위를 보여드립니다!</p>
        {/* 버튼 생성 */}
        {month.map((item)=>(
            <button onClick={btnClick} value={item} key={item}>{item}월</button>
        ))}
        {/* <button onClick={btnClick} value='01'>01월</button>
        <button onClick={btnClick} value='02'>02월</button>
        <button onClick={btnClick} value='03'>03월</button>
        <button onClick={btnClick} value='04'>04월</button>
        <button onClick={btnClick} value='05'>05월</button>
        <button onClick={btnClick} value='06'>06월</button>
        <button onClick={btnClick} value='07'>07월</button>
        <button onClick={btnClick} value='08'>08월</button>
        <button onClick={btnClick} value='09'>09월</button>
        <button onClick={btnClick} value='10'>10월</button> */}
        <table>
            <tbody>
                {/* 여기서부터 반복 시작! */}
                {data.map((item=>(
                <tr key={item.rank}>
                    <td>{item.rank}</td>
                    <td>{item.movieNm}</td>
                    <td>{item.openDt}</td>
                </tr>
                )))}
            </tbody>
        </table>
    </div>
  )
}

export default Ex09