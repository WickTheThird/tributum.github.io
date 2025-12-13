import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export const Hero = ({ t }) => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-purple-100 via-blue-50 to-transparent opacity-60 -z-10" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-[100px] opacity-40 -z-10" />

            <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                            {t('Hero', 'Title')}
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                        {t('Hero', 'Subtitle')}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button href="#features" variant="primary" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-lg shadow-blue-900/20">
                            {t('Hero', 'CTA_Primary')}
                        </Button>
                        <Button href="#contact" variant="outline" className="border-slate-200 hover:bg-slate-50">
                            {t('Hero', 'CTA_Secondary')}
                        </Button>
                    </div>
                    <div className="mt-12 flex items-center gap-4 text-slate-500 text-sm font-medium">
                        <span>Download app:</span>
                        <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
