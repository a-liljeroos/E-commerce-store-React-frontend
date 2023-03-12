import styles from "./Nav.module.scss";
import { SlBasket } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";
const NavCustomerPaths = () => {
  return (
    <div className={styles.navCustomerPathsContainer}>
      <button className={styles.navCustomerPathBtn}>
        <BsPerson size={30} />
      </button>
      <button className={styles.navCustomerPathBtn}>
        <SlBasket size={30} />
      </button>
    </div>
  );
};

export default NavCustomerPaths;
