import styles from "./Item.module.css";
const Item = ({ fooditemss, bought, handleByButton }) => {
  return (
    <li
      className={`${styles["hs-item"]}  list-group-item ${bought && "active"} `}
    >
      {fooditemss}
      <button className={styles.button} onClick={handleByButton}>
        Buy
      </button>
    </li>
  );
};
export default Item;
