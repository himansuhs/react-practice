import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({ onButtonClick }) => {
  const buttonName = [
    "c",
    "1",
    "2",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonName.map((button) => (
        <button className={styles.button} onClick={() => onButtonClick(button)}>
          {button}
        </button>
      ))}
    </div>
  );
};
export default ButtonContainer;
