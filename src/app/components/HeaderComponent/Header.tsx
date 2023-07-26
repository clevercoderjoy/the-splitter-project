import Image from "next/image";
import styles from "./header.module.css";

const Header = ({ logo }: { logo: any }) => {
    return (
        <div className={styles.wrapper}>
            <Image className={styles.logoImage} priority src={logo} alt="logo" />
        </div>
    );
};

export default Header;
