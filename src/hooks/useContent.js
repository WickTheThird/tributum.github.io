import { useState, useEffect } from 'react';
import contentPath from '../content/website.md?url';

export const useContent = () => {
    const [content, setContent] = useState(null);
    const [language, setLanguage] = useState('en');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(contentPath)
            .then(res => res.text())
            .then(text => {
                const parsed = parseMarkdown(text);
                setContent(parsed);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load content", err);
                setLoading(false);
            });
    }, []);

    const t = (section, key) => {
        if (!content) return '';
        const sec = content[section];
        if (!sec) return '';
        const lang = sec[language];
        if (!lang) return sec['en']?.[key] || '';
        return lang[key] || sec['en']?.[key] || '';
    };

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'ro' : 'en');
    };

    return { content, language, setLanguage, toggleLanguage, t, loading };
};

const parseMarkdown = (text) => {
    const lines = text.split('\n');
    const data = {};
    let currentSection = null;
    let currentLang = null;

    lines.forEach(line => {
        const trimmed = line.trim();
        if (!trimmed) return;

        if (trimmed.startsWith('# ')) {
            currentSection = trimmed.replace('# ', '').trim();
            data[currentSection] = {};
            currentLang = null;
        } else if (trimmed.startsWith('## ')) {
            currentLang = trimmed.replace('## ', '').trim();
            if (currentSection) {
                data[currentSection][currentLang] = {};
            }
        } else if (currentSection && currentLang) {
            // Expecting Key: Value
            const firstColon = trimmed.indexOf(':');
            if (firstColon !== -1) {
                const key = trimmed.substring(0, firstColon).trim();
                const value = trimmed.substring(firstColon + 1).trim();
                data[currentSection][currentLang][key] = value;
            }
        }
    });

    return data;
};
