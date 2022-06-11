import React from 'react';
import { createStyles, Text, Header, Autocomplete, Group, Burger, Badge, Code } from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { Checkbox, Cloud, CloudComputing, CloudDataConnection, CloudDownload, CloudUpload, Home, Search, Upload } from 'tabler-icons-react';
import ThemeToggle from './ThemeToggle';
const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },
}));

interface HeaderSearchProps {
  links: { link: string; label: string }[];
}

export default function HeaderPage({ links }: HeaderSearchProps) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
    >
        <Group direction='row' position='apart'>
        { link.label === 'Connect Account' ? <CloudDownload size={13}  /> : link.label === 'Canvas' ? <Home size={13} /> : link.label === 'Publish' ? <CloudUpload size={13} /> : null}
        <Text size='xs'>{link.label}</Text>
        </Group>

    </a>
  ));

  return (
    <Header height={56} className={classes.header} mb={120}>
      <div className={classes.inner}>
        <Group>
            <Code color={'red'}>ORCUS</Code>
        </Group>

        <Group>
          <Group ml={50} spacing={5} className={classes.links}>
            {items}
          </Group>
          <ThemeToggle />
        </Group>
      </div>
    </Header>
  );
}