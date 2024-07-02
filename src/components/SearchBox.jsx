import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/filters/slice";
import styles from "../components/SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filters.filter);

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={styles.searchContainer}>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        placeholder="Search Contacts"
        value={filterValue}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;
