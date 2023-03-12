import styles from "./Nav.module.scss";
import { BsSearch } from "react-icons/bs";
const NavSearchItems = () => {
  return (
    <div className={styles.navSearchContainer}>
      <form action="get" role="search" className={styles.navSearchForm}>
        <input
          placeholder="Etsi tuotteita"
          className={styles.navSearchInput}
          name="q"
          type="text"
        />
        <button className={styles.navSearchButton} type="submit">
          <BsSearch size={20} color="black" />
        </button>
      </form>
    </div>
  );
};

export default NavSearchItems;
