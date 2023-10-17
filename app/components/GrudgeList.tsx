"use client";
import { Button, TextField } from "@mui/material";
import { useReducer, useState } from "react";

type Grudge = {
  id: number;
  text: string;
};

type Action = {
  type: string;
  payload: Grudge;
};

function grudgeReducer(state: Grudge[], action: Action) {
  // console.log({ state, action });
  if (action.type === "ADD") {
    return [...state, action.payload];
  }
  if (action.type === "REMOVE") {
    return state.filter((grudge) => grudge.id !== action.payload.id);
  }
  if (action.type === "CLEAR") {
    return [];
  }
  return [];
}

export default function GrudgeList() {
  const [grudges, dispatch] = useReducer(grudgeReducer, []);
  const [inputValue, setInputValue] = useState("");

  // console.log({ grudges });

  const title = grudges.length > 0 ? "Grudges" : "Add Some Grudges";

  function deleteGrudge(grudge: Grudge) {
    dispatch({ type: "REMOVE", payload: grudge });
  }

  function clearGrudges() {
    dispatch({
      type: "CLEAR",
      payload: {
        id: 0,
        text: "",
      },
    });
  }

  function addGrudge() {
    if (!inputValue) return;
    dispatch({ type: "ADD", payload: { text: inputValue, id: Math.random() } });
    setInputValue("");
  }

  return (
    <div style={{ margin: "20px" }}>
      <h3 style={{ margin: "20px 0px" }} data-testid="grudge-list-title">
        {title}
      </h3>
      <div>
        <TextField
          data-testid="input-grudge"
          label="Add Grudge"
          variant="filled"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ backgroundColor: "white" }}
        />
      </div>
      <Button data-testid="btn-add-grudge" onClick={addGrudge}>Add Grudge</Button>
      <ul
        style={{ color: "white", listStyleType: "none" }}
        data-testid="grudge-list"
      >
        {grudges.length > 0 &&
          grudges.map((g) => {
            return (
              <li key={g.id}>
                <span>{g.text}</span>
                <Button onClick={() => deleteGrudge(g)}>X</Button>
              </li>
            );
          })}
      </ul>
      {grudges.length > 0 && (
        <Button data-testid="btn-clear" onClick={clearGrudges}>
          Clear
        </Button>
      )}
    </div>
  );
}
