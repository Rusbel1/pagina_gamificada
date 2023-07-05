import { Box, Card, Image, Text } from '@mantine/core';

import ova from '../../assets/ova.png';

export const OvaCharacter = ({ side = 'right', message = '' }) => {
  const ovaSide = side === 'right' ? { right: 32 } : { left: 32 };
  return (
    <Box
      pos={'fixed'}
      top='50%'
      bottom='50%'
      sx={{
        ...ovaSide,
      }}
    >
      <Card shadow='sm' padding='lg' radius='md' withBorder mb={16}>
        <Text size='md'>{message}</Text>
      </Card>

      <Image maw={200} mx='auto' radius='md' src={ova} alt='Random image' />
    </Box>
  );
};
