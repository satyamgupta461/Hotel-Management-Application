import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (

        <form action="">
            <div>
                <label htmlFor="email">
                    Email
                </label>
                <input type="text" name="email" id="email" autocomplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

            </div>

            <div>
                <label htmlFor="password">
                    Password
                </label>
                <input type="password" name="password" id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button type="submlt">Login</button>
        </form>
    )
}

//export default Login
