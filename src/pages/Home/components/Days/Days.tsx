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
      day_info: "1 июля",
      icon_id: "sun",
      temp_day: "+34",
      temp_night: "+23",
      info: "Облачно",
    },
    {
      days_of_the_week: "Вторник",
      day_info: "2 июля",
      icon_id: "mainly_cloudy",
      temp_day: "+28",
      temp_night: "+24",
      info: "Облачно",
    },
    {
      days_of_the_week: "Среда",
      day_info: "3 июля",
      icon_id: "rain",
      temp_day: "+22",
      temp_night: "+18",
      info: "Облачно",
    },
    {
      days_of_the_week: "Четверг",
      day_info: "4 июля",
      icon_id: "small_rain",
      temp_day: "+25",
      temp_night: "+22",
      info: "Облачно",
    },
    {
      days_of_the_week: "Пятница",
      day_info: "5 июля",
      icon_id: "sun",
      temp_day: "+30",
      temp_night: "+26",
      info: "Облачно",
    },
    {
      days_of_the_week: "Суббота",
      day_info: "6 июля",
      icon_id: "sun",
      temp_day: "+35",
      temp_night: "+26",
      info: "Облачно",
    },
    {
      days_of_the_week: "Воскресенье",
      day_info: "7 июля",
      icon_id: "sun",
      temp_day: "+34",
      temp_night: "+28",
      info: "Облачно",
    },
  ];
  return (
    <>
      <Tabs />
      <div className={style.days}>
        {days.map((day: Day) => (
          <Card key={day.days_of_the_week} day={day} />
        ))}
      </div>
    </>
  );
};
