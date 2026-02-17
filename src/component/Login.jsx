import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "./Redux/AuthAction"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const nav = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await dispatch(login(email, password))

        nav("/")
    }

    return (
        // <div className="container mt-5" style={{ maxWidth: 420 }}>
        //     <h3>Login</h3>
        //     <form onSubmit={handleSubmit}>
        //         <div className="mb-2">
        //             <input className="form-control" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        //         </div>
        //         <div className="mb-3">
        //             <input className="form-control" placeholder= "Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        //         </div>
        //         <button className="btn btn-success">Login</button>
        //     </form>

        // </div>


        <div className=" py-5 ">
            <div className="container-fluid">

                <div className=" bg-light  py-5 text-center mb-5">
                    <h2 className="fw-semibold">Account</h2>
                    <Link to="/" className="text-muted text-decoration-none">
                        Home
                    </Link>
                </div>

                <div className="d-flex justify-content-center">
                    <div className="card shadow-sm p-4" style={{ maxWidth: "550px", width: "100%" }}>
                        <h4 className="text-center mb-4">Create account</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input className="form-control" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />

                            </div>
                            <div className="mb-4">
                                <input className="form-control" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />


                            </div>

                            <div className="mb-3 text-end">
                                <Link to="#" className="small text-decoration-underline">Forgot your password?</Link>
                            </div>
                            <button type="submit" className="btn btn-danger w-100 mb-3" style={{ backgroundColor: "#c43b4a" }}>
                                SIGN IN
                            </button>
                        </form>

                        <div className="text-center">
                            <span className="small">No account yet? </span>
                            <Link to="/Register" className="small text-decoration-underline">Create an account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
