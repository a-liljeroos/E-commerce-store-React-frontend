import { useNavSearch } from "../../context/NavSearchContext";
import styles from "./Nav.module.scss";
import NavCustomerPaths from "./NavCustomerPaths";
import NavSearchItems from "./NavSearch/NavSearchItems";
import NavSearchResults from "./NavSearch/NavSearchResults";
import NavTitle from "./NavTitle";

const Nav = () => {
  const { apiSearchTerms } = useNavSearch();
  return (
    <div className={styles.navFrame}>
      <NavTitle />
      <NavSearchItems />
      <NavCustomerPaths />
      {apiSearchTerms && <NavSearchResults />}
    </div>
  );
};

export default Nav;
