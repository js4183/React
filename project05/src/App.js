import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import NewsItem from './components/NewsItem';



function App() {
  
  const [data, setData] = useState([])
  const [db, setDb] = useState('')

  let url = 'https://newsapi.org/v2/top-headlines?country=kr&apiKey=fa8d9d2a4b2a41b6805c902f4a3d8929'
  
  const getNews = () => {
    // axios.get(url).then((res) => { setData(res.data.articles) }).catch(() => { alert('error!') })
  }

  const getDb = () => {
    // axios.get('http://localhost:8123/beaver/main').then(res => console.log(res)).catch()
  }
  // Axios : 비동기 통신 라이브러리
  // (1) 설치 : npm i axios
  // (2) import axios from 'axios'
  // (3) axios로 데이터 조회하기
  // axios                 : 비동기적으로 데이터를 요청
  //      .get(url)        : get 방식 / url에 있는 데이터
  //       .then(()=>{})   : 데이터 조회 성공 시
  //        .catch(()=>{}) : 데이터 조회 실패 시 
  //         .then(()=>{}) : 항상 실행하는 것

  // ** axios로 데이터 전송하기 (백엔드에)
  // axios                                : 비동기적으로 데이터 전송
  //      .post(url,{보낼데이터})         : 전송할 데이터, url
  //        .then(()=>{})
  //          .catch(()=>{})


  // 화면이 렌더링이 끝나면! 실행해주세요!
  useEffect(() => {
    // getNews()
    // getDb()
    fetch('/beaver/main')
    .then(res => res.text())
    .then(db => {
      setDb(db)})
  }, [])

      // {data.map((item=>(<div key={item.title}>
      //   <img src={item.urlToImage} width="200px"></img>
      //   <h4>{item.title}</h4>
      //   <p>{item.description}</p>
      //   </div>
      //   )))}
  let ranD = data.map((item,idx)=>(<NewsItem key={idx+item.title} item={item}/>))



  return (
    <div>
      {/* {ranD} */}

      {/* {db} */}
    </div>
  );
}

export default App;
