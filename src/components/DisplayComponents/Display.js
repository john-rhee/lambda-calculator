import React from "react";
import { tsPropertySignature } from "@babel/types";

const Display = (props) => {
  return <div className="display">{/* Display any props data here */props.display}</div>;
};
export default Display;