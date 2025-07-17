/**
 * Themes System - Sistema profesional de themes
 * 
 * Este archivo define los themes light y dark usando los tokens como base.
 * Cada theme tiene categorías semánticas para facilitar el uso.
 * 
 * ✅ Ventajas:
 * - Themes escalables y mantenibles
 * - Nombres semánticos (no más gray-800 hardcoded)
 * - Fácil agregar nuevos themes
 * - Consistencia visual garantizada
 * 
 * 🚫 NUNCA MÁS usar:
 * - ${darkMode ? 'bg-gray-800' : 'bg-white'}
 * - Condicionales manuales
 * - Valores hardcoded
 */

import { tokens } from './tokens.js';

export const themes = {
  light: {
    // 🌅 FONDOS SEMÁNTICOS
    background: {
      primary: 'bg-white',                    // Fondo principal
      secondary: 'bg-neutral-50',            // Fondo secundario
      tertiary: 'bg-neutral-100',            // Fondo terciario
      card: 'bg-white',                      // Tarjetas/contenedores
      overlay: 'bg-white/90',                // Modales/overlays
      accent: 'bg-primary-50',               // Fondos de acento
      hover: 'bg-neutral-50',                // Estados hover
      active: 'bg-neutral-100',              // Estados activos
      disabled: 'bg-neutral-100',            // Estados deshabilitados
      success: 'bg-success-50',              // Fondos de éxito
      warning: 'bg-warning-50',              // Fondos de advertencia
      error: 'bg-error-50'                   // Fondos de error
    },
    
    // 📝 TEXTOS SEMÁNTICOS
    text: {
      primary: 'text-neutral-900',           // Texto principal
      secondary: 'text-neutral-600',         // Texto secundario
      tertiary: 'text-neutral-500',          // Texto terciario
      inverse: 'text-white',                 // Texto inverso
      accent: 'text-primary-600',            // Texto de acento
      muted: 'text-neutral-400',             // Texto apagado
      disabled: 'text-neutral-300',          // Texto deshabilitado
      success: 'text-success-700',           // Texto de éxito
      warning: 'text-warning-700',           // Texto de advertencia
      error: 'text-error-700',               // Texto de error
      info: 'text-info-700',                 // Texto informativo
      link: 'text-primary-600',              // Enlaces
      linkHover: 'text-primary-700'          // Enlaces hover
    },
    
    // 🔲 BORDES SEMÁNTICOS
    border: {
      primary: 'border-neutral-200',         // Borde principal
      secondary: 'border-neutral-300',       // Borde secundario
      accent: 'border-primary-200',          // Borde de acento
      focus: 'border-primary-500',           // Borde de foco
      hover: 'border-neutral-300',           // Borde hover
      active: 'border-primary-400',          // Borde activo
      disabled: 'border-neutral-200',        // Borde deshabilitado
      success: 'border-success-300',         // Borde de éxito
      warning: 'border-warning-300',         // Borde de advertencia
      error: 'border-error-300'              // Borde de error
    },
    
    // 🎯 ESTADOS INTERACTIVOS
    interactive: {
      hover: 'hover:bg-neutral-50',          // Hover genérico
      focus: 'focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500',
      active: 'active:bg-neutral-100',       // Activo genérico
      disabled: 'disabled:opacity-50 disabled:cursor-not-allowed',
      
      // Botones específicos
      buttonPrimary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500/20',
      buttonSecondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus:ring-neutral-500/20',
      buttonGhost: 'bg-transparent text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-500/20',
      buttonDanger: 'bg-error-600 text-white hover:bg-error-700 focus:ring-error-500/20'
    }
  },
  
  dark: {
    // 🌙 FONDOS SEMÁNTICOS
    background: {
      primary: 'bg-neutral-900',             // Fondo principal
      secondary: 'bg-neutral-800',           // Fondo secundario
      tertiary: 'bg-neutral-700',            // Fondo terciario
      card: 'bg-neutral-800',                // Tarjetas/contenedores
      overlay: 'bg-neutral-900/90',          // Modales/overlays
      accent: 'bg-primary-900/20',           // Fondos de acento
      hover: 'bg-neutral-700',               // Estados hover
      active: 'bg-neutral-600',              // Estados activos
      disabled: 'bg-neutral-800',            // Estados deshabilitados
      success: 'bg-success-900/20',          // Fondos de éxito
      warning: 'bg-warning-900/20',          // Fondos de advertencia
      error: 'bg-error-900/20'               // Fondos de error
    },
    
    // 📝 TEXTOS SEMÁNTICOS
    text: {
      primary: 'text-white',                 // Texto principal
      secondary: 'text-neutral-300',         // Texto secundario
      tertiary: 'text-neutral-400',          // Texto terciario
      inverse: 'text-neutral-900',           // Texto inverso
      accent: 'text-primary-400',            // Texto de acento
      muted: 'text-neutral-500',             // Texto apagado
      disabled: 'text-neutral-600',          // Texto deshabilitado
      success: 'text-success-400',           // Texto de éxito
      warning: 'text-warning-400',           // Texto de advertencia
      error: 'text-error-400',               // Texto de error
      info: 'text-info-400',                 // Texto informativo
      link: 'text-primary-400',              // Enlaces
      linkHover: 'text-primary-300'          // Enlaces hover
    },
    
    // 🔲 BORDES SEMÁNTICOS
    border: {
      primary: 'border-neutral-700',         // Borde principal
      secondary: 'border-neutral-600',       // Borde secundario
      accent: 'border-primary-700',          // Borde de acento
      focus: 'border-primary-500',           // Borde de foco
      hover: 'border-neutral-600',           // Borde hover
      active: 'border-primary-600',          // Borde activo
      disabled: 'border-neutral-700',        // Borde deshabilitado
      success: 'border-success-700',         // Borde de éxito
      warning: 'border-warning-700',         // Borde de advertencia
      error: 'border-error-700'              // Borde de error
    },
    
    // 🎯 ESTADOS INTERACTIVOS
    interactive: {
      hover: 'hover:bg-neutral-700',         // Hover genérico
      focus: 'focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500',
      active: 'active:bg-neutral-600',       // Activo genérico
      disabled: 'disabled:opacity-50 disabled:cursor-not-allowed',
      
      // Botones específicos
      buttonPrimary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500/30',
      buttonSecondary: 'bg-neutral-700 text-neutral-100 hover:bg-neutral-600 focus:ring-neutral-500/30',
      buttonGhost: 'bg-transparent text-neutral-300 hover:bg-neutral-700 focus:ring-neutral-500/30',
      buttonDanger: 'bg-error-600 text-white hover:bg-error-700 focus:ring-error-500/30'
    }
  }
};

/**
 * Utilidad para obtener clases de theme
 * @param {boolean} darkMode - Si está en modo oscuro
 * @param {string} category - Categoría (background, text, border, interactive)
 * @param {string} variant - Variante (primary, secondary, etc.)
 * @returns {string} - Clases CSS
 */
export const getThemeClasses = (darkMode, category, variant = 'primary') => {
  const theme = darkMode ? themes.dark : themes.light;
  return theme[category]?.[variant] || '';
};

/**
 * Utilidad para crear variantes de componentes
 * @param {boolean} darkMode - Si está en modo oscuro
 * @param {Object} variants - Objeto con variantes
 * @returns {Object} - Variantes procesadas
 */
export const createVariants = (darkMode, variants) => {
  const theme = darkMode ? themes.dark : themes.light;
  const processedVariants = {};
  
  Object.entries(variants).forEach(([key, value]) => {
    if (typeof value === 'function') {
      processedVariants[key] = value(theme);
    } else {
      processedVariants[key] = value;
    }
  });
  
  return processedVariants;
};
