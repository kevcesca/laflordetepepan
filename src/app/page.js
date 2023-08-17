import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        className=''
        width={500}
        height={451}
        src="logoflorcafe.png"
        alt="La Flor de Tepepan"
        priority
      />
      <h1>LA FLOR DE TEPEPAN</h1>
      <h3>BARRA - CAFÉ MEXICANO</h3>
      <h3>BEBIDAS INTELIGENTES DE MÉXICO</h3>
      <h3>POSTRES Y ANTOJITOS</h3>
      <h3>TIENDITA: CAFÉ GOURMET EN GRANO Y MOLIDO, MIEL, QUESOS, ARTESANIAS MEXICANAS</h3>
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
    </main>
  )
}
