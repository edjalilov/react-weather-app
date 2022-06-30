import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { CurrentDayItem } from "../../pages/Home/components/CurrentDayInfo/CurrentDayItem";
import style from "./Popup.module.scss";

interface Props {}

export const Popup = (props: Props) => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: "20° - ощущается как 17°",
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: "765 мм ртутного столба - нормальное",
    },
    {
      icon_id: "precipitation",
      name: "Осадка",
      value: "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
    },
  ];
  return (
    <>
      <div className={style.blur}></div>

      <div className={style.popup}>
        <div className={style.day}>
          <div className={style.day_temp}>20°</div>
          <div className={style.day_name}>Cреда</div>
          <div className={style.img}>
            <GlobalSvgSelector id="sun" />
          </div>
          <div className={style.day_time}>
            Время: <span>1:28</span>
          </div>
          <div className={style.day_city}>
            Город: <span>Ташкент</span>
          </div>
        </div>
        <div className={style.current_day_info_items}>
          {items.map((item) => (
            <CurrentDayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={style.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};
