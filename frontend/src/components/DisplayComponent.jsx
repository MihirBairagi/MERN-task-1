import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayComponent = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/get-people');
                setPeople(response.data);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>People List</h2>
            <ul>
                {people.map(person => (
                    <li key={person._id}>
                        <strong>Name:</strong> {person.name}, <strong>Age:</strong> {person.age}, <strong>Email:</strong> {person.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayComponent;
