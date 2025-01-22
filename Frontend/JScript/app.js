import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/data')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Data from PostgreSQL</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{JSON.stringify(item)}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;

