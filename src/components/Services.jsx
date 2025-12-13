import { motion } from 'framer-motion';
import { FileText, TrendingUp, ShieldCheck, Users } from 'lucide-react';

const icons = {
    Service1: FileText,
    Service2: TrendingUp,
    Service3: ShieldCheck,
    Service4: Users,
};

export const Services = ({ t }) => {
    const services = ['Service1', 'Service2', 'Service3', 'Service4'];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="services" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">{t('Services', 'Title')}</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">{t('Services', 'Subtitle')}</p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {services.map((key) => {
                        const Icon = icons[key];
                        return (
                            <motion.div
                                key={key}
                                variants={item}
                                className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-slate-600">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{t('Services', `${key}_Title`)}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {t('Services', `${key}_Desc`)}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};
