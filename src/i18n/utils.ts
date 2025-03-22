import pagesConfig, { type HashRootRoutes } from "@config/pages";
import { DEFAULT_LOCALE, Locale } from ".";

export function getLangFromPathname(url: string): Locale {
  const [, lang] = url.split('/');
  return lang as Locale || DEFAULT_LOCALE;
}

// Obtener la clave de la página a partir del hash
export function getHashKey(hash: string, lang: Locale) { // #sobre-mí lang: es

  const entry = Object.entries(pagesConfig.pages[lang].sections).find(([, { id }]) => id === hash);

  if (entry) {
    return entry[0] as HashRootRoutes;
  }

  return undefined;

}

// Traducir del idioma lang al idioma l
export function useTranslatedPath(lang: Locale) {
  return function translatePath(path: string, l: Locale = lang) {
    const langRoute = l === DEFAULT_LOCALE ? '/' : `/${l}/`;
    const hash = path.split('#').at(1);
    const keyHash = getHashKey(hash || '', lang)
    if (!hash || !keyHash) {
      return langRoute;
    }
    // No es necesario traducir si el idioma es el mismo
    if (l === lang) {
      return `${langRoute}#${hash}`;
    }
    const translatedHash = pagesConfig.pages[l].sections[keyHash].id;
    return `${langRoute}#${translatedHash}`;
  }
}
