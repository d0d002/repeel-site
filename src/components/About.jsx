import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
    return (
        <section id="about" className={styles.section}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={styles.container}
            >
                <h2 className={styles.heading}>Giving New Life to Discarded Peels</h2>
                <p className={styles.text}>
                    The RE:PEEL project began by focusing on everyday bio-waste, especially discarded fruit peels, reflecting rising awareness of sustainability, value-driven consumption, and resource circulation. The team collected peels from juice shops and markets, then developed materials through systematic research. Results were classified into aesthetic, functional, and symbolic approaches—highlighting natural texture, enhancing durability, and conveying environmental values. A key outcome was a jam jar lid made from fruit waste, echoing the color and feel of the original ingredient. RE:PEEL shows how discarded materials can gain new life and meaning, promoting a circular and sustainable future.
                </p>
            </motion.div>
        </section>
    );
};

export default About;
