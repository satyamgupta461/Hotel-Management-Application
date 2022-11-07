import React from 'react';
import { NavLink } from 'react-router-dom';
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
                            <NavLink to="/signup" className="btn btn-primary">Login/SignUp</NavLink>
                        </div>
                    </span>
                </span>
            </div>
        )
}

export default NavBar;