import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export const Hero = ({ t }) => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background decorative elements */}
            {/* Background decorative elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, 45, 0]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-bl from-purple-100 via-blue-50 to-transparent opacity-30 -z-10 blur-3xl"
            />
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-[120px] opacity-30 -z-10"
            />

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
                        <Button href="#contact" variant="secondary" className="border-slate-200 hover:bg-slate-50">
                            {t('Hero', 'CTA_Secondary')}
                        </Button>
                    </div>
                    <div className="mt-12 flex flex-col gap-4 text-slate-500 text-sm font-medium">
                        <span>Download app:</span>
                        <div className="flex gap-4">
                            <a href="https://apps.apple.com/ie/app/tributum/id1579508793" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-10" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.app.mbacc&hl=en_IE" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-10" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
