import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={ref} className={styles.section}>
            <motion.img
                style={{ y }}
                src="/images/Hero_1.png"
                alt="Hero Background"
                className={styles.background}
            />
            <div className={styles.overlay} />

            <div className={styles.content}>
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={styles.title}
                >
                    RE:PEEL
                </motion.h1>
                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className={styles.subtitle}
                >
                    New Bio-Materials ‘Re : Peel’
                </motion.p>
            </div>

            <motion.div
                style={{ opacity }}
                className={styles.scrollHint}
            >
                <ChevronDown size={32} />
            </motion.div>
        </div >
    );
};

export default Hero;
