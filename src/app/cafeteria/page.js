'use client'
import Image from 'next/image'
import { Container, Grid, Card, CardMedia, makeStyles, Typography } from '@mui/material';
import styles from './cafeteria.module.css'
import ProductList from '../components/menuCards/menuCards';


const products = [
    {
        id: 1,
        name: "Chapata de jamón con queso",
        description: "Chapata de jamón con queso y verduras",
        price: 45.00,
        imageUrl: "/fotos/chapata.jpg",
    },
    {
        id: 2,
        name: "Chocoflan",
        description: "Pastel de chocolate con mitad flan",
        price: 30.00,
        imageUrl: "/fotos/chocoflan.jpg",
    },
    {
        id: 3,
        name: "Chapata de jamón con queso",
        description: "Chapata de jamón con queso y verduras",
        price: 45.00,
        imageUrl: "/fotos/chapata.jpg",
    },
    {
        id: 4,
        name: "Chapata de jamón con queso",
        description: "Chapata de jamón con queso y verduras",
        price: 45.00,
        imageUrl: "/fotos/chapata.jpg",
    },
    {
        id: 5,
        name: "Chapata de jamón con queso",
        description: "Chapata de jamón con queso y verduras",
        price: 45.00,
        imageUrl: "/fotos/chapata.jpg",
    },
    {
        id: 6,
        name: "Chapata de jamón con queso",
        description: "Chapata de jamón con queso y verduras",
        price: 45.00,
        imageUrl: "/fotos/chapata.jpg",
    },
    {
        id: 7,
        name: "Chapata de jamón con queso",
        description: "Chapata de jamón con queso y verduras",
        price: 45.00,
        imageUrl: "/fotos/chapata.jpg",
    },
    {
        id: 8,
        name: "Chapata de jamón con queso",
        description: "Chapata de jamón con queso y verduras",
        price: 45.00,
        imageUrl: "/fotos/chapata.jpg",
    },
];


function App() {
    return (

        <main className={styles.main}>
            <ProductList products={products}></ProductList>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} className={styles.mapContainer}>
                    <Typography variant="h3" className={styles.fonts}>
                        Ubícanos
                    </Typography>
                    <div className={styles.direction}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15064.61987725097!2d-99.1379513!3d19.2756259!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce01881ef0fa67%3A0xcd1548cabc402090!2sLa%20flor%20de%20Tepepan!5e0!3m2!1ses!2smx!4v1692831940351!5m2!1ses!2smx"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className={styles.mapa}
                        ></iframe>
                        <div className={styles.textJustify}>
                            <div className={styles.textContainer}>
                                <Typography variant="h4" className={styles.fonts}>
                                    La Flor De Tepepan
                                </Typography>
                                <br></br>
                                <br></br>
                                <Typography variant="h6" className={styles.fonts}>
                                    Calle Cuauhtémoc 34A, Santa María Tepepan, Xochimilco, 16020 Ciudad de México, CDMX
                                </Typography>
                                <br></br>
                                <br></br>
                            </div>

                            <div className={styles.imageContainer}>
                                <Image
                                    sizes="80vw"
                                    style={{
                                        width: '40%',
                                        height: 'auto',
                                    }}
                                    className={styles.logos}
                                    width={250}
                                    height={250}
                                    src="logocafeteriafinal.png"
                                    alt="La Flor de Tepepan cafeteria"
                                    priority
                                />

                                <Image
                                    sizes="80vw"
                                    style={{
                                        width: '40%',
                                        height: 'auto',
                                    }}
                                    className={styles.logos}
                                    width={250}
                                    height={250}
                                    src="productosmex.png"
                                    alt="La Flor de Tepepan productos mexicanos"
                                    priority
                                />

                                <br></br>
                                <br></br>
                                <Typography variant="h6" >
                                    HAZ TU PEDIDO AL: <a href="https://api.whatsapp.com/send?phone=5533318831&text=Buenas+tardes,+me+gustaria+pedir" sx={{ color: 'blue' }}> 5533318831 </a>
                                </Typography>
                                <a href="https://api.whatsapp.com/send?phone=5533318831&text=Buenas+tardes,+me+gustaria+pedir" sx={{ color: 'blue' }}>
                                    <Image
                                        className=''
                                        width={50}
                                        height={50}
                                        src="whatsapplogo.png"
                                        alt="Logo whatsapp"
                                        priority
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </main>

    );
}

export default App;
