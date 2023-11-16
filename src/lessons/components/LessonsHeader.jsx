import { Avatar, Button, Container, Flex, Text } from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

export const LessonsHeader = () => {
  const navigate = useNavigate();

  const onCloseLesson = () => {
    navigate('/');
  };

  return (
    <Container pt={18}>
      <Flex justify='space-between' align='center'>
        <Flex align='center'>
          <Avatar size='lg'></Avatar>
          <Text ml={6}></Text>
        </Flex>
        <Button variant='subtle' leftIcon={<IconX />} onClick={onCloseLesson}>
          Cerrar desafio
        </Button>
      </Flex>
    </Container>
  );
};
