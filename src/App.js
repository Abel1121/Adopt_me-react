import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  //   return React.createElement("div", { id: "something-important" }, [
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, {
  //       name: "Luna",
  //       animal: "Dog",
  //       voice: "Hau-Hau"
  //     }),
  //     React.createElement(Pet, {
  //       name: "Dola",
  //       animal: "Cat",
  //       voice: "Miau-Miau"
  //     }),
  //     React.createElement(Pet, {
  //       name: "Konia",
  //       animal: "Bird",
  //       voice: "Ćwir-Ćwir"
  //     })
  //   ]);

  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" voice="Hau-Hau" />
      <Pet name="Dola" animal="Cat" voice="Miau-Miau" />
      <Pet name="Konia" animal="Bird" voice="Ćwir-Ćwir" />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
