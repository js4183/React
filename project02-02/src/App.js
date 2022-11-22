import logo from './logo.svg';
import './App.css';
import Menu from './Component/Menu';

function App() {
  return (
    <div>
      <Menu name="아메리카노"></Menu>
      <Menu name="카페라떼" price="4000원"></Menu>
      <Menu name="민트초코" price="4300원"></Menu>
      <Menu name="돌체라떼" price="5000원"></Menu>
    </div>
  );
}

export default App;
