import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCurrentSelection } from "../../store/head-tail/head-tail.selector";
import { setCurrentSelection } from "../../store/head-tail/head-tail.action";

import "./head-and-tail.styles.css";

const HeadAndTail = function () {
  const [currSelection, setCurrSelection] = useState("");
  const selectionArray = useSelector(selectCurrentSelection);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setCurrentSelection(currSelection, selectionArray));
  };

  const getArrayChunks = (arr) => {
    const chunkedArray = [];
    let start = 0;
    arr.forEach((ele, i) => {
      if (ele !== arr[i + 1]) {
        chunkedArray.push(arr.slice(start, i + 1));
        start = i + 1;
      }
    });
    return chunkedArray;
  };

  const handleSelect = (e) => {
    return setCurrSelection(e.target.value);
  };

  return (
    <div className="head-and-tail-container">
      <form onSubmit={handleSubmit}>
        <select value={currSelection} onChange={handleSelect}>
          <option defaultValue>Select Value</option>
          <option value="H">H</option>
          <option value="T">T</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <div className="grid-container">
        {getArrayChunks(selectionArray).map((arr, index) => {
          return (
            <ul key={index}>
              {arr.map((ele, i) => (
                <li key={i}>{ele}</li>
              ))}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default HeadAndTail;
