import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const CategoryAll = () => {
  const { categoryName } = useParams()
  const navigate = useNavigate()

  // Fetch products by category name

  return (
    <div>
      <h1>CategoryAll</h1>
    </div>
  )
}

export default CategoryAll
