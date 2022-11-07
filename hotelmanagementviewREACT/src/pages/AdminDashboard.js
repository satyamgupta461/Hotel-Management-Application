import React, { useState, useEffect , } from 'react';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import '../App.css';
function Dashboard( ) {
  var url_string = window.location.href;
  var token = url_string.split("/");
  function deleteClient( id ) {
    console.log(id);
    fetch(`https://localhost:44377/delete/${id}`, { method: 'DELETE' })
    window.location.reload();
  }
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
        await fetch(`https://localhost:44377/client-details/${token.at(-1)}`)
          .then(response => response.json())
          .then(data => setMyData(data))
      }
      fetchMyAPI()
    }, [])
  console.log(myData);
  var k = 1;  
  return (
    
    <div>
      <span>
      <br/>
      &nbsp;&nbsp;&nbsp;<a href='/'><button>Way to Home</button></a>
      <h3 align="center">Admin Dashboard</h3>
      </span>
      <table class="center">
                      <tr>
                        <th>S.No.</th>
                        <th>Client Name</th>
                        <th>Client Email</th>
                        <th>Hotel Name</th>
                        <th>Room No.x</th>
                        <th>From Date</th>
                        <th>To Date</th>
                      </tr>
      {
        myData.map((data) => (
                      
                      <tr>
                        <td>{k++}</td>
                        <td>{data.userName}</td>
                        <td>{data.userEmail}</td>
                        <td>{data.hotelName}</td>
                        <td>{data.roomNo}</td>
                        <td>{data.fromDate}</td>
                        <td>{data.toDate}</td>
                        <button class = "button3" onClick={() => {deleteClient(data.id);}}>Delete</button>
                      </tr>
                    
          ))
      }
      </table>
      <br/>
      <div align="center"><a href = "/#/search/admin-hoteldetails"><button>Hotel Admin Dashboard</button></a></div>
    </div>

  );
}

export default Dashboard;