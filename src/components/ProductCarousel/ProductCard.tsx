import styles from "./ProductCarousel.module.scss";
import { TProduct } from "../../Types";

interface IProductCard {
  product: TProduct;
}

const ProductCard = ({ product }: IProductCard) => {
  return (
    <div className={styles.productCardFrame}>
      <img
        className={styles.productScaledImg}
        src={product.scaled_image}
        alt={product.title}
      />
      <h2 className={styles.productTitle}>{product.title}</h2>
      <div className={styles.productBrand}>{product.brand}</div>
    </div>
  );
};

export default ProductCard;
