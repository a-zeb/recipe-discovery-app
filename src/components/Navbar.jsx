import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`)
      setSearchQuery('')
    }
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search recipes..."
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  )
}

export default Navbar
