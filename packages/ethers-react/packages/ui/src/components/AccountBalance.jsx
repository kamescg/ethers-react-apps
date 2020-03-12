/* --- Global --- */
import React from "react";
import { withEthers } from "@ethers-react/system";
import { Span } from "@horizin/atoms";

/* ---  Component --- */
export const AccountBalance = ({ sx, trimmed }) => {
  const ethers = withEthers();
  return ethers.balance && ethers.balance.eth ? (
    <Span sx={sx}>{trimmed ? ethers.balance.trimmed : ethers.balance.eth}</Span>
  ) : (
    <Span sx={sx}>0</Span>
  );
};
