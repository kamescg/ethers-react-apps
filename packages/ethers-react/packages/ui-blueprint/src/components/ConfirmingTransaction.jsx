/* --- Global --- */
import React, { useEffect } from "react";
import { Component } from "@horizin/ui-compose";
import { EtherscanHash } from "@ethers-react/ui-etherscan";
import { Span } from "@horizin/atoms";

/* ---  ConfirmingTransaction : Component --- */
export const ConfirmingTransaction = ({ hash, sx, tx, ...props }) => {
  /* ---  Transaction Watch : Effect --- */
  return (
    <>
      {tx.isRequesting && (
        <Atom.Span tag block textCenter>
          Waiting for Response
        </Atom.Span>
      )}
      {tx.isRejected && (
        <Atom.Span tag block textCenter>
          Transaction Rejected
        </Atom.Span>
      )}
      {tx.isBroadcast &&
        !tx.isConfirmed &&
        Component(props.componentIsBroadcast, {
          tag: true,
          iconLoading: true,
          children: props.labelBroadcast,
          sx: props.sxBroadcast
        })}
      {tx.isBroadcast && tx.isConfirmed && (
        <Atom.Span>
          {tx.receiptStatus
            ? Component(props.componentIsConfirmed, {
                hash: tx.hash,
                tag: true,
                block: true,
                children: props.labelConfirmedAccepted,
                sx: props.sxConfirmed
              })
            : Component(props.componentIsConfirmed, {
                hash: tx.hash,
                tag: true,
                block: true,
                children: props.labelConfirmedRejected,
                sx: props.sxConfirmed
              })}
        </Atom.Span>
      )}
    </>
  );
};

/* ---  Configuration --- */
ConfirmingTransaction.defaultProps = {
  labelWaiting: "Enable",
  labelBroadcast: "Confirming",
  labelConfirmedAccepted: "Confirmed",
  labelConfirmedRejected: "Rejected",
  componentIsDisconnected: Span,
  componentIsBroadcast: EtherscanHash,
  componentIsConfirmed: EtherscanHash,
  sxDisconnected: {
    pointer: true,
    tag: true
  },
  sxBroadcast: {
    display: "block",
    textAlign: "center"
  },
  sxConfirmed: {
    display: "block",
    textAlign: "center"
  }
};

ConfirmingTransaction.propTypes = {
  labelWaiting: PropTypes.string,
  labelBroadcast: PropTypes.string,
  labelConfirmed: PropTypes.string,
  sxDisconnected: PropTypes.object,
  sxBroadcast: PropTypes.object,
  sxConfirmed: PropTypes.object,
  componentIsWaiting: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType
  ]),
  componentIsBroadcast: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType
  ]),
  componentIsConfirmed: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType
  ])
};
