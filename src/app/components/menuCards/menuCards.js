import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import Image from 'next/image';
import ComboBox from '../forms/forms';
import styles from "./cards.module.css"


const ProductCard = ({ product }) => {

    return (
        <Card className="">
            <Image
                sizes="80vw"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
                className=''
                width={250}
                height={250}
                src={product.imageUrl}
                alt={product.name}
                priority
            />
            <CardContent >
                <div className={styles.CardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {product.description}
                    </Typography>
                    <div className={styles.agregarCantidad}>
                        <ComboBox id={product.id + "combo"} />
                        <Button className={styles.button} variant="outlined">Agregar</Button>
                    </div>
                    <Typography variant="h6" color="primary">
                        ${product.price}
                    </Typography>
                </div>

            </CardContent>
        </Card>
    );
};

const ProductList = ({ products }) => {
    return (
        <Grid container justify="center" spacing={2}>
            {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;
