import React, { useEffect, useState } from "react";
import NavBar from "./nav-bar";
import TajHotel from './image/Taj.png';
import {BrowserRouter as Link} from 'react-router-dom';

function HotelCard() {
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        async function fetchMyAPI() {
            await fetch(`https://localhost:44377/api/HotelRoomDetails`)
                .then(response => response.json())
                .then(data => setMyData(data));
        }
        fetchMyAPI()
    }, [])
    myData.forEach(obj => {
        console.log(obj);
    })
    console.log("Hello")
    return (
        <div>
            <NavBar />
            <h1 align = "center" className="text-center text-danger text-capitalize my-5"> Welcome To The Hotel Management Application</h1>
            <div className="row">
                {
                    myData.map(
                        (data) => (
                            
                            <div class="col-lg-3 col-md-2 col-sm-1">
                                <div class="card">
                                    <div class="card-body">
                                        <h2 class="card-title" >{data.hotelName}</h2>
                                        <img class="card-img-top" src={TajHotel} alt="Card image cap" height="250px" />
                                        <br/>
                                        <br/>   
                                        {
                                            data.ac === true ? <div> <button>AC Price : {data.priceAC} </button>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <a href = {`/BookAc/${data.autoId}`}><button>Book Hotel</button></a></div>: <div />
                                        }
                                       
                                        <br/>
                                        <br/>
                                        {
                                            data.nonAC === true ? <div><button>NON-AC Price : {data.priceNonAC}</button>&nbsp;&nbsp;&nbsp;&nbsp; 
                                            <a href = {`/BookNonAC/${data.autoId}`}><button>Book Hotel</button></a> </div> : <div></div>
                                        }  
                                        
                                    </div>
                                </div>
                            </div>

                        )
                    )
                }
            </div>
        </div>
    )
}

export default HotelCard;