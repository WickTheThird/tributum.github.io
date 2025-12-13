import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Button = ({ children, variant = 'primary', className, ...props }) => {
    const baseStyles = "px-6 py-3 rounded-xl font-medium transition-all duration-300 transform active:scale-95";
    const variants = {
        primary: "bg-gradient-to-r from-slate-900 to-slate-800 text-white hover:shadow-lg hover:shadow-slate-500/20 hover:-translate-y-1 border border-transparent",
        secondary: "bg-white text-slate-800 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md",
        outline: "bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm",
        ghost: "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100",
    };

    if (props.href) {
        return (
            <motion.a
                whileTap={{ scale: 0.98 }}
                className={twMerge(baseStyles, variants[variant], className)}
                {...props}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={twMerge(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </motion.button>
    );
};
