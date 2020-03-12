/* --- Global --- */
import React from "react";
import { withEthers } from "@ethers-react/system";
import { Span } from "@horizin/atoms";

/* ---  Component --- */
export const AccountNonce = ({ sx }) => {
  const ethers = withEthers();
  return ethers.nonce ? (
    <Span sx={sx}>{ethers.nonce}</Span>
  ) : (
    <Span sx={sx}>Nonce Unknown</Span>
  );
};
