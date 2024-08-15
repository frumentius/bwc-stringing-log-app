export const updateThemeColor = (isDark) => {
  const themeColor = document.querySelector('meta[name="theme-color"]');
  themeColor.setAttribute("content", isDark ? "#222017" : "#f4eddf");

  if (isDark) document.body.className = "dark";
  else document.body.className = "light";
};
