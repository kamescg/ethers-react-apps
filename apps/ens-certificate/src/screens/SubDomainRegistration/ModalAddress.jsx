/* --- Global --- */
import Modal from 'react-modal';
import QRCode from 'qrcode.react';
import {useState, useEffect} from 'react';
import {withEthers} from '@ethers-react/system';

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
  const ethers = withEthers();
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
        <Atom.Box sx={{width: ['100%', '100%', 500]}}>
          {!ethers.address ? (
            <Atom.Span>Please Login</Atom.Span>
          ) : (
            <QRCode
              value={ethers}
              width={'100%'}
              logoSize={'100%'}
              style={{width: '100%', height: '100%'}}
            />
          )}
        </Atom.Box>
      </Modal>
    </>
  );
};
export default ModalCertificateInformation;
