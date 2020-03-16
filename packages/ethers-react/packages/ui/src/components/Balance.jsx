/* --- Global --- */
import React, { useEffect, useState } from "react";
import { hooks, withEthers } from "@ethers-react/system";
import { Span } from "@horizin/atoms";

/* ---  Component --- */
export const Balance = ({ address, sx, ...props }) => {
  const account = hooks.useBalanceChange(address);

  useEffect(() => {
    if (address) account.setAddress(address);
    return () => true;
  }, [address]);

  return (
    <Span sx={sx} {...props}>
      <strong>Live Balance:</strong>{" "}
      {account.balance && account.balance.trimmed}
    </Span>
  );
};
