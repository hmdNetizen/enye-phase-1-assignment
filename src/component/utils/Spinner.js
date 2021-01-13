import React from "react";
import PuffLoader from "react-spinners/PuffLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = () => {
  return (
    <div>
      <PuffLoader color="#a16bb3" css={override} size={100} />
    </div>
  );
};

export default Spinner;
