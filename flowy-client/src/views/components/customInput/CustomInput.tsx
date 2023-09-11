import React from "react";
import styles from "./CustomInput.module.scss";

const CustomInput = (props: any) => {
  return (
    <input
      placeholder={props.placeholder}
      className={styles.customInput + " " + props.className}
      value={props.value}
      onChange={props.onChange}
      name={props.name}
      type={props.type}
    />
  );
};

export default CustomInput;
