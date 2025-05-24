import React, { useState } from 'react'

const Eleven = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div>
            {
                isLoggedIn ? (
                    <div>
                        <h2>Welcome, {email}</h2>
                        <button>Logout</button>
                    </div>
                ) : (
                    <div>
                        <h2>{isRegistered?"Login":"Register"}</h2>
                        <form>
                            <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button>{isRegistered ? "Login" : "Register"}</button>
                        </form>
                        <p>
                            {isRegistered ? "Don't have an account Register Now!" : "Already have an account! Log In"}
                        </p>
                        <button onClick={() => setIsRegistered(!isRegistered)}>
                            {isRegistered ? "Register" : "Login"}
                        </button>
                    </div>
                )
            }
        </div>

    )
}

export default Eleven