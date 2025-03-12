import type { HTMLAttributes } from "astro/types";

export interface Icon extends Partial<HTMLAttributes<'svg'>> {
  width?: number | string;
  height?: number | string;
}
