import { Box, HStack, Text, Link } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box
    css={{backgroundColor:"#C2D4E7"}}
      color="blackAlpha.900"
      minH="10"
      px="5"
      py={["2", "2"]}
      display="flex"
      position="sticky"
      zIndex="5"
      m={"0"}
    >
      <HStack
        maxH="full"
        alignItems="center"
        w="full"
        justifyContent="center" 
        m={"0"}
      >
        <Text fontSize={["0.85rem", "1.2rem"]} letterSpacing="m" textAlign="center">
          Made With ❤️ by  
          <Link
            href="https://github.com/vikram110703"
            target="_blank"
            color="green.800" 
            px={2} 
            fontWeight={"bold"}
          >
            Vikram Saini
          </Link>
        </Text>
      </HStack>
    </Box>
  );
};

export default Footer;
