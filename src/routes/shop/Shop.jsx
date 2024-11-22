import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import ProductCard from "../../components/productcard/ProductCard";
import './shop.scss'
const Shop = () => {
	const { products } = useContext(ProductsContext)
  return (
    <div className="products-container">
      {products.map((product) => (
				<ProductCard key={ product.id } product={ product }/>
			))}
    </div>
  )
}

export default Shop;