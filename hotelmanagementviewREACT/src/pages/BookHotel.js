import React, { useState } from "react";
import { isFunctionExpression } from "typescript";


function BookHotel(){
    const[roomNo, setRoomNo] = useState("");
    const[hotelName, setHotelName] = useState("");
    const[fromDate, setFromDate] = useState("");
    const[toDate, setToDate] = useState("");
    const[userName, setUserName] = useState("");
    const[userEmail, setUserEmail] = useState("");
    const[price, setPrice] = useState("");

    var arr = (window.location.href).split("/");

    function handleSubmit(){
        fetch('https://localhost:44377/client-details', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id" : 0,
                "userID" : arr.at(-1),
                "userName": userName,
                "userEmail": userEmail,
                "hotelName":hotelName,
                "roomNo": roomNo,
                "fromDate": fromDate,
                "toDate": toDate,
                "price": price
            })
        })
        window.location = `/#/login/client-dashboard/${arr.at(-1)}`
    }   
    
    return(
        <form onSubmit={e => { handleSubmit(e) }}>
        <label>Name</label>
        <br />
        <input 
          name='Name' 
          type='text'
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <br/>
        <label>Email</label>
        <br />
        <input 
          name='email' 
          type='text' 
          value={userEmail}
          onChange={e => setUserEmail(e.target.value)}
        />
        <br />
        <label>Hotel Name</label>
        <br />
        <input
          name='hotelname' 
          type='text'
          value={hotelName}
          onChange={e => setHotelName(e.target.value)}
        />
        <br/>
        <label>Room No.</label>
        <br />
        <input
          name='roomNo' 
          type='text'
          value={roomNo}
          onChange={e => setRoomNo(e.target.value)}
        />
        <br/>
        <label>From Date</label>
        <br />
        <input
          name='date' 
          type='date'
          value={fromDate}
          onChange={e => setFromDate(e.target.value)}
        />
        <br/>
        <label>To Date</label>
        <br />
        <input
          name='date' 
          type='date'
          value={toDate}
          onChange={e => setToDate(e.target.value)}
        />
        <br/>
        <label>Price</label>
        <br />
        <input
          name='price' 
          type='text'
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <br/><br/>
         <input 
          type='submit' 
          value='Submit' 
        />
      </form>
    )
}
export default BookHotel;