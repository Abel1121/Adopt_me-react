import React from "react";

const Deatils = props => {
  return (
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>
  );
};

export default Deatils;
