import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import * as Style from "./components/styles";

const App: React.FC = () => {
  return <Style.Title textcolor="blue">Hello World</Style.Title>;
};

ReactDOM.render(<App />, document.getElementById("app"));
