const colors = {
  color: {
    transparent: "transparent",
    light: "#ffffff",
    outline: "#f8fafc",
    primary: {
      ocean: "#ddf4ff",
      solid: "#2948ff",
    },
    gray: "#CBD5E0",
    um: "#1d4ed8",
    dois: "#1d4ed8",
    tres: "#00d4ff ",
  },
};

const fontSize = {
  header: "1.65rem",
  trigger: "1.25rem",
  section: "1.25rem",

  menu: "1.15rem",
  title: "1.25rem",
  subtitle: "1.15rem",
  content: "1.15rem",
  detail: "0.80rem",

  bio: "1.35rem",
  linktree: "1.15rem",
  networks: "1.60rem",
};

const fontFamily = {
  roboto: ["Roboto", "sans-serif"],
  oleo: ["Oleo Script Swash Caps", "cursive"],
  lily: ["Lily Script One", "cursive"],
  lalezar: ["Lalezar", "cursive"],
  overlock: ["Overlock", "cursive"],
};

const fontWeight = {
  regular: "300",
  bold: "400",
  teste: "700",
};

const screens = {
  sm: { max: "640px" },
  md: { min: "641px" },
  lg: { min: "961px" },
  xl: { min: "1281px" },
};

module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}", "./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/layouts/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  important: true,
  theme: {
    colors,
    fontSize,
    fontFamily,
    fontWeight,
    screens,
  },
};
