import styles from "./FoodInput.module.css";
let FoodInput = ({ handleChange }) => {
  return (
    <input
      type="text"
      placeholder="enter food item here"
      className={styles.input}
      onKeyDown={handleChange}
    />
  );
};
export default FoodInput;
