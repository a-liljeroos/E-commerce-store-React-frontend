import styles from "./Nav.module.scss";
import NavCustomerPaths from "./NavCustomerPaths";
import NavSearchItems from "./NavSearchItems";
import NavSearchResults from "./NavSearchResults";
import NavTitle from "./NavTitle";

const Nav = () => {
  return (
    <div className={styles.navFrame}>
      <NavTitle />
      <NavSearchItems />
      <NavCustomerPaths />
      <NavSearchResults />
    </div>
  );
};

export default Nav;
