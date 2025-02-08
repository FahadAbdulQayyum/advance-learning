// src/app/signin/page.tsx
'use client'; // This is a Client Component because it uses `useState` and `useRouter`.

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Redirect to the dashboard on successful login
                router.push('/dashboard');
            } else {
                setError(data.message || 'Invalid credentials');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h1>Sign In</h1>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <form onSubmit={handleLogin}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>
                        Username:
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                    />
                </div>
                <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default SignIn;

















// // src/app/signin/page.tsx
// 'use client'; // This is a Client Component because it uses `useState` and `useRouter`.

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// const SignIn = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const router = useRouter();

//     const handleLogin = async (e: React.FormEvent) => {
//         e.preventDefault();

//         try {

//             console.log('username::', username, 'password::', password)

//             const response = await fetch('/api/login', {
//                 // const response = await fetch('/api/wow', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ username, password }),
//             });
//             console.log('...responsee...', response);
//             // const data = await response.json();
//             // console.log('...data...', data);

//             if (response.ok) {
//                 console.log('response looks ok!')
//                 // Redirect to the dashboard on successful login
//                 router.push('/dashboard');
//             } else {
//                 // setError(data.message || 'Invalid credentials');
//                 setError('Invalid credentials');
//             }
//         } catch (err) {
//             setError('An error occurred. Please try again.');
//         }
//     };

//     return (
//         <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
//             <h1>Sign In</h1>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <form onSubmit={handleLogin}>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>
//                         Username:
//                     </label>
//                     <input
//                         type="text"
//                         id="username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                         style={{ width: '100%', padding: '8px', boxSizing: 'border-box', color: 'black' }}
//                     />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
//                         Password:
//                     </label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                         style={{ width: '100%', padding: '8px', boxSizing: 'border-box', color: 'black' }}
//                     />
//                 </div>
//                 <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//                     Sign In
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default SignIn;