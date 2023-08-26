import Image from 'next/image'
import styles from './menu.module.css'
import { Box, Grid } from '@mui/material'
import { Typography } from '@mui/material'

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.font}>Menú</h1>
            <Box>
                <Grid container className={styles.menuContainer} sx={{translate: "1vw"}}>

                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Typography variant="h4" className={styles.font} sx={{ translate: '-5vw'}}>
                            BARRA DE BEBIDAS
                            <ul>
                                <li >
                                    
                                </li>
                            </ul>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Typography variant="h4" className={styles.font}>
                            POSTRES
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Typography variant="h4" className={styles.font}>
                            ALIMENTOS
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

        </main>
    )
}
