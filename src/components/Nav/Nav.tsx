import { useNavSearch } from "../../context/NavSearchContext";
import styles from "./Nav.module.scss";
import NavCustomerPaths from "./NavCustomerPaths";
import NavSearchItems from "./NavSearchItems";
import NavSearchResults from "./NavSearchResults";
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
