/* --- Global --- */
import React from "react";
import { withEthers } from "@ethers-react/system";
import { Span } from "@horizin/atoms";

/* ---  Component --- */
export const NetworkName = ({ sx, sxDisconnected }) => {
  const ethers = withEthers();
  return ethers.network && ethers.network.name ? (
    <Span sx={sx}>{ethers.network.name}</Span>
  ) : (
    <Span sx={sx}>Connect to Network</Span>
  );
};
