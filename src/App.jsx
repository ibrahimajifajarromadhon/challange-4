import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/MovieDetail/:id' element={<MovieDetail />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;