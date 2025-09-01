import ACMProjectImage from "@assets/images/acm-project.webp";
import ExoplanetsProjectImage from "@assets/images/exoplanets-project.webp";
import KnowledgeWardensProjectImage from "@assets/images/knowledge-wardens-project.webp";
import type { getI18n } from '@i18n/index';
import { genTags } from '@lib/tags';
import type { ProjectCardType } from '@types';

export const genProjects: (i18n: ReturnType<typeof getI18n>) => ProjectCardType[] = (i18n) => {
  const tags = genTags(i18n);
  return [
    {
      title: i18n.PROJECTS.ACM.TITLE,
      description: i18n.PROJECTS.ACM.DESCRIPTION,
      img: ACMProjectImage,
      tags: [tags.nextjs, tags.react, tags.tailwind, tags.motion, tags.frontend, tags.trabajoEnEquipo],
      github: "https://github.com/ynoacamino/student-chapter-acm-page",
      preview: "https://acm.ynoacamino.site"
    },
    {
      title: i18n.PROJECTS.EXOPLANETS.TITLE,
      description: i18n.PROJECTS.EXOPLANETS.DESCRIPTION,
      img: ExoplanetsProjectImage,
      tags: [tags.unity, tags.react, tags.supabase, tags.tailwind, tags.frontend, tags.trabajoEnEquipo],
      github: "https://github.com/christianmz565/Exoplanets",
    },
    {
      title: i18n.PROJECTS.KNOWLEDGE_WARDENS.TITLE,
      description: i18n.PROJECTS.KNOWLEDGE_WARDENS.DESCRIPTION,
      img: KnowledgeWardensProjectImage,
      tags: [tags.nextjs, tags.react, tags.unity, tags.vercel, tags.tailwind, tags.frontend],
      github: "https://github.com/gustadev24/knowledge_wardens",
      preview: "https://knowledge-wardens.vercel.app"
    }
  ]
};
