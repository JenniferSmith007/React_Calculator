import { useState, useEffect } from "react";

function Calculator() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const oper = ["+", "-", "*", "/"];
  const [firstNum, setFirstNum] = useState("");
  const [secNum, setSecNum] = useState("");
  const [op, setOp] = useState("");
  const [res, setRes] = useState(0);
  useEffect(() => {
    console.log([res]);
  }, [res]);

  function clickNum(val) {
    if (op === "") {
      setFirstNum(firstNum + val);
    } else {
      setSecNum(secNum + val);
    }
  }
  function ClickOp(val) {
    setOp(val);
  }
  function calcOp() {
    //using switch to check for each operation that is being used
    switch (op) {
      case "+":
        setRes(Number(firstNum) + Number(secNum));
        break;
      case "-":
        setRes(Number(firstNum) - Number(secNum));
        break;
      case "*":
        setRes(Number(firstNum) * Number(secNum));
        break;

      case "/":
        setRes(Number(firstNum) / Number(secNum));
        break;
    }
  }
  return (
    <div className="wrap">
      <div className="display">{res}</div>
      <div className="buttons">
        <div className="left">
          <div className="seeRes" onClick={calcOp}>
            Results
          </div>

          <div className="nums">
            {nums.map((val, key) => {
              return (
                <div className="indNum" onClick={() => clickNum(val)}>
                  {val}
                </div>
              );
            })}
          </div>
        </div>
        <div className="right">
          {oper.map((val, key) => {
            return (
              <div id="oper" onClick={() => ClickOp(val)}>
                {val}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
