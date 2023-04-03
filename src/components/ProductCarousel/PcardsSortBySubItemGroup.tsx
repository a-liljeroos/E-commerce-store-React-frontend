import { TProduct } from "../../Types";
import ProductCard from "./ProductCard";
import { useState } from "react";
import styles from "./ProductCarousel.module.scss";
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
        {showGroups.map((group) => {
          return (
            <div className={styles.inputCont}>
              <label className={styles.inputContLabel} htmlFor="">
                {group}
                <input className={styles.inputContInput} type="checkbox" />
              </label>
            </div>
          );
        })}
      </div>

      {products.map((product) => {
        return <ProductCard product={product} transparentBg={false} />;
      })}
    </div>
  );
};

export default PcardsSortBySubItemGroup;
