import { Card } from "./Card";
import style from "./Days.module.scss";
import { Tabs } from "./Tabs";

type Props = {};

export interface Day {
  days_of_the_week: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}
export const Days = (props: Props) => {
  const days: Day[] = [
    {
      days_of_the_week: "Понедельник",
      day_info: "28 авг",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      days_of_the_week: "Вторник",
      day_info: "29 авг",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      days_of_the_week: "Среда",
      day_info: "30 авг",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      days_of_the_week: "Четверг",
      day_info: "31 авг",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      days_of_the_week: "Пятница",
      day_info: "1 сен",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      days_of_the_week: "Суббота",
      day_info: "2 сен",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      days_of_the_week: "Воскресенья",
      day_info: "3 сен",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
  ];
  return (
    <>
      <Tabs />
      <div className={style.days}>
        {days.map((day: Day) => (
          <Card day={day} />
        ))}
      </div>
    </>
  );
};
