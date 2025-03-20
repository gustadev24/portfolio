import DesktopIcon from "@assets/icons/desktop.svg";
import MoonIcon from "@assets/icons/moon.svg";
import SunIcon from "@assets/icons/sun.svg";

export const themes = {
  dark: {
    display: "Dark",
    value: "dark",
    icon: MoonIcon,
  },
  light: {
    display: "Light",
    value: "light",
    icon: SunIcon,
  },
  system: {
    display: "System",
    icon: DesktopIcon,
    value: "system",
  },
}

export const themeUIConfig = {
  label: "change-theme",
  options: Object.values(themes),
};
