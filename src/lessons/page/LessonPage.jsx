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

export const LessonPage = () => {
  console.log("me renderizo");
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
        setLessonContentResult(
          response.data.lessonContentResult.sort((a, b) => {
            if (a.lesson.type === "teoric" && b.lesson.type !== "teoric") {
              return -1;
            }
            if (a.lesson.type !== "teoric" && b.lesson.type === "teoric") {
              return 1;
            }
            return a.order - b.order;
          })
        );
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

  if (lessonContentResult.length === 0) {
    return <div>Error</div>;
  }

  const { lesson, lessonContent } = lessonContentResult[page];
  console.log("lessoncontentResult", lessonContentResult);
  console.log("lesson", lesson);
  console.log("lessonContent", lessonContent);

  return (
    <Container size="md" px="xs" my={64}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Flex w="100%" h="100%" justify="center" direction="column">
          {lessonContent.map((content) => {
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
                    my={12}
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
        {page === lessonContentResult.length - 1 ? (
          <Button
            size="md"
            color="green"
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
            disabled={page >= lessonContentResult.length - 1}
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
          <Text size="lg">Recibes 20 puntos más!</Text>
        </Flex>
        <Flex justify="center" mt={14}>
          <Button
            size="md"
            variant="outline"
            color="green"
            onClick={() => navigate("/")}
          >
            Volver a los desafíos
          </Button>
        </Flex>
      </Modal>
      {opened && <Confetti gravity={0.3} />}
    </Container>
  );
};
