/* --- Global --- */
import React from "react";
import { Flex, Heading, Span } from "@horizin/atoms";

/* ---  Component --- */
export const ContractFactory = props => {
  return (
    <Flex card alignCenter between>
      <Heading m0>
        {props.name} <Span thin>({props.type}) </Span>
      </Heading>
      <Span tag>Deploy Contract</Span>
    </Flex>
  );
};
