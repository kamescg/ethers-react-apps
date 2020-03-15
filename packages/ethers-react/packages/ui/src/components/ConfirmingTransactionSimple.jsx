/* --- Global --- */
import React, { useEffect } from "react";
import { hooks } from "@ethers-react/system";
import { EtherscanHash } from "@ethers-react/ui-etherscan";
import { Span } from "@horizin/atoms";

/* ---  ConfirmingTransaction : Component --- */
export const ConfirmingTransaction = ({ hash, sx, tx, ...props }) => {
  /* ---  Transaction Watch : Effect --- */
  const transactionWatch = hooks.useTransactionWatch();

  useEffect(() => {
    transactionWatch.watch(hash);
  }, [hash]);

  return !transactionWatch.isWatching ? (
    <Atom.Span tag block textCenter>
      Waiting for Response
    </Atom.Span>
  ) : (
    <Span sx={sx}>
      {transactionWatch.isConfirmed ? (
        <EtherscanHash block textCenter tag hash={hash}>
          Confirmed
        </EtherscanHash>
      ) : (
        <EtherscanHash block textCenter tag iconLoading hash={hash}>
          Waiting
        </EtherscanHash>
      )}
    </Span>
  );
};
