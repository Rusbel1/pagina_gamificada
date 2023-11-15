import { Box, Card, Image, Text } from '@mantine/core';

import ova from '../../assets/ova.png';

export const OvaCharacter = ({ side = 'right', message = '' }) => {
  const ovaSide = side === 'right' ? { right: 30 } : { left: 30 };
  return (
    <Box
      pos={'fixed'}
      top='65%'
      bottom='50%'
      sx={{
        ...ovaSide,
      }}
    >
      <Card shadow='lg' radius='lg' withBorder mb={10}>
        <Text color='darkslategray' size='xs'><strong>{message}</strong></Text>
      </Card>
      <Image maw={200} mx='sx' radius='xs' src={ova} alt='Random image' />
    </Box>
  );
};
