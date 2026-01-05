import { useFavorites } from '../context/FavoritesContext'
import useFetch from '../hooks/useFetch'
import RecipeCard from '../components/RecipeCard'
import Spinner from '../components/Spinner'

function Favorites() {
  const { favorites } = useFavorites()

  if (favorites.length === 0) {
    return <div>No favorites yet. Browse recipes and add some!</div>
  }

  return (
    <div>
      <h1>My Favorites</h1>
      <div className="recipes-grid">
        {favorites.map(id => (
          <FavoriteRecipe key={id} id={id} />
        ))}
      </div>
    </div>
  )
}

function FavoriteRecipe({ id }) {
  const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)

  if (loading) return <Spinner />
  if (error) return null

  const recipe = data?.meals?.[0]
  if (!recipe) return null

  return <RecipeCard id={id} image={recipe.strMealThumb} title={recipe.strMeal} />
}

export default Favorites
