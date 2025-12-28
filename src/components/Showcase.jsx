import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import MaterialSection from './MaterialSection';
import styles from './Showcase.module.css';

const materials = [
    {
        title: 'Blueberry',
        description: 'Deep hues of nature, reborn into resilient textures.',
        images: ['/images/Blueberry_1.png', '/images/Blueberry_2.png']
    },
    {
        title: 'Dragonfruit',
        description: 'Vibrant exotics transformed into bold, sustainable statements.',
        images: ['/images/Dragonfruit_1.png', '/images/Dragonfruit_2.png']
    },
    {
        title: 'Grape',
        description: 'Classic vines reimagined as durable, organic surfaces.',
        images: ['/images/Grape_1.png', '/images/Grape_2.png']
    },
    {
        title: 'Peanut',
        description: 'Earthly husks crafted into sturdy, warm materials.',
        images: ['/images/Peanut_1.png', '/images/Peanut_2.png']
    }
];

const Showcase = () => {
    const [previewItem, setPreviewItem] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleImageClick = (item) => {
        setPreviewItem(item);
        setCurrentImageIndex(0); // Reset to first image on open
    };

    const nextImage = (e) => {
        e.stopPropagation();
        if (previewItem) {
            setCurrentImageIndex((prev) => (prev + 1) % previewItem.images.length);
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (previewItem) {
            setCurrentImageIndex((prev) => (prev - 1 + previewItem.images.length) % previewItem.images.length);
        }
    };

    return (
        <div id="product" style={{ padding: '5rem 0', backgroundColor: 'black', position: 'relative' }}>
            {materials.map((item, index) => (
                <MaterialSection
                    key={item.title}
                    {...item}
                    reverse={index % 2 !== 0}
                    onClick={() => handleImageClick(item)}
                />
            ))}

            <AnimatePresence>
                {previewItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.overlay}
                    >
                        <div className={styles.backdrop} onClick={() => setPreviewItem(null)} />

                        <div className={styles.popupContent}>
                            <button className={styles.closeButton} onClick={() => setPreviewItem(null)}>
                                <X size={24} />
                            </button>

                            <motion.img
                                key={currentImageIndex} // Key change triggers animation
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                src={previewItem.images[currentImageIndex]}
                                alt={previewItem.title}
                                className={styles.popupImage}
                            />

                            {/* Navigation Arrows */}
                            {previewItem.images.length > 1 && (
                                <>
                                    <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevImage}>
                                        <ChevronLeft size={32} />
                                    </button>
                                    <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextImage}>
                                        <ChevronRight size={32} />
                                    </button>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Showcase;
