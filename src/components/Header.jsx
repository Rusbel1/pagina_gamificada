import cx from "clsx";
import { useState } from "react";
import {Container,UnstyledButton,Group,Text,Menu,rem,useMantineTheme,Modal,Button,Title,ScrollArea,Flex} from "@mantine/core";
import {IconLogout,IconMessage,IconSettings,IconSwitchHorizontal,IconChevronDown} from "@tabler/icons-react";
import { IconBrandMantine, IconUserCircle } from "@tabler/icons-react";
import classes from "./Header.styles.module.css";
import Sticky from "react-stickynode";
import { useDisclosure } from "@mantine/hooks";
import { Wheel } from "react-custom-roulette";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { userStore } from "../store/UserStore";
import { axiosController } from "../helper/axiosController";
import Confetti from "react-confetti";

const data = [
  {
    value: 10,
    optionSize: 10,
    option: "10 points",
    style: { backgroundColor: "#175fa9", textColor: "white", fontSize: "25" },
  },
  {
    value: 5,
    optionSize: 15,
    option: "5 points",
    style: { backgroundColor: "#169ed8", textColor: "white", fontSize: "25" },
  },
  {
    value: 20,
    optionSize: 7,
    option: "20 points",
    style: { backgroundColor: "#239b63", textColor: "white", fontSize: "20" },
  },
  {
    value: 40,
    optionSize: 5,
    option: "40 points",
    style: { backgroundColor: "#64b031", textColor: "white", fontSize: "19" },
  },
  {
    value: 60,
    optionSize: 3,
    option: "60 points",
    style: { backgroundColor: "#efe61f", textColor: "white", fontSize: "18" },
  },
  {
    value: 30,
    optionSize: 4,
    option: "30 points",
    style: { backgroundColor: "#f7a416", textColor: "white", fontSize: "17" },
  },
  {
    value: 100,
    optionSize: 2,
    option: "100 points",
    style: { backgroundColor: "#e6471d", textColor: "white", fontSize: "17" },
  },
  {
    value: 50,
    optionSize: 3,
    option: "50 points",
    style: { backgroundColor: "#3f297e", textColor: "white", fontSize: "14" },
  },
];

