import styles from "./Nav.module.scss";
import { BsSearch } from "react-icons/bs";
import { useNavSearch } from "../../context/NavSearchContext";
import { useState } from "react";

const NavSearchItems = () => {
  const { searchForm, setSearchForm } = useNavSearch();

  return (
    <div className={styles.navSearchContainer}>
      <form action="get" role="search" className={styles.navSearchForm}>
        <input
          placeholder="Etsi tuotteita"
          className={styles.navSearchInput}
          name="q"
          type="text"
          value={searchForm}
          onChange={(e) => {
            setSearchForm(e.target.value);
          }}
        />
        <button className={styles.navSearchButton} type="submit">
          <BsSearch size={20} color="black" />
        </button>
      </form>
    </div>
  );
};

export default NavSearchItems;
