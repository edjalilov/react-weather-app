import { useEffect } from "react";
import { useCustomDispatch, useCustomSelector } from "./../../hooks/store";
import { selectCurrentWeatherData } from "../../store/selectors";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import { CurrentDay } from "./components/CurrentDay/CurrentDay";
import { CurrentDayInfo } from "./components/CurrentDayInfo/CurrentDayInfo";
import { Days } from "./components/Days/Days";
import style from "./Home.module.scss";

interface Props {}

export const Home = (props: Props) => {
  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector(selectCurrentWeatherData);
  useEffect(() => {
    dispatch(fetchCurrentWeather("tashkent"));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.home}>
      <div className={style.wrapper}>
        <CurrentDay weather={weather} />
        <CurrentDayInfo />
      </div>
      <Days />
    </div>
  );
};
