import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/filters/slice";
import { selectFilter } from "../redux/filters/selectors";
import styles from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.filterContainer}>
      <label className={styles.filterLabel}>Find contacts by name</label>
      <input
        className={styles.filterInput}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
