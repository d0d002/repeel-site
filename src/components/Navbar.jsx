import React from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            className={styles.nav}
        >
            <div className={styles.logo}>RE:PEEL</div>

            <div className={styles.links}>
                <button
                    onClick={() => scrollToSection('about')}
                    className={styles.linkButton}
                >
                    About Us
                </button>
                <button
                    onClick={() => scrollToSection('product')}
                    className={styles.linkButton}
                >
                    Products
                </button>
                <button
                    onClick={() => scrollToSection('contact')}
                    className={styles.ctaButton}
                >
                    Get in Touch
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
