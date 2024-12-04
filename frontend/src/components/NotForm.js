import React, { useState } from "react";
import { useNotcontext } from "../hooks/useNotContext";


export default function NotForm() {
  const [baslik, setBaslik] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [hata,setHata]=useState(null)

  const {dispatch}=useNotcontext();


  const handleSumbit = async (e) => {
    e.preventDefault();
    const not = { baslik, aciklama };
    const response= await fetch('/api/notlar',{
        method:'POST',
        body:JSON.stringify(not),
        headers:{
            'Content-Type':'application/json'
        }
    })
    const json =await response.json()
    if(!response.ok){
        setHata(json.hata)
    }
    if(response.ok){
        setHata(null)
        setBaslik('')
        setAciklama('')
        dispatch({type:'NOT_OLUSTUR',payload:json})
        //console.log('YEni bir not eklendi',json)
    }
  };

  return (
    <form className="create" onSubmit={handleSumbit}>
      <h3>Yeni Bir Not Ekle</h3>
      <div className="create-group">
        <div>
          <label>Not Baslik:</label>
          <input
            type="text"
            onChange={(e) => setBaslik(e.target.value)}
            value={baslik}
          />
        </div>
      </div>
      <div className="create-group">
        <div>
          <label>Not Acıklama:</label>
          <input
            type="text"
            onChange={(e) => setAciklama(e.target.value)}
            value={aciklama}
          />
        </div>
      </div>
    <button type="sumbit">Ekle</button>
    {hata && <div className="error">{hata}</div>}
    </form>
  );
}



/// props yöntemi

// import React, { useState } from "react"
// export default function NotForm({ addNot }) {
//     const [baslik, setBaslik] = useState("");
//     const [aciklama, setAciklama] = useState("");
//     const [hata, setHata] = useState(null);
  
//     const handleSumbit = async (e) => {
//       e.preventDefault();
//       const not = { baslik, aciklama };
  
//       const response = await fetch("/api/notlar", {
//         method: "POST",
//         body: JSON.stringify(not),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
  
//       const json = await response.json();
  
//       if (!response.ok) {
//         setHata(json.hata);
//       }
  
//       if (response.ok) {
//         setHata(null);
//         setBaslik("");
//         setAciklama("");
//         console.log("Yeni bir not eklendi", json);
  
//         // Yeni notu listeye ekle
//         addNot(json);
//       }
//     };
  
//     return (
//       <form className="create" onSubmit={handleSumbit}>
//         <h3>Yeni Bir Not Ekle</h3>
//         <div className="create-group">
//           <div>
//             <label>Not Baslik:</label>
//             <input
//               type="text"
//               onChange={(e) => setBaslik(e.target.value)}
//               value={baslik}
//             />
//           </div>
//         </div>
//         <div className="create-group">
//           <div>
//             <label>Not Acıklama:</label>
//             <input
//               type="text"
//               onChange={(e) => setAciklama(e.target.value)}
//               value={aciklama}
//             />
//           </div>
//         </div>
//         <button type="sumbit">Ekle</button>
//         {hata && <div className="error">{hata}</div>}
//       </form>
//     );
//   }
  