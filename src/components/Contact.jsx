import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            // Placeholder for Supabase logic
            console.log("Saving email:", email);
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 3000);
            setEmail('');
        }
    };

    return (
        <section id="contact" className={styles.section}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className={styles.title}>Join the Movement</h2>
                <p className={styles.text}>
                    Be the first to know about our new collections and environmental initiatives.
                </p>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className={styles.button}>
                        Subscribe
                    </button>
                </form>

                {submitted && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={styles.success}
                    >
                        Thank you! We've received your email.
                    </motion.p>
                )}
            </motion.div>
        </section>
    );
};

export default Contact;
