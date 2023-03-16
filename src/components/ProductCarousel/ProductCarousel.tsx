import styles from "./ProductCarousel.module.scss";
import { TProduct } from "../../Types";
import ProductCard from "./ProductCard";

interface IProductCarousel {
  products: TProduct[];
}

const ProductCarousel = ({ products }: IProductCarousel) => {
  return (
    <div className={styles.productCarouselContainer}>
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
};

export default ProductCarousel;
