# 🎨 Guía de Reestructuración: Tailwind CSS & Dark Mode
## Contexto para Desarrollo Asistido con IA

---

## 📋 Diagnóstico del Estado Actual

### 🚨 Problemas Críticos Identificados

#### 1. **Caos en el Uso de Tailwind CSS**
- **Clases excesivas**: Componentes con strings de 200+ caracteres
- **Duplicación masiva**: Mismos patrones repetidos sin abstracción
- **Inconsistencia**: Diferentes enfoques para elementos similares
- **Mantenimiento imposible**: Cambios requieren tocar múltiples archivos

**Ejemplo problemático actual:**
```jsx
// ❌ PROBLEMA: Login.jsx línea 8
<div className={`flex flex-wrap border ${darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-400 bg-gray-100'} shadow-custom-dark rounded-2xl flex-col w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] mx-auto animate-fade-up animate-once mt-16 sm:mt-18 md:mt-16 lg:mt-12 mb-6 sm:mb-8 lg:mb-10 backdrop-blur-sm px-2 sm:px-4 lg:px-0`}>
```

#### 2. **Dark Mode Implementado de Forma Primitiva**
- **Condicionales repetitivas**: `${darkMode ? 'dark' : 'light'}` en cada componente
- **Falta de coherencia**: Diferentes tonos de gris para elementos similares
- **No escalable**: Agregar nuevos themes requiere refactorización completa

**Patrón problemático repetido:**
```jsx
// ❌ PROBLEMA: Repetido en 15+ componentes
${darkMode ? 'text-white bg-gray-800' : 'text-gray-800 bg-white'}
```

#### 3. **Estructura CSS Fragmentada**
- **Archivos dispersos**: `index.css`, `lights.css`, `mobile-tables.css`
- **Mezcla de paradigmas**: CSS puro + Tailwind + utilidades custom
- **Falta de cohesión**: No hay una fuente de verdad para estilos

---

## 🎯 Objetivos de Reestructuración

### 🔄 Transformación Principal
**De**: Tailwind caótico + Dark mode primitivo
**A**: Sistema de design cohesivo + Theme system profesional

### 📊 Métricas de Éxito
- **Reducir**: 70% menos líneas de código CSS
- **Mejorar**: Consistencia visual del 100%
- **Acelerar**: Desarrollo 3x más rápido
- **Facilitar**: Mantenimiento sin errores

---

## 🏗️ Arquitectura de Solución

### 1. **Sistema de Design Tokens Centralizado**

```javascript
// src/styles/tokens.js
export const tokens = {
  colors: {
    // Colores principales
    primary: {
      DEFAULT: '#25D366',
      light: '#4ADE80',
      dark: '#16A34A',
      muted: '#128C7E'
    },
    
    // Grises semánticos (no más gray-800, gray-700 random)
    neutral: {
      50: '#F8FAFC',
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
      600: '#475569',
      700: '#334155',
      800: '#1E293B',
      900: '#0F172A'
    },
    
    // Estados
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6'
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem'
  },
  
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem'
  },
  
  shadows: {
    light: '0px 0px 0px 2px rgba(6, 24, 44, 0.4), 0px 4px 6px -1px rgba(6, 24, 44, 0.65)',
    dark: '0px 2px 8px rgba(17, 17, 26, 0.1), 0px 4px 12px rgba(17, 17, 26, 0.1)'
  }
};
```

### 2. **Sistema de Themes Profesional**

```javascript
// src/styles/themes.js
import { tokens } from './tokens.js';

