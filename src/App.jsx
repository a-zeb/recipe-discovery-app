import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext'
import Navbar from './components/Navbar'

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/category/:name" element={<div>Category</div>} />
          <Route path="/recipe/:id" element={<div>Recipe Detail</div>} />
          <Route path="/favorites" element={<div>Favorites</div>} />
          <Route path="/search" element={<div>Search</div>} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  )
}

export default App
