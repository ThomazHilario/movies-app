import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './componentes/pages/home'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to='/' id='homeLink'>Movies-Release</Link>
          <Link>Favorites</Link>
        </header>

        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/favoritos'/>
            <Route path='/filme/:id'/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
