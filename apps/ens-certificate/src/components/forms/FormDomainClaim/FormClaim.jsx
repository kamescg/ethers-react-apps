/* --- Global --- */
import Modal from 'react-modal';
import {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {withEthers, selectors, ethers} from '@ethers-react/system';
import {ProviderSelect} from '@ethers-react/ui';

import {fieldDefault, modalStyle} from '@assets/styles';

/* --- Modal : Component --- */
const FormClaim = ({subdomain, ...props}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <>
      {/* Button : Modal */}
      <Atom.Button
        md
        gradient="amin"
        direction={180}
        onClick={() => toggleOpen()}
        sx={{
          height: 50,
          flex: 1,
          width: '100%',
        }}>
        Claim Domain
      </Atom.Button>

      {/* Form : Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleOpen}
        style={modalStyle}
        contentLabel="Claim ENS Sub-Domain">
        <FormClaimOverlay
          domainDefault="milliondevs"
          subdomainDefault={subdomain}
          certificate={props.certificate}
        />
      </Modal>
    </>
  );
};

/* --- Form : Component --- */
const FormClaimOverlay = props => {
  const ethersProvider = withEthers();
  const {handleSubmit, register, errors} = useForm();
  const contractSelector = selectors.useSelectContractByName(
    'RapidSubdomainRegistrarMeta',
  );

  /* --- Submit : Action --- */
  const onSubmit = async values => {
    contractSelector.contract.api.registerCertificate(
      ethers.utils.id(process.env.REACT_APP_ENS_DOMAIN), // Domain Hash
      values.subdomain, // Sub-Domain String
      ethersProvider.address, // User Address
      process.env.REACT_APP_ENS_RESOLVER, // Sub-Domain Resolver
      values.certificate, // Domain Certificate,
    );
  };

  return (
    <Atom.Box
      sx={{
        width: ['100%', 600, 600],
      }}>
      <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
        <Molecule.Field
          name="certificate"
          placeholder="Sub-Domain Claim Certificate"
          as="textarea"
          defaultValue={props.certificate}
          register={register}
          errors={errors}
          sx={fieldDefault}
          sx={{
            minHeight: 150,
            flex: 1,
          }}
        />
        <Atom.Flex alignCenter sx={{flex: [1, 1, 4], width: '100%'}}>
          <Molecule.Field
            name="subdomain"
            placeholder="Sub-Domain"
            defaultValue={props.subdomainDefault}
            register={register}
            errors={errors}
            sx={fieldDefault}
            sxWrapper={{
              flex: 3,
            }}
          />
          <Atom.Flex
            center
            gradient="bluePurple"
            direction={180}
            sx={{
              bg: 'blue',
              color: 'white',
              flex: 2,
              p: 3,
              height: 50,
              width: 200,
            }}>
            <Atom.Span sx={{}}>.milliondevs.eth</Atom.Span>
          </Atom.Flex>
        </Atom.Flex>

        {ethersProvider.address ? (
          <Atom.Button
            md
            gradient="amin"
            direction={180}
            sx={{mt: 3, height: 50, flex: 1, width: '100%'}}>
            Claim Domain
          </Atom.Button>
        ) : (
          <Atom.Box sx={{mt: 3, textAlign: 'center'}}>
            <ProviderSelect
              disconnectedLabel="Select a Wallet Provider"
              disconnectedProps={{
                attr: {
                  block: true,
                  pointer: true,
                  tag: true,
                },
                sx: {
                  width: '100%',
                },
              }}
            />
          </Atom.Box>
        )}
      </form>
    </Atom.Box>
  );
};

export default FormClaim;
