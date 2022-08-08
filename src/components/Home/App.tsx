import Form from "../Form/index";
import List from "../List";
import Timer from "../Timer";
import style from "./App.module.scss";

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Timer />
    </div>
  );
}

export default App;
