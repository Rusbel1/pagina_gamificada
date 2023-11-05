import React, { useState } from 'react';
import {
  Accordion,
  Container,
  Flex,
  Text,
  ThemeIcon,
  Title,
  Anchor,
} from '@mantine/core';
import { Wheel } from 'react-custom-roulette';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { OvaCharacter } from '../../lessons/components';


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

export const HomeChallenges = () => {
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

  return (
    <Container  size='md' px='xs' mt={32} style={{ marginBottom: 50, display: 'flex', justifyContent: 'space-between',flexDirection:'row' }}>
      <div>
        <Title order={1}>Programación básica</Title>
        <Text mt={16}>Desafios de programacion basica para aprender sobre la programacion, gana puntos realizando desafios para desbloquear muchos mas añadiendo un poco mas de dificultad.</Text>
        
        <Title order={2}>Seras capaz de completarlos? Averiguemoslo</Title>

        <Text mt={40}> <strong>Nivel 1(Basico)</strong> </Text>
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
          <Text mt={40}> <strong>Nivel 2(Principiante)</strong> </Text>
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
          <Text mt={40}> <strong>Nivel 3(Intermedio)</strong> </Text>
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
          <Text mt={40}> <strong>Niveles avanzados proximamente.....</strong> </Text>
        </Accordion>
        <OvaCharacter
              message={'Sere tu apoyo en los desafios' }
              side={'left'}

            />
      </div>
    </Container>


  );
};
