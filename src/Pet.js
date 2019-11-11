import React from "react";
const Pet = ({ name, animal, voice }) => {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, name),
  //     React.createElement("h2", {}, animal),
  //     React.createElement("h3", {}, voice)
  //   ]);
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h3>{voice}</h3>
    </div>
  );
};
export default Pet;
