/* --- ConfirmationIcon : Component --- */
export const ConfirmationIcon = ({ sx, sxImage, image }) => {
  return (
    <Atom.Span sx={sx}>
      <Atom.Image src={image} sx={sxImage} />
    </Atom.Span>
  );
};

ConfirmationIcon.defaultProps = {
  sx: {
    width: 15
  },
  sxImage: {
    width: 15
  },
  image: "https://faviconer.net/preloaders/865/Ethereum%20logo%20revolving.gif"
};
