import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/Button';

// NOTE: You need to replace these with your actual EmailJS keys
const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export const ContactForm = ({ t }) => {
    const formRef = useRef();
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // MOCK SEND: In production, uncomment the emailjs block below and remove the setTimeout
        setTimeout(() => {
            console.log("Email sent (mock)!");
            setStatus('success');
            formRef.current.reset();
        }, 1500);

        /*
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
          .then((result) => {
              setStatus('success');
              formRef.current.reset();
          }, (error) => {
              console.error(error.text);
              setStatus('error');
          });
        */
    };

    return (
        <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 -translate-y-1/2" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-200 rounded-full blur-3xl opacity-40 translate-y-1/2" />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">{t('Contact', 'Title')}</h2>
                    <p className="text-xl text-slate-600">{t('Contact', 'Subtitle')}</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="glass p-8 md:p-12 rounded-2xl shadow-2xl border border-white/50"
                >
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">{t('Contact', 'Label_Name')}</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">{t('Contact', 'Label_Email')}</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">{t('Contact', 'Label_Message')}</label>
                            <textarea
                                name="message"
                                rows="5"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                                placeholder="How can we help you?"
                            />
                        </div>

                        <div className="pt-4">
                            <Button
                                type="submit"
                                disabled={status === 'sending' || status === 'success'}
                                className="w-full flex items-center justify-center gap-2 text-lg"
                            >
                                {status === 'sending' ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : status === 'success' ? (
                                    <>
                                        <CheckCircle className="w-5 h-5" />
                                        {t('Contact', 'Success_Message')}
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        {t('Contact', 'Button_Send')}
                                    </>
                                )}
                            </Button>
                            {status === 'error' && (
                                <div className="mt-4 flex items-center justify-center gap-2 text-red-500 text-sm">
                                    <AlertCircle className="w-4 h-4" />
                                    {t('Contact', 'Error_Message')}
                                </div>
                            )}
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};
