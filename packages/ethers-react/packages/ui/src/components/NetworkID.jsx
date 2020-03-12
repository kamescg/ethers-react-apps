/* --- Global --- */
import React from "react";
import { withEthers } from "@ethers-react/system";
import { Span } from "@horizin/atoms";

/* ---  Component --- */
const NetworkName = ({ sx }) => {
  const ethers = withEthers();
  return ethers.network && ethers.network.name ? (
    <Span sx={sx}>{ethers.network.chainId}</Span>
  ) : (
    <Span sx={sx}>Network Undefined</Span>
  );
};

export default NetworkName;
