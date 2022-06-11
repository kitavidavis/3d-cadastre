import React, { useState } from 'react';
import {
  ActionIcon,
  AppShell,
  Navbar,
  useMantineTheme,
} from '@mantine/core';
import HeaderPage from './HeaderPage';
import { Outlet } from 'react-router-dom';
import { Menu, Stack, Group, createStyles, Text } from '@mantine/core';
import { Trash, Plus, Edit } from 'tabler-icons-react';
import { SplitDirection } from '@devbookhq/splitter'
import ReactSplit from '@devbookhq/splitter';

const headerData = [
    {
        "link": '/',
        "label": 'Canvas'
    },
      {
        "link": "account",
        "label": "Connect Account"
      },
      {
        "link": "publish",
        "label": "Publish"
      },
      {
          "link": "#",
          "label": "Documentation"
      },
    ]

    const useStyles = createStyles((theme) => ({
      navbar: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        paddingBottom: 0,
      },
    
      header: {
        padding: theme.spacing.md,
        height: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 0,
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        borderBottom: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
      },
    
      links: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
      },
    
      linksInner: {
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
      },
    
      footer: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
        borderTop: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
      },
    }));

export default function AppShellPage() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar p="md" hiddenBreakpoint="xs" hidden={!opened} width={{ sm: 150, lg: 250 }}>
          <ReactSplit direction={SplitDirection.Vertical} initialSizes={[50, 50]} >
            <Stack justify={'flex-start'} sx={(theme) => ({ height: '100%' })}>
            <Group  position="apart">
            <Text size='xs'>Active Files</Text>
          <Menu trigger='hover' >
      <Menu.Item color="red" icon={<Trash size={14} />}>Clear Canvas</Menu.Item>
          </Menu>
        </Group>
        </Stack>
        <Stack justify="space-between" sx={(theme) => ({height: '100%'})}>
        <Group>
            <Text size='xs'>Outline</Text>
        </Group>
        </Stack>
        </ReactSplit>
        </Navbar>
      }
      header={
          <HeaderPage links={headerData} />
      }
    >
        <Outlet />

    </AppShell>
  );
}