import Image from 'next/image'
import styles from './menu.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>Tienda</h1>
            <Image
                className=''
                sizes="100vw"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
                width={707}
                height={1000}
                src="menu.jpg"
                alt="La Flor de Tepepan"
                priority
            />
        </main>
    )
}
