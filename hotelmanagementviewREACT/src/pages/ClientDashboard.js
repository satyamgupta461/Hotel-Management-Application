import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, NavLink, Link } from "react-router-dom";
import '../App.css';

function ClientDashboard() {
  var url = window.location.href;
  var arr = url.split("/");
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
        await fetch(`https://localhost:44377/${arr.at(-1)}/client-details`)
          .then(response => response.json())
          .then(data => setMyData(data))
      }
      fetchMyAPI()
    }, [])
  console.log(myData);
  function handleClick(){
    window.location = `/#/client/bookHotel/${arr.at(-1)}`;
  }
  return (
    <div>
      <br/><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='/'><button>Home</button></a>
      <h1 align = "center">Welcome Back to Your Dashboard</h1>
      <table class="center">
      <tr>
        <th>S.No.</th>
        <th>Hotel Name</th>
        <th>Room No</th>
        <th>From Date</th>
        <th>To Date</th>
        <th>Amount/day</th>
      </tr>
      {
        myData.map((data) => (
          <tr>
            <td>{data.id}</td>
            <td>{data.userName}</td>
            <td>{data.hotelName}</td>
            <td>{data.fromDate}</td>
            <td>{data.toDate}</td>
            <td>{data.price}</td>
          </tr>
        ))
      }
      </table>
      <br/><br/><br/>
      <div align = "center"><button onClick={() => {handleClick();}}> Book Hotel </button></div>
    </div>
  );
  }
  
  export default ClientDashboard;