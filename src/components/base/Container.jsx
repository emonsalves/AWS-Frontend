/**
 * Container Component - Contenedor de layout universal
 * 
 * Reemplaza todos los contenedores de layout con clases repetitivas
 * por un componente semántico y responsive.
 * 
 * ✅ Reemplaza:
 * - <div className="w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
 * 
 * ✅ Por:
 * - <Container size="lg" padding="responsive">
 * 
 * 🎨 Tamaños:
 * - sm: max-w-3xl
 * - md: max-w-4xl
 * - lg: max-w-5xl
 * - xl: max-w-6xl
 * - full: w-full
 * - screen: min-h-screen
 */

import { useTheme } from '../../hooks/useTheme';
import { forwardRef } from 'react';

const Container = forwardRef(({ 
  children,
  size = 'lg',
  padding = 'responsive',
  center = true,
  className = '',
  as = 'div',
  ...props 
}, ref) => {
  const { bg } = useTheme();
  
  // Configuración de tamaños
  const sizeClasses = {
    sm: 'max-w-3xl',        // ~768px
    md: 'max-w-4xl',        // ~896px
    lg: 'max-w-5xl',        // ~1024px
    xl: 'max-w-6xl',        // ~1152px
    '2xl': 'max-w-7xl',     // ~1280px
    full: 'w-full',
    screen: 'min-h-screen w-full'
  };
  
  // Configuración de padding
  const paddingClasses = {
    none: '',
    sm: 'px-4 py-4',
    md: 'px-6 py-6',
    lg: 'px-8 py-8',
    responsive: 'px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8',
    section: 'px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20'
  };
  
  // Clases base
  const baseClasses = [
    sizeClasses[size],
    paddingClasses[padding],
    center ? 'mx-auto' : '',
    className
  ].filter(Boolean).join(' ');
  
  // Determinar el elemento a renderizar
  const Component = as;
  
  return (
    <Component
      ref={ref}
      className={baseClasses}
      {...props}
    >
      {children}
    </Component>
  );
});

Container.displayName = 'Container';

export default Container;
