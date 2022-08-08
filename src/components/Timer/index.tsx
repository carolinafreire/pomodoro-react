import style from "./Timer.module.scss";
import Button from "./../Button/index";
import Clock from "./Clock";

function Timer() {
  return (
    <div className={style.timer}>
      <p className={style.title}> Escolha uma tarefa e inicie o cronômetro </p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button>Start</Button>
    </div>
  );
}

export default Timer;
