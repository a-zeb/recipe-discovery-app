import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Category from './pages/Category'
import RecipeDetail from './pages/RecipeDetail'
import Favorites from './pages/Favorites'
import Search from './pages/Search'
import './App.css'

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  )
}

export default App
