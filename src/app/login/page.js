"use client"

import React, { useState } from 'react';
import { TextField, Button, Container, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import styles from './login.module.css'

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    return (
        <main className={styles.mainContainer}>
            <Container maxWidth="xs" className={styles.loginContainer}>
                <Paper elevation={3} style={{ padding: '20px', marginTop: '100px' }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Iniciar sesión
                    </Typography>
                    <form className={styles.form}>
                        <Image
                            sizes="80vw"
                            style={{
                                width: '30%',
                                height: 'auto',
                            }}
                            className=""
                            width={250}
                            height={250}
                            src="logocafeteriafinal.png"
                            alt="La Flor de Tepepan cafeteria"
                            priority
                        />
                        <TextField
                            label="Nombre de usuario"
                            fullWidth
                            margin="normal"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <TextField
                            label="Contraseña"
                            fullWidth
                            type="password"
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Button type="submit" variant="contained" fullWidth className={styles.button}>
                            Iniciar sesión
                        </Button>

                        <>

                        </>
                    </form>
                </Paper>
            </Container>
        </main>

    );
};

export default LoginPage;
