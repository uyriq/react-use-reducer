import React, { useEffect } from "react";
import styles from "./main-button.module.css";

export const MainButton = ({
  type,
  children,
  extraClass,
  inputButton,
  secondary,
  onClick,
}) => {
  useEffect(() => {
    const listener = (event) => {
      if (event.key === "Enter" || event.code === "NumpadEnter") {
        console.log(
          "https://stackoverflow.com/questions/33211672/how-to-submit-a-form-using-enter-key-in-react-js"
        );
        event.preventDefault();
        onClick();
      }
    };

    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [onClick]);

  const className = `${styles.button} ${extraClass} ${
    inputButton ? styles.input : ""
  } ${secondary ? styles.secondary : ""}`;
  return (
    <button onClick={onClick} type={type} className={className}>
      {children}
    </button>
  );
};
