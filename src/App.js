import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './componentes/pages/home'
import FavoritoPage from './componentes/pages/favoritos'
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
            <Route path='/favoritos' element={<FavoritoPage/>}/>
            <Route path='/filme/:id' element={<MoviePage/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
