import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createSubscriptions } from '../../services/subscriptions';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
  } from '@chakra-ui/react'

const CreateSubscriptions = ({ onSubmit }) => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [voucherId, setVoucherId] = useState(null);
    const [mobile, setMobile] = useState('');

    const handleSave = async () => {
        const payload = { email, name, mobile };
        await createSubscriptions(voucherId, payload);
        history.push('/');
    };

    return(
        <form handleSave={onSubmit}>
            <FormControl id='email' isRequired>
            <FormHelperText>We'll never share your email.</FormHelperText>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
            </FormControl>

            <FormControl id='name' isRequired>
            <FormLabel>Full Name</FormLabel>
            <Input type='name' />
            </FormControl>

            <FormControl id='mobile' isRequired>
            <FormLabel>Mobile Number</FormLabel>
            <Input type='mobile' />
            <FormHelperText></FormHelperText>
            </FormControl>
        </form>
    )
}

export default CreateSubscriptions;