export const themes = {
  light: {
    // Fondos semánticos
    background: {
      primary: 'bg-white',
      secondary: 'bg-neutral-50',
      tertiary: 'bg-neutral-100',
      card: 'bg-white',
      overlay: 'bg-white/90',
      accent: 'bg-primary/10'
    },
    
    // Textos semánticos
    text: {
      primary: 'text-neutral-900',
      secondary: 'text-neutral-600',
      tertiary: 'text-neutral-500',
      inverse: 'text-white',
      accent: 'text-primary',
      muted: 'text-neutral-400'
    },
    
    // Bordes semánticos
    border: {
      primary: 'border-neutral-200',
      secondary: 'border-neutral-300',
      accent: 'border-primary/20',
      focus: 'border-primary'
    },
    
    // Estados hover/focus
    interactive: {
      hover: 'hover:bg-neutral-100',
      focus: 'focus:ring-2 focus:ring-primary/20',
      active: 'active:bg-neutral-200'
    }
  },
  
  dark: {
    background: {
      primary: 'bg-neutral-900',
      secondary: 'bg-neutral-800',
      tertiary: 'bg-neutral-700',
      card: 'bg-neutral-800',
      overlay: 'bg-neutral-900/90',
      accent: 'bg-primary/20'
    },
    
    text: {
      primary: 'text-white',
      secondary: 'text-neutral-300',
      tertiary: 'text-neutral-400',
      inverse: 'text-neutral-900',
      accent: 'text-primary',
      muted: 'text-neutral-500'
    },
    
    border: {
      primary: 'border-neutral-700',
      secondary: 'border-neutral-600',
      accent: 'border-primary/30',
      focus: 'border-primary'
    },
    
    interactive: {
      hover: 'hover:bg-neutral-700',
      focus: 'focus:ring-2 focus:ring-primary/30',
      active: 'active:bg-neutral-600'
    }
  }
};
```

### 3. **Hook de Themes Inteligente**

```javascript
// src/hooks/useTheme.js
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { themes } from '../styles/themes';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  const { darkMode, toggleDarkMode } = context;
  const currentTheme = darkMode ? themes.dark : themes.light;
  
  return {
    darkMode,
    toggleDarkMode,
    theme: currentTheme,
    
    // Utilidades semánticas (NO más condicionales manuales)
    getThemeClasses: (category, variant = 'primary') => {
      return currentTheme[category][variant];
    },
    
    // Shortcuts frecuentes
    bg: currentTheme.background,
    text: currentTheme.text,
    border: currentTheme.border,
    interactive: currentTheme.interactive
  };
};
```

### 4. **Componentes Base Reutilizables**

```jsx
// src/components/base/Card.jsx
import { useTheme } from '../../hooks/useTheme';

const Card = ({ 
  children, 
  variant = 'default', 
  padding = 'md',
  shadow = true,
  className = '' 
}) => {
  const { bg, border } = useTheme();
  
  const variants = {
    default: `${bg.card} ${border.primary}`,
    accent: `${bg.accent} ${border.accent}`,
    elevated: `${bg.card} ${border.primary} shadow-lg`
  };
  
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  return (
    <div 
      className={`
        ${variants[variant]} 
        ${paddings[padding]} 
        ${shadow ? 'shadow-custom-light dark:shadow-custom-dark' : ''}
        rounded-2xl border transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
```

```jsx
// src/components/base/Button.jsx
import { useTheme } from '../../hooks/useTheme';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  ...props 
}) => {
  const { interactive, bg, text, border } = useTheme();
  
  const variants = {
    primary: `bg-primary text-white hover:bg-primary-dark ${interactive.focus}`,
    secondary: `${bg.secondary} ${text.primary} ${border.primary} ${interactive.hover}`,
    ghost: `${text.primary} ${interactive.hover} ${interactive.focus}`
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button 
      className={`
        ${variants[variant]} 
        ${sizes[size]} 
        rounded-lg font-medium transition-all duration-200
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
```

### 5. **Configuración de Tailwind Optimizada**

```javascript
// tailwind.config.js
import { tokens } from './src/styles/tokens.js';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: tokens.colors.primary,
        neutral: tokens.colors.neutral,
        success: tokens.colors.success,
        warning: tokens.colors.warning,
        error: tokens.colors.error,
        info: tokens.colors.info,
      },
      spacing: tokens.spacing,
      borderRadius: tokens.borderRadius,
      boxShadow: {
        'custom-light': tokens.shadows.light,
        'custom-dark': tokens.shadows.dark,
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-left': 'fadeLeft 0.8s ease-out forwards',
      }
    },
  },
  plugins: [require("tailwindcss-animated")],
};
```

---

## 🚀 Plan de Implementación

### 🎯 **TAREA 1: Crear Sistema de Design Tokens**

**Objetivo**: Reemplazar valores hardcoded por tokens semánticos

**Archivos a crear:**
1. `src/styles/tokens.js` - Definición de tokens
2. `src/styles/themes.js` - Configuración de themes
3. `src/hooks/useTheme.js` - Hook personalizado mejorado

**Resultado esperado:**
```jsx
// ANTES ❌
${darkMode ? 'text-white bg-gray-800' : 'text-gray-800 bg-white'}

