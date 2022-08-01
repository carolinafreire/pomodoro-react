import style from "./Button.module.scss";

function Button({ buttonTitle }: { buttonTitle: string }) {
  return <button className={style.button}>{buttonTitle}</button>;
}

export default Button;
