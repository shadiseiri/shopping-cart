import NavBar from "./Components/NavBar/NavBar";
import ProductList from "./Components/ProductList/ProductList";
import ProductsProviders from "./Components/Providers/ProductProviders";
import styles from "./App.module.css"
import Filter from "./Components/Filter/Filter";

function App() {
  return (
    <div className={styles.container}>
      <ProductsProviders>
        <NavBar />
        <Filter />
        <ProductList />
      </ProductsProviders>
    </div>
  );
}

export default App;
