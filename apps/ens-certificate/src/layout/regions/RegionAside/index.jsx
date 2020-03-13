/* --- Global --- */

import menu from '@assets/data/menu';

/* --- Component --- */
const RegionAside = ({sx, ...props}) => {
  return (
    <Atom.Flex column sx={{variant: 'regions.aside'}}>
      <Atom.BackgroundImage
        src="https://images.unsplash.com/photo-1515851644205-ba5667246676?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=780&q=80"
        sx={{
          opacity: 0.3,
        }}
      />
      {/* Branding : Area  */}
      <Atom.Flex center column gradient="ocean" sx={{p: 4}}>
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
          sx={{
            fontSize: 2,
            my: 1,
            flexDirection: 'column',
          }}
          hover={{
            color: 'white',
            opacity: 1,
            transform: 'scale(1.025)',
          }}
          sxChild={{transition: 'all 0.2s'}}
          sxChildren={{
            fontSize: 1,
            my: 1,
            flexDirection: 'column',
          }}
          items={menu}
        />
      </Atom.Box>
    </Atom.Flex>
  );
};

export default RegionAside;
