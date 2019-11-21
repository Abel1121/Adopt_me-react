import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

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
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
        {/* <Pet name="Luna" animal="Dog" voice="Hau-Hau" />
      <Pet name="Dola" animal="Cat" voice="Miau-Miau" />
      <Pet name="Konia" animal="Bird" voice="Ćwir-Ćwir" /> */}
      </div>
    </React.StrictMode>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
