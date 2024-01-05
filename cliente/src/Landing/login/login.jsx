import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const irAUrl = () => {
        // window.location.href = "http://localhost:5173/comuna";
        window.location.href = "https://main--regal-meerkat-bcfa6b.netlify.app/comuna";
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Aquí puedes definir el nombre de usuario y la contraseña
        const correctUsername = 'ochoa145';
        const correctPassword = 'Chileno1234';

        if (username === correctUsername && password === correctPassword) {
            alert('Inicio de sesión exitoso');
            // window.location.href = 'http://localhost:5173/comuna';
            window.location.href = 'https://main--regal-meerkat-bcfa6b.netlify.app/comuna';
        } else {
            alert('Nombre de usuario o contraseña incorrectos');
        }
    };

    return (
        <div className="conteiner p4">
            <div className="row">

                <div className="col-md-4 mx-auto">
                    <h1 className="mb-3">Bienvenido</h1>

                    <form onSubmit={handleSubmit} className="card bg-success bg-gradient text-light card-body">
                        <div className="mb-3">
                            <label>
                                <h5>Nombre de usuario:</h5>
                                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control"  />
                            </label>
                        </div>


                        <div className="mb-3">
                            <label>
                                <h5>Contraseña:</h5>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                            </label>
                        </div>


                            <input type="submit" value="Iniciar sesión" onSubmit={irAUrl} className="btn btn-primary" />
                        
                    </form>

                </div>
            </div>

        </div>
    );
};

export default Login;