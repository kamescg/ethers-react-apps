/* --- Global --- */
import Modal from 'react-modal';
import {withEthers, hooks, selectors, utils} from '@ethers-react/system';
import {useState, useEffect} from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

/* --- Component --- */
const ModalCertificateInformation = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);
  return (
    <>
      <Atom.Span onClick={() => toggleOpen()}>{props.children}</Atom.Span>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleOpen}
        style={customStyles}
        contentLabel="Certificate Information">
        <Atom.Box sx={{width: [500]}}>
          <Atom.Heading>Certificate Information</Atom.Heading>
          <Atom.Paragraph>
            Pellentesque mollis, metus at pharetra venenatis, eros arcu
            tincidunt sapien, non iaculis purus ipsum consequat purus. Sed et
            turpis eget justo convallis congue et a metus. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Suspendisse placerat nulla eget mi semper, id condimentum risus
            varius. Integer in euismod ligula. Curabitur faucibus ultricies
            quam. Curabitur id efficitur nisi.
          </Atom.Paragraph>
        </Atom.Box>
      </Modal>
    </>
  );
};
export default ModalCertificateInformation;
