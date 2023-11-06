import React, { useState } from "react";
import "./TodoPage.css";

const TodoPage = () => {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);

  function handleSubmit() {
    listData.push(activity);
    setlistData([...listData]);
    setActivity("");
  }

  function removeActivity(i) {
    const updateListData = listData.filter((elem, id) => {
      return i != id;
    });
    setlistData(updateListData);
  }

  function removeAll() {
    setlistData([]);
  }

  return (
    <>
      <div id="container">
        <div>
          <h1>Todo List</h1>
        </div>
        <input
          type="text"
          placeholder="Enter What you want to add"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <input type="button" value="Submit" onClick={handleSubmit} />
        <div id="todoListContainer">
          {" "}
          <h2>Your Data</h2>{" "}
          <ul>
            {listData &&
              listData.map((data, i) => {
                return (
                  <li key={i}>
                    {" "}
                    {data}
                    <button onClick={() => removeActivity(i)}>
                      Remove
                    </button>{" "}
                  </li>
                );
              })}
          </ul>
          {listData.length >= 1 && (
            <button onClick={removeAll}>Remove All</button>
          )}
        </div>
      </div>
    </>
  );
};

export default TodoPage;
