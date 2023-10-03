import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  return <HStack p={"3"} ml="0" gap={"6"} shadow={"base"} bgColor={"blue.200"} >

    <Button variant="unstyled"
      color="blackAlpha.800"
      fontSize={["1.2rem", "1.7rem"]} fontFamily={"heading"}
      sx={{
        position: 'relative', // Required for positioning the pseudo-element
        '&::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '2px',         // Set the height of the underline
          backgroundColor: 'black',
          marginTop: '2px',       // Add a slight top margin to the underline
          opacity: 0,            // Initially hide the underline
          transition: 'opacity 0.3s', // Add a smooth transition for the underline
        },
        '&:hover::after': {
          opacity: 1, // Show the underline on hover
        },
      }}
      ml={"2"}
    >
      <Link to='/'>Home</Link>
    </Button>
    <Button variant="unstyled"
      color="blackAlpha.800"
      fontSize={["1.3rem", "1.7rem"]} fontFamily={"heading"}
      sx={{
        position: 'relative', 
        '&::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '2px',         
          backgroundColor: 'black',
          marginTop: '2px',       
          opacity: 0,            
          transition: 'opacity 0.3s',
        },
        '&:hover::after': {
          opacity: 1, 
        },
      }}
    >
      <Link to='/find'>Search</Link>
    </Button>

  </HStack>


}

export default Header