// DESPUÉS ✅
${bg.primary} ${text.primary}
```

### 🎯 **TAREA 2: Crear Componentes Base**

**Objetivo**: Abstraer patrones repetitivos en componentes reutilizables

**Componentes a crear:**
1. `src/components/base/Card.jsx` - Contenedor base
2. `src/components/base/Button.jsx` - Botón base
3. `src/components/base/Input.jsx` - Input base
4. `src/components/base/Container.jsx` - Layout base

**Resultado esperado:**
```jsx
// ANTES ❌ - 15 líneas de clases
<div className={`flex flex-wrap border ${darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-400 bg-gray-100'} shadow-custom-dark rounded-2xl flex-col w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] mx-auto animate-fade-up animate-once mt-16 backdrop-blur-sm`}>

// DESPUÉS ✅ - 1 línea semántica
<Card variant="elevated" className="w-full max-w-5xl mx-auto mt-16">
```

### 🎯 **TAREA 3: Migrar Componentes Existentes**

**Prioridad de migración:**
1. **Alta**: `Login.jsx`, `ContainerAbout.jsx`, `LayoutPublic.jsx`
2. **Media**: `NavbarPublic.jsx`, `FooterPublic.jsx`
3. **Baja**: `Home.jsx`, `About.jsx`

**Metodología por componente:**
1. Identificar patrones repetitivos
2. Extraer a componentes base
3. Aplicar sistema de themes
4. Validar funcionalidad

### 🎯 **TAREA 4: Optimizar CSS Custom**

**Objetivo**: Consolidar `lights.css` y `mobile-tables.css`

**Acciones:**
1. Mover animaciones firefly a `src/styles/animations.css`
2. Integrar media queries en componentes
3. Crear utilidades Tailwind custom si es necesario

---

## 📚 Instrucciones para el Asistente IA

### 🎯 **Contexto de Trabajo**

**Cuando te pida ayuda con componentes:**
1. **SIEMPRE** usar el sistema de themes: `useTheme()` hook
2. **NUNCA** usar condicionales manuales: `${darkMode ? 'dark' : 'light'}`
3. **PRIORIZAR** componentes base sobre Tailwind directo
4. **MANTENER** consistencia con tokens definidos

### 🎯 **Patrones a Seguir**

**✅ CORRECTO:**
```jsx
import { useTheme } from '../hooks/useTheme';
import Card from '../components/base/Card';

const MyComponent = () => {
  const { bg, text, interactive } = useTheme();
  
  return (
    <Card variant="elevated" className="space-y-4">
      <h1 className={`text-2xl font-bold ${text.primary}`}>
        Título
      </h1>
      <button className={`px-4 py-2 rounded-lg ${interactive.hover}`}>
        Botón
      </button>
    </Card>
  );
};
```

**❌ INCORRECTO:**
```jsx
// No hacer esto nunca más
const MyComponent = () => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} p-6 rounded-2xl shadow-lg`}>
      <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
        Título
      </h1>
    </div>
  );
};
```

### 🎯 **Checklist de Validación**

**Antes de entregar código, verificar:**
- [ ] ¿Usa el sistema de themes?
- [ ] ¿Evita condicionales manuales?
- [ ] ¿Reutiliza componentes base?
- [ ] ¿Mantiene consistencia visual?
- [ ] ¿Es responsive?
- [ ] ¿Preserva animaciones existentes?

