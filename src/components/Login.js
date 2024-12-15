import { useState } from "react";

//onSubmit= ()=>{}
function Login({ onSubmit,method }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError]=useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        
            if(!email || !password){
                setError('All Fileds are required!');
                return;
            }
            setError('')
            onSubmit({ email, password })
        // if(email==='admin@gmail.com' && password==="admin123")
        //     alert('LoggedIn Successfully')
        // else    
        //     alert('Invalid Credentials')
    }
    const handleClick=()=>{
        method(10);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {error && <p style={{color:'red'}} >{error}</p>}
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter Your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>

            <button onClick={handleClick}>Register</button>
        </div>
    );
}

export default Login;