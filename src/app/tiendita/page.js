'use client'
import Image from 'next/image'
import { Container, Grid, Card, CardMedia, makeStyles } from '@mui/material';
import styles from './menu.module.css'
import ProductList from '../components/cards/Cards';

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
        </main>

    );
}

export default App;
