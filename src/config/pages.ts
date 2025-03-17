import { SITE_URL } from "./variable";

export interface Section {
  name: string;
  id: string;
}

export interface Page {
  name: string;
  path: string;
  sections?: Section[];
}

export interface PageConfig {
  domain: string;
  pages: Page[];
}

export enum RootSections {
  PROJECTS = 'proyectos',
  STACK_TECH = 'tecnologías',
  ABOUT_ME = 'sobre-mí',
}

const pagesConfigInit = () => {

  return (
    {
      domain: SITE_URL,
      pages: [
        {
          name: 'Inicio',
          path: '/',
          sections: [
            {
              name: 'Proyectos',
              id: RootSections.PROJECTS,
            },
            {
              name: 'Tecnologías',
              id: RootSections.STACK_TECH,
            },
            {
              name: 'Sobre mí',
              id: RootSections.ABOUT_ME,
            },
          ],
        },
      ],
    }
  );
};

const pagesConfig: PageConfig = pagesConfigInit();

export default pagesConfig;
