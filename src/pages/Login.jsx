import React from 'react';
import { useNavigate } from "react-router-dom";

function Login(props) {
    let navigate = useNavigate();
    const username = React.useRef();
    const password = React.useRef();
    const handleForm = (e) => {
        e.preventDefault();
        if(username.current.value==='admin' && password.current.value==='admin'){
            localStorage.setItem('login', 'true');
            return navigate('/')
        }
    }

    return (               
        <form onSubmit={handleForm} className='w-25 w-lg-50 border p-3 mt-5 mx-auto'>
            <h3>Login</h3>
            <div className="form-group">
                <label htmlFor="username">username</label>
                <input ref={username} type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="username">password</label>
                <input ref={password} type="text" className="form-control" />
            </div>
            <button className='btn btn-primary'>Login</button>
        </form>
    );
}

export default Login;