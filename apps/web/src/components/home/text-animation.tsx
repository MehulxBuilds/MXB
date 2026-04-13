"use client";

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "motion/react";

const TextAnimation = ({ roles, classname }: { roles: string[]; classname: string }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            <motion.span
                key={roles[index]}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={classname}
            >
                {roles[index]}
            </motion.span>
        </AnimatePresence>
    )
}

export default TextAnimation;