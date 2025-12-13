import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar = ({ content, language, toggleLanguage, t }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { key: 'Nav_Home', href: '#home' },
        { key: 'Nav_Services', href: '#features' }, // Mapped to Features section
        { key: 'Nav_Pricing', href: '#process' }, // Mapped to Process for now, or new Pricing section
        { key: 'Nav_Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'py-6 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="text-2xl font-bold tracking-tighter text-slate-900 flex items-center gap-2">
                    <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Logo" className="w-8 h-8 rounded-lg" />
                    {t('Global', 'BrandName')}
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.key}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                        >
                            {t('Global', link.key)}
                        </a>
                    ))}
                    <div className="h-6 w-px bg-slate-200" />
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                    >
                        <Globe className="w-4 h-4" />
                        {language === 'en' ? 'RO' : 'EN'}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-slate-100 overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.key}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium text-slate-800"
                                >
                                    {t('Global', link.key)}
                                </a>
                            ))}
                            <hr className="border-slate-100" />
                            <button
                                onClick={() => { toggleLanguage(); setMobileMenuOpen(false); }}
                                className="flex items-center gap-2 text-lg font-medium text-slate-800"
                            >
                                <Globe className="w-5 h-5" />
                                {language === 'en' ? 'Switch to Romanian' : 'Schimbă în Engleză'}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
