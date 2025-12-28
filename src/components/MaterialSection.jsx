import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './MaterialSection.module.css';

const MaterialSection = ({ title, description, images, reverse, onClick }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.9, 1], [0, 1, 1, 0]);

    return (
        <div ref={ref} className={`${styles.section} ${reverse ? styles.reverse : ''}`}>
            <motion.div
                style={{ opacity }}
                className={styles.imageContainer}
                onClick={onClick}
            >
                {/* Main front image */}
                <motion.img
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    src={images[0]}
                    alt={title}
                    className={styles.image}
                    style={{ zIndex: 2, position: 'relative' }}
                />

                {/* Secondary back image (simulating coverflow/stack behind) */}
                {images[1] && (
                    <motion.img
                        initial={{ scale: 0.8, x: 20, opacity: 0 }}
                        whileInView={{ scale: 0.85, x: 40, opacity: 0.4 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        src={images[1]}
                        alt={`${title} view 2`}
                        className={styles.image}
                        style={{
                            position: 'absolute',
                            zIndex: 1,
                            right: reverse ? 'auto' : '10%',
                            left: reverse ? '10%' : 'auto',
                            top: '50%',
                            transform: 'translateY(-50%)'
                        }}
                    />
                )}
            </motion.div>
            <motion.div style={{ opacity, y }} className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </motion.div>
        </div>
    );
};

export default MaterialSection;
