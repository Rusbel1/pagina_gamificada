import cx from 'clsx';
import { useState } from 'react';
import {
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Tabs,
  Burger,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconLogout,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconPlayerPause,
  IconTrash,
  IconSwitchHorizontal,
  IconChevronDown,
} from '@tabler/icons-react';
import { IconBrandMantine, IconUserCircle } from '@tabler/icons-react';
import classes from './Header.styles.module.css';

const user = {
  name: 'Roosevelt Santos',
  email: 'janspoon@fighter.dev',
  points: 100,
};



export function Header() {
  const theme = useMantineTheme();
  const [userMenuOpened, setUserMenuOpened] = useState(false);



  return (
    <div className={classes.header} >
      <Container className={classes.mainSection} size="md">
        <IconBrandMantine size={58} color='white' />
      </Container>
      <Container className={classes.menupoints}>
        <Text size="md" weight={600} ml={5} style={{padding:20,borderRadius:40,color:'cyan'}}>
          Points  {user.points}
        </Text>
        <Menu
          width={200}
          position="bottom-end"
          transitionProps={{ transition: 'pop-top-right' }}
          onClose={() => setUserMenuOpened(false)}
          onOpen={() => setUserMenuOpened(true)}
          withinPortal
        >
          <Menu.Target>
            <UnstyledButton
              className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
            >
              <Group gap={7}>
                <IconUserCircle src={user.image} alt={user.name} radius="xl" size={20} />
                <Text fw={500} size="sm" lh={1} mr={3} color='white'>
                  {user.name}
                </Text>
                <IconChevronDown style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </Group>
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              leftSection={
                <IconMessage
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                  stroke={1.5}
                />
              }
            >
              Challenges
            </Menu.Item>

            <Menu.Label>Settings</Menu.Label>
            <Menu.Item
              leftSection={
                <IconSettings style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
              }
            >
              Account settings
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconSwitchHorizontal style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
              }
            >
              Change account
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
              }
            >
              Logout
            </Menu.Item>

            <Menu.Divider />


          </Menu.Dropdown>
        </Menu>
      </Container>
    </div>
  );
}