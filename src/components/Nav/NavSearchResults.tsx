import { useNavSearch } from "../../context/NavSearchContext";
import { useNavSearchFetch } from "../Hooks/useNavSearchFetch";
import ProductCard from "../ProductCarousel/ProductCard";
import styles from "./Nav.module.scss";

const NavSearchResults = () => {
  const { apiSearchTerms } = useNavSearch();
  const { data, isLoading, isError } = useNavSearchFetch({
    searchTerms: apiSearchTerms,
  });

  if (data?.length === 0 && !apiSearchTerms) {
    <div className={styles.searchResultsFrame}></div>;
  }

  if (data?.length === 0) {
    <div className={styles.searchResultsFrame}>Ei tuotteita</div>;
  }

  return (
    <div className={styles.searchResultsFrame}>
      {data?.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
};

export default NavSearchResults;
