// import Select from "react-select";
import { useState } from "react";
import { useProducsActions } from "../Providers/ProductProviders";
import styles from "./Filter.module.css";
import SelectComponent from "../../common/Select/Selecet";
import SearchBar from "../../common/Search/Search";
// import Select from 'react-select';

const Filter = () => {
  const dispatch = useProducsActions();
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const filterHandler = (selectedOption) => {
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption: sort });
    setFilter(selectedOption);
  };

  const sortHandler = (selectedOption) => {
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
  };

  const filterOptions = [
    { value: "", label: "All" },
    { value: "s", label: "s" },
    { value: "xs", label: "xs" },
    { value: "m", label: "m" },
    { value: "L", label: "L" },
    { value: "xL", label: "xL" },
    { value: "xxL", label: "xxL" },
  ];

  const sortOptions = [
    { value: "highest", label: "highest" },
    { value: "lowest", label: "lowest" },
  ];

  return (
    <section>
      <SearchBar filter= {filter} />

      <div className={styles.filter}>
        <p>filter products based on:</p>

        <SelectComponent
          value={filter}
          onChange={filterHandler}
          options={filterOptions}
          title="filter by size"
        />
        <SelectComponent
          value={sort}
          onChange={sortHandler}
          options={sortOptions}
          title="sort by price"
        />
      </div>
    </section>
  );
};

export default Filter;
