import { useNavSearch } from "../../context/NavSearchContext";
import styles from "./Nav.module.scss";

const NavSearchResults = () => {
  const { apiSearchTerms } = useNavSearch();

  return <div className={styles.searchResultsFrame}>{apiSearchTerms}</div>;
};

export default NavSearchResults;
