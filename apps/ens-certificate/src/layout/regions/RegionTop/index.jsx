/**
 * @name RegionTopDashboard
 * @description Default top region for application.
 */
/* --- Global --- */
import {ProviderSelect} from '@ethers-react/ui';

/* --- Local --- */
import {ColorMode} from '@components';

export default props => (
  <Atom.Flex alignCenter between sx={{variant: 'regions.header'}}>
    {/* Left */}
    <Atom.Flex alignCenter>
      <Molecule.Link to="/">
        <Atom.Heading as="h4" sm m0>
          1MillionDevs
        </Atom.Heading>
      </Molecule.Link>
    </Atom.Flex>

    {/* Right */}
    <Atom.Flex alignCenter sx={{py: 2}}>
      <Atom.Box sx={{mx: 3}}>
        <ColorMode />
      </Atom.Box>
      <ProviderSelect />
    </Atom.Flex>
  </Atom.Flex>
);
