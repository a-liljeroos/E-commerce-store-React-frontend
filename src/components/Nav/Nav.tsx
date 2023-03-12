import styles from "./Nav.module.scss";
import NavCustomerPaths from "./NavCustomerPaths";
import NavSearchItems from "./NavSearchItems";
import NavTitle from "./NavTitle";

const Nav = () => {
  return (
    <div className={styles.navFrame}>
      <NavTitle />
      <NavSearchItems />
      <NavCustomerPaths />
    </div>
  );
};

export default Nav;
