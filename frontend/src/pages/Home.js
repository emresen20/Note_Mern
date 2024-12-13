import React, { useEffect} from 'react';
import NotDetay from '../components/NotDetay';
import NotForm from '../components/NotForm';
import { useNotcontext } from '../hooks/useNotContext';
import { useAuthContext } from '../hooks/useAuthContext';


export default function Home() {
    //const [notlar, setNotlar] = useState([]);
    const {notlar,dispatch}=useNotcontext();
    const {kullanici}=useAuthContext();



    useEffect(() => {
        const fetchNotlar = async () => {
            try {
                const response = await fetch('/api/notlar',{
                    headers:{
                        'Authorization':`Bearer ${kullanici.token}`
                    }
                }); // burası önemli packetjsona proxi ekledi
               
                const json = await response.json();
                console.log(json)
                if (response.ok) {
                    //setNotlar(json);
                    dispatch({type:'NOT_DOLDUR',payload:json})
                } else {
                    console.error('Error fetching notes:', json);
                }
            } catch (error) {
                console.error('Error fetching notes:', error);
            }
        };

        if(kullanici){
            fetchNotlar();
        }
        
    }, [dispatch,kullanici]);

    return (
        <div className="home">
            <div className='not-form'>
                <NotForm/>

            </div>
            <div className="notlar">
                {notlar.map((not) => (
                    <NotDetay key={not._id} not={not}/>
                ))}
            </div>
        </div>
    );
}








////Props ile aktarıp yeni listeyi hemen gümcelleyip ekrana getiriyor


// import React, { useEffect, useState } from 'react';
// import NotDetay from '../components/NotDetay';
// import NotForm from '../components/NotForm';

// export default function Home() {
//     const [notlar, setNotlar] = useState([]);

//     // Yeni not ekleme fonksiyonu
//     const addNot = (yeniNot) => {
//         setNotlar((prevNotlar) => [yeniNot, ...prevNotlar]);
//     };

//     useEffect(() => {
//         const fetchNotlar = async () => {
//             try {
//                 const response = await fetch('/api/notlar');
//                 const json = await response.json();
//                 console.log(json);
//                 if (response.ok) {
//                     setNotlar(json);
//                 } else {
//                     console.error('Error fetching notes:', json);
//                 }
//             } catch (error) {
//                 console.error('Error fetching notes:', error);
//             }
//         };

//         fetchNotlar();
//     }, []);

//     return (
//         <div className="home">
//             <div className="not-form">
//                 <NotForm addNot={addNot} /> {/* Callback prop olarak geçiliyor */}
//             </div>
//             <div className="notlar">
//                 {notlar.map((not) => (
//                     <NotDetay key={not._id} not={not} />
//                 ))}
//             </div>
//         </div>
//     );
// }

