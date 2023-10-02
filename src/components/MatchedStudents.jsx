import React, { useEffect, useState } from 'react';
import { Loader } from './Loader';
import { Container, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import { useLocation, Navigate } from 'react-router-dom';
import { Avatar, AvatarBadge } from '@chakra-ui/react';


export const MatchedStudents = () => {
    const location = useLocation();
    // const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    if (!location.state || !location.state.matchedStudents) {
        return <Navigate to={"/"} />
        // return <h1>No matched students found </h1>;

    }
    const matchedStudents = location.state.matchedStudents;

    if (!matchedStudents || matchedStudents.length === 0) {
        return navigate("/");
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
        <VStack w={["11rem", "20rem"]} p={["1.5rem", "2rem"]} shadow={"lg"} borderRadius={"lg"} transition={"all 0.3s"}
            m={"0.8rem"} bgColor={"whiteAlpha.500"}
            css={{
                "&:hover": {
                    transform: "scale(1.07)"
                },
            }
            }
        >
            <Avatar size={["md", "lg"]} name={name} src="url_to_avatar_image.jpg">
                <AvatarBadge boxSize="1.25rem" bg="green.500" />
            </Avatar>
            <Heading size={["sm", "md"]} noOfLines={1} color="blue.300" >
                {name.toUpperCase()}
            </Heading>
            <Text fontSize={["lg", "xl"]} fontWeight={"medium"} noOfLines={1} >Hostel : {hostelName}</Text>
            <Text fontSize={["lg", "xl"]} fontWeight={"medium"} noOfLines={1} >Block : {block}</Text>
            <Text fontSize={["lg", "xl"]} fontWeight={"medium"} noOfLines={1} >Room No : {roomNo}</Text>
            <Text fontSize={["md", "xl"]} fontWeight={"medium"} noOfLines={1} >Brnach : {branch || ''}</Text>
            <Text fontSize={["sm", "xl"]} fontWeight={"medium"} noOfLines={1} >Enr. No : {enrollmentNo || ''}</Text>
            <Text fontSize={["md", "xl"]} fontWeight={"medium"} noOfLines={1} >Year : {year || ''}</Text>
            <Text fontSize={["sm", "xl"]} fontWeight={"medium"} noOfLines={1} >State : {state || ''}</Text>

        </VStack>
    )
};

