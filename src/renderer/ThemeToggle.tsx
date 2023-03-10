import React from 'react';
import {
  createStyles,
  UnstyledButton,
  Text,
  Center,
  useMantineColorScheme,
  Group,
} from '@mantine/core';
import { upperFirst } from '@mantine/hooks';
import { Moon, Sun } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  control: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
  },

  iconWrapper: {
    height: 28,
    width: 28,
    borderRadius: 28,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.dark[4],
    color: theme.colorScheme === 'dark' ? theme.black : theme.colors.blue[2],
  },

  value: {
    lineHeight: 1,
  },
}));

export default function ThemeToggle() {
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const Icon = colorScheme === 'dark' ? Sun : Moon;

  return (
    <Group position="center" my="xl">
      <UnstyledButton
        aria-label="Toggle theme"
        className={classes.control}
        onClick={() => toggleColorScheme()}
        title="Ctrl + J"
      >
        <Center className={classes.iconWrapper}>
          <Icon size={18} />
        </Center>
      </UnstyledButton>
    </Group>
  );
}