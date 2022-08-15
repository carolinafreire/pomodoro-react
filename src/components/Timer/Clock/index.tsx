import style from "./Clock.module.scss";

interface Props {
  time: number | undefined;
}

function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minute1, minute2] = String(minutes).padStart(2, "0");
  const [second1, second2] = String(seconds).padStart(2, "0");
  return (
    <>
      <span className={style.clockNumber}>{minute1}</span>
      <span className={style.clockNumber}>{minute2}</span>
      <span className={style.clockDivider}>:</span>
      <span className={style.clockNumber}>{second1}</span>
      <span className={style.clockNumber}>{second2}</span>
    </>
  );
}

export default Clock;
