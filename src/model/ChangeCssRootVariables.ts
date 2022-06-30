import { Theme } from "../context/ThemeContext";

export const changeCssRootVariables = (theme: Theme) => {
  const root = document.querySelector(":root") as HTMLElement;

  const changingThemes = [
    "body-background",
    "component-background",
    "card-background",
    "card-shadow",
    "text-color",
  ];

  changingThemes.forEach((component) => {
    root.style.setProperty(
      `--${component}-default`,
      `var(--${component}-${theme})`
    );
  });
};
