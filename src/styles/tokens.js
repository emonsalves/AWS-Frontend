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
      DEFAULT: '#25D366',    // Verde WhatsApp principal: Este color es el verde oficial de la marca WhatsApp. Se utiliza como color primario para reflejar la identidad visual de la marca y garantizar consistencia en la experiencia del usuario.
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
      muted: '#128C7E',      // Versión apagada
      ink: '#052E16'         // Texto sobre el verde de marca (contraste 8:1)
    },

    // Superficies y textos del modo claro
    ink: {
      DEFAULT: '#0B1210',    // Texto principal
      muted: '#3D4843'       // Texto secundario (9.5:1 sobre blanco)
    },
    paper: {
      DEFAULT: '#FFFFFF',    // Fondo de página
      soft: '#EFF4F1',       // Secciones alternas y tarjetas destacadas
      line: '#D5DED9',       // Bordes
      field: '#8A9790',      // Borde de campos de formulario (3:1 sobre blanco)
      accent: '#E6F6EC'      // Fondo de iconos y etiquetas verdes
    },

    // Superficies y textos del modo oscuro
    night: {
      DEFAULT: '#0A0F0D',    // Fondo de página
      soft: '#101814',       // Secciones alternas y tarjetas
      line: '#1E2A25',       // Bordes
      accent: '#12291D',     // Fondo de iconos y etiquetas verdes
      text: '#F2F5F3',       // Texto principal
      muted: '#A6B3AD'       // Texto secundario
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
    light: '0 1px 2px rgba(11, 18, 16, 0.04), 0 12px 32px -16px rgba(11, 18, 16, 0.14)',
    dark: '0 1px 0 rgba(255, 255, 255, 0.03), 0 16px 40px -20px rgba(0, 0, 0, 0.7)',
    brand: '0 8px 24px -8px rgba(37, 211, 102, 0.55)',
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
      sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
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
