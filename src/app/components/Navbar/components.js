import logoLayout from './Navbar.module.css'
import Image from "next/image";


export const Logo = () => <div className={logoLayout.logo_container}>
    <Image
        src="logocafeteria3.png"
        sizes="60vw"
        style={{
            width: '100%',
            height: 'auto',
        }}
        width={1006}
        height={868}
        alt="Logo flor de tepepan"
        priority
    />
</div>
