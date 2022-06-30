import style from "./Days.module.scss";

type Props = {};

export const Tabs = (props: Props) => {
  const tabs = [
    {
      value: "На неделю",
    },
    {
      value: "На 10 дней",
    },
    {
      value: "На месяц",
    },
  ];

  return (
    <div className={style.tabs}>
      <div className={style.tabs_wrapper}>
        {tabs.map((tab) => (
          <div className={style.tab} key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={style.cancel}>Отменить</div>
    </div>
  );
};
