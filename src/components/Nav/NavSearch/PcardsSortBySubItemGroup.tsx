import { TProduct } from "../../../Types";
import ProductCard from "../../ProductCarousel/ProductCard";
import { useState } from "react";
import styles from "./NavSearch.module.scss";
import { VscRefresh } from "react-icons/vsc";

interface IPcardsSortBySubItemGroup {
  products: TProduct[];
  itemSubGroups: string[];
}

const PcardsSortBySubItemGroup = ({
  products,
  itemSubGroups,
}: IPcardsSortBySubItemGroup) => {
  const [showGroups, setShowGroups] = useState<string[]>(itemSubGroups);

  return (
    <div className={styles.productCardSortFrame}>
      <div className={styles.sortingPickerFrame}>
        {itemSubGroups.map((group) => {
          return (
            <div className={styles.pickerInputCont}>
              <label className={styles.pickerInputLabel} htmlFor="">
                {group}
                <input
                  name="itemgroupPicker"
                  onClick={(e) => setShowGroups([e.currentTarget.value])}
                  className={styles.pickerInput}
                  type="radio"
                  value={group}
                />
              </label>
            </div>
          );
        })}
        {/*  <button onClick={refreshPicker} className={styles.pickerRefreshBtn}>
          <VscRefresh size={25} />
        </button> */}
      </div>

      {products.map((product) => {
        if (showGroups.includes(product.item_group)) {
          return <ProductCard product={product} transparentBg={false} />;
        }
      })}
    </div>
  );
};

export default PcardsSortBySubItemGroup;
