import React, { useState } from "react";

export default function NotForm() {
  const [baslik, setBaslik] = useState("");
  const [aciklama, setAciklama] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    const not = { baslik, aciklama };
    console.log(not);
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
    </form>
  );
}
