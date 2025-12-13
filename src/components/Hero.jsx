import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export const Hero = ({ t }) => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-slate-50 z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-200 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                            {t('Hero', 'Title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                            {t('Hero', 'Subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button href="#services" variant="primary" className="text-lg px-8 py-4">
                                {t('Hero', 'CTA_Primary')}
                            </Button>
                            <Button href="#contact" variant="secondary" className="text-lg px-8 py-4">
                                {t('Hero', 'CTA_Secondary')}
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
