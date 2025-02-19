import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import MyImage from 'D:/html tutorial/jcrCab/new/src/images/umaidHeritage.png';

const AdminLogin = () => {

    const nav = useNavigate();
    const FormHandel = async (e) => {
        e.preventDefault();

        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        };
        // data.append('userr', (Userr));

        try {
            const response = await axios.post(`http://localhost:8000/api/jcr-services/admin/log-in`, data)
            if (response.status === 200) {
                Cookies.set("JcrAdmin-login", JSON.stringify(response.data.data), { expires: 1 })
                nav("/admin")
            }

        }
        catch (error) {
            console.log(error);
        }
        // e.target.name.value = ''
        // e.target.profile.value = ''
        e.target.email.value = ''
        e.target.password.value = ''
    }

    return (

        <div class="login-form">
            <h1>Admin Login</h1>
            <form>
                <div class="mb-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter your email" required />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter your password" required />
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>

    )
}

export default AdminLogin
