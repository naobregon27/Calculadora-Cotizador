import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const irAUrl = () => {
        window.location.href = 'http://localhost:5000/';
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Aquí puedes definir el nombre de usuario y la contraseña
        const correctUsername = 'ochoa145';
        const correctPassword = 'Chileno1234';

        if (username === correctUsername && password === correctPassword) {
            alert('Inicio de sesión exitoso');
            window.location.href = 'http://localhost:5000/';
        } else {
            alert('Nombre de usuario o contraseña incorrectos');
        }
    };

    return (
        <div class="conteiner p4">
            <div class="row">

                <div class="col-md-4 mx-auto">
                    <h1 class="mb-3">Bienvenido</h1>

                    <form onSubmit={handleSubmit} class="card bg-dark text-light card-body">
                        <div class="mb-3">
                            <label>
                                <h5>Nombre de usuario:</h5>
                                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} class="form-control"  />
                            </label>
                        </div>


                        <div class="mb-3">
                            <label>
                                <h5>Contraseña:</h5>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" />
                            </label>
                        </div>


                            <input type="submit" value="Iniciar sesión" onSubmit={irAUrl} class="btn btn-primary" />
                        
                    </form>

                </div>
            </div>

        </div>
    );
};

export default Login;