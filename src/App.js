import React, { useState } from "react";
import "./App.css";
import data from "./data.json";

function App() {
  // delete selected word
  function deleteHandler(word) {
    setCards(cards.filter((card) => card.id !== word));
    localStorage.setItem("saveLocal", JSON.stringify(cards));
  }

  const [cards, setCards] = useState(
    localStorage.getItem("saveLocal") !== null
      ? JSON.parse(localStorage.getItem("saveLocal"))
      : data
  );

  function resetStorage() {
    localStorage.removeItem("saveLocal");
    setCards(data);
  }

  return (
    <div className="App">
      <div className="header-tab">
        <h3>Dictionary</h3>
        <button onClick={resetStorage}>Reset</button>
      </div>
      <table>
        <tbody>
          {cards.map((card) => {
            return (
              <tr className="card" key={card.id}>
                <td>{card.id}</td>
                <td>{card.wordInEnglish}</td>
                <td>{card.wordInRussian}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteHandler(card.id);
                    }}
                  >
                    x
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
