import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Home from './componentes/pages/home'
import FavoritoPage from './componentes/pages/favoritos'
import MoviePage from './componentes/pages/filme'
import Error from './componentes/pages/erro'
function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={1700}/>
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
            <Route path='*' element={<Error/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
