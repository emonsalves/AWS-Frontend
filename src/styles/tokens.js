/**
 * Design Tokens - Sistema centralizado de valores de diseño
 * 
 * Este archivo contiene todos los valores de diseño del sistema:
 * - Colores semánticos
 * - Espaciado consistente
 * - Bordes y sombras
 * - Tipografía
 * 
 * ✅ Ventajas:
 * - Una fuente de verdad para todos los valores
 * - Fácil mantenimiento y cambios globales
 * - Consistencia visual garantizada
 * - Escalabilidad para nuevos themes
 */

export const tokens = {
  // 🎨 COLORES SEMÁNTICOS
  colors: {
    // Color principal de la marca
    primary: {
      DEFAULT: '#25D366',    // Verde WhatsApp principal
      50: '#f0fdf4',         // Muy claro
      100: '#dcfce7',        // Claro
      200: '#bbf7d0',        // Medio claro
      300: '#86efac',        // Medio
      400: '#4ade80',        // Medio oscuro
      500: '#25D366',        // DEFAULT
      600: '#16a34a',        // Oscuro
      700: '#15803d',        // Muy oscuro
      800: '#166534',        // Extra oscuro
      900: '#14532d',        // Máximo oscuro
      muted: '#128C7E'       // Versión apagada
    },
    
    // Grises semánticos - NO más gray-800, gray-700 random
    neutral: {
      50: '#F8FAFC',         // Blanco casi puro
      100: '#F1F5F9',        // Blanco grisáceo
      200: '#E2E8F0',        // Gris muy claro
      300: '#CBD5E1',        // Gris claro
      400: '#94A3B8',        // Gris medio claro
      500: '#64748B',        // Gris medio
      600: '#475569',        // Gris medio oscuro
      700: '#334155',        // Gris oscuro
      800: '#1E293B',        // Gris muy oscuro
      900: '#0F172A'         // Casi negro
    },
    
    // Estados semánticos
    success: {
      DEFAULT: '#10B981',
      light: '#6EE7B7',
      dark: '#047857'
    },
    warning: {
      DEFAULT: '#F59E0B',
      light: '#FCD34D',
      dark: '#D97706'
    },
    error: {
      DEFAULT: '#EF4444',
      light: '#FCA5A5',
      dark: '#DC2626'
    },
    info: {
      DEFAULT: '#3B82F6',
      light: '#93C5FD',
      dark: '#1D4ED8'
    }
  },
  
  // 📏 ESPACIADO CONSISTENTE
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
    '4xl': '6rem',    // 96px
    '5xl': '8rem'     // 128px
  },
  
  // 🔲 BORDES Y RADIOS
  borderRadius: {
    sm: '0.25rem',    // 4px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    '2xl': '1.5rem',  // 24px
    '3xl': '2rem'     // 32px
  },
  
  // 🌑 SOMBRAS
  shadows: {
    light: '0px 0px 0px 2px rgba(6, 24, 44, 0.4), 0px 4px 6px -1px rgba(6, 24, 44, 0.65)',
    dark: '0px 2px 8px rgba(17, 17, 26, 0.1), 0px 4px 12px rgba(17, 17, 26, 0.1)',
    elevated: '0px 8px 28px rgba(17, 17, 26, 0.5)',
    focus: '0 0 0 3px rgba(37, 211, 102, 0.2)'
  },
  
  // 📱 BREAKPOINTS
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  
  // ⚡ TRANSICIONES
  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out'
  },
  
  // 📝 TIPOGRAFÍA
  typography: {
    fontFamily: {
      sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem'     // 48px
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800
    }
  }
};
