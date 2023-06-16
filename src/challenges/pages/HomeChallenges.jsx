import React from 'react';

import {
  Accordion,
  Box,
  Container,
  Flex,
  List,
  Text,
  ThemeIcon,
  Title,
  Anchor,
} from '@mantine/core';

import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

export const HomeChallenges = () => {
  return (
    <Container size='xs' px='xs' mt={32}>
      <Title order={1}>Desafios: Programación básica</Title>

      <Text mt={16}>99 lecciones | 2h de duración estimada</Text>

      <Accordion
        variant='contained'
        defaultValue='customization'
        mt={8}
        radius='xs'
      >
        <Accordion.Item value='customization'>
          <Accordion.Control>Control de flujo</Accordion.Control>
          <Accordion.Panel>
            <Flex p={4}>
              <ThemeIcon color='teal' size={24} radius='xl' mr={12}>
                <IconCircleCheck size='1rem' />
              </ThemeIcon>
              <Flex justify='space-between' align='center' w='100%'>
                <Anchor component={Link} to={`/lesson/if`}>
                  Estructura condicial IF
                </Anchor>
                <Text color='green'>20/20</Text>
              </Flex>
            </Flex>

            <Flex p={4}>
              <ThemeIcon color='blue' size={24} radius='xl' mr={12}>
                <IconCircleDashed size='1rem' />
              </ThemeIcon>
              <Flex justify='space-between' align='center' w='100%'>
                <Anchor component={Link} to={`/lesson/for`}>
                  Estructura ciclica FOR
                </Anchor>
                <Text color='blue'>10/20</Text>
              </Flex>
            </Flex>

            <Flex p={4}>
              <ThemeIcon color='gray' size={24} radius='xl' mr={12}>
                <IconCircleDashed size='1rem' />
              </ThemeIcon>
              <Flex justify='space-between' align='center' w='100%'>
                <Anchor component={Link} to={`/lesson/while`}>
                  Estructura ciclica WHILE
                </Anchor>
                <Text color='green'>0/20</Text>
              </Flex>
            </Flex>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value='flexibility'>
          <Accordion.Control>Funciones</Accordion.Control>
          <Accordion.Panel>
            <Flex p={4}>
              <ThemeIcon color='teal' size={24} radius='xl' mr={12}>
                <IconCircleCheck size='1rem' />
              </ThemeIcon>
              <Flex justify='space-between' align='center' w='100%'>
                <>Estructura condicial IF</>
                <Text color='green'>20/20</Text>
              </Flex>
            </Flex>

            <Flex p={4}>
              <ThemeIcon color='blue' size={24} radius='xl' mr={12}>
                <IconCircleDashed size='1rem' />
              </ThemeIcon>
              <Flex justify='space-between' align='center' w='100%'>
                <>Estructura ciclica FOR</>
                <Text color='blue'>10/20</Text>
              </Flex>
            </Flex>

            <Flex p={4}>
              <ThemeIcon color='gray' size={24} radius='xl' mr={12}>
                <IconCircleDashed size='1rem' />
              </ThemeIcon>
              <Flex justify='space-between' align='center' w='100%'>
                <>Estructura ciclica WHILE</>
                <Text color='green'>0/20</Text>
              </Flex>
            </Flex>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};
