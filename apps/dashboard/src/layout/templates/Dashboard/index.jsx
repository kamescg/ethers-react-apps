import {RegionAside, RegionTop, RegionFooter} from '@regions';

const DashboardTemplate = ({sx, sxMain, styled, children, ...props}) => {
  return (
    <Atom.Flex column sx={{variant: 'regions.container'}}>
      <Atom.Flex sx={{flex: 1}}>
        <RegionAside variant="regions.aside" />
        <Atom.Flex column sx={{variant: 'regions.main'}}>
          <RegionTop />
          <Atom.Flex column sx={{flex: 1, ...sxMain}}>
            {children}
          </Atom.Flex>
          <RegionFooter />
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default DashboardTemplate;
