// // src/services/api.js
//
// const API_BASE_URL = 'https://fayabase.com/efiwe/api';
//
// export async function signup(email, password) {
//     try {
//         const response = await fetch(`${API_BASE_URL}/signup`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email, password }),
//         });
//
//         const data = await response.json();
//
//         if (!response.ok) {
//             throw new Error(data.message || 'Signup failed');
//         }
//
//         return data;
//     } catch (error) {
//         throw error;
//     }
// }
//
// export async function signin(email, password) {
//     try {
//         const response = await fetch(`${API_BASE_URL}/signin`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email, password }),
//         });
//
//         const data = await response.json();
//
//         if (!response.ok) {
//             throw new Error(data.message || 'Signin failed');
//         }
//
//         return data;
//     } catch (error) {
//         throw error;
//     }
// }
// src/services/api.js

const API_BASE_URL = 'https://fayabase.com/efiwe/api';

async function request(endpoint, method = 'GET', body = null) {
    const config = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (body) {
        config.body = JSON.stringify(body);
    }

    const response = await fetch(`${API_BASE_URL}/${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'API request failed');
    }

    return data;
}

export async function signup(email, password) {
    return request('signup', 'POST', { email, password });
}

export async function signin(email, password) {
    return request('signin', 'POST', { email, password });
}

// Add more API functions as needed
