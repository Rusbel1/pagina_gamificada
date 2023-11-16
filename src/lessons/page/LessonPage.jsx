import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Flex,
  Image,
  Modal,
  Text,
  Title,
} from "@mantine/core";
import { Prism } from "@mantine/prism";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { CodeEditor } from "../components/CodeEditor";
import { useDisclosure } from "@mantine/hooks";
import winnerSfx from "../../assets/winner.mp3";
import useSound from "use-sound";
import Confetti from "react-confetti";
import ova from "../../assets/ova.png";
import { OvaCharacter } from "../components";
import { axiosController } from "../../helper/axiosController";
import { Loader } from "@mantine/core";
import { userStore } from "../../store/UserStore";

export const LessonPage = () => {
  const [section, setSection] = useState({});
  const [lessonContentResult, setLessonContentResult] = useState([]);
  const navigate = useNavigate();
  const [playWinner] = useSound(winnerSfx);
  const [opened, { open, close }] = useDisclosure(false);
  const [page, setPage] = useState(0);
  const [canCanjear, setCanCanjear] = useState(false);
  const { uid } = useParams();
  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      token: token,
    },
  };

  useEffect(() => {
    axiosController
      .get(`/threeTablesByIdSection/${uid}`, headers)
      .then((response) => {
        setSection(response.data.section);
        setLessonContentResult(response.data.lessonContentResult);
      })
      .catch((error) => {
        console.error(
          "Error al obtener la sección y el contenido de la lección",
          error
        );
      });
  }, []);

  const handleOnClickNext = () => {
    setPage((prevState) => prevState + 1);
  };

  const handleOnClickBack = () => {
    setPage((prevState) => prevState - 1);
  };

  const user = userStore((state) => state);
  const setUser = userStore((state) => state.setUser);

  const onPointReward = () => {
    axiosController
      .put(`/usuariosPut/${user.id}`, {
        points_user: section.reward_points + user.points_user,
      })
      .then((response) => {
        setUser(
          user.id,
          user.first_name,
          user.points_user + section.reward_points
        );
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (lessonContentResult.length === 0) {
    return (
      <div style={{ justifyContent:'center',alignItems:'center',position: 'absolute',top: '50%',left: '50%'}}>
        <Loader size={50}>Error</Loader>
      </div>
    );
  }

  const { lesson, content } = lessonContentResult[0][page];
  return (
    <Container size="md" px="xs" my={64}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Flex w="100%" h="100%" justify="center" direction="column">
          {content.map((content) => {
            switch (content.type) {
              case "title":
                return (
                  <Title key={content.uid} my={12}>
                    {content.content}
                  </Title>
                );
              case "paragraph":
                return (
                  <Text key={content.uid} my={12} size="lg">
                    {content.content}
                  </Text>
                );
              case "snippet":
                return (
                  <Prism
                    key={content.uid}
                    my={13}
                    language="javascript"
                    withLineNumbers
                  >
                    {content.content}
                  </Prism>
                );
              case "code_challenge":
                return (
                  <CodeEditor
                    key={content.uid}
                    content={content.content}
                    onCanCanjear={setCanCanjear}
                  />
                );
              default:
                return null;
            }
          })}
        </Flex>
      </Card>
      <Flex justify="space-between" mt={32}>
        {page > 0 && (
          <Button
            size="md"
            variant="outline"
            color="red"
            onClick={() => handleOnClickBack()}
          >
            Atras
          </Button>
        )}
        {page === lessonContentResult[0].length - 1 ? (
          <Button
            size="md"
            style={{ backgroundColor: "darkslategray", color: "white" }}
            onClick={() => {
              playWinner();
              open();
            }}
            disabled={!canCanjear}
          >
            Canjear recompensa
          </Button>
        ) : (
          <Button
            size="md"
            color="green"
            onClick={() => handleOnClickNext()}
            disabled={page >= lessonContentResult[0].length - 1}
          >
            Siguiente
          </Button>
        )}
      </Flex>
      <Modal
        opened={opened}
        onClose={close}
        title="Felicidades! desafío completado"
      >
        <Image maw={240} mx="auto" radius="md" src={ova} alt="Random image" />
        <Flex justify="center" mt={14}>
          <Text size="lg">Ganaste!! {section.reward_points} puntos</Text>
        </Flex>
        <Flex justify="center" mt={14}>
          <Button
            style={{ backgroundColor: "darkslategray", color: "white" }}
            size="md"
            variant="outline"
            /*  onClick={() => navigate("/")} */
            onClick={() => onPointReward()}
          >
            Reclamar puntos
          </Button>
        </Flex>
      </Modal>
      <OvaCharacter
        message={lesson.ovamessage}
        side={lesson.ovaside}
      ></OvaCharacter>
      {opened && <Confetti gravity={0.3} />}
    </Container>
  );
};
