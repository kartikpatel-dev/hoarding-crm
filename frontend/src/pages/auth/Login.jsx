import { useState } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submit = async (e) => {

        e.preventDefault();

        try {

            const res = await api.post("/login", {
                email,
                password
            });

            localStorage.setItem("token", res.data.token);

            alert("Login Success");

            navigate("/dashboard");

        } catch (err) {

            alert("Invalid Login");
        }
    };

    return (
        <div>
            <h2>CRM Login</h2>

            <form onSubmit={submit}>

                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">
                    Login
                </button>

            </form>
        </div>
    );
}