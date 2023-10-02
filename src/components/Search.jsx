import {
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
import toast from 'react-hot-toast';
import { redirect } from 'react-router-dom';
import { server } from '../main';
import { MatchedStudents } from './MatchedStudents';
import { useNavigate, Link } from 'react-router-dom';




const Search = () => {
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
            navigate('/matchedStudents', { state: { matchedStudents: data } });
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };



    return (
        <HStack minW={["container.xl", "container.sm"]} minH={"container.sm"} px={0.2} py={0.5} justifyContent={"center"}
            alignItems={"center"} css={{ backgroundColor: "#C2D4E7" }}  >
            <div style={{ backgroundColor: 'white', borderWidth: '1px', borderColor: 'none', borderRadius: "0.5rem", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", padding: '0.8rem', paddingInline: "1.5rem", maxWidth: "50%", minWidth: "40%" }}>
                <form onSubmit={handleSubmit} >
                    <Text fontSize={"2xl"} ml={["5%", "38%"]} color={"blue.200"} fontWeight={"bold"}> Find Your Friend </Text>
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
                    <Button type="submit" bgColor={"blue.200"} mt={"5"} ml={["20%", "42%"]}>Submit</Button>
                </form>
            </div>
        </HStack>
    );
};

export default Search;

