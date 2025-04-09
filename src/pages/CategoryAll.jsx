// src/pages/CategoryAll.jsx
import { useParams } from 'react-router-dom'

const CategoryAll = () => {
  const { categoryName } = useParams() // URL'dan kategoriya nomini olish

  return (
    <div>
      <h1>{categoryName} Kategoriyasidagi Mahsulotlar</h1>
      {/* Kategoriyaga mos mahsulotlarni shu yerda ko'rsating */}
    </div>
  )
}

export default CategoryAll
