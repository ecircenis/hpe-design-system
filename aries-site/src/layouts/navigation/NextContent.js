import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Box, Text } from 'grommet';
import { AnchorCallToAction } from 'aries-core';

import { nameToPath } from '../../utils';

export const NextContent = ({ color, nextContent }) => {
  const path = nameToPath(nextContent);

  return (
    <Box
      background={color}
      align="end"
      height="small"
      pad={{ horizontal: 'xlarge', top: 'large' }}
      round={{ corner: 'top', size: 'small' }}
    >
      {nextContent === 'Home' ? (
        <Text>
          Back to <AnchorCallToAction label="Start" href="/" color="text" />
        </Text>
      ) : (
        <Text>
          Next, learn about{' '}
          <Link href={path}>
            <AnchorCallToAction label={nextContent} color="text" />
          </Link>
        </Text>
      )}
    </Box>
  );
};

NextContent.propTypes = {
  color: PropTypes.string,
  nextContent: PropTypes.string,
};
