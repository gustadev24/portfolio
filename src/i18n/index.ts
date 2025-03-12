import { DEFAULT_LOCALE, Locale } from "src/config/locales";
import spanish from '@i18n/es.json';
import english from '@i18n/en.json';

export const getI18n = ({
  locale = DEFAULT_LOCALE
}: {
  locale: Locale
}) => {
  switch (locale) {
    case Locale.EN:
      return { ...spanish, ...english };
    default:
      return spanish;
  }
};
