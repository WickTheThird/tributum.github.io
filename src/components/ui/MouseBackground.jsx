import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const MouseBackground = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for delay/lag effect
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            // Center the blob on the cursor approx (blob is 500px)
            mouseX.set(clientX - 250);
            mouseY.set(clientY - 250);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            <motion.div
                style={{ x, y }}
                animate={{
                    backgroundColor: ['rgba(139, 92, 246, 0.15)', 'rgba(59, 130, 246, 0.15)', 'rgba(139, 92, 246, 0.15)'],
                }}
                transition={{
                    backgroundColor: { duration: 5, repeat: Infinity, ease: 'linear' }
                }}
                className="w-[500px] h-[500px] rounded-full blur-[100px]"
            />
        </div>
    );
};
