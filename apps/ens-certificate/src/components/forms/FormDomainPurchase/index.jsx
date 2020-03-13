/* --- Global --- */
import {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {withEthers, hooks} from '@ethers-react/system';

import FormClaim from './FormClaim';

import {getUrlVars} from '@helpers';

/* --- Form : Component --- */
const DomainPurchase = props => {
  const {handleSubmit, register, errors} = useForm();
  const [certificate, setCertificate] = useState();

  const transactionRequest = hooks.useWalletSendTransaction({});

  const [type, setType] = useState(undefined);
  const [isClaimOpen, setClaimIsOpen] = useState(false);
  const [isPurchaseOpen, setPurchaseIsOpen] = useState(false);
  const [subdomain, setSubDomain] = useState(undefined);

  const onSubmit = async values => {
    if (type === 'claim') setClaimIsOpen(true);
    if (type === 'purchase') setPurchaseIsOpen(true);

    setSubDomain(values.subdomain);
  };

  useEffect(() => {
    // console.log(transactionRequest);
  }, [transactionRequest]);

  useEffect(() => {
    const queryString = getUrlVars();
    if (queryString.certificate) setCertificate(queryString.certificate);
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{width: '100%', paddingLeft: 20, paddingRight: 20}}>
      <Atom.Flex alignCenter sx={{flexDirection: ['column', 'row']}}>
        <Atom.Flex alignCenter sx={{flex: [1, 1, 4], width: '100%'}}>
          <Molecule.Field
            name="subdomain"
            placeholder="Sub-Domain"
            register={register}
            errors={errors}
            sx={styles.field}
            sxWrapper={{
              flex: 3,
            }}
          />
          <Atom.Flex
            center
            sx={{
              bg: 'neutral',
              color: 'text',
              flex: 2,
              p: 3,
              height: 50,
              width: 200,
            }}>
            <Atom.Span sx={{}}>.milliondevs.eth</Atom.Span>
          </Atom.Flex>
        </Atom.Flex>

        <Atom.Flex sx={{flex: 1, width: '100%'}}>
          <FormClaim
            isOpen={isClaimOpen}
            subdomain={subdomain}
            certificate={certificate}
          />
        </Atom.Flex>
      </Atom.Flex>
    </form>
  );
};

const styles = {
  field: {
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
    boxShadow: 0,
    flex: 3,
    height: 50,
    p: 10,
    // width: "100%"
  },
  button: {
    height: 50,
    flex: 1,
    width: 200,
  },
};

DomainPurchase.defaultProps = {
  label: 'Purchase',
};

export default DomainPurchase;
