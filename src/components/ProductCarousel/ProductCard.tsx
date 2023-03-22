import styles from "./ProductCarousel.module.scss";
import { TProduct } from "../../Types";
import { useShoppingCart } from "../../context/ShoppingCartContext";

interface IProductCard {
  product: TProduct;
}

const ProductCard = ({ product }: IProductCard) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  return (
    <div className={styles.productCardFrame}>
      <img
        className={styles.productScaledImg}
        src={product.scaled_image}
        alt={product.title}
      />
      <h2 className={styles.productTitle}>{product.title}</h2>
      <div className={styles.productBrand}>{product.brand}</div>
      <div className={styles.productCardDivider} />
      <span className={styles.productPrice}>{product.price + " €"}</span>
      <button
        onClick={() => {
          increaseCartQuantity(product);
        }}
        className={styles.buyButton}
      >
        Osta
      </button>
    </div>
  );
};

export default ProductCard;
