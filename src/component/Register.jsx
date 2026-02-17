import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })

    const nav = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.firstName || !form.lastName || !form.email || !form.password) {
            alert("Please fill all fields!");
            return;
        }


        localStorage.setItem("registeredUser", JSON.stringify(form));

        alert("Registration Successful!");
        nav("/Login");
    };

    return (
        <div className=" py-5 ">
            <div className="container-fluid">

                <div className=" bg-light  py-5 text-center mb-5">
                    <h2 className="fw-semibold">Create Account</h2>
                    <Link to="/" className="text-muted text-decoration-none">
                        Home
                    </Link>
                </div>

                <div className="d-flex justify-content-center">
                    <div className="card shadow-sm p-4" style={{ maxWidth: "550px", width: "100%" }}>
                        <h4 className="text-center mb-4">Create account</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input type="text" className='form-control' style={{ fontSize: '13.5px', padding: '12px 10px' }} name="firstName" value={form.firstName} placeholder='First Name' onChange={handleChange} />
                            </div>
                            <div className="mb-4">
                                <input type="text" className='form-control' style={{ fontSize: '13.5px', padding: '12px 10px' }} name="lastName" value={form.lastName} placeholder='Last Name' onChange={handleChange} />

                            </div>
                            <div className="mb-4">
                                <input type="email" className='form-control' style={{ fontSize: '13.5px', padding: '12px 10px' }} name="email" value={form.email} placeholder='Email' onChange={handleChange} />

                            </div>
                            <div className="mb-4">
                                <input type="password" className='form-control' style={{ fontSize: '13.5px', padding: '12px 10px' }} name="password" value={form.password} placeholder='Password' onChange={handleChange} />

                            </div>

                            <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: "#c43b4a", letterSpacing: "1px" }}>
                                CREATE </button>
                        </form>

                        <div className="text-center mt-3">
                            <Link to="/" className="text-decoration-underline text-dark small">
                                Return to store
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
