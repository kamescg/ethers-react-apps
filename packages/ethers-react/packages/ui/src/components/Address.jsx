/* --- Global --- */
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withEthers, helpers } from "@ethers-react/system";
import { Span } from "@horizin/atoms";
import { Toast } from "@horizin/blueprint-system";

/* ---  Address : Component --- */
export const Address = ({ attr, copy, sx, trim }) => {
  const ethers = withEthers();
  return (
    <Span sx={sx} {...attr}>
      {ethers.address
        ? trim
          ? helpers.shortenAddress(ethers.address, trim)
          : ethers.address
        : "0x..."}
      {copy && (
        <CopyToClipboard text={ethers.address}>
          <Toast msg="Address Copied" pointer sx={{ ml: 2 }}>
            copy
          </Toast>
        </CopyToClipboard>
      )}
    </Span>
  );
};
