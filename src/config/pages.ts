import { Locale } from "@i18n/index";
import { SITE_URL } from "./variable";

export const RootSections = {
  [Locale.ES]: {
    PROJECTS: 'proyectos',
    STACK_TECH: 'tecnologias',
    ABOUT_ME: 'sobre-mi',
  },
  [Locale.EN]: {
    PROJECTS: 'projects',
    STACK_TECH: 'stack-tech',
    ABOUT_ME: 'about',
  },
}

export type HashRootRoutes = "projects" | "stack-tech" | "about";

const pagesConfigInit = () => {

  return (
    {
      domain: SITE_URL,
      pages: {
        [Locale.ES]: {
          path: '/',
          sections: {
            projects: {
              id: RootSections[Locale.ES].PROJECTS,
            },
            'stack-tech': {
              id: RootSections[Locale.ES].STACK_TECH,
            },
            about: {
              id: RootSections[Locale.ES].ABOUT_ME,
            },
          },
        },
        [Locale.EN]: {
          path: '/',
          sections: {
            projects: {
              id: RootSections[Locale.EN].PROJECTS,
            },
            'stack-tech': {
              id: RootSections[Locale.EN].STACK_TECH,
            },
            about: {
              id: RootSections[Locale.EN].ABOUT_ME,
            },
          },
        },
      },
    }
  );
};

const pagesConfig = pagesConfigInit();

export default pagesConfig;
