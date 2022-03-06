import { BiTrash } from "react-icons/bi";
import styles from "./Product.module.css";

const Product = ({ onChange, onDelete, onIncrement, onDecrement, product }) => {
  return (
    <div className={styles.container}>
      <p>product name:  {product.title}</p>
      <p>product price :  {product.price}</p>
      <span className={styles.value}>{product.quantity}</span>
      <button onClick={onDecrement} className={product.quantity > 1 ? styles.button : styles.trash}>
        {product.quantity > 1 ? "-" : <BiTrash />}
      </button>
      <button onClick={onIncrement} className={`${styles.button} ${styles.inc}`}>+</button>
      <button onClick={onDelete} className={styles.button}>Delete</button>
    </div>
  );
};

export default Product;
