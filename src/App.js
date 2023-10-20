import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './componentes/pages/home'
import MoviePage from './componentes/pages/filme'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to='/' id='homeLink'>Movies-Release</Link>
          <Link to='/favoritos'>Favorites</Link>
        </header>

        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/favoritos'/>
            <Route path='/filme/:id' element={<MoviePage/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
