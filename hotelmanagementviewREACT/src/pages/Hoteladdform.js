import React from "react";
import { useState } from "react";
function HotelAdd(){
  const[hotelName, setHotelName] = useState("");
  const[ac, setAC] = useState(false);
  const[nonAC, setNonAC] = useState(false);
  const[priceAC, setPriceAC] = useState();
  const[priceNonAC, setPriceNonAC] = useState(""); 

  function handleSubmit(){
    fetch('https://localhost:44377/api/HotelRoomDetails', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "autoId": 0,
          "hotelName": hotelName,
          "ac": ac,
          "priceAC": priceAC,
          "nonAC": nonAC,
          "priceNonAC": priceNonAC
        })
    })
    window.location = "/#/search/admin-hoteldetails";
  }
  return(
    <form align = "center" onSubmit={() => { handleSubmit(); }}>
        <label>Hotel Name:</label>
        <br />
        <input 
          name='Hotel Name' 
          type='text'
          value={hotelName}
          onChange={e => setHotelName(e.target.value)}
        />
        <br/>
        <label>AC:</label>
        <input 
              type="checkbox" 
              name="AC" 
              value={ac}
              onChange={e => setAC(!ac)}
        />
        <br/>
        <input 
          name='priceAc' 
          type='text'
          value={priceAC}
          onChange={e => setPriceAC(e.target.value)}
        />
        <br/>
        <label>Non AC</label>
        <input 
              type="checkbox" 
              name="NonAC" 
              value={nonAC}
              onChange={e => setNonAC(!nonAC)}
        />
        <br/>
        <input 
          name='priceNonAC' 
          type='text'
          value={priceNonAC}
          onChange={e => setPriceNonAC(e.target.value)}
        />
        <br/>
        <input 
          type='submit' 
          value='Submit' 
        />
      </form>
  )
}
export default HotelAdd;