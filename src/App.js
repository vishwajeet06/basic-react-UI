import React from "react";
import "./style.css";
import Button from "./Button";
import Header from "./Header";
import Main from "./Main";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <div className='btn'>
        <Button ButtonText="Cricket" />
        <Button ButtonText="Chess" />
        <Button ButtonText="Football" />
      </div>
    </div>
  );
};

export default App;
