const locales = [
                'en',
                'es',
                // 'de',
                // 'fr',
                // 'hi',
                // 'it',
                // 'tr',
                // 'pt',
                // 'ro',
                // 'sk',
                // 'zh',
            ];

const messages = locales.reduce((acc, lang) => ({
    ...acc,
    [lang]: require(`../content/locales/${lang}.json`), // whatever the relative path to your messages json is
}), {});

const formats = {}; // optional, if you have any formats

export const reactIntl = {
    defaultLocale: 'en',
    locales,
    messages,
    formats,
};