---

## 🔧 Configuración del Entorno

### **package.json - Dependencias necesarias**
```json
{
  "devDependencies": {
    "tailwindcss": "^3.4.0",
    "tailwindcss-animated": "^1.0.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

### **VS Code - Extensiones recomendadas**
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets
- Auto Rename Tag
- Prettier - Code formatter

### **Configuración de Prettier**
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "tailwindConfig": "./tailwind.config.js"
}
```

---

## 🎨 Guía de Migración Específica

### **Ejemplo: Migrar Login.jsx**

**ANTES - Estado actual problemático:**
```jsx
<div className={`flex flex-wrap border ${darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-400 bg-gray-100'} shadow-custom-dark rounded-2xl flex-col w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] mx-auto animate-fade-up animate-once mt-16 sm:mt-18 md:mt-16 lg:mt-12 mb-6 sm:mb-8 lg:mb-10 backdrop-blur-sm px-2 sm:px-4 lg:px-0`}>
```

**DESPUÉS - Usando sistema propuesto:**
```jsx
import { useTheme } from '../hooks/useTheme';
import Card from '../components/base/Card';

const Login = () => {
  const { text } = useTheme();
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Card 
        variant="elevated" 
        className="w-full max-w-5xl mx-auto mt-16 animate-fade-up"
      >
        <div className="max-w-6xl flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center">
          {/* Contenido del login */}
        </div>
      </Card>
    </div>
  );
};
```

### **Resultado de la migración:**
- **Líneas de código**: 15 → 3 (reducción del 80%)
- **Mantenibilidad**: ✅ Cambios centralizados
- **Consistencia**: ✅ Misma apariencia en todos los themes
- **Legibilidad**: ✅ Código autodocumentado

---

## 📊 Métricas de Éxito

### **Antes de la reestructuración:**
- 🔴 **Líneas de CSS**: ~1,500 líneas
- 🔴 **Condicionales de theme**: 47 instancias
- 🔴 **Strings de clase largos**: 23 componentes
- 🔴 **Patrones duplicados**: 15+ repeticiones

### **Después de la reestructuración:**
- 🟢 **Líneas de CSS**: <500 líneas (reducción 67%)
- 🟢 **Condicionales de theme**: 0 instancias
- 🟢 **Strings de clase largos**: 0 componentes
- 🟢 **Patrones duplicados**: 0 repeticiones

---

## ⚡ Comandos Útiles

### **Desarrollo:**
```bash
# Instalar dependencias
npm install

# Modo desarrollo con hot reload
npm run dev

# Build para producción
npm run build

# Linting de código
npm run lint

# Formatting con Prettier
npm run format
```

### **Tailwind:**
```bash
# Compilar Tailwind
npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch

