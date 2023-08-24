'use client'
import Image from 'next/image'
import { Container, Grid, Card, CardMedia, makeStyles } from '@mui/material';
import styles from './menu.module.css'
import ProductList from '../components/cards/Cards';

import data from "../data/data.js"

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
        name: "Chapata de jamón con queso",
        description: "Chapata de jamón con queso y verduras",
        price: 45.00,
        imageUrl: "/fotos/chapata.jpg",
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

            <Grid container justify="center" spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15064.61987725097!2d-99.1379513!3d19.2756259!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce01881ef0fa67%3A0xcd1548cabc402090!2sLa%20flor%20de%20Tepepan!5e0!3m2!1ses!2smx!4v1692831940351!5m2!1ses!2smx"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </Grid>
            </Grid>
        </main>

    );
}

export default App;
