/* --- Global --- */
import React from "react";
import { withEthers, helpers } from "@ethers-react/system";
import { Span } from "@horizin/atoms";

/* ---  Component --- */
const Address = ({ sx, trim }) => {
  const ethers = withEthers();
  return (
    <Span sx={sx}>
      {ethers.address
        ? trim
          ? helpers.shortenAddress(ethers.address, 6)
          : ethers.address
        : "0x..."}
    </Span>
  );
};

export default Address;
