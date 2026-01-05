import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Spinner from '../components/Spinner'
import ErrorMessage from '../components/ErrorMessage'
import RecipeCard from '../components/RecipeCard'

function Category() {
  const { name } = useParams()
  const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)

  if (loading) return <Spinner />
  if (error) return <ErrorMessage message={error} />

  return (
    <div>
      <h1>{name} Recipes</h1>
      <div className="recipes-grid">
        {data?.meals?.map(meal => (
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

export default Category
