import { useSearchParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Spinner from '../components/Spinner'
import ErrorMessage from '../components/ErrorMessage'
import RecipeCard from '../components/RecipeCard'

function Search() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query')
  const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)

  if (loading) return <Spinner />
  if (error) return <ErrorMessage message={error} />

  if (!data?.meals) {
    return <div>No results found for "{query}"</div>
  }

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <div className="recipes-grid">
        {data.meals.map(meal => (
          <RecipeCard
            key={meal.idMeal}
            id={meal.idMeal}
            image={meal.strMealThumb}
            title={meal.strMeal}
          />
        ))}
      </div>
    </div>
  )
}

export default Search
