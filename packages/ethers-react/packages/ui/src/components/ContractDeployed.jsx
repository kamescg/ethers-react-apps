/* --- Global --- */
import React from "react";
import { hooks, helpers } from "@ethers-react/system";
import { Flex, Box, Heading, HorizontalRule, Span } from "@horizin/atoms";

/* ---  Component --- */
export const ContractDeployed = props => {
  const transactionHook = hooks.useGetTransaction(props.transactionHash);
  return (
    <Flex column card>
      <Heading>
        {props.name}{" "}
        <Span thin>
          ({props.type} -{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://${
              props.network.name === "mainnet" ? "" : `${props.network.name}.`
            }etherscan.io/address/${props.address}`}
          >
            etherscan
          </a>
          )
        </Span>
      </Heading>
      <Span mb2>
        <strong>Network:</strong> <Span>{props.network.name}</Span> (
        <Span>{props.network.chainId}</Span>)
      </Span>
      <Span mb2>
        <strong>Address:</strong> {helpers.shortenAddress(props.address, 7)}
      </Span>
      <Span mb2>
        <strong>TransactionHash:</strong>{" "}
        {helpers.shortenTransactionHash(props.transactionHash, 10) ||
          "Unavailable"}
      </Span>
      <Heading mt3 mb0>
        Transation Data
      </Heading>
      <HorizontalRule sx={{ my: 2 }} />
      {transactionHook.transactionData && (
        <Box>
          <Span mb2 block>
            <strong>Block:</strong>{" "}
            {transactionHook.transactionData.blockNumber}
          </Span>
          <Span mb2 block>
            <strong>BlockHash:</strong>{" "}
            {helpers.shortenBlockHash(
              transactionHook.transactionData.blockHash,
              15,
              false
            )}
          </Span>
          <Span mb2 block>
            <strong>Created By:</strong>{" "}
            {helpers.shortenAddress(transactionHook.transactionData.from, 7)}
          </Span>
        </Box>
      )}
    </Flex>
  );
};
