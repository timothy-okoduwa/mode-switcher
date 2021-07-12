import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { Button } from "antd";
import React, { useState } from "react";
import a from "./t.JPG";
import style from "styled-components";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import storage from "local-storage-fallback";
const GlobalStyled = createGlobalStyle`
body{
  background-color: ${({ theme }) =>
    theme.myTheme === "dark" ? "black" : "white"};
  color: ${({ theme }) => (theme.myTheme === "dark" ? "white" : "black")}

}
`;

function App() {
  const storeThemeChoice = () => {
    const saveTheme = storage.getItem("toggle");
    return saveTheme ? JSON.parse(saveTheme) : { myTheme: "light" };
  };
  const [toggle, setToggle] = useState(storeThemeChoice);
  React.useEffect(() => {
    storage.setItem("toggle", JSON.stringify(toggle));
  }, [toggle]);
  return (
    <ThemeProvider theme={toggle}>
      <GlobalStyled />
      <Container>
        <Holder>this is my name</Holder>
        <Button
          type="primary"
          onClick={() => {
            setToggle(
              toggle.myTheme === "dark"
                ? {
                    myTheme: "light",
                  }
                : { myTheme: "dark" }
            );
          }}
        >
          ToggletMode
        </Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
const Container = style.div`
height:100vh;
width:100vw;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;

`;
const Holder = style.div`
font-size:90px;

`;
