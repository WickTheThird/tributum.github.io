import { Mail, Github } from 'lucide-react';

export const Footer = ({ t }) => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-white text-xl font-bold mb-4">{t('Global', 'BrandName')}</h3>
                        <p className="max-w-xs text-sm leading-relaxed mb-6">
                            Empowering businesses with precision accounting and strategic financial advice in Ireland.
                        </p>
                        <div className="flex gap-4">
                            <a href="mailto:info@tributum.ie" className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
                            <a href="https://github.com/WickTheThird/tributum.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Tax Returns</li>
                            <li>Revenue Audits</li>
                            <li>Payroll</li>
                            <li>Company Formation</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-slate-800 text-xs text-center">
                    &copy; {new Date().getFullYear()} {t('Global', 'BrandName')}. {t('Global', 'Footer_Rights')}
                </div>
            </div>
        </footer>
    );
};
