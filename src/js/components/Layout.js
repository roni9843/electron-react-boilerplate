import React, { useState } from "react";
import Input from "./Input";
import OptionSelectHomePage from "./OptionSelectHomePage";
import ShowData from "./ShowData";

export default function Layout() {
  const [optionSelect, setOptionSelect] = useState("home");

  return (
    <div>
      {optionSelect === "home" ? (
        <OptionSelectHomePage
          setOptionSelect={setOptionSelect}
        ></OptionSelectHomePage>
      ) : optionSelect === "show" ? (
        <ShowData></ShowData>
      ) : (
        <Input></Input>
      )}
    </div>
  );
}