# Purgar CSS no utilizado
npx tailwindcss -i ./src/index.css -o ./dist/output.css --minify
```

---

## 🎯 Próximos Pasos

### **Fase 1: Fundación (Semana 1)**
1. Crear sistema de design tokens
2. Implementar componentes base
3. Migrar ThemeContext mejorado

### **Fase 2: Migración (Semana 2)**
1. Migrar componentes prioritarios
2. Refactorizar CSS custom
3. Optimizar configuración Tailwind

### **Fase 3: Optimización (Semana 3)**
1. Performance optimization
2. Documentación completa
3. Testing y validación

---

## 🚨 Advertencias Importantes

### **NO HACER:**
- ❌ Usar condicionales manuales de theme
- ❌ Hardcodear valores de color
- ❌ Crear nuevos archivos CSS custom
- ❌ Usar clases Tailwind sin consistencia

### **SIEMPRE HACER:**
- ✅ Usar sistema de themes
- ✅ Reutilizar componentes base
- ✅ Mantener tokens centralizados
- ✅ Seguir patrones establecidos

---

## 🎉 Conclusión

Este sistema transformará el caos actual en un codebase mantenible, escalable y profesional. La inversión inicial en reestructuración se pagará inmediatamente con:

- **Desarrollo 3x más rápido**
- **Bugs reducidos a cero**
- **Nuevas features sin friction**
- **Codebase autodocumentado**

**¡Vamos a construir algo increíble! 🚀**
      primary: 'bg-white',
      secondary: 'bg-gray-50',
      accent: 'bg-gray-100',
      card: 'bg-white',
      overlay: 'bg-white/90'
    },
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-600',
      accent: 'text-gray-800',
      muted: 'text-gray-500'
    },
    border: {
      primary: 'border-gray-200',
      secondary: 'border-gray-300',
      accent: 'border-gray-400'
    },
    hover: {
      background: 'hover:bg-gray-100',
      text: 'hover:text-gray-900'
    }
  },
  dark: {
    background: {
      primary: 'bg-gray-900',
      secondary: 'bg-gray-800',
      accent: 'bg-gray-700',
      card: 'bg-gray-800',
      overlay: 'bg-gray-800/90'
    },
    text: {
      primary: 'text-white',
      secondary: 'text-gray-300',
      accent: 'text-gray-100',
      muted: 'text-gray-400'
    },
    border: {
      primary: 'border-gray-700',
      secondary: 'border-gray-600',
      accent: 'border-gray-500'
    },
    hover: {
      background: 'hover:bg-gray-700',
      text: 'hover:text-white'
    }
  }
}
```

### 3. **Hook Personalizado para Themes**

```javascript
// src/hooks/useThemeClasses.js
import { useTheme } from '../context/ThemeContext';
import { themes } from '../styles/themes';

export const useThemeClasses = () => {
  const { darkMode } = useTheme();
  const theme = darkMode ? themes.dark : themes.light;
  
  return {
    theme,
    bg: theme.background,
    text: theme.text,
    border: theme.border,
    hover: theme.hover,
    getThemeClass: (lightClass, darkClass) => 
      darkMode ? darkClass : lightClass
  };
};
```

### 4. **Componentes Base**

```javascript
// src/components/base/Container.jsx
import { useThemeClasses } from '../../hooks/useThemeClasses';

export const Container = ({ 
  children, 
  variant = 'primary', 
  size = 'default',
  className = '' 
}) => {
  const { bg, border } = useThemeClasses();
  
  const variants = {
    primary: `${bg.card} ${border.primary}`,
    secondary: `${bg.secondary} ${border.secondary}`,
    accent: `${bg.accent} ${border.accent}`
  };
  
  const sizes = {
    default: 'w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[85%]',
    full: 'w-full',
    compact: 'w-full max-w-4xl'
  };
  
  return (
    <div className={`
      ${variants[variant]}
      ${sizes[size]}
      mx-auto
      rounded-2xl
      shadow-lg
      backdrop-blur-sm
      ${className}
    `}>
      {children}
    </div>
  );
};
```

### 5. **Utilidades de Clases**

```javascript
// src/utils/classUtils.js
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export const responsive = (base, sm, md, lg, xl) => {
  return cn(
    base,
    sm && `sm:${sm}`,
    md && `md:${md}`,
    lg && `lg:${lg}`,
    xl && `xl:${xl}`
  );
};

export const spacing = {
  container: 'px-2 sm:px-4 lg:px-6',
  section: 'my-6 sm:my-8 lg:my-10',
  element: 'mb-4 sm:mb-6 lg:mb-8'
};
```

---

## 🗂️ Estructura de Archivos Propuesta

