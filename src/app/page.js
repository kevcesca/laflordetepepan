import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Home() {
  return (
    <main className={styles.main}>
      <Box>
        <Grid container>

          {/* Aqui van las imagenes de los logos */}
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={styles.imageContainter}>

            <Link href="/" scroll={false}>
              <Image
                sizes="80vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                className=''
                width={250}
                height={250}
                src="logoflorpiedras3.png"
                alt="La Flor de Tepepan joyeria y pedreria"
                priority
              />
            </Link>

            <Link href="/" scroll={false}>
              <Image
                sizes="80vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                className=''
                width={250}
                height={250}
                src="logocafeteriafinal.png"
                alt="La Flor de Tepepan Cafeteria"
                priority
              />
            </Link>

            <Link href="/" scroll={false}>
              <Image
                sizes="80vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                className=''
                width={250}
                height={250}
                src="logocafecoatepec.png"
                alt="La Flor de Tepepan cafe coatepec"
                priority
              />
            </Link>

            <Link href="/" scroll={false}>
              <Image
                sizes="80vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                className=''
                width={250}
                height={250}
                src="logocafeteria.png"
                alt="La Flor de Tepepan"
                priority
              />
            </Link>
          </Grid>

          {/* Aqui comienza el texto */}
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={styles.welcomeText}>
            <h3>LA FLOR DE TEPEPAN</h3>
            <h3>BARRA - CAFÉ MEXICANO</h3>
            <h3>BEBIDAS INTELIGENTES DE MÉXICO</h3>
            <h3>POSTRES Y ANTOJITOS</h3>
            <h3>TIENDITA: CAFÉ GOURMET EN GRANO Y MOLIDO,</h3>
            <h3> MIEL, QUESOS, ARTESANIAS MEXICANAS</h3>
            <h3>SERVICIO A DOMICILIO</h3>
            <h2>HAZ TU PEDIDO AL: <a href="https://api.whatsapp.com/send?phone=5533318831&text=Buenas+tardes,+me+gustaria+pedir" sx={{ color: 'blue' }}> 5533318831 </a></h2>
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
          </Grid>
        </Grid>
      </Box>
    </main>
  )
}
