import React from "react";
import { useEffect, useState } from "react";
function HotelDetails(){
  function deleteHotel( id ) {
      console.log(id);
      fetch(`https://localhost:44377/api/HotelRoomDetails/${id}`, { method: 'DELETE' })
      window.location.reload();
  }
  function handleClick(){
    window.location = "/#/admin-hoteldetails/addHotel";
  }
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
        await fetch(`https://localhost:44377/api/HotelRoomDetails`)
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
      <br/><br/>
      <div align="right" style={{ marginRight: `50px` }}><button onClick = {() => {handleClick();}}>Add Hotel</button></div>
      <br/>
      <h3 align="center">Hote Details</h3>
      </span>
      <table class="center">
                      <tr>
                        <th>S.No.</th>
                        <th>Hotel Name</th>
                        <th>AC Rooms</th>
                        <th>Price of AC</th>
                        <th>Non AC</th>
                        <th>Price of Non AC</th>
                      </tr>
      {
        myData.map((data) => (
                      
                      <tr>
                        <td>{k++}</td>
                        <td>{data.hotelName}</td>
                        <td>{data.ac == true ? "Available" : "Not Availabe"}</td>
                        <td>{data.priceAC}</td>
                        <td>{data.nonAC == true ? "Available" : "Not Available"}</td>
                        <td>{data.priceNonAC}</td>
                        <button class = "button3" onClick={() => {deleteHotel(data.autoId);}}>Delete</button>
                      </tr>
          ))
      }
      </table>
    </div>
  )

}
export default HotelDetails;