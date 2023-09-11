import React from "react";
import styles from "./CustomSelect.module.scss";
import Select from "react-select";

const CustomSelect = (props: any) => {
  return (
    <Select
      className={styles.customSelect + " " + props.className}
      classNamePrefix="selective"
      options={props.options}
      isClearable={false}
      isOptionSelected={props.selected}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      closeMenuOnSelect={props.closeMenuOnSelect ? true : false}
      isDisabled={props.isDisabled}
    />
  );
};

export default CustomSelect;
