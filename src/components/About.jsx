import { motion } from 'framer-motion';

export const About = ({ t }) => {
    return (
        <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            {t('About', 'Title')}
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            {t('About', 'Paragraph1')}
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            {t('About', 'Paragraph2')}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-slate-900 rounded-2xl rotate-3 opacity-20" />
                        <div className="glass p-8 rounded-2xl relative border border-white/50 shadow-xl">
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                                    <div className="text-sm font-medium text-slate-600">{t('About', 'Stat1')}</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                                    <div className="text-sm font-medium text-slate-600">{t('About', 'Stat2')}</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                                    <div className="text-sm font-medium text-slate-600">{t('About', 'Stat3')}</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                                    <div className="text-sm font-medium text-slate-600">{t('About', 'Stat4')}</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
