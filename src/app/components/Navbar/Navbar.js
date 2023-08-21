"use client"
import styles from "./Navbar.module.css"
import { Sling as Hamburger } from 'hamburger-react'
import { Logo } from "./components";
import Link from 'next/link';

const links = [{
    label: "Home",
    route: "/"
}, {
    label: "Menu",
    route: "/menu"
}]

const Navbar = () => {
    return (
        <header className={styles.navbar}>

            <div id='nav' className={`${styles.nav_container} ${styles.nav_responsive}`}>

                <nav className={styles.nav}>
                    <Link href="/" scroll={false}>
                        <Logo/>
                    </Link>
                    <ul className={styles.nav_items}>
                        {links.map(({ label, route }) =>
                            <Link href={route} scroll={false} key={route}>
                                <li className={`${styles.nav_links} ${styles.active}`}>
                                    {label}
                                </li>
                            </Link>
                        )}
                    </ul>
                </nav>

            </div>


            <div className={styles.btn_burger}>
                <Hamburger
                    color="#FFF"
                    onToggle={toggled => {
                        const nav = document.getElementById('nav')
                        toggled ? nav.classList.remove(styles.nav_responsive)
                            :
                            nav.classList.add(styles.nav_responsive)
                    }} />
            </div>
            
        </header >
    )
}

export default Navbar