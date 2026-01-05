import { Link } from 'react-router-dom'

function RecipeCard({ id, image, title }) {
  return (
    <Link to={`/recipe/${id}`}>
      <div className="recipe-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </div>
    </Link>
  )
}

export default RecipeCard
