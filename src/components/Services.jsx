import { motion } from 'framer-motion';
import { UserCheck, Smartphone, Calculator, ShieldCheck } from 'lucide-react';

const services = [
    {
        icon: UserCheck, // Dedicated Accountant
        title: 'Feat1_Title',
        desc: 'Feat1_Desc'
    },
    {
        icon: Smartphone, // Modern App
        title: 'Feat2_Title',
        desc: 'Feat2_Desc'
    },
    {
        icon: Calculator, // Payroll
        title: 'Feat3_Title',
        desc: 'Feat3_Desc'
    },
    {
        icon: ShieldCheck, // Peace of Mind / Compliance
        title: 'Feat4_Title',
        desc: 'Feat4_Desc'
    }
];

export const Services = ({ t }) => {
    return (
        <section id="features" className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-blue-100 to-purple-100 rounded-full blur-[120px] opacity-30 pointer-events-none animate-blob" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        {t('Features', 'Title')}
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        {t('Features', 'Subtitle')}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                                <service.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{t('Features', service.title)}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {t('Features', service.desc)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
