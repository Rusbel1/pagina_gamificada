import React from 'react';

import {
  Accordion,
  Container,
  Flex,
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

      <Text mt={16}>10 lecciones | 2h de duración estimada</Text>

      <Accordion
        variant='contained'
        defaultValue='customization'
        mt={8}
        radius='xs'
      >
        <Accordion.Item value='variables'>
          <Accordion.Control>Variables</Accordion.Control>
          <Accordion.Panel>
            <Flex p={4}>
              <ThemeIcon color='teal' size={24} radius='xl' mr={12}>
                <IconCircleCheck size='1rem' />
                </ThemeIcon>
                <Flex justify='space-between' align='center' w='100%'>
                <Anchor component={Link} to={`/lesson/0`}>
                  Variables
                </Anchor>
                <Text color='green'>20/20</Text>
                </Flex>
              </Flex>

             {/*  <Flex p={4}>
              <ThemeIcon color='blue' size={24} radius='xl' mr={12}>
                <IconCircleCheck size='1rem' />
                </ThemeIcon>
                <Flex justify='space-between' align='center' w='100%'>
                <Anchor component={Link} to={`/lesson/1`}>
                  Declaracion y asignacion de Variables
                </Anchor>
                <Text color='blue'>10/20</Text>
                </Flex>
              </Flex> */}
        
        </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value='Estructuras Condicionales'>
          <Accordion.Control>Estructuras Condicionales</Accordion.Control>
          <Accordion.Panel>
            <Flex p={4}>
              <ThemeIcon color='teal' size={24} radius='xl' mr={12}>
                <IconCircleCheck size='1rem' />
              </ThemeIcon>
              <Flex justify='space-between' align='center' w='100%'>
                <Anchor component={Link} to={`/lesson/1`}>
                  Condicional IF
                </Anchor>
                <Text color='green'>20/20</Text>
              </Flex>
            </Flex>
            <Flex p={4}>
              <ThemeIcon color='gray' size={24} radius='xl' mr={12}>
                <IconCircleDashed size='1rem' />
              </ThemeIcon>
              <Flex justify='space-between' align='center' w='100%'>
                <Anchor component={Link} to={`/lesson/2`}>
                  Condicional If anidado
                </Anchor>
                <Text color='green'>0/20</Text>
              </Flex>
            </Flex>
            <Flex p={4}>
              <ThemeIcon color='blue' size={24} radius='xl' mr={12}>
                <IconCircleDashed size='1rem' />
              </ThemeIcon>
              <Flex justify='space-between' align='center' w='100%'>
                <Anchor component={Link} to={`/lesson/3`}>
                  Condicional IF ELSE
                </Anchor>
                <Text color='blue'>10/20</Text>
              </Flex>
            </Flex>
            
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value='bucles'>
          <Accordion.Control>Bucles</Accordion.Control>
          <Accordion.Panel>

            <Flex p={4}>
              <ThemeIcon color='blue' size={24} radius='xl' mr={12}>
                <IconCircleDashed size='1rem' />
              </ThemeIcon>
              <Flex justify='space-between' align='center' w='100%'>
                <Anchor component={Link} to={`/lesson/4`}>
                  Como es la estructura ciclica FOR
                </Anchor>
                <Text color='blue'>10/20</Text>
              </Flex>
            </Flex>

            <Flex p={4}>
              <ThemeIcon color='gray' size={24} radius='xl' mr={12}>
                <IconCircleDashed size='1rem' />
              </ThemeIcon>
              <Flex justify='space-between' align='center' w='100%'>
                <Anchor component={Link} to={`/lesson/5`}>
                  Como es la estructura ciclica WHILE
                </Anchor>
                <Text color='green'>0/20</Text>
              </Flex>
            </Flex>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value='funciones'>
          <Accordion.Control>Funciones</Accordion.Control>
          <Accordion.Panel>
            <Flex p={4}>
              <ThemeIcon color='teal' size={24} radius='xl' mr={12}>
                <IconCircleCheck size='1rem' />
              </ThemeIcon>
              <Flex justify='space-between' align='center' w='100%'>
              <Anchor component={Link} to={`/lesson/6`}>
                <>Como utilizar Funciones en javascript</>
              </Anchor>
                <Text color='green'>20/20</Text>
              </Flex>
            </Flex>

           
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value='Objetos'>
          <Accordion.Control>Objetos</Accordion.Control>
          <Accordion.Panel>
            <Flex p={4}>
              <ThemeIcon color='teal' size={24} radius='xl' mr={12}>
                <IconCircleCheck size='1rem' />
              </ThemeIcon>
              <Flex justify='space-between' align='center' w='100%'>
              <Anchor component={Link} to={`/lesson/7`}>
                <>Como utilizar Objetos en javascript</>
              </Anchor>
                <Text color='green'>20/20</Text>
              </Flex>
            </Flex>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value='Arrays'>
          <Accordion.Control>Arrays</Accordion.Control>
          <Accordion.Panel>
            <Flex p={4}>
              <ThemeIcon color='grey' size={24} radius='xl' mr={12}>
                <IconCircleCheck size='1rem' />
              </ThemeIcon>
              <Flex justify='space-between' align='center' w='100%'>
              <Anchor component={Link} to={`/lesson/8`}>
                <>Como utilizar Arrays en javascript</>
              </Anchor>
                <Text color='grey'>0/20</Text>
              </Flex>
            </Flex>
          </Accordion.Panel>
        </Accordion.Item>

      </Accordion>
    </Container>
  );
};
