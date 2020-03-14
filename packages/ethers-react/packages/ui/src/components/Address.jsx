/* --- Global --- */
import React from "react";
import { withEthers, helpers } from "@ethers-react/system";
import { Span } from "@horizin/atoms";

/* ---  Component --- */
export const Address = ({ attr, sx, trim }) => {
  const ethers = withEthers();
  return (
    <Span sx={sx} {...attr}>
      {ethers.address
        ? trim
          ? helpers.shortenAddress(ethers.address, 6)
          : ethers.address
        : "0x..."}
    </Span>
  );
};
