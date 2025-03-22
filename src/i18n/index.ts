import spanish from './es.json';
import english from './en.json';

export enum Locale {
  ES = 'es',
  EN = 'en'
}

export const ALL_LOCALES = Object.values(Locale);

export const DEFAULT_LOCALE = Locale.ES;

export const getI18n = ({
  currentLocale = DEFAULT_LOCALE
}: {
  currentLocale: Locale
}) => {
  switch (currentLocale) {
    case Locale.EN:
      return { ...spanish, ...english };
    default:
      return spanish;
  }
};
