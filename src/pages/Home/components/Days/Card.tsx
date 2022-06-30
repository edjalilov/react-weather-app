import style from "./Days.module.scss";
import { Day } from "./Days";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
interface Props {
  day: Day;
}

export const Card = ({ day }: Props) => {
  const { days_of_the_week, day_info, icon_id, temp_day, temp_night, info } =
    day;
  return (
    <div className={style.card}>
      <div className={style.day}>{days_of_the_week}</div>
      <div className={style.day_info}>{day_info}</div>
      <div className={style.img}>
        <GlobalSvgSelector id={icon_id} />
      </div>
      <div className={style.temp_day}>{temp_day}</div>
      <div className={style.temp_night}>{temp_night}</div>
      <div className={style.info}>{info}</div>
    </div>
  );
};
