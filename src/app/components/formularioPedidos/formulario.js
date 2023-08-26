import React, { useState } from 'react';
import {
    Container,
    Grid,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Button,
} from '@mui/material';

const products = [
    {
        id: 1,
        name: "Chapata de jamón con queso",
        description: "Chapata de jamón con queso y verduras",
        price: 45.00,
        imageUrl: "https://res.cloudinary.com/dz1edfmjp/image/upload/v1692918792/pagina/fotos/chapata.jpg",
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
        imageUrl: "https://res.cloudinary.com/dz1edfmjp/image/upload/v1692918792/pagina/fotos/chapata.jpg",
    },
    {
        id: 4,
        name: "Chapata de jamón con queso",
        description: "Chapata de jamón con queso y verduras",
        price: 45.00,
        imageUrl: "https://res.cloudinary.com/dz1edfmjp/image/upload/v1692918792/pagina/fotos/chapata.jpg",
    },
    {
        id: 5,
        name: "Chapata de jamón con queso",
        description: "Chapata de jamón con queso y verduras",
        price: 45.00,
        imageUrl: "https://res.cloudinary.com/dz1edfmjp/image/upload/v1692918792/pagina/fotos/chapata.jpg",
    },
    {
        id: 6,
        name: "Chapata de jamón con queso",
        description: "Chapata de jamón con queso y verduras",
        price: 45.00,
        imageUrl: "https://res.cloudinary.com/dz1edfmjp/image/upload/v1692918792/pagina/fotos/chapata.jpg",
    },
    {
        id: 7,
        name: "Chapata de jamón con queso",
        description: "Chapata de jamón con queso y verduras",
        price: 45.00,
        imageUrl: "https://res.cloudinary.com/dz1edfmjp/image/upload/v1692918792/pagina/fotos/chapata.jpg",
    },
    {
        id: 8,
        name: "Chapata de jamón con queso",
        description: "Chapata de jamón con queso y verduras",
        price: 45.00,
        imageUrl: "https://res.cloudinary.com/dz1edfmjp/image/upload/v1692918792/pagina/fotos/chapata.jpg",
    },
];

const OrderForm = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);

    const handleProductSelect = (productId) => {
        const productIndex = selectedProducts.indexOf(productId);
        if (productIndex !== -1) {
            setSelectedProducts((prevSelected) =>
                prevSelected.filter((id) => id !== productId)
            );
        } else {
            setSelectedProducts((prevSelected) => [...prevSelected, productId]);
        }
    };

    const handleSubmit = () => {
        // Aquí podrías implementar la lógica para enviar el pedido
        console.log('Pedido realizado:', selectedProducts);
        console.log(selectedProducts[0].name)
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Formulario de Pedidos
            </Typography>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Card>
                            <CardActionArea onClick={() => handleProductSelect(product.id)}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={product.imageUrl}
                                    alt={product.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.description}
                                    </Typography>
                                    <Typography variant="h6" color="text.primary">
                                        ${product.price.toFixed(2)}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Realizar Pedido
            </Button>
        </Container>
    );
};

export default OrderForm;