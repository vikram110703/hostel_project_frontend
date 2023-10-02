import {
    Box,
    HStack,
    FormControl,
    FormLabel,
    Input,
    Select,
    Button,
    Text,
} from '@chakra-ui/react';
import axios from 'axios';

import React, { useState } from 'react';
import { server } from '../main';
import toast from 'react-hot-toast';


const Home = () => {
    const [formData, setFormData] = useState({
        name: '',
        enrollmentNo: '',
        state: '',
        year: '',
        branch: " ",
        hostelName: '',
        block: '',
        roomNo: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`${server}/new`,
                {
                    name: formData.name,
                    enrollmentNo: formData.enrollmentNo,
                    state: formData.state,
                    year: formData.year,
                    branch: formData.branch,
                    hostelName: formData.hostelName,
                    block: formData.block,
                    roomNo: formData.roomNo,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );

            toast.success(data.message);
            setFormData({
                name: '',
                enrollmentNo: '',
                state: '',
                year: '',
                branch: '',
                hostelName: '',
                block: '',
                roomNo: '',
            });

        } catch (err) {
            toast.error(err.response.data.message);
        }

    };

    return (
        <Box bgColor="blue.200" css={{ backgroundColor: "#C2D4E7" }} minH={"container.sm"}>
            <HStack maxW={"container.xl"} minH={"container.sm"} px={0.2} py={0.5}>
                <div style={{ backgroundColor: 'white', borderWidth: '1px', borderColor: 'black', borderRadius: "0 0.5rem 0.5rem 0 ", padding: '0.8rem', paddingInline: "1.5rem", maxWidth: "50%", minWidth: "40%" }}  >
                    <form onSubmit={handleSubmit} >
                        <Text fontSize={"2xl"} ml={"25%"} color={"blue.200"} fontWeight={"bold"} >Fill Your Details</Text>
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
                        </FormControl>

                        <FormControl isRequired >
                            <FormLabel>Branch</FormLabel>
                            <Select placeholder='Select Branch' borderColor={"blue.200"} name="branch" value={formData.branch} onChange={handleChange} >
                                <option>CS</option>
                                <option>ECE</option>
                                <option>EE</option>
                                <option>EI</option>
                                <option>ME</option>
                                <option>Civil</option>
                                <option>Chemical</option>
                                <option>Other</option>
                            </Select>

                            <FormLabel>Hostel</FormLabel>
                            <Select placeholder='Select Hostel' borderColor={"blue.200"} name="hostelName" value={formData.hostelName} onChange={handleChange} >
                                <option>RNT</option>
                                <option>Aryabhatta</option>
                                <option>Gargi</option>
                            </Select>

                            <FormLabel>Block</FormLabel>
                            <Input type='text' borderColor={"blue.200"} name="block" value={formData.block} onChange={handleChange} />

                            <FormLabel>Room No</FormLabel>
                            <Input type='text' borderColor={"blue.200"} name="roomNo" value={formData.roomNo} onChange={handleChange} />
                        </FormControl>
                        <Button type="submit" bgColor={"blue.200"} mt={"5"} ml={"30%"} >Submit</Button>
                        {/* <button type="submit" className="chakra-button" style={{ backgroundColor: "blue", marginTop: "5px" }}>Submit</button> */}
                    </form>
                </div>
                <div>
                    HELLOO DOSTOOO !
                </div>
            </HStack>
        </Box>
    );
};

export default Home;
