import React from "react";
import Button from "../Button";
import style from "./Form.module.scss";

function Form() {
  return (
    <form className={style.newTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input type="text" name="task" id="task" placeholder="O que você quer estudar?" required />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input type="time" step="1" id="time" min="00:00:00" max="03:00:00" required />
      </div>
      <Button />
    </form>
  );
}

export default Form;
