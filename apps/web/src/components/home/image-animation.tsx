"use client";

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "motion/react";
import Image from 'next/image';

const ImageAnimation = ({ data, classname }: { data: string[]; classname: string }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % data.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            <motion.span
                key={data[index]}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={classname}
            >
                <Image src={`/social/${data[index]}`} alt={""} height={17} width={17} />
            </motion.span>
        </AnimatePresence>
    )
}

export default ImageAnimation;