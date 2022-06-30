import React, { useState } from "react";
import style from "./Header.module.scss";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import Select from "react-select";
type Props = {};

export const Header = (props: Props) => {
  const [theme, setTheme] = useState("light");

  const options = [
    { value: "сity-1", label: "Ташкент" },
    { value: "сity-2", label: "Москва" },
    { value: "сity-3", label: "Санкт-Петербург" },
  ];

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 0 ? "4f4f4f" : "rgba(71, 147, 255, 0.2)",
      width: "200px",
      height: "38px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: 0 ? "#fff" : "#000",
    }),
  };

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    const root = document.querySelector(":root") as HTMLElement;
    // root.style.setProperty
  };

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={style.title}>React Weather</div>
      </div>
      <div className={style.wrapper}>
        <div className={style.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          defaultValue={options[0]}
          options={options}
          styles={colourStyles}
        />
      </div>
    </header>
  );
};
