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
import { sampleLessons } from "../../sampleLesson";
import { axiosController } from "../../helper/axiosController";
import axios from "axios";

export const LessonPage = () => {
  const [Lesson, setLesson] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [lessonContent, setLessonContent] = useState([]); 
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

  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    // Realiza una solicitud al backend para obtener las lecciones
    axiosController
      .get(`/lessonGetByIdSection/${uid}`, headers) // Reemplaza '/tu/endpoint/de/lecciones' con la URL de tu endpoint
      .then((response) => {
        setLessons(response.data); // Almacena las lecciones en el estado
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las lecciones", error);
      });
  }, []);

  const getLessons = () => {
    lessons.map((lesson, index) => {
      axiosController
        .get(`/lessonGetById/${lesson.uid}`, headers)
        .then((response) => {
          setLesson(response.data);
          console.log("Este es el id de la lesson:",response.data.uid);
        });
        
    }); 
    
  };
  
  const getLessonContent = () => {
    axiosController.get(`/lesson_contentGetByIdLesson/${lessons.uid}`, headers).then((response) => {
      console.log(response.data);
    });
  };

  useEffect(() => {
    getLessons();
    /* getLessonContent(); */
  }, []);

  const handleOnClickNext = () => {
    setPage((prevState) => prevState + 1);
  };

  const handleOnClickBack = () => {
    setPage((prevState) => prevState - 1);
  };

  useEffect(() => {
    setSearchParams({ page: page });
  }, [page]);

  /*   console.log(sampleLessons[id].lessons); */

  return (
    <>

      hola
      <Container size="md" px="xs" my={64}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          {/* <Flex w='100%' h='100%' justify='center' direction='column'>
            {lesson.map((lesson, index) => {
              switch (lesson.type) {
                case 'title':
                  return (
                    <Title key={uid + index} my={12}>
                      {lesson.content}
                    </Title>
                  );
                case 'paragraph':
                  return (
                    <Text key={uid + index} my={12} size='lg'>
                      {lesson.content}
                    </Text>
                  );
                case 'snippet':
                  return (
                    <Prism
                      key={uid + index}
                      my={12}
                      language='javascript'
                      withLineNumbers
                    >
                      {lesson.content}
                    </Prism>
                  );
                case 'code_challenge':
                  return (
                    <CodeEditor
                      key={uid + index}
                      content={lesson.content}
                      onCanCanjear={setCanCanjear}
                    />
                  );
                default:
                  break;
              }
            })}
            <OvaCharacter
              message={sampleLessons[uid].lessons[page].ovaMessage}
              side={sampleLessons[uid].lessons[page].ovaSide}
            />
            <Flex justify='space-between' mt={32}>
              {page > 0 && (
                <Button
                  size='md'
                  variant='outline'
                  color='red'
                  onClick={() => handleOnClickBack()}
                >
                  Atras
                </Button>
              )}
              {page === sampleLessons[uid].lessons.length - 1 ? (
                <Button
                  size='md'
                  color='green'
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
                  size='md'
                  color='green'
                  onClick={() => handleOnClickNext()}
                  disabled={page >= sampleLessons[uid].lessons.length - 1}
                >
                  Siguiente
                </Button>
              )}
            </Flex>
          </Flex> */}
          
          {Lesson.map((lesson, index) => {
            switch (lesson.type) {
              case "title":
                return (
                  <Title key={uid + index} my={12}>
                    {lesson.content}
                  </Title>
                );
              case "paragraph":
                return (
                  <Text key={uid + index} my={12} size="lg">
                    {lesson.content}
                  </Text>
                );
              case "snippet":
                return (
                  <Prism
                    key={uid + index}
                    my={12}
                    language="javascript"
                    withLineNumbers
                  >
                    {lesson.content}
                  </Prism>
                );
              case "code_challenge":
                return (
                  <CodeEditor
                    key={uid + index}
                    content={lesson.content}
                    onCanCanjear={setCanCanjear}
                  />
                );
              default:
                break;
            }
          })}
        </Card>
      </Container>
      {/* <Modal
        opened={opened}
        onClose={close}
        title="Felicidades! desafio completado"
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
            Volver a los desafios
          </Button>
        </Flex>
      </Modal>

      {opened && <Confetti gravity={0.3} />} */}
    </>
  );
};
