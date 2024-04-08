import React, { useState } from 'react';
import axios from 'axios';

const FormComponent = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://mern-task-1-drab.vercel.app/submit-form', { name, age, email });
            alert('Data submitted successfully!');
        } catch (error) {
            alert('Failed to submit data.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormComponent;
