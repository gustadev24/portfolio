import TailwindLogo from '@/assets/icons/tailwindcss.svg';
import NextJSLogo from '@/assets/icons/nextjs.svg';
import ReactLogo from '@/assets/icons/react.svg';
import MotionLogo from '@/assets/icons/motion.svg';
import UnityLogo from '@/assets/icons/unity.svg';
import SupabaseLogo from '@/assets/icons/supabase.svg';
import VercelLogo from '@/assets/icons/vercel.svg';
import type { getI18n } from '@/i18n/index';

export const genTags = (i18n: ReturnType<typeof getI18n>) => ({
  tailwind: {
    content: 'Tailwind CSS',
    class: 'bg-[#003159]',
    icon: TailwindLogo,
  },
  nextjs: {
    content: 'Next JS',
    class: 'bg-black',
    icon: NextJSLogo,
  },
  react: {
    content: 'React',
    class: 'bg-[#23272F]',
    icon: ReactLogo,
  },
  motion: {
    content: 'Motion',
    class: 'bg-[#1A202C]',
    icon: MotionLogo,
  },
  unity: {
    content: 'Unity',
    class: 'bg-black',
    icon: UnityLogo,
  },
  supabase: {
    content: 'Supabase',
    class: 'bg-[#1A202C]',
    icon: SupabaseLogo,
  },
  vercel: {
    content: 'Vercel',
    class: 'bg-black',
    icon: VercelLogo,
  },
  frontend: {
    content: i18n.PROJECTS.CARD.TAGS.FRONTEND,
  },
  backend: {
    content: i18n.PROJECTS.CARD.TAGS.BACKEND,
  },
  trabajoEnEquipo: {
    content: i18n.PROJECTS.CARD.TAGS.TEAM_WORK,
  },
});
