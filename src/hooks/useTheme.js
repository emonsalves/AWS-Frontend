/**
 * useTheme Hook - Hook inteligente para manejo de themes
 * 
 * Este hook reemplaza las condicionales manuales por un sistema semántico.
 * Proporciona acceso directo a todas las categorías de theme.
 * 
 * ✅ Ventajas:
 * - Elimina condicionales manuales
 * - Acceso semántico a themes
 * - Utilidades helper incluidas
 * - TypeScript ready
 * 
 * 🚫 NUNCA MÁS usar:
 * - ${darkMode ? 'bg-gray-800' : 'bg-white'}
 * - Condicionales manuales en componentes
 * - Valores hardcoded
 * 
 * ✅ USAR:
 * - const { bg, text, border } = useTheme();
 * - <div className={`${bg.primary} ${text.primary}`}>
 */

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { themes, getThemeClasses, createVariants } from '../styles/themes';

/**
 * Hook personalizado para manejo de themes
 * @returns {Object} - Objeto con propiedades y métodos de theme
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  const { darkMode, toggleDarkMode } = context;
  const currentTheme = darkMode ? themes.dark : themes.light;
  
  return {
    // Estado del theme
    darkMode,
    toggleDarkMode,
    theme: currentTheme,
    
    // Acceso directo a categorías (shortcuts frecuentes)
    bg: currentTheme.background,
    text: currentTheme.text,
    border: currentTheme.border,
    interactive: currentTheme.interactive,
    
    // Utilidades helper
    getThemeClasses: (category, variant = 'primary') => {
      return getThemeClasses(darkMode, category, variant);
    },
    
    // Crear variantes dinámicas
    createVariants: (variants) => {
      return createVariants(darkMode, variants);
    },
    
    // Utilidad para clases condicionales (casos especiales)
    getConditionalClass: (lightClass, darkClass) => {
      return darkMode ? darkClass : lightClass;
    },
    
    // Helpers para estados comunes
    getButtonVariant: (variant = 'primary') => {
      const variants = {
        primary: currentTheme.interactive.buttonPrimary,
        secondary: currentTheme.interactive.buttonSecondary,
        ghost: currentTheme.interactive.buttonGhost,
        danger: currentTheme.interactive.buttonDanger
      };
      return variants[variant] || variants.primary;
    },
    
    // Helper para cards
    getCardClasses: (variant = 'default') => {
      const baseClasses = `${currentTheme.background.card} ${currentTheme.border.primary}`;
      const variants = {
        default: baseClasses,
        elevated: `${baseClasses} shadow-lg`,
        accent: `${currentTheme.background.accent} ${currentTheme.border.accent}`,
        success: `${currentTheme.background.success} ${currentTheme.border.success}`,
        warning: `${currentTheme.background.warning} ${currentTheme.border.warning}`,
        error: `${currentTheme.background.error} ${currentTheme.border.error}`
      };
      return variants[variant] || variants.default;
    },
    
    // Helper para inputs
    getInputClasses: (state = 'default') => {
      const baseClasses = `${currentTheme.background.primary} ${currentTheme.text.primary} ${currentTheme.border.primary}`;
      const states = {
        default: `${baseClasses} ${currentTheme.interactive.focus}`,
        error: `${baseClasses} ${currentTheme.border.error} focus:border-error-500`,
        success: `${baseClasses} ${currentTheme.border.success} focus:border-success-500`,
        disabled: `${baseClasses} ${currentTheme.background.disabled} ${currentTheme.text.disabled}`
      };
      return states[state] || states.default;
    },
    
    // Helper para texto con estados
    getTextClasses: (variant = 'primary', state = 'default') => {
      const baseClass = currentTheme.text[variant] || currentTheme.text.primary;
      
      if (state === 'hover') {
        return `${baseClass} transition-colors duration-200`;
      }
      
      return baseClass;
    },
    
    // Helper para iconos
    getIconClasses: (variant = 'primary', size = 'md') => {
      const colorClass = currentTheme.text[variant] || currentTheme.text.primary;
      const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
        xl: 'w-8 h-8'
      };
      
      return `${colorClass} ${sizeClasses[size] || sizeClasses.md}`;
    },
    
    // Utilidad para debugging (desarrollo)
    debug: () => {
      console.log('🎨 Current Theme:', {
        darkMode,
        theme: currentTheme,
        available: Object.keys(currentTheme)
      });
    }
  };
};
