import React from "react";

const Search = ( { handleValor }) => {
  const handleChange = (e) =>{
    handleValor(e.target.value)
  }
  return (
    <div style={{margin: '20px'}}>
      <div className="input-group mb-3 container">
        <input
          type="text"
          className="form-control"
          placeholder="Que estas buscando?"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={handleChange}
        />
        
      </div>
    </div>
  );
};

export { Search };
