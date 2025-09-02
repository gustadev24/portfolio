import ACMImage from '@/assets/images/projects/acm.webp';
import ExoplanetsImage from '@/assets/images/projects/exoplanets.webp';
import KnowledgeWardensImage from '@/assets/images/projects/knowledge-wardens.webp';
import TechartImage from '@/assets/images/projects/techart.webp';
import ClassroomImage from '@/assets/images/projects/classroom.webp';
import type { getI18n } from '@/i18n/index';
import { genTags } from '@/lib/tags';
import type { ProjectCardType } from '@/types';

export const genProjects: (
  i18n: ReturnType<typeof getI18n>,
) => ProjectCardType[] = (i18n) => {
  const tags = genTags(i18n);
  return [
    {
      title: i18n.PROJECTS.CLASSROOM.TITLE,
      description: i18n.PROJECTS.CLASSROOM.DESCRIPTION,
      img: ClassroomImage,
      tags: [
        tags.backend,
        tags.frontend,
        tags.nextjs,
        tags.tailwind,
        tags.trabajoEnEquipo,
      ],
      github: 'https://github.com/ynoacamino/infra-sustainable-classrooms',
    },
    {
      title: i18n.PROJECTS.TECHART.TITLE,
      description: i18n.PROJECTS.TECHART.DESCRIPTION,
      img: TechartImage,
      tags: [
        tags.backend,
        tags.frontend,
        tags.nextjs,
        tags.react,
        tags.tailwind,
        tags.motion,
        tags.trabajoEnEquipo,
      ],
      github: 'https://github.com/ynoacamino/techart-pixel-canvas',
      preview: 'https://techart.ynoacamino.me',
    },
    {
      title: i18n.PROJECTS.ACM.TITLE,
      description: i18n.PROJECTS.ACM.DESCRIPTION,
      img: ACMImage,
      tags: [
        tags.nextjs,
        tags.react,
        tags.tailwind,
        tags.motion,
        tags.frontend,
        tags.trabajoEnEquipo,
      ],
      github: 'https://github.com/ynoacamino/student-chapter-acm-page',
      preview: 'https://acm.ynoacamino.me',
    },
    {
      title: i18n.PROJECTS.KNOWLEDGE_WARDENS.TITLE,
      description: i18n.PROJECTS.KNOWLEDGE_WARDENS.DESCRIPTION,
      img: KnowledgeWardensImage,
      tags: [
        tags.nextjs,
        tags.react,
        tags.unity,
        tags.vercel,
        tags.tailwind,
        tags.frontend,
      ],
      github: 'https://github.com/gustadev24/knowledge_wardens',
      preview: 'https://knowledge-wardens.vercel.app',
    },
    {
      title: i18n.PROJECTS.EXOPLANETS.TITLE,
      description: i18n.PROJECTS.EXOPLANETS.DESCRIPTION,
      img: ExoplanetsImage,
      tags: [
        tags.unity,
        tags.react,
        tags.supabase,
        tags.tailwind,
        tags.frontend,
        tags.trabajoEnEquipo,
      ],
      github: 'https://github.com/christianmz565/Exoplanets',
    },
  ];
};
