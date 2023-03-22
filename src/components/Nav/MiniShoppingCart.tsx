import styles from "./MiniShoppingCart.module.scss";
import { Dispatch, SetStateAction } from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { TProduct } from "../../Types";

interface IMiniShoppingCart {
  closeCart: Dispatch<SetStateAction<boolean>>;
}

const MiniShoppingCart = ({ closeCart }: IMiniShoppingCart) => {
  const {
    getItemQuantity,
    removeFromCart,
    cartTotalPrice,
    cartItems,
    cartQuantity,
  } = useShoppingCart();

  return (
    <div className={styles.smallCartFrame}>
      <h2 className={styles.smallCartTitle}>Ostoskori</h2>
      {cartItems.length === 0 ? (
        <div className={styles.miniProductCardEmpty}>Ostoskorisi on tyhjä</div>
      ) : (
        <>
          <div className={styles.smallCartItems}>
            {cartItems.map((item) => {
              return (
                <MiniProductCard
                  product={item.product}
                  quantity={getItemQuantity(item.product)}
                />
              );
            })}
          </div>
          <div className={styles.miniProductCardTotalPrice}>
            Yhteensä: {cartTotalPrice(cartItems)} €
          </div>
        </>
      )}

      <div className={styles.smallCartButtonsFrame}>
        {cartItems.length === 0 ? (
          <></>
        ) : (
          <button className={styles.smallCartButton}>Kassalle</button>
        )}

        <button
          onClick={() => closeCart(false)}
          className={styles.smallCartButton}
        >
          Sulje
        </button>
      </div>
    </div>
  );
};

interface IMiniProductCard {
  product: TProduct;
  quantity: number;
}

const MiniProductCard = ({ product, quantity }: IMiniProductCard) => {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();

  return (
    <div className={styles.miniProductCardFrame}>
      <img
        className={styles.miniProductCardImg}
        src={product.scaled_image}
        alt={product.title}
      />
      <div className={styles.miniProductCardItemInfo}>
        <div className={styles.miniProductCardItemTitle}>{product.title}</div>
      </div>
      <div className={styles.miniProductCardItemAmounts}>
        <button
          onClick={() => decreaseCartQuantity(product)}
          className={styles.miniProductCardQuantityBtn}
        >
          -
        </button>
        <div className={styles.miniProductCardItemQuantity}> {quantity}</div>
        <button
          onClick={() => increaseCartQuantity(product)}
          className={styles.miniProductCardQuantityBtn}
        >
          +
        </button>
      </div>

      <div className={styles.miniProductCardPrices}>
        <div className={styles.miniProductCardPrice}>
          {(product.price * quantity).toFixed(2)} €
        </div>
      </div>
    </div>
  );
};

export default MiniShoppingCart;
