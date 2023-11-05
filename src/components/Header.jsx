import cx from 'clsx';
import { useState } from 'react';
import {
  Container,
  UnstyledButton,
  Group,
  Text,
  Menu,
  rem,
  useMantineTheme,
  Modal,
  Button,
  Title,
  ScrollArea,
} from '@mantine/core';
import {
  IconLogout,
  IconMessage,
  IconSettings,
  IconSwitchHorizontal,
  IconChevronDown,
} from '@tabler/icons-react';
import { IconBrandMantine, IconUserCircle } from '@tabler/icons-react';
import classes from './Header.styles.module.css';
import Sticky from 'react-stickynode';
import { useDisclosure } from '@mantine/hooks';
import { Wheel } from 'react-custom-roulette';
import background from '../assets/back_black.png'

const data = [
  { optionSize: 10, option: '10 points', style: { backgroundColor: '#175fa9', textColor: 'white', fontSize: '25' } },
  { optionSize: 15, option: '5 points', style: { backgroundColor: '#169ed8', textColor: 'white', fontSize: '25' } },
  { optionSize: 7, option: '20 points', style: { backgroundColor: '#239b63', textColor: 'white', fontSize: '20' } },
  { optionSize: 4, option: '40 points', style: { backgroundColor: '#64b031', textColor: 'white', fontSize: '19' } },
  { optionSize: 3, option: '60 points', style: { backgroundColor: '#efe61f', textColor: 'white', fontSize: '18' } },
  { optionSize: 3, option: '30 points', style: { backgroundColor: '#f7a416', textColor: 'white', fontSize: '17' } },
  { optionSize: 2, option: '100 points', style: { backgroundColor: '#e6471d', textColor: 'white', fontSize: '17' } },
  { optionSize: 5, option: '50 points', style: { backgroundColor: '#3f297e', textColor: 'white', fontSize: '14' } },
];

const user = {
  name: 'Roosevelt Santos',
  email: 'janspoon@fighter.dev',
  points: 100,
};



export function Header() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState({

  });

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }
  const theme = useMantineTheme();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Sticky innerZ={1} top={0} bottomBoundary={1200}>
      <div className={classes.header} >
        <Container className={classes.mainSection} size="md">
          <IconBrandMantine size={58} color='white' />
        </Container>

        <Modal
          transitionProps={{transition:'slide-down', duration: 600, timingFunction: 'linear'}}
          scrollAreaComponent={ScrollArea.Autosize}
          size='auto'
          padding='md'
          background='transparent'
          radius={30}
          opened={opened}
          onClose={close}
          overlayProps={{
            backgroundOpacity: 0.55,
            blur: 4,
          }}
        >
          {
            <Container style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              <Title order={3} color='darkslategray' >  <strong>Ruleta Diaria</strong></Title>
              <Text size='40' color='darkslategray' mt={0}>Gana puntos diarios gratis y desbloquea diferentes desafios exigentes</Text>
              <Wheel
                
                mustStartSpinning={mustSpin}
                spinDuration={[0.5]}
                prizeNumber={prizeNumber}
                data={data}
                outerBorderColor={["grey"]}
                outerBorderWidth={[1]}
                innerBorderColor={["#f2f2f2"]}
                radiusLineColor={["tranparent"]}
                radiusLineWidth={[1]}
                textColors={["#f5f5f5"]}
                textDistance={55}
                fontSize={[10]}
                onStopSpinning={() => {
                  setMustSpin(false);
                }}>

              </Wheel>
              <button style={{marginTop:'10px',cursor: 'pointer', boxShadow: '10px', backgroundColor: 'darkslategray', color: 'white', width: '7.5rem', height: '2.3rem', borderRadius: '20px' }} onClick={handleSpinClick}>SPIN</button>
            </Container>
          }
        </Modal>
        <Button onClick={open} style={{marginTop:'10px',cursor: 'pointer', boxShadow: '20px', backgroundColor: 'darkslategray', color: 'white', width: '7.5rem', height: '2.3rem', borderRadius: '20px',borderColor:'white' }}>Ruleta diaria</Button>

        <Container className={classes.menupoints}>
          <Text size="md" weight={600} ml={5} style={{ padding: 20, borderRadius: 40, color: 'white' }}>
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
                  <IconUserCircle src={user.image} alt={user.name} radius="xl" size={20} color='white' />
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
    </Sticky>

  );


}