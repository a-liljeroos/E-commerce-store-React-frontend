import { useNavSearch } from "../../context/NavSearchContext";
import { useNavSearchFetch } from "../Hooks/useNavSearchFetch";
import PcardsSortBySubItemGroup from "../ProductCarousel/PcardsSortBySubItemGroup";
import ProductCard from "../ProductCarousel/ProductCard";
import styles from "./Nav.module.scss";

const NavSearchResults = () => {
  const { apiSearchTerms } = useNavSearch();
  const { data, isLoading, isError } = useNavSearchFetch({
    searchTerms: apiSearchTerms,
  });

  if (isError) {
    return <> error</>;
  }
  if (isLoading || !data) {
    return <> Loading</>;
  }

  const products = data.products;
  const itemSubGroups = data.itemSubGroups;

  if (products.length == 0) {
    return <div className={styles.searchResultsFrame}>Ei osumia</div>;
  }

  return (
    <>
      <PcardsSortBySubItemGroup
        products={products}
        itemSubGroups={itemSubGroups}
      />
    </>
  );
};

export default NavSearchResults;
