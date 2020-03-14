/* --- Global --- */
import React, { useEffect } from "react";
import { hooks } from "@ethers-react/system";
import { Span } from "@horizin/atoms";

/* ---  Component --- */
export const GetTransactionReceipt = ({ tx, sx, ...props }) => {
  /* ---  Get Transaction : Effect --- */
  const transaction = hooks.useGetTransactionReceipt();
  useEffect(() => {
    transaction.getReceipt(tx);
  }, [tx]);

  return !transaction.data ? (
    <Atom.Span tag>Retrieving Transaction Data</Atom.Span>
  ) : (
    <Atom.Box card>
      <Span block sx={sx} {...props}>
        <strong>Block:</strong> {transaction.data.blockNumber}
      </Span>
      <Span block wordWrap sx={{ mt: 2 }}>
        <strong>From:</strong> {transaction.data.from}
      </Span>
      <Span block wordWrap sx={{ mt: 2 }}>
        <strong>To:</strong> {transaction.data.to}
      </Span>
      <Span block wordWrap sx={{ mt: 2 }}>
        <strong>Blockhash:</strong> {transaction.data.blockHash}
      </Span>
      <Atom.Box
        sx={{ bg: "smoke", color: "text", mx: -3, mb: -3, mt: 2, p: 3 }}
      >
        <Atom.Span block wordWrap>
          <strong>TxHash:</strong> {tx}
        </Atom.Span>
      </Atom.Box>
    </Atom.Box>
  );
};
