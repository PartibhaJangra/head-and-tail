import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCurrentSelection } from "../../store/head-tail/head-tail.selector";
import { setCurrentSelection } from "../../store/head-tail/head-tail.action";

import "./head-and-tail.styles.css";

const HeadAndTail = function () {
  const [currSelection, setCurrSelection] = useState("");
  const [isError, setIsError] = useState(false);
  const selectElement = useRef();
  const selectionArray = useSelector(selectCurrentSelection);
  const dispatch = useDispatch();

  const getArrayChunks = (arr) => {
    const slicedArray = [];
    let start = 0;
    arr.forEach((ele, i) => {
      if (ele !== arr[i + 1]) {
        slicedArray.push(arr.slice(start, i + 1));
        start = i + 1;
      }
    });
    return slicedArray;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectElement.current.value === "Select Value") {
      return setIsError(true);
    } else {
      setIsError(false);
    }
    dispatch(setCurrentSelection(currSelection, selectionArray));
    selectElement.current.selectedIndex = 0;
  };

  const handleSelect = (e) => {
    return setCurrSelection(e.target.value);
  };

  return (
    <div className="head-and-tail-container">
      <form onSubmit={handleSubmit}>
        <select
          value={currSelection}
          onChange={handleSelect}
          ref={selectElement}
        >
          <option defaultValue>Select Value</option>
          <option value="H">H</option>
          <option value="T">T</option>
        </select>
        <button type="submit">Submit</button>
        <p className={isError ? "error-msg" : "hide-error-msg"}>
          Please select value from dropdown
        </p>
      </form>
      <div className="grid-container">
        {getArrayChunks(selectionArray).map((arr, index) => {
          return (
            <ul key={index}>
              {arr.map((ele, idx) => (
                <li key={idx}>{ele}</li>
              ))}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default HeadAndTail;
