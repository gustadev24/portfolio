import pagesConfig, { type HashRootRoutes } from "@config/pages";
import { DEFAULT_LOCALE, Locale } from ".";

// Cambiar de cualquier idioma al hash que permite mapear a la sección de la página
export function getHashFromUrl(url: URL, lang: Locale) { // #sobre-mí lang: es
  console.log("url value from gethashfromurl", url);
  const hash = url.hash;
  const hashRoot = hash.replace('#', '') as HashRootRoutes;
  console.log("Hasroot value from gethashfromurl", hashRoot);
  if (!hashRoot) {
    return "";
  }
  // Hasta aqui esta "sobre-mí"
  // necesito obtener el id de la sección a partir de las llaves de las rootSections, para luego en la ui traducirlo a cualquier idioma
  const entry = Object.entries(pagesConfig.pages[lang].sections).find(([, { id }]) => id === hashRoot);

  if (entry) {
    return `#${entry[0]}`;
  }

  return "";
  


}

export function useTranslatedPath(lang: Locale) { // en /en#about
  return function translatePath(path: string, l: Locale = lang) { // es
    const hash: HashRootRoutes = path.split('#').at(1) as HashRootRoutes;
    const langRoute = l === DEFAULT_LOCALE ? '/' : `/${l}`;
    console.log("langRoute value from useTranslatedPath", langRoute);
    if (!hash) {
      return langRoute;
    }
    const translatedHash = pagesConfig.pages[l].sections[hash].id;
    return `${langRoute}#${translatedHash}`;
  }
}
