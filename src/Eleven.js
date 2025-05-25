import React, { useState, useEffect } from 'react'

const Eleven = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    }, []);

    const handleAuthentication = (e) => {
        e.preventDefault();
        if(isRegistered){
            //LogIN
            const user = users.find((u) => u.email === email && u.password === password);
            if (user){
                setIsLoggedIn(true);
            }
            else{
                alert("Please check credentials");
            }
        }
        else{
            //Register
            const newUsers = {email, password};
            setUsers([...users, newUsers]);
            localStorage.setItem('users', JSON.stringify([...users, newUsers]));
            setIsLoggedIn(true);
        }
    }

    const handleLogout=() =>{
        setIsLoggedIn(false);
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            {
                isLoggedIn ? (
                    <div>
                        <h2>Welcome, {email}</h2>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <div>
                        <h2>{isRegistered?"Login":"Register"}</h2>
                        <form onSubmit={handleAuthentication}>
                            <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button type="submit">{isRegistered ? "Login" : "Register"}</button>
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