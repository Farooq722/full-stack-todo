import React, { useState, useEffect } from "react";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Link, useNavigate } from "react-router-dom";


function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [state, setState] = useState({ success: null, error: null });
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        if (state.success) {
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        }
    }, [state.success, navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsPending(true);
        setState({ success: null, error: null }); 

        try {
            const res = await fetch("http://localhost:3000/api/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if (data?.error) {
                setState({ success: null, error: data.error });
            } else {
                setState({ success: data, error: null });
            }
        } catch (error) {
            console.error(error);
            setState({ success: null, error: "Something went wrong" });
        } finally {
            setIsPending(false);
        }
    };

    return (
        <div className="h-screen flex justify-center items-center transform -translate-y-16">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-xl w-full px-8 py-8 bg-slate-100">
                <h1 className="text-center text-2xl text-red-300 italic">Register Here</h1>
                <div className="flex flex-col gap-2">
                    <Label>Email</Label>
                    <Input
                        type="text"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <Label>Password</Label>
                    <Input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <Button disabled={isPending}>
                    {isPending ? "Registering" : "Register"}
                </Button>
                {state.error && <p className="text-red-500 text-center">{state.error}</p>}
                {state.success && <p className="text-green-500 text-center">Registration Successful!</p>}
                <span className="text-[#63657b] text-center">
                    Already have an account?{" "}
                    <Link
                        to={"/login"}
                        className="transition ease-in-out hover:cursor-pointer hover:text-primary hover:underline"
                    >
                        Login
                    </Link>
                </span>
            </form>
        </div>
    );
}

export default Register;
