import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useFavorites } from '../context/FavoritesContext'
import Spinner from '../components/Spinner'
import ErrorMessage from '../components/ErrorMessage'

function RecipeDetail() {
  const { id } = useParams()
  const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  const { addFavorite, removeFavorite, isFavorite } = useFavorites()

  if (loading) return <Spinner />
  if (error) return <ErrorMessage message={error} />

  const recipe = data?.meals?.[0]
  if (!recipe) return <div>Recipe not found</div>

  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: recipe[`strIngredient${i}`],
        measure: recipe[`strMeasure${i}`]
      })
    }
  }

  const handleFavoriteClick = () => {
    if (isFavorite(id)) {
      removeFavorite(id)
    } else {
      addFavorite(id)
    }
  }

  return (
    <div>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p>Category: {recipe.strCategory}</p>
      <p>Area: {recipe.strArea}</p>
      <button onClick={handleFavoriteClick}>
        {isFavorite(id) ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item.measure} {item.ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p>{recipe.strInstructions}</p>
    </div>
  )
}

export default RecipeDetail
