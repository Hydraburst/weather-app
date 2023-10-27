import styles from "./TopBar.module.css";
import { useState } from "react";
import PropTypes from "prop-types";

const TopBar = ({ onSearch }) => {
  const [userInput, setUserInput] = useState("");
  const userInputHandler = (e) => {
    setUserInput(e.target.value);
  };

  const userSearchHandler = (text) => {
    onSearch(userInput);
    setUserInput("");
  };
  return (
    <div className={styles.topBar}>
      <input
        type="text"
        className={styles.input}
        onChange={userInputHandler}
        value={userInput}
      />
      <button className={styles.button} onClick={userSearchHandler}>
        <span className={styles.ggSearch}></span>
      </button>
    </div>
  );
};

TopBar.propTypes = {
  onSearch: PropTypes.func,
};

export default TopBar;
