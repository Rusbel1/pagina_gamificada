import React, { useEffect, useState } from 'react';
import { Button, Container, Flex, Text, Title } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { sampleLessons } from '../../sampleLesson';
import { useParams, useSearchParams } from 'react-router-dom';
import { CodeEditor } from '../components/CodeEditor';

export const LessonPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(0);

  console.log(searchParams.get('page'));

  const handleOnClickNext = () => {
    setPage((prevState) => prevState + 1);
  };

  const handleOnClickBack = () => {
    setPage((prevState) => prevState - 1);
  };

  useEffect(() => {
    setSearchParams({ page: page });
  }, [page]);

  let { id } = useParams();

  return (
    <Container size='md' px='xs' my={128}>
      <Flex w='100%' h='100%' justify='center' direction='column'>
        {sampleLessons[id].lessons[page].content.map((lesson) => {
          switch (lesson.type) {
            case 'title':
              return <Title my={12}>{lesson.content}</Title>;
            case 'paragraph':
              return (
                <Text my={12} size='lg'>
                  {lesson.content}
                </Text>
              );
            case 'snippet':
              return (
                <Prism my={12} language='javascript' withLineNumbers>
                  {lesson.content}
                </Prism>
              );
            case 'code_challenge':
              return <CodeEditor content={lesson.content} />;
            default:
              break;
          }
        })}
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
          <Button
            size='md'
            color='green'
            onClick={() => handleOnClickNext()}
            disabled={page >= sampleLessons[id].lessons.length - 1}
          >
            Siguiente
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};
