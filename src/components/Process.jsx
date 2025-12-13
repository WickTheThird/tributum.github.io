import { motion } from 'framer-motion';
import { UserPlus, CheckCircle2, FileSignature } from 'lucide-react';

const steps = [
    {
        icon: UserPlus,
        titleKey: 'Step1_Title',
        descKey: 'Step1_Desc',
    },
    {
        icon: CheckCircle2,
        titleKey: 'Step2_Title',
        descKey: 'Step2_Desc',
    },
    {
        icon: FileSignature,
        titleKey: 'Step3_Title',
        descKey: 'Step3_Desc',
    },
];

export const Process = ({ t }) => {
    return (
        <section id="process" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        {t('Process', 'Title')}
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[3.5rem] left-[16%] right-[16%] h-0.5 bg-slate-100 -z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10 flex flex-col items-center text-center"
                        >
                            <div className="w-28 h-28 bg-white rounded-full border border-slate-100 shadow-xl flex items-center justify-center mb-8 group hover:scale-105 transition-transform duration-300">
                                <step.icon className="w-10 h-10 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {t('Process', step.titleKey)}
                            </h3>
                            <p className="text-slate-600 max-w-xs leading-relaxed">
                                {t('Process', step.descKey)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
