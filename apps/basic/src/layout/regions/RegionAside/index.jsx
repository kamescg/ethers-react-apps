/* --- Global --- */

/* --- Styles --- */
import {
  styleItem,
  styleItemChild,
  styleItemChildren,
  styleItemHover,
} from './styles';

/* --- Component --- */
const RegionAside = ({sx, ...props}) => {
  return (
    <Atom.Flex column gradient="leather" sx={{variant: 'regions.aside'}}>
      {/* Branding : Area  */}
      <Atom.Flex center column gradient="charcoal" sx={{p: 4}}>
        <Molecule.Link to="/">
          <Atom.Heading lg heavy sx={{mb: 0}}>
            {GLOBAL.siteName}
          </Atom.Heading>
        </Molecule.Link>
      </Atom.Flex>

      {/* Menu : Area  */}
      <Atom.Box sx={{px: 4, py: 3}}>
        <Molecule.Menu
          direction="column"
          label="Basics"
          sx={styleItem}
          hover={styleItemHover}
          sxChild={styleItemChild}
          sxChildren={styleItemChildren}
          items={[
            {
              label: 'Provider',
              to: '/',
            },
            {
              label: 'Contracts',
              to: '/contracts',
            },
            {
              label: 'Interface',
              to: '/interface',
            },
          ]}
        />
        <Atom.Box sx={{mt: 3}}>
          <Molecule.Menu
            direction="column"
            label="Wallet"
            sx={styleItem}
            hover={styleItemHover}
            sxChild={styleItemChild}
            sxChildren={styleItemChildren}
            items={[
              {
                label: 'Signing',
                to: '/signing',
              },
              {
                label: 'Transactions',
                to: '/transactions',
              },
            ]}
          />
        </Atom.Box>
        <Atom.Box sx={{mt: 3}}>
          <Molecule.Menu
            direction="column"
            label="Contracts"
            sx={styleItem}
            hover={styleItemHover}
            sxChild={styleItemChild}
            sxChildren={styleItemChildren}
            items={[
              {
                label: 'Tokens',
                to: '/contract/tokens',
              },
              {
                label: 'Collectibles',
                to: '/contract/collectibles',
              },
            ]}
          />
        </Atom.Box>
      </Atom.Box>
    </Atom.Flex>
  );
};

export default RegionAside;
