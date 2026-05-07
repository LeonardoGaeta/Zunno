

const changeThemeService = {
    changeTheme: () => {
        const isDark = document.documentElement.classList.toggle('dark');
    
        localStorage.setItem("theme", isDark ? "dark" : "light");
    },

    currentTheme: () => 
        localStorage.getItem("theme") ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
}

export default changeThemeService;