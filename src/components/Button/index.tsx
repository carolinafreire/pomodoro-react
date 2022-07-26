import style from "./Button.module.scss";

function Button({ titleButton }: { titleButton: string }) {
  return <button className={style.button}>{titleButton}</button>;
}

export default Button;
