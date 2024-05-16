import { useDispatch } from "react-redux";
import { SetFilterName } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

export const SearchBox = ({ searchValue }) => {
  const dispatch = useDispatch();
  const handleFilteredData = (event) => {
    dispatch(SetFilterName(event.target.value));
  };
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="search"
        value={searchValue}
        onChange={handleFilteredData}
        placeholder="Enter your search ..."
      />
    </label>
  );
};

export default SearchBox;
