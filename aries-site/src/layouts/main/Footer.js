import React, { useContext } from 'react';
import Link from 'next/link';
import {
  Box,
  Button,
  Footer as GrommetFooter,
  ResponsiveContext,
  Text,
} from 'grommet';
import { nameToPath } from '../../utils';

export const Footer = () => {
  const size = useContext(ResponsiveContext);
  const year = new Date().getFullYear();

  const externalFooterLinks = [
    {
      label: 'Terms',
      href: 'https://www.hpe.com/us/en/about/legal/terms-of-use.html',
    },
    { label: 'Privacy', href: 'https://www.hpe.com/us/en/legal/privacy.html' },
    {
      label: 'Security',
      href: 'https://www.hpe.com/us/en/legal/privacy.html#datacollection',
    },
  ];
  return (
    <GrommetFooter
      direction="row-responsive"
      align={size !== 'small' ? 'center' : undefined}
      pad={{
        vertical: size !== 'small' ? 'small' : 'large',
        // Match horizontal padding of aries-core Nav
        horizontal: size !== 'small' ? 'xlarge' : 'large',
      }}
    >
      <Box align="center" gap="medium" direction="row-responsive">
        <Text size="small">
          &copy; {year} Hewlett Packard Enterprise Development LP
        </Text>
      </Box>
      <Box direction="row" gap="medium">
        {externalFooterLinks.map((link, index) => (
          <Button
            key={index}
            href={link.href}
            label={<Text size="small">{link.label}</Text>}
            target="_blank"
            rel="noreferrer noopener"
            plain
          />
        ))}
        {/* Need to pass href because of:
        https://github.com/zeit/next.js/#forcing-the-link-to-expose-href-to-its-child */}
        <Link href={nameToPath('Feedback')} passHref>
          <Button label={<Text size="small">Feedback</Text>} plain />
        </Link>
      </Box>
    </GrommetFooter>
  );
};
