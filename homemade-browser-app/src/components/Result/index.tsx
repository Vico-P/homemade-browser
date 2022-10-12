import React from "react";
import { GoogleItems } from "../../types/types";

const Result: ({ title, ...rest }: GoogleItems) => JSX.Element = ({
  title,
}) => (
  <div>
    <p>{title}</p>
  </div>
);

export default React.memo(Result);
