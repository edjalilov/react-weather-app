import { CurrentDay } from "./components/CurrentDay/CurrentDay";
import { CurrentDayInfo } from "./components/CurrentDayInfo/CurrentDayInfo";
import { Days } from "./components/Days/Days";
import style from "./Home.module.scss";

type Props = {};

export const Home = (props: Props) => {
  return (
    <div className={style.home}>
      <div className={style.wrapper}>
        <CurrentDay />
        <CurrentDayInfo />
      </div>
      <Days />
    </div>
  );
};
