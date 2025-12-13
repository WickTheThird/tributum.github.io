import { motion } from 'framer-motion';

export const CallAction = ({ t }) => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background with nice gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0" />

            {/* Decorative blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px] opacity-10 pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-[100px] opacity-10 pointer-events-none"
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {t('Apps', 'Title')}
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
                        {t('Apps', 'Subtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <motion.a
                            href="https://apps.apple.com/ie/app/tributum/id1579508793"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer flex items-center gap-3"
                        >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10" />
                            <div className="text-left">
                                <div className="text-[10px] text-white/80 uppercase tracking-wider">Download on the</div>
                                <div className="text-sm font-bold text-white">App Store</div>
                            </div>
                        </motion.a>

                        <motion.a
                            href="https://play.google.com/store/apps/details?id=com.app.mbacc&hl=en_IE"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer flex items-center gap-3"
                        >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
                            <div className="text-left">
                                <div className="text-[10px] text-white/80 uppercase tracking-wider">Get it on</div>
                                <div className="text-sm font-bold text-white">Google Play</div>
                            </div>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
