import { Weather } from "../../../../store/types/types";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import style from "./CurrentDay.module.scss";

interface Props {
  weather: Weather;
}

export const CurrentDay = ({ weather }: Props) => {
  const today = new Date();
  const currentTime =
    today.getHours() + ":" + today.getMinutes()

  return (
    <div className={style.current_day}>
      <div className={style.top_block}>
        <div className={style.top_block_wrapper}>
          <div className={style.current_temp}>
            {Math.floor(weather.main.temp)}°
          </div>
          <div className={style.this_day}>Сегодня</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={style.bottom_block}>
        <div className={style.current_time}>
          Время: <span>{currentTime}</span>
        </div>
        <div className={style.current_city}>
          Город: <span>Ташкент</span>
        </div>
      </div>
    </div>
  );
};
