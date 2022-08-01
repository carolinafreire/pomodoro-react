import style from "./Timer.module.scss";
import Button from "../Button";
import Clock from "./Clock";

function Timer() {
  return (
    <div className={style.timer}>
      <p className={style.title}>Escolha uma tarefa</p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button buttonTitle="Start" />
    </div>
  );
}

export default Timer;
