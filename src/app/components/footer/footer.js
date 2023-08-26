import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styles from "./footer.module.css"



const Footer = () => {

    return (
        <footer className={styles.footer}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="body2" align="center" className={styles.font}>
                            © {new Date().getFullYear()} La Flor De Tepepan. Todos los derechos reservados.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;
