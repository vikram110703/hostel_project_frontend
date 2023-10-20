import React, { useEffect, useState } from 'react';
import { Loader } from './Loader';
import { Box, Container, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import { useLocation, Navigate } from 'react-router-dom';
import { Avatar, AvatarBadge } from '@chakra-ui/react';


export const MatchedStudents = () => {
    const location = useLocation();

    const [loading, setLoading] = useState(true);

    if (!location.state || !location.state.matchedStudents) {
        return <Navigate to={"/"} /> 
    }
    const matchedStudents = location.state.matchedStudents.students;

    if (!matchedStudents || matchedStudents.length === 0) {
        return <Navigate to={"/"} />
        return <h1>No matched students found 2 </h1>;
    }
    setTimeout(() => {
        setLoading(false);
    }, 1000);

    return (
        <Container maxW={"100%"} minH={["100vh", "container.sm"]} m={"0.2rem"} p="0" display={"flex"} flexDirection={"column"}>

            {loading ? <Loader /> :
                <>
                    <HStack dir='row' wrap={"wrap"}
                        justifyContent={["center", "center"]}
                        alignItems={"center"}
                        flex="1"
                    >
                        {
                            matchedStudents.map((student, ind) => (
                                <StudentCard
                                    key={ind}
                                    enrollmentNo={student.enrollmentNo}
                                    name={student.name}
                                    hostelName={student.hostelName}
                                    block={student.block}
                                    roomNo={student.roomNo}
                                    state={student.state}
                                    branch={student.branch}
                                    year={student.year}
                                />

                                // <div>{i.name}</div>
                            ))
                        }
                    </HStack>

                </>
            }

        </Container>
    )
};


const StudentCard = ({ name, hostelName, block, roomNo, branch, state, year, enrollmentNo }) => {
    return (
        <Box
            w={{ base: '80%', sm: '15rem', md: '18rem', lg: '25rem' }}
            p={{ base: '0.7rem', sm: '1.2rem', md: '2rem', lg: '2.2rem' }}
            shadow={"lg"} borderRadius={"lg"} transition={"all 0.3s"}
            m={"0.5rem"} bgColor={"whiteAlpha.500"}
            css={{
                "&:hover": {
                    transform: "scale(1.07)"
                },
            }
            }
            overflowWrap={"break-word"}
        >
            <Avatar size={["md", "lg"]} name={name} src="url_to_avatar_image.jpg">
                <AvatarBadge boxSize="1.25rem" bg="green.500" />
            </Avatar>
            <Heading size={["sm", "md"]} mt={"1"} color="blue.300" noOfLines={2} overflowWrap="break-word" wordWrap="break-word"  >
                {name.toUpperCase()}
            </Heading>
            <Text fontSize={["lg", "xl"]} fontWeight={"bold"} noOfLines={1} overflowWrap="break-word" wordWrap="break-word" >Hostel : {hostelName}</Text>
            <Text fontSize={["lg", "xl"]} fontWeight={"bold"} noOfLines={2} overflowWrap="break-word" wordWrap="break-word" >Block : {block}</Text>
            <Text fontSize={["lg", "xl"]} fontWeight={"bold"} noOfLines={2} overflowWrap="break-word" wordWrap="break-word" >Room No : {roomNo}</Text>
            <Text fontSize={["md", "xl"]} fontWeight={"medium"} noOfLines={2} overflowWrap="break-word" wordWrap="break-word" >Brnach : {branch || ''}</Text>
            <Text fontSize={["sm", "xl"]} fontWeight={"medium"} noOfLines={3} overflowWrap="break-word" wordWrap="break-word" >Enr. No : {enrollmentNo || ''}</Text>
            <Text fontSize={["md", "xl"]} fontWeight={"medium"} noOfLines={2} overflowWrap="break-word" wordWrap="break-word" >Year : {year || ''}</Text>
            <Text fontSize={["sm", "xl"]} fontWeight={"medium"} noOfLines={3} overflowWrap="break-word" wordWrap="break-word" >State : {state || ''}</Text>

        </Box>
    )
};

