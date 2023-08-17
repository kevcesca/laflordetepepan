import logoLayout from './Navbar.module.css'
import Image from "next/image";


export const Logo = () => <div className={logoLayout.logo_container}>
    <Image
        src="logoflor.png"
        sizes="30vw"
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
