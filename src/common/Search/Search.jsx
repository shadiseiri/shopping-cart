import { useState } from "react";
import styles from "./Search.module.css";
import {useProducsActions} from "../../Components/Providers/ProductProviders"

const SearchBar = ({filter}) => {
  const dispatch = useProducsActions()
  const [value, setValue] = useState("");


  const changeHandler = (e) => {
    dispatch({ type: "filter", selectedOption: filter });
    dispatch({type:"search" , event:e})
    setValue(e.target.value);
  };

  return (
    <div className={styles.formControl}>
      <span>search for</span>
      <input
        type="text"
        placeholder="search for"
        onChange={changeHandler}
        value={value}
      />
    </div>
  );
};

export default SearchBar;
