import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Products from './components/Products';
import Detail from './components/Detail';
import Join from './components/Join';
import Cal from './components/Cal';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Products />}/>
          <Route path='/detail:num' element={<Detail />}/>
          <Route path='/join' element={<Join/>}/>
        </Routes>
          <Cal/>
      </div>
    </BrowserRouter>
  );
}

export default App;
