import {
    HStack,
    FormControl,
    FormLabel,
    Input,
    Select,
    Button,
    Text,
    Container,
} from '@chakra-ui/react';
import axios from 'axios';

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { server } from '../main';
import { useNavigate } from 'react-router-dom';
import { Loader } from './Loader';


const Search = () => {
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        enrollmentNo: '',
        state: '',
        year: '',
        branch: " ",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    setTimeout(() => {
        setLoading(false);
    }, 1000);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`${server}/find`, {
                name: formData.name,
                enrollmentNo: formData.enrollmentNo,
                state: formData.state,
                year: formData.year,
                branch: formData.branch,
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });

            toast.success(data.message);
            setFormData({
                name: '',
                enrollmentNo: '',
                state: '',
                year: '',
                branch: '',
            });

            // Navigate to the '/matchedStudents' route and pass data using the 'state' object
            navigate('/matchedStudents', { state: { matchedStudents: data} });
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };

    if (loading) return <Loader />;
    return (
        <Container maxW={"80%"} minH={["100vh", "container.sm"]} m={"auto"} p="0"
            display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}
            css={{ backgroundColor: "#C2D4E7" }}
        >
            <Container bgColor={"whiteAlpha.700"} shadow={"lg"} borderRadius={"lg"} transition={"all 0.3s"} p={"2rem"}
                css={{
                    "&:hover": {
                        transform: "scale(1.1)"
                    },
                }
                }
            >
                {/* <div style={{ backgroundColor: 'white', borderWidth: '1px', borderColor: 'none', borderRadius: "0.5rem", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", padding: '0.8rem', paddingInline: "1.5rem", maxWidth: "80%", minWidth:  }}> */}

                <form onSubmit={handleSubmit} >
                    <Text fontSize={"2xl"} ml={["5%", "36%"]} color={"blue.500"} fontWeight={"bold"}> Find Your Friend </Text>
                    <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input type='text' borderColor={"blue.200"} name="name" value={formData.name} onChange={handleChange} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Enrollment No</FormLabel>
                        <Input type='text' borderColor={"blue.200"} name="enrollmentNo" value={formData.enrollmentNo} onChange={handleChange} />
                        <FormLabel>State</FormLabel>
                        <Input type='text' borderColor={"blue.200"} name="state" value={formData.state} onChange={handleChange} />
                        <FormLabel>Year</FormLabel>
                        <Select placeholder='Select Year' borderColor={"blue.200"} name="year" value={formData.year} onChange={handleChange}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </Select>
                        <FormLabel>Branch</FormLabel>
                        <Select placeholder='Select Branch' borderColor={"blue.200"} name="branch" value={formData.branch} onChange={handleChange}>
                            <option>CS</option>
                            <option>ECE</option>
                            <option>EE</option>
                            <option>EI</option>
                            <option>ME</option>
                            <option>Civil</option>
                            <option>Chemical</option>
                            <option>Other</option>
                        </Select>
                    </FormControl>
                    <Button type="submit" bgColor={"blue.400"} mt={"5"} ml={["20%", "42%"]}>Submit</Button>
                </form>
            </Container>
        </Container>
    );
};

export default Search;

