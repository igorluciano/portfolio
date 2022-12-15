const colors = {
  color: {
    none: "transparent",
    light: {
      100: "#fff",
    },
    primary: {
      100: "#60a5fa",
      200: "#3b82f6",
      300: "#2948ff",
      400: "#1d4ed8",
    },
    secondary: {
      100: "#f8fafc",
      100: "#CBD5E0",
    },
  },
};

const fontSize = {
  "linktree-bio": "1.50rem",
  "linktree-link": "1.10rem",
  "linktree-site": "1.70rem",
  "linktree-footer": "1rem",
  brand: "1.50rem",
  "menu-item": "1.10rem",
  "menu-trigger": "1.10rem",
  navigation: "0.90rem",
  section: "1.35rem",
  legend: "0.85rem",
  content: "1.15rem",
  "workdone-date": "0.9rem",
  "workdone-category": "0.9rem",
  "workdone-title": "1.25rem",
  "workdone-description": "1rem",
  "publication-title": "1.35rem",
  "publication-description": "1.15rem",
  "publication-tag": "0.85rem",
  "publication-date": "0.85rem",
  "pagination-indication": "1rem",
  "pagination-action": "1rem",
};

const fontFamily = {
  roboto: ["Roboto", "sans-serif"],
  overlock: ["Overlock", "cursive"],
};

const fontWeight = {
  regular: "300",
  bold: "400",
  emphasis: "700",
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
