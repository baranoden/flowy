import React from "react";
import { useDispatch } from "react-redux";

const LanguageSelector = () => {
  const dispatch = useDispatch();

  const handleLocaleChange = (e: any) => {
    // dispatch(localeHandler(e.target.value));
  };

  return (
    <div>
      <label htmlFor="locale-select">Select a language: </label>
      <select id="locale-select" onChange={handleLocaleChange}>
        <option value="en">English</option>
        <option value="tr">Turkish</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
