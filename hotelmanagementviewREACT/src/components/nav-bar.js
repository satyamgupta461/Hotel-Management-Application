import React from 'react';
function NavBar(){
    return (
            <div className='container' style={{backgroundColor: "black" , marginTop: "0px", paddingTop : "0px"}}>
                <span style={{display: 'flex' }}>
                    <span style={{width : "50%" , marginLeft: "20px", textAlign:"left"}}>
                        <h3 style={{color: 'white'}}>
                            Hotel Mangement App
                        </h3>
                    </span>
                    <span style={{textAlign: 'right' , width : "50%", }} >
                        <div style={{marginTop : "20px", marginRight:"20px"}}>
                            <button>Gallery</button>&nbsp;&nbsp;&nbsp;
                            <button>Services</button>&nbsp;&nbsp;&nbsp;
                            <button>AboutUs</button>&nbsp;&nbsp;&nbsp;
                            <button>Admin Login</button>
                        </div>
                    </span>
                </span>
            </div>
        )
}

export default NavBar;