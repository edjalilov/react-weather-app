import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import style from "./CurrentDay.module.scss";

type Props = {};

export const CurrentDay = (props: Props) => {
  return (
    <div className={style.current_day}>
      <div className={style.top_block}>
        <div className={style.top_block_wrapper}>
          <div className={style.current_temp}>20°</div>
          <div className={style.this_day}>Сегодня</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={style.bottom_block}>
        <div className={style.current_time}>
          Время: <span>1:28</span>
        </div>
        <div className={style.current_city}>
          Город: <span>Ташкент</span>
        </div>
      </div>
    </div>
  );
};
