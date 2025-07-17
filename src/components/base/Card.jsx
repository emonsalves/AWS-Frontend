/**
 * Card Component - Contenedor base universal
 * 
 * Reemplaza todos los contenedores con clases largas por un componente
 * semántico y reutilizable. Soporta múltiples variantes y estados.
 * 
 * ✅ Reemplaza:
 * - <div className={`flex flex-wrap border ${darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-400 bg-gray-100'} shadow-custom-dark rounded-2xl...`}>
 * 
 * ✅ Por:
 * - <Card variant="elevated" className="w-full max-w-5xl">
 * 
 * 🎨 Variantes:
 * - default: Card básico
 * - elevated: Con sombra pronunciada
 * - accent: Con color de acento
 * - success: Estado de éxito
 * - warning: Estado de advertencia
 * - error: Estado de error
 * - ghost: Transparente con borde
 */

import { useTheme } from '../../hooks/useTheme';
import { forwardRef } from 'react';

const Card = forwardRef(({ 
  children, 
  variant = 'default',
  padding = 'md',
  shadow = true,
  border = true,
  rounded = '2xl',
  className = '',
  as = 'div',
  ...props 
}, ref) => {
  const { getCardClasses } = useTheme();
  
  // Configuración de padding
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };
  
  // Configuración de bordes redondeados
  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    full: 'rounded-full'
  };
  
  // Configuración de sombras
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    custom: 'shadow-custom-light dark:shadow-custom-dark'
  };
  
  // Obtener clases base del variant
  const baseClasses = getCardClasses(variant);
  
  // Construir clases finales
  const finalClasses = [
    baseClasses,
    paddingClasses[padding],
    roundedClasses[rounded],
    shadow ? shadowClasses.custom : '',
    border ? 'border' : '',
    'transition-all duration-300', // Transición suave
    className
  ].filter(Boolean).join(' ');
  
  // Determinar el elemento a renderizar
  const Component = as;
  
  return (
    <Component 
      ref={ref}
      className={finalClasses}
      {...props}
    >
      {children}
    </Component>
  );
});

Card.displayName = 'Card';

export default Card;
