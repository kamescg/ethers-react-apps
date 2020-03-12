/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Link} from '@reach/router';

export default ({sx, ...props}) => {

  return (
    <Link
      sx={{
        m: 0,
        ...sx,
      }}
      {...props}
    />
  );
};
