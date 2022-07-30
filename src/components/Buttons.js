import React, { useState } from "react";
import "./Buttons.css";

const Buttons = () => {
  const [display, setDisplay] = useState("0");

  const handleEqual = (displayValue) => {
    let valueArray = displayValue.split(" ");
    let sum = 0;

    for (let i = 0; i < valueArray.length - 1; i++) {
      if (valueArray[i] === "*") {
        const multipleValue =
          parseFloat(valueArray[i - 1]) * parseFloat(valueArray[i + 1]);
        valueArray = [
          valueArray.slice(0, i - 1),
          multipleValue.toString(),
          valueArray.slice(i + 2, valueArray.length),
        ].flat();
        i--;
      } else if (valueArray[i] === "/") {
        const multipleValue =
          parseFloat(valueArray[i - 1]) / parseFloat(valueArray[i + 1]);
        valueArray = [
          valueArray.slice(0, i - 1),
          multipleValue.toString(),
          valueArray.slice(i + 2, valueArray.length),
        ].flat();
        i--;
      }
    }

    for (let i = 0; i < valueArray.length; i++) {
      if (i === 0) {
        sum = parseFloat(valueArray[i]);
      } else if (valueArray[i] === "+") {
        sum = sum + parseFloat(valueArray[i + 1]);
      } else if (valueArray[i] === "-") {
        sum = sum - parseFloat(valueArray[i + 1]);
      }
    }
    if (sum % 1 !== 0) {
      sum = sum.toFixed(2);
    }
    setDisplay(sum.toString());
  };

  const checkIfIsOperator = () => {
    if (
      display.slice(display.length - 2, display.length - 1) === "+" ||
      display.slice(display.length - 2, display.length - 1) === "-" ||
      display.slice(display.length - 2, display.length - 1) === "*" ||
      display.slice(display.length - 2, display.length - 1) === "/"
    ) {
      return true;
    } else {
      return false;
    }
  };

  const checkIfIsDecimal = () => {
    if (
      display.slice(display.length - 2, display.length - 1) === "+" ||
      display.slice(display.length - 2, display.length - 1) === "-" ||
      display.slice(display.length - 2, display.length - 1) === "*" ||
      display.slice(display.length - 2, display.length - 1) === "/"
    ) {
      return true;
    }
    for (let i = display.length - 1; i > 0; i--) {
      if (display[i] === ".") {
        return true;
      } else if (
        display[i] === "+" ||
        display[i] === "-" ||
        display[i] === "*" ||
        display[i] === "/"
      ) {
        return false;
      }
    }
    return false;
  };

  const handleCalc = (value) => {
    if (typeof value === "number") {
      setDisplay(
        display.length === 1 && display === "0"
          ? value.toString()
          : `${display}${value}`
      );
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      if (display.length !== 1 && checkIfIsOperator()) {
        setDisplay(`${display.slice(0, -3)} ${value} `);
      } else {
        setDisplay(`${display} ${value} `);
      }
    } else if (value === "delete") {
      setDisplay(
        display.length === 1
          ? "0"
          : checkIfIsOperator(2)
          ? `${display.slice(0, display.length - 3)}`
          : `${display.slice(0, -1)}`
      );
    } else if (value === "reset") {
      setDisplay("0");
    } else if (value === "decimal") {
      if (!checkIfIsDecimal()) {
        setDisplay(`${display}.`);
      }
    } else if (value === "equal") {
      if (checkIfIsOperator()) {
        handleEqual(display.slice(0, -3));
      } else if (display[display.length - 1] === ".") {
        handleEqual(display.slice(0, -1));
      } else {
        handleEqual(display);
      }
    }
  };
  console.log(display.replace(/,/g, "."));
  return (
    <>
      <div className="display">
        <p className="display-num">{display.replaceAll(".", ",")}</p>
      </div>

      <div className="buttons">
        <button className="number" onClick={() => handleCalc(7)}>
          7
        </button>
        <button className="number" onClick={() => handleCalc(8)}>
          8
        </button>
        <button className="number" onClick={() => handleCalc(9)}>
          9
        </button>
        <button
          className="delete"
          id="delete"
          onClick={(e) => handleCalc("delete")}
        >
          DEL
        </button>
        <button className="number" onClick={() => handleCalc(4)}>
          4
        </button>
        <button className="number" onClick={() => handleCalc(5)}>
          5
        </button>
        <button className="number" onClick={() => handleCalc(6)}>
          6
        </button>
        <button className="operator" onClick={() => handleCalc("+")}>
          +
        </button>
        <button className="number" onClick={() => handleCalc(1)}>
          1
        </button>
        <button className="number" onClick={() => handleCalc(2)}>
          2
        </button>
        <button className="number" onClick={() => handleCalc(3)}>
          3
        </button>
        <button className="operator" onClick={() => handleCalc("-")}>
          -
        </button>
        <button
          className="decimal"
          id="decimal"
          onClick={() => handleCalc("decimal")}
        >
          .
        </button>
        <button className="number" onClick={() => handleCalc(0)}>
          0
        </button>
        <button className="operator" onClick={() => handleCalc("/")}>
          /
        </button>
        <button className="operator" onClick={() => handleCalc("*")}>
          x
        </button>
        <button
          className="reset"
          id="reset"
          onClick={() => handleCalc("reset")}
        >
          RESET
        </button>
        <button
          className="operator equal"
          id="equal"
          onClick={() => handleCalc("equal")}
        >
          =
        </button>
      </div>
    </>
  );
};

export default Buttons;
