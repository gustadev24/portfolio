import CodeIcon from "@assets/icons/code.svg";

export interface TagType {
  icon?: typeof CodeIcon;
  content: string;
  class?: string;
  iconClass?: string;
}

export interface ProjectCardType {
  img: ImageMetadata;
  title: string;
  tags: TagType[];
  description: string;
  github: string;
  preview?: string;
}

export interface TechType {
  icon: typeof CodeIcon;
  content: string;
  class?: string;
  iconClass?: string;
}
