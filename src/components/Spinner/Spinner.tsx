import { ImSpinner5 } from "react-icons/im";
import styles from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <div className={styles.spinnerCont}>
      <ImSpinner5 size={50} className={styles.spinner} />
    </div>
  );
};

export default Spinner;
