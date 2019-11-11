const Pet = ({ name, animal, voice }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h3", {}, voice)
  ]);
};

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      voice: "Hau-Hau"
    }),
    React.createElement(Pet, {
      name: "Dola",
      animal: "Cat",
      voice: "Miau-Miau"
    }),
    React.createElement(Pet, {
      name: "Konia",
      animal: "Bird",
      voice: "Ćwir-Ćwir"
    })
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