export function Header() {
  const navigation = useNavigate();
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState({});
  const [reward, { open: openReward, close: closeReward }] =
    useDisclosure(false);
  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };
  const theme = useMantineTheme();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  function logout() {
    // Eliminar el token de autenticación
    localStorage.removeItem("token");
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = "/";
  }

  function userSettings() {
    navigation("/editprofile");
  }

  const [isloget, setloget] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setloget(true);
    }
  });

  const handleLogin = () => {
    navigation ("/auth/login");
  };
  
  const handleRegister = () => {
    navigation ("/auth/register");
  };
  const user = userStore((state) => state);
  const setUser = userStore((state) => state.setUser);

  const sendScore = (score) => {
    axiosController
      .put(`/usuariosPut/${user.id}`, { points_user: score + user.points_user })
      .then((response) => {
        setUser(user.id, user.first_name, user.points_user + score);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // make this to work within a minute and not with days


  const lastspin = localStorage.getItem("lastspin");
  const today = new Date();
  const lastspindate = new Date(lastspin);
/*   const canspin = lastspindate.getDate() !== today.getDate(); */
  const timedifference = today.getTime() - lastspindate.getTime();
  const canspin = timedifference > 60000;
  
  return (
    <Sticky innerZ={99} top={0} bottomBoundary={1200}>
      <div className={classes.header}>
        <Container className={classes.mainSection} size="md">
          {isloget ? (
            <Link to="/">
              <IconBrandMantine size={58} color="white" />
            </Link>
          ) : (
            <Link to="/auth/login">
              <IconBrandMantine size={58} color="white" />
            </Link>
          )}
        </Container>
        <Modal
          transitionProps={{
            transition: "slide-down",
            duration: 600,
            timingFunction: "linear",
          }}
          scrollAreaComponent={ScrollArea.Autosize}
          size="auto"
          padding="md"
          background="transparent"
          radius={30}
          opened={opened}
          onClose={close}
          overlayProps={{}}
        >
          {
            <Container
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Title order={3} color="darkslategray">
                {" "}
                <strong>Ruleta Diaria</strong>
              </Title>
              <Text size="40" color="darkslategray" mt={0}>
                Gana puntos diarios gratis y desbloquea diferentes desafios
                exigentes
              </Text>
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
                  sendScore(data[prizeNumber].value);
                  setMustSpin(false);
                  localStorage.setItem("lastspin", today);
                  openReward();
                }}
              ></Wheel>
              <Button
                disabled={!canspin}
                /* style={{
                  marginTop: "10px",
                  cursor: "pointer",
                  boxShadow: "10px",
                  backgroundColor: "darkslategray",
                  color: "white",
                  width: "7.5rem",
                  height: "2.3rem",
                  borderRadius: "20px"
                }} */
                onClick={handleSpinClick}
              >
                Girar
              </Button>
              <Modal opened={reward} onClose={closeReward} title="Ganaste!!!">
                <Flex justify="center" mt={14}>
                  <Text size="lg">Recibes {data[prizeNumber]?.value}</Text>
                </Flex>

                <Flex justify="center" mt={14}>
                  <Button
                    size="md"
                    variant="outline"
                    style={{ backgroundColor: "darkslategray" ,color:'white',borderRadius: "20px",cursor: "pointer",boxShadow: "10px"}}
                    onClick={() => window.location.reload("/")}
                  >
                    Pagina de inicio
                  </Button>
                </Flex>
              </Modal>
              {reward && <Confetti gravity={0.3} />}
            </Container>
          }
        </Modal>
        {isloget && (
          <Button
            onClick={open}
            style={{
              marginTop: "10px",
              cursor: "pointer",
              boxShadow: "20px",
              backgroundColor: "darkslategray",
              color: "white",
              width: "7.5rem",
              height: "2.3rem",
              borderRadius: "20px",
              borderColor: "white",
            }}
          >
            Ruleta diaria
          </Button>
        )}
        {isloget ? (
          <Container className={classes.menupoints}>
            <Text
              size="md"
              weight={600}
              ml={5}
              style={{ padding: 20, borderRadius: 40, color: "white" }}
            >
              Puntos {user.points_user}
            </Text>

            <Menu
              width={200}
              position="bottom-end"
              transitionProps={{ transition: "pop-top-right" }}
              onClose={() => setUserMenuOpened(false)}
              onOpen={() => setUserMenuOpened(true)}
              withinPortal
            >
              <Menu.Target>
                <UnstyledButton
                  className={cx(classes.user, {
                    [classes.userActive]: userMenuOpened,
                  })}
                >
                  <Group gap={7}>
                    <IconUserCircle
                      src={user.image}
                      alt={user.name}
                      radius="xl"
                      size={20}
                      color="white"
                    />
                    <Text fw={500} size="sm" lh={1} mr={3} color="white">
                      {user.first_name}
                    </Text>
                    <IconChevronDown
                      style={{ width: rem(12), height: rem(12) }}
                      stroke={1.5}
                    />
                  </Group>
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Label>Configuraciones</Menu.Label>
                <Menu.Item
                  onClick={userSettings}
                  leftSection={    
                    <IconSettings
                      style={{ width: rem(16), height: rem(16) }}
                      stroke={1.5}
                    />
                  }
                >
                  Configuraciones de cuenta
                </Menu.Item>
                <Menu.Item
                  onClick={logout}
                  leftSection={
                    <IconLogout
                      style={{ width: rem(16), height: rem(16) }}
                      stroke={1.5}
                    />
                  }
                >
                  Cerrar sesion
                </Menu.Item>

                <Menu.Divider />
              </Menu.Dropdown>
            </Menu>
          </Container>
        ) : (
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <UnstyledButton
              style={{ margin: "5px", color: "white" }}
              onClick={handleLogin}
            >
              Iniciar sesion
            </UnstyledButton>
            <UnstyledButton
              style={{ margin: "5px", color: "white" }}
              onClick={handleRegister}
            >
              Registrate
            </UnstyledButton>
          </Container>
        )}
      </div>
    </Sticky>
  );
}
