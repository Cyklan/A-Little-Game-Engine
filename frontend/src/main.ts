import { engineInit } from "littlejsengine";
import "./style.css";

function noop() {
  void 0;
}

engineInit(noop, noop, noop, noop, noop);
