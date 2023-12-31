import React from "react";
import {
  Accordion,
  Container,
  Flex,
  Text,
  ThemeIcon,
  Title,
  Anchor,
  Button,
} from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { OvaCharacter } from "../../lessons/components";
import { axiosController } from "../../helper/axiosController";
import { useEffect } from "react";
import { useState } from "react";
import { userStore } from "../../store/UserStore";


export const HomeChallenges = () => {
  const user = userStore((state) => state);
  const setUser = userStore((state) => state.setUser);
  const [sections, setSections] = useState([]);
  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      token: token,
    },
  };
  useEffect(() => {
    axiosController.get("/sectionGet", headers).then((response) => {
      setSections(response.data);
    });
  }, []);

  const navigate = useNavigate();
  const Handleonclicksection = (uid) => {
    navigate(`/lesson/${uid}`);
  }
  const sectionsByLevel = {};

  sections.forEach((section) => {
    if (!sectionsByLevel[section.level]) {
      sectionsByLevel[section.level] = [];
    }
    sectionsByLevel[section.level].push(section);
  });

  return (
    <Container
      size="md"
      px="xs"
      mt={32}
      style={{
        marginBottom: 50,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <div>
        <Title order={1}>Programación básica</Title>
        <Text mt={16}>
          Desafios de programacion basica para aprender sobre la programacion,
          gana puntos realizando desafios para desbloquear muchos mas añadiendo
          un poco mas de dificultad.
        </Text>
        <Title order={2}>Seras capaz de completarlos? Averiguemoslo</Title>

        <Accordion
          variant="contained"
          defaultValue="customization"
          mt={8}
          radius="xs"
        >
          {Object.entries(sectionsByLevel).map(([level, sectionsForLevel]) => (
            <Accordion key={level} disableChevronRotation={false}>
              <Accordion.Item value={level} >
                <Accordion.Control ><strong>{`Dificultad: ${level} `}</strong></Accordion.Control>
                <Accordion.Panel>
                  {sectionsForLevel.map((section, index) => (
                    <Flex key={index} p={4}>
                      <ThemeIcon color="teal" size={24} radius="xl" mr={12}>
                        <IconCircleCheck size="1rem" />
                      </ThemeIcon>
                      <Flex justify="space-between" align="center" w="100%">
                        <Button disabled={section.points_value>user.points_user} variant="subtle" onClick={()=>Handleonclicksection(section.uid)}>
                          {section.title}
                        </Button>
                      </Flex>
                    </Flex>
                  ))}
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          ))}
        
        </Accordion>
        <OvaCharacter message={"Sere tu apoyo en los desafios"} side={"right"} />
      </div>
    </Container>
  );
};
