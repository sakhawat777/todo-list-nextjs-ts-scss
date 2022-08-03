import React from 'react';
import Image from 'next/image'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <div  className={styles.main}>
                <a href="#"><Image src="/v_logo.png"
                alt="logo"
                width={100}
                height={80}
                /></a>
                <a href="#"><h1>Todo App</h1></a>
                <a href="#"><h1>Contact Us</h1></a>
        </div>
    );
};

export default Header;