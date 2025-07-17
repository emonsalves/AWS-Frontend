import { createContext, useContext, useState, useEffect } from 'react';

/**
 * ThemeContext - Contexto mejorado para manejo de themes
 * 
 * Proporciona estado global del theme con:
 * - Persistencia en localStorage
 * - Detección de preferencia del sistema
 * - Aplicación automática de clase 'dark' al HTML
 * - Transiciones suaves entre themes
 */

const ThemeContext = createContext();

// Exportar el contexto para que otros hooks puedan usarlo
export { ThemeContext };

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        // Inicializar theme desde localStorage o sistema
        const initializeTheme = () => {
            const savedTheme = localStorage.getItem('darkMode');
            const systemPrefersDark = window.matchMedia && 
                window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            let initialDarkMode = false;
            
            if (savedTheme !== null) {
                // Usar preferencia guardada
                initialDarkMode = JSON.parse(savedTheme);
            } else {
                // Usar preferencia del sistema
                initialDarkMode = systemPrefersDark;
            }
            
            setDarkMode(initialDarkMode);
            setIsInitialized(true);
            
            // Aplicar clase al HTML
            document.documentElement.classList.toggle('dark', initialDarkMode);
        };
        
        initializeTheme();
        
        // Escuchar cambios en la preferencia del sistema
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleSystemThemeChange = (e) => {
            // Solo aplicar si no hay preferencia guardada
            if (localStorage.getItem('darkMode') === null) {
                setDarkMode(e.matches);
                document.documentElement.classList.toggle('dark', e.matches);
            }
        };
        
        mediaQuery.addEventListener('change', handleSystemThemeChange);
        
        return () => {
            mediaQuery.removeEventListener('change', handleSystemThemeChange);
        };
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        
        // Persistir en localStorage
        localStorage.setItem('darkMode', JSON.stringify(newMode));
        
        // Aplicar clase al HTML para Tailwind
        document.documentElement.classList.toggle('dark', newMode);
        
        // Opcional: Disparar evento personalizado para otros componentes
        window.dispatchEvent(new CustomEvent('themeChange', { 
            detail: { darkMode: newMode } 
        }));
    };

    // Función para establecer theme específico
    const setTheme = (isDark) => {
        setDarkMode(isDark);
        localStorage.setItem('darkMode', JSON.stringify(isDark));
        document.documentElement.classList.toggle('dark', isDark);
        
        window.dispatchEvent(new CustomEvent('themeChange', { 
            detail: { darkMode: isDark } 
        }));
    };

    // Función para resetear a preferencia del sistema
    const resetToSystemTheme = () => {
        localStorage.removeItem('darkMode');
        const systemPrefersDark = window.matchMedia && 
            window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        setDarkMode(systemPrefersDark);
        document.documentElement.classList.toggle('dark', systemPrefersDark);
        
        window.dispatchEvent(new CustomEvent('themeChange', { 
            detail: { darkMode: systemPrefersDark } 
        }));
    };

    const value = {
        darkMode,
        toggleDarkMode,
        setTheme,
        resetToSystemTheme,
        isInitialized
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
