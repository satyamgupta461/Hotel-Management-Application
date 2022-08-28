import React ,{useEffect, useState} from "react";
function HotelCard(){
    const [myData, setMyData]  = useState([]); 
    useEffect(() => {
        async function fetchMyAPI() {
            await fetch(`https://localhost:7235/api/HotelRoomDetails`)
            .then(response => response.json())
            .then(data => setMyData(data));
        }
        fetchMyAPI()
      }, [])
    // myData.forEach(obj => {
    //     console.log(obj);
    // })
    // await fetch(`https://localhost:7235/api/HotelRoomDetails`)
    // .then(response => response.json())
    // .then(data => setMyData(data));
    console.log(myData)
    
    
    return (

        <div>
            {
                myData.map(
                    (data)=>(
                        <div>
                        <h1 className="text-center text-danger text-capitalize my-5"> Welcome To The Hotel Management Application</h1>
                        <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <div class="card">
                                    <img class="card-img-top" src="C:\Users\satya\Downloads\Desktop\Hotel Mangement\hotelmanagementview\image" alt="Card image cap" height={ 250px}/>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm">
                                        <div class="card">
                                            <img class="card-img-top" src="C:\Users\satya\Downloads\Desktop\Hotel Mangement\hotelmanagementview\image" alt="Card image cap" height={ 250px}/>
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm">
                                <div class="card">
                                    <img class="card-img-top" src="C:\Users\satya\Downloads\Desktop\Hotel Mangement\hotelmanagementview\image" alt="Card image cap"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm">
                                        <div class="card">
                                            <img class="card-img-top" src="C:\Users\satya\Downloads\Desktop\Hotel Mangement\hotelmanagementview\image" alt="Card image cap"/>
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm">
                                        <div class="card">
                                            <img class="card-img-top" src="C:\Users\satya\Downloads\Desktop\Hotel Mangement\hotelmanagementview\image" alt="Card image cap"/>
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                                    </div>
                                                </div>
                                            </div>
                        </div>
                        </div>
                   </div>
                    )
                )                
            }
        </div>
    )
}

export default HotelCard;