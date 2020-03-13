/* --- Global --- */
import {useEffect, useState} from 'react';
import {EthersProvider, withEthers} from '@ethers-react/system';
/* --- Local --- */
import {FormDomainPurchase} from '@forms';
import ModalAddress from './ModalAddress';

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(
    m,
    key,
    value,
  ) {
    vars[key] = value;
  });
  return vars;
}

/* --- Page : Component --- */
const DashboardOverviewPage = props => {
  const ethers = withEthers();
  const [certifcate, setCertificate] = useState();

  useEffect(() => {
    console.log(ethers, 'ethersethers');
  }, [ethers]);

  useEffect(() => {
    const queryString = getUrlVars();
    // const urlParams = new URLSearchParams(queryString);
    console.log(queryString, 'queryString');
    setCertificate(queryString.certifcate);
  }, []);
  return (
    <Atom.Flex sx={{flex: 1, height: '100%', width: '100%'}}>
      <Showcase certifcate={certifcate} />
      {/* <Content /> */}
    </Atom.Flex>
  );
};

const Showcase = props => {
  return (
    <Atom.Flex
      center
      column
      sx={{
        height: '100%',
        py: 5,
        flex: 1,
        width: '100%',
      }}>
      <Atom.BackgroundGradient gradient="bluePurple" />
      <Atom.BackgroundImage
        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1633&q=80"
        sx={{
          opacity: 0.35,
        }}
      />
      <Atom.Container
        sx={{
          color: 'white',
          maxWidth: ['100%', '100%', 880, 1080],
          py: [5],
        }}>
        <Atom.Flex center column>
          {/* <Atom.Heading md>#1MillionDevs ENS Sub-Domain</Atom.Heading> */}
          <Atom.Heading as="h1" giga sx={{textAlign: 'center'}}>
            <Atom.Span sx={{fontWeight: 300}}>Claim Domain</Atom.Span>
            <br />
          </Atom.Heading>
          <Atom.Flex center sx={{width: ['100%', '100%', 700]}}>
            <FormDomainPurchase />
          </Atom.Flex>
          <Atom.Heading md sx={{mt: 3}}>
            #1MillionDevs ENS Sub-Domain
          </Atom.Heading>
          <Atom.Box sx={{textAlign: 'center', mt: 4}}>
            <Atom.Paragraph>
              Earn a <strong>FREE Limited Edition</strong>
              <br />
              1MillionDevs sub-domain!
            </Atom.Paragraph>
            <ModalAddress>
              <Atom.Span tag pointer sx={{mt: 4, display: 'inline-block'}}>
                Display Address QR Code
              </Atom.Span>
            </ModalAddress>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Container>
    </Atom.Flex>
  );
};

const Content = props => {
  return (
    <Atom.Container>
      <Atom.Flex column sx={{py: 3}}>
        <Atom.Heading as="h3" xxl>
          Buy Sub-Domain
        </Atom.Heading>
      </Atom.Flex>
    </Atom.Container>
  );
};

export default DashboardOverviewPage;
