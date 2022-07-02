import style from "./Header.module.scss";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import Select from "react-select";
import { useTheme } from "./../../hooks/useTheme";
import { Theme } from "../../context/ThemeContext";
type Props = {};

export const Header = (props: Props) => {
  const theme = useTheme();

  const options = [
    { value: "сity-1", label: "Ташкент" },
    { value: "сity-2", label: "Москва" },
    { value: "сity-3", label: "Санкт-Петербург" },
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? "#181c25" : "rgba(71, 147, 255, 0.2)",
      width: "200px",
      height: "38px",
      cursor: "pointer",
      border: "none",
      fontSize: "17px",
      borderRadius: "10px",
      zIndex: 100,
    }),
    menu: (styles: any) => ({
      ...styles,
      fontSize: "17px",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
  };

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
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
          styles={colorStyles}
        />
      </div>
    </header>
  );
};
