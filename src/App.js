import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link>Movies-Release</Link>
          <Link>Favorites</Link>
        </header>

        <Routes>
          <Route path='/'/>
          <Route path='/favoritos'/>
          <Route path='/filme/:id'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
