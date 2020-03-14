/* --- EtherscanHash : Component --- */
export const EtherscanHash = props => {
  return (
    <Atom.Span>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://${
          ethersProvider.network && ethersProvider.network.name === "mainnet"
            ? ""
            : `${ethersProvider.network.name}.`
        }etherscan.io/hash/${transaction.hash}`}
      >
        Confirmed
      </a>
    </Atom.Span>
  );
};
