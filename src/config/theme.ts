import DesktopIcon from "@assets/icons/desktop.svg";
import MoonIcon from "@assets/icons/moon.svg";
import SunIcon from "@assets/icons/sun.svg";

export const themes = {
  dark: {
    value: "dark",
    icon: MoonIcon,
  },
  light: {
    value: "light",
    icon: SunIcon,
  },
  system: {
    icon: DesktopIcon,
    value: "system",
  },
}

export const themeUIConfig = {
  label: "change-theme",
  options: Object.values(themes),
};
