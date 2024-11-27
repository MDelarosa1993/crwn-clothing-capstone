import { Routes, Route } from 'react-router-dom'
import './shop.scss';
import CategoriesPreview from '../categoriespreview/CategoriesPreview';
import Category from '../category/Category';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=":category" element={<Category />}/>
    </Routes>
  )
}

export default Shop;