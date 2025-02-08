// src/app/dashboard/page.tsx
'use client'; // This is a Client Component because it uses `useRouter`.

import { useRouter } from 'next/navigation';

const Dashboard = () => {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            // Call the logout API route
            const response = await fetch('/api/logout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                // Redirect to the sign-in page after logout
                router.push('/signin');
            } else {
                alert('Failed to log out. Please try again.');
            }
        } catch (err) {
            console.error('Error during logout:', err);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard!</p>
            <button
                onClick={handleLogout}
                style={{
                    padding: '10px 15px',
                    backgroundColor: '#dc3545',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Logout
            </button>
        </div>
    );
};

export default Dashboard;