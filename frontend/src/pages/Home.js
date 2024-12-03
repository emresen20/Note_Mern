import React, { useEffect, useState } from 'react';

export default function Home() {
    const [notlar, setNotlar] = useState([]);

    useEffect(() => {
        const fetchNotlar = async () => {
            try {
                const response = await fetch('/api/notlar'); // burası önemli packetjsona proxi ekledi
               
                const json = await response.json();
                console.log(json)
                if (response.ok) {
                    setNotlar(json);
                } else {
                    console.error('Error fetching notes:', json);
                }
            } catch (error) {
                console.error('Error fetching notes:', error);
            }
        };

        fetchNotlar();
    }, []);

    return (
        <div className="home">
            <div className="notlar">
                {notlar.map((not) => (
                    <p key={not._id}>{not.baslik}</p>
                ))}
            </div>
        </div>
    );
}
