import Image from 'next/image'
import styles from './menu.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>Menú</h1>
            <Image
                className=''
                width={707}
                height={1000}
                src="menu.jpg"
                alt="La Flor de Tepepan"
                priority
            />
        </main>
    )
}
