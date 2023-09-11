import React from "react";
import { Button } from "react-bootstrap";
import styles from "./CustomButton.module.scss";
const CustomButton = (props: any) => {
  return (
    <Button
      placeholder={props.placeholder}
      className={styles.customButton + " " + props.className}
      value={props.value}
      onClick={props.onClick}
      name={props.name}
      type={props.type}
    >
      {props.holder}
    </Button>
  );
};

export default CustomButton;