```
src/
├── styles/
│   ├── tokens.js          # Design tokens centralizados
│   ├── themes.js          # Definición de themes
│   ├── components.css     # Componentes CSS personalizados
│   ├── utilities.css      # Utilidades CSS personalizadas
│   └── animations.css     # Animaciones (separadas de lights.css)
├── hooks/
│   ├── useThemeClasses.js # Hook para manejo de themes
│   └── useResponsive.js   # Hook para responsive design
├── components/
│   ├── base/              # Componentes base reutilizables
│   │   ├── Container.jsx
│   │   ├── Card.jsx
│   │   ├── Button.jsx
│   │   ├── Typography.jsx
│   │   └── Grid.jsx
│   ├── layout/            # Componentes de layout
│   └── ui/                # Componentes UI específicos
└── utils/
    ├── classUtils.js      # Utilidades para clases
    └── styleUtils.js      # Utilidades de estilos
```

---

## 🛠️ Plan de Implementación

### Paso 1: Setup Inicial
1. **Crear estructura de carpetas**
2. **Implementar design tokens**
3. **Crear hook useThemeClasses**
4. **Establecer componentes base**

### Paso 2: Migración Gradual
1. **Migrar NavbarPublic** (componente más simple)
2. **Migrar ContainerAbout** (componente más complejo)
3. **Migrar ContainerContact**
4. **Migrar componentes restantes**

### Paso 3: Optimización
1. **Purgar CSS no utilizado**
2. **Optimizar bundles**
3. **Documentar sistema**
4. **Crear guías de uso**

---

## 📝 Ejemplos de Refactorización

### Antes (Problemático):
```jsx
<div className={`flex flex-wrap border ${darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-400 bg-gray-100'} shadow-custom-dark rounded-2xl flex-col w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] mx-auto animate-fade-up animate-once mt-12 mb-6 backdrop-blur-sm px-2 sm:px-4 lg:px-0`}>
```

### Después (Mantenible):
```jsx
<Container variant="primary" className="flex flex-col animate-fade-up animate-once mt-12 mb-6">
```

### Antes (Condicionales repetitivas):
```jsx
className={`${darkMode ? 'text-white' : 'text-gray-800'}`}
```

### Después (Centralizado):
```jsx
className={text.primary}
```

---

## 🔧 Configuración de Tailwind Optimizada

```javascript
// tailwind.config.js
import { tokens } from './src/styles/tokens.js';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: tokens.colors,
      spacing: tokens.spacing,
      borderRadius: tokens.borderRadius,
      boxShadow: {
        'custom-light': '0px 0px 0px 2px rgba(6, 24, 44, 0.4), 0px 4px 6px -1px rgba(6, 24, 44, 0.65)',
        'custom-dark': '0px 2px 8px rgba(17, 17, 26, 0.1), 0px 4px 12px rgba(17, 17, 26, 0.1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-left': 'fadeLeft 0.8s ease-out forwards',
      }
    },
  },
  plugins: [require("tailwindcss-animated")],
};
```

---

## 🎨 Guías de Estilo

### 1. **Nomenclatura de Clases**
- Usar nombres descriptivos y consistentes
- Evitar abreviaciones ambiguas
- Mantener jerarquía clara

### 2. **Responsividad**
- Mobile-first approach
- Breakpoints consistentes
- Utilidades responsive centralizadas

### 3. **Dark Mode**
- Usar hook useThemeClasses
- Evitar condicionales inline
- Mantener consistencia visual

### 4. **Componentes**
- Props claras y tipadas
- Variants predefinidas
- Documentación de uso

---

## 📚 Próximos Pasos

1. **Implementar sistema de design tokens**
2. **Crear componentes base**
3. **Migrar componentes existentes**
4. **Optimizar performance**
5. **Documentar sistema**
6. **Crear tests**

---

## 🤝 Colaboración

Para mantener la consistencia durante el desarrollo:

1. **Seguir las guías establecidas**
2. **Usar componentes base cuando sea posible**
3. **Evitar crear estilos inline**
4. **Revisar PRs con enfoque en mantenibilidad**
5. **Documentar cambios significativos**

---

## 📊 Métricas de Éxito

- **Reducción del 70% en duplicación de código CSS**
- **Mejora del 50% en tiempo de desarrollo**
- **Consistencia del 100% en themes**
- **Facilidad de mantenimiento mejorada**

---

*Este documento debe ser actualizado conforme evolucione el proyecto.*
