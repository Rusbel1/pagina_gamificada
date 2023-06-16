import React, { useEffect, useState } from 'react';

import { Container, Flex, Space, Text, Title } from '@mantine/core';

import { Prism } from '@mantine/prism';

import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/ext-language_tools';

import { parseScript } from 'esprima';

function checkSyntax(code) {
  try {
    parseScript(code);
    console.log('No syntax errors found.');
  } catch (error) {
    console.error('Syntax error:', error);
  }
}

export const LessonPage = () => {
  const [code, setCode] = useState('');

  function onChange(newValue) {
    setCode(newValue);
  }

  useEffect(() => {
    checkSyntax(code);
  }, [code]);

  return (
    <Container size='md' px='xs' h='100vh'>
      <Flex w='100%' h='100%' justify='center' direction='column'>
        <Title>Condicional IF</Title>
        <Text size='lg'>
          El condicional if en inglés nos sirve para poder hablar de hipótesis
          en pasado o de condiciones con sus consecuencias futuras. El sistema
          de los condicionales en inglés es un poco complejo porque hay varios
          grupos y tipos. ¡Este post sobre el uso del condicional con ejemplos y
          ejercicios te aclarará este tema!
        </Text>
        <Space h='md' />

        <Prism language='javascript' withLineNumbers>
          {code}
        </Prism>

        <AceEditor
          width='100%'
          mode='javascript'
          theme='xcode'
          onChange={onChange}
          name='UNIQUE_ID_OF_DIV'
          editorProps={{ $blockScrolling: true }}
          fontSize={24}
        />
      </Flex>
    </Container>
  );
};
