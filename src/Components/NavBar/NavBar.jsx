import { useProducts } from "../Providers/ProductProviders";
import styles from "./NavBar.module.css"

const NavBar = () => {
    const products = useProducts()
    const totalItems = products.filter((p) => p.quantity > 0).length
    return ( 
        <header className={styles.header}>
            <h2>fronthooks.ir shopping</h2>
            <span className={styles.value}>{totalItems}</span>
        </header>
     );
}
 
export default NavBar;