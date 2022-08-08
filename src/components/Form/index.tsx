import React from "react";
import style from "./Form.module.scss";
import Button from "../Button";

class Form extends React.Component {
  render() {
    return (
      <form className={style.newTask}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Adicione um novo tópico</label>
          <input type="text" name="task" id="task" placeholder="O que você quer fazer?" required />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">Tempo</label>
          <input type="time" step="1" name="time" id="time" min="00:00:00" max="10:30:00" required />
        </div>
        <Button> Adicionar </Button>
      </form>
    );
  }
}

export default Form;
