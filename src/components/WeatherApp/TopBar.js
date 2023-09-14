import styles from "./TopBar.module.css";
import search_icon from "../../assets/images/search.png";
import { useState } from "react";

const TopBar = (props) => {
  const [userInput, setUserInput] = useState("");
  const userInputHandler = (e) => {
    setUserInput(e.target.value);
  };

  const userSearchHandler = (text) => {
    props.onSearch(userInput);
    setUserInput("");
  };
  return (
    <div className={styles["top-bar"]}>
      <input
        type="text"
        className={styles.input}
        onChange={userInputHandler}
        value={userInput}
      />
      <button className={styles.button} onClick={userSearchHandler}>
        {/* <img src={search_icon} alt="" /> */}
        <span className={styles["gg-search"]}></span>
      </button>
    </div>
  );
};

export default TopBar;
