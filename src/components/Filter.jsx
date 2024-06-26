import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/filters/slice";
import { selectFilter } from "../redux/filters/selectors";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={handleChange} />
    </label>
  );
};

export default Filter;
