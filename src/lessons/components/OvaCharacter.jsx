import { Box, Card, Image, Text } from '@mantine/core';

import ova from '../../assets/ova.png';

export const OvaCharacter = ({ side = 'right', message = '' }) => {
  const ovaSide = side === 'right' ? { right: 30 } : { left: 30 };
  return (
    <Box
      pos={'fixed'}
      top='66%'
      bottom='50%'
      sx={{
        ...ovaSide,
      }}
    >
      <Card shadow='xl' radius='lg' withBorder mb={16}>
        <Text color='darkslategray' size='xs'><strong>{message}</strong></Text>
      </Card>
      <Image maw={200} mx='auto' radius='md' src={ova} alt='Random image' />
    </Box>
  );
};
