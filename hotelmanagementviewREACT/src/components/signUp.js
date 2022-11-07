import React,{useState} from "react";

const SignUp = () => {

        const [signUp,setsighUp] = useState({
            fullName : "",
            mobile : "",
            email : "",
            userName : "",
            password : "",
            idProof : "",
            gender : ""
        });

        const HandleInput = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            console.log(name,value);

            setsighUp({ ...signUp, [name]: value});
        }

        const HandleSubmit = (e) => {
            e.preventDefault();
        }

    return (
        <div>
            <form action = "" onSubmit={HandleSubmit}>
                <div>
                    <label htmlFor = "fullName">
                        Full Name
                    </label>
                    <input type="text" 
                    value = {signUp.fullName}
                    onChange = {HandleInput}
                    name="fullName" id = "fullName" autoComplete="off"></input>
                </div>


                <div>
                    <label htmlFor = "mobile">
                        Mobile Number
                    </label>
                    <input type="text" 
                    value = {signUp.mobile}
                    onChange = {HandleInput}
                    name="mobile" id = "mobile" autoComplete="off"></input>
                </div>

                <div>
                    <label htmlFor = "email">
                        Email Adderss
                    </label>
                    <input type="text" 
                    value = {signUp.email}
                    onChange = {HandleInput}
                    name="email" id = "email" autoComplete="off"></input>
                </div>

                <div>
                    <label htmlFor = "userName">
                        UserName
                    </label>
                    <input type="text" 
                    value = {signUp.userName}
                    onChange = {HandleInput}
                    name="userName" id = "userName" autoComplete="off"></input>
                </div>

                <div>
                    <label htmlFor = "password">
                        Password
                    </label>
                    <input type="text" 
                    value = {signUp.password}
                    onChange = {HandleInput}
                    name="password" id = "password" autoComplete="off"></input>
                </div>

                <div>
                    <label htmlFor = "idProof">
                        ID Proof
                    </label>
                    <input type="text" 
                    value = {signUp.idProof}
                    onChange = {HandleInput}
                    name="idProof" id = "idProof" autoComplete="off"></input>
                </div>

                <div>
                    <label htmlFor = "gender">
                        Gender
                    </label>
                    <input type="text" 
                    value = {signUp.gender}
                    onChange = {HandleInput}
                    name="gender" id = "gender" autoComplete="off"></input>
                </div>

                <button type = "submit">
                    Sign Up
                </button>
            </form>

        </div>
    )
}
//export default SignUp