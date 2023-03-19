import { useState } from "react";
import styles from "./Nav.module.scss";
import { SlBasket } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";
import MiniShoppingCart from "./MiniShoppingCart";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const NavCustomerPaths = () => {
  const [openMiniCart, setOpenMiniCart] = useState<boolean>(false);
  const { cartQuantity } = useShoppingCart();
  return (
    <div className={styles.navCustomerPathsContainer}>
      <button className={styles.navCustomerPathBtn}>
        <BsPerson size={30} color={"black"} />
      </button>
      <button
        onClick={() => setOpenMiniCart(!openMiniCart)}
        className={styles.navCustomerPathBtn}
      >
        <SlBasket size={30} color={"black"} />
        {cartQuantity === 0 ? (
          <></>
        ) : (
          <div className={styles.itemAmount}>{cartQuantity}</div>
        )}
      </button>
      {openMiniCart && <MiniShoppingCart closeCart={setOpenMiniCart} />}
    </div>
  );
};

export default NavCustomerPaths;
