import styles from "./Nav.module.scss";
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useNavSearch } from "../../context/NavSearchContext";
import { validateSearchInput } from "../Utilities/validateInput";
import { useState } from "react";

const NavSearchItems = () => {
  const { searchForm, setSearchForm } = useNavSearch();
  const [showErrorMsg, setShowErrorMsg] = useState<boolean>(false);

  function updateField(input: string) {
    setShowErrorMsg(false);

    if (input === "" && searchForm.length === 1) {
      setSearchForm(input);
      return;
    }
    const inputNoSpace = input.trimStart();
    if (validateSearchInput(inputNoSpace)) {
      setSearchForm(inputNoSpace);
      return;
    }
    setShowErrorMsg(true);
  }

  function emptyField() {
    setSearchForm("");
  }

  return (
    <div className={styles.navSearchContainer}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        action="get"
        role="search"
        className={styles.navSearchForm}
      >
        {showErrorMsg ? (
          <div className={styles.searchErrorMsg}>
            Erikoismerkit ja numerot ei sallittuja
          </div>
        ) : null}
        <input
          placeholder="Etsi tuotteita"
          className={styles.navSearchInput}
          name="q"
          type="text"
          value={searchForm}
          onBlur={() => {
            setShowErrorMsg(false);
          }}
          onChange={(e) => {
            updateField(e.target.value);
          }}
        />
        {searchForm && (
          <button
            className={styles.navEmptyField}
            onClick={() => {
              emptyField();
            }}
          >
            <RxCross2 size={28} color="black" />
          </button>
        )}
      </form>
    </div>
  );
};

export default NavSearchItems;
