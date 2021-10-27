import React from 'react';
import { Box, Heading, NameValueList, NameValuePair } from 'grommet';
import { simpleData } from './data';

export const NameValueListHeadingExample = () => (
  <Box pad="small">
    <Heading level={3}>Name Value List Heading</Heading>
    <NameValueList>
      {Object.entries(simpleData).map(([name, value]) => (
        <NameValuePair key={name} name={name}>
          {value}
        </NameValuePair>
      ))}
    </NameValueList>
  </Box>
);
