import React, { useEffect, useState } from 'react';
import { Loader } from './Loader';
import { Box, Container, HStack, Heading, Text, VStack } from '@chakra-ui/react';
// import { useLocation, Navigate } from 'react-router-dom';
import { Avatar, AvatarBadge } from '@chakra-ui/react';
import { server } from '../main';
import toast from 'react-hot-toast';
import axios from 'axios';


export const AllStudents = () => {
    const [loading, setLoading] = useState(true);
    const [allStudents, setAllStudents] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const  {data}  = await axios.get(`${server}/find/all`);
                setAllStudents(data);
                console.log("data: ",data);
                toast.success(data.message);

            } catch (error) {
                toast.error(error.response.data.message);
                // toast.error(error.message);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                },500);
                
            }
        };

        fetchData();
    }, []);

    // if (loading) return <Loader />

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
                            allStudents.students.map((student, ind) => (
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
            <Text color={"blackAlpha.800"} fontSize={["lg", "xl"]} fontWeight={"bold"} noOfLines={1} overflowWrap="break-word" wordWrap="break-word" >Hostel : {hostelName}</Text>
            <Text color={"blackAlpha.800"} fontSize={["lg", "xl"]} fontWeight={"bold"} noOfLines={2} overflowWrap="break-word" wordWrap="break-word" >Block : {block}</Text>
            <Text color={"blackAlpha.800"} fontSize={["lg", "xl"]} fontWeight={"bold"} noOfLines={2} overflowWrap="break-word" wordWrap="break-word" >Room No : {roomNo}</Text>
            <Text fontSize={["md", "xl"]} fontWeight={"medium"} noOfLines={2} overflowWrap="break-word" wordWrap="break-word" >Brnach : {branch || ''}</Text>
            <Text fontSize={["sm", "xl"]} fontWeight={"medium"} noOfLines={3} overflowWrap="break-word" wordWrap="break-word" >Enr. No : {enrollmentNo || ''}</Text>
            <Text fontSize={["md", "xl"]} fontWeight={"medium"} noOfLines={2} overflowWrap="break-word" wordWrap="break-word" >Year : {year || ''}</Text>
            <Text fontSize={["sm", "xl"]} fontWeight={"medium"} noOfLines={3} overflowWrap="break-word" wordWrap="break-word" >State : {state || ''}</Text>

        </Box>
    )